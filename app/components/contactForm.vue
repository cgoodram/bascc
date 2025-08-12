<template>
  <div>
    <template v-if="formStatus === 0">
      <b-form @submit.stop.prevent="onSubmit">
        <b-form-row>
          <b-col md="6">
            <b-form-group
              id="contact-name"
              label="Name *"
              label-for="name-input"
            >
              <b-form-input
                id="name-input"
                v-model="$v.form.enquiryName.$model"
                name="enquiryName"
                :state="validateState('enquiryName')"
                aria-describedby="name-input-feedback"
              ></b-form-input>

              <b-form-invalid-feedback id="name-input-feedback">
                This is a required field and must be at least 3 characters.
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              id="company-name"
              label="Company"
              label-for="company-input"
            >
              <b-form-input
                id="company-input"
                v-model="$v.form.enquiryCompany.$model"
                name="enquiryCompany"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-row>
          <b-col md="6">
            <b-form-group
              id="contact-email"
              label="Email *"
              label-for="email-input"
            >
              <b-form-input
                id="email-input"
                v-model="$v.form.enquiryEmail.$model"
                name="enquiryEmail"
                :state="validateState('enquiryEmail')"
                aria-describedby="email-input-feedback"
              ></b-form-input>

              <b-form-invalid-feedback id="email-input-feedback">
                This is a required field and must be a valid email.
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              id="contact-telephone"
              label="Telephone *"
              label-for="telephone-input"
            >
              <b-form-input
                id="telephone-input"
                v-model="$v.form.enquiryTelephone.$model"
                name="enquiryTelephone"
                :state="validateState('enquiryTelephone')"
                aria-describedby="telephone-input-feedback"
              ></b-form-input>

              <b-form-invalid-feedback id="telephone-input-feedback">
                This is a required field and must be at least 10 digits
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col md="12">
            <b-form-group
              id="contact-message"
              label="Message *"
              label-for="message-input"
            >
              <b-form-textarea
                id="message-input"
                v-model="$v.form.enquiryMessage.$model"
                name="enquiryMessage"
                rows="6"
                max-rows="6"
                style="overflow: hidden;"
                :state="validateState('enquiryMessage')"
                aria-describedby="message-input-feedback"
              ></b-form-textarea>

              <b-form-invalid-feedback id="message-input-feedback">
                This is a required field and must be at least 20 characters.
              </b-form-invalid-feedback>
            </b-form-group>
            <recaptcha
              @error="onError"
              @success="onSuccess"
              @expired="onExpired"
            />
          </b-col>
        </b-form-row>
        <div class="buttons mt-2">
          <template v-if="!sending">
            <b-button type="submit" variant="primary" :disabled="!token">
              Submit
            </b-button>
            <b-button class="ml-2" @click="resetForm()">Reset</b-button>
          </template>
          <template v-if="sending">
            <fa :icon="['fas', 'circle-notch']" spin />
            sending...
          </template>
        </div>
      </b-form>
    </template>

    <template v-if="formStatus === 1">
      Your enquiry has been sent.
    </template>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        enquiryName: null,
        enquiryCompany: null,
        enquiryEmail: null,
        enquiryTelephone: null,
        enquiryMessage: null,
      },
      token: null,
      formStatus: 0,
      sending: false,
    }
  },
  validations: {
    form: {
      enquiryName: {
        required,
        minLength: minLength(3),
      },
      enquiryCompany: {},
      enquiryEmail: {
        required,
        email,
      },
      enquiryTelephone: {
        required,
        minLength: minLength(10),
      },
      enquiryMessage: {
        required,
        minLength: minLength(20),
      },
    },
  },
  methods: {
    onError(error) {
      // console.log(error)
      this.token = null
    },
    onSuccess(token) {
      this.token = token
    },
    onExpired() {
      this.token = null
    },
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name]
      return $dirty ? !$error : null
    },
    resetForm() {
      this.form = {
        enquiryName: null,
        enquiryCompany: null,
        enquiryEmail: null,
        enquiryTelephone: null,
        enquiryMessage: null,
      }
      this.$nextTick(() => {
        this.$v.$reset()
      })
    },
    onSubmit(e) {
      this.$v.form.$touch()
      if (this.$v.form.$anyError) {
        return
      }
      this.sending = true
      /* eslint handle-callback-err: "off" */
      emailjs
        .sendForm(
          'service_xyolezd',
          'template_4zao08s',
          e.target,
          'user_wS2NX4QlOZHSQwphcVZJF'
        )
        .then(
          (result) => {
            // console.log('SUCCESS!', result.status, result.text)
            this.formStatus = 1
            this.sending = false
          },

          (error) => {
            console.log('FAILED...', error)
            this.sending = false
          }
        )
    },
  },
}
</script>
<style lang="scss" scoped></style>
