<template>
  <div>
    <template v-if="formStatus === 0">
      <form @submit.prevent="onSubmit">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UFormGroup label="Name *" name="enquiryName">
            <UInput
              v-model="form.enquiryName"
              name="enquiryName"
              :error="errors.enquiryName"
              placeholder="Enter your name"
            />
          </UFormGroup>
          
          <UFormGroup label="Company" name="enquiryCompany">
            <UInput
              v-model="form.enquiryCompany"
              name="enquiryCompany"
              placeholder="Enter your company name"
            />
          </UFormGroup>
          
          <UFormGroup label="Email *" name="enquiryEmail">
            <UInput
              v-model="form.enquiryEmail"
              name="enquiryEmail"
              type="email"
              :error="errors.enquiryEmail"
              placeholder="Enter your email"
            />
          </UFormGroup>
          
          <UFormGroup label="Telephone *" name="enquiryTelephone">
            <UInput
              v-model="form.enquiryTelephone"
              name="enquiryTelephone"
              type="tel"
              :error="errors.enquiryTelephone"
              placeholder="Enter your phone number"
            />
          </UFormGroup>
        </div>
        
        <UFormGroup label="Message *" name="enquiryMessage" class="mt-6">
          <UTextarea
            v-model="form.enquiryMessage"
            name="enquiryMessage"
            :error="errors.enquiryMessage"
            :rows="6"
            placeholder="Enter your message"
          />
        </UFormGroup>
        
        <div class="buttons mt-6">
          <template v-if="!sending">
            <UButton type="submit" color="blue" :disabled="!isValid">
              Submit
            </UButton>
            <UButton class="ml-2" variant="outline" @click="resetForm">
              Reset
            </UButton>
          </template>
          <template v-if="sending">
            <UIcon name="i-heroicons-arrow-path" class="animate-spin" />
            <span class="ml-2">Sending...</span>
          </template>
        </div>
      </form>
    </template>

    <template v-if="formStatus === 1">
      <UAlert
        title="Success!"
        description="Your enquiry has been sent successfully."
        color="green"
        variant="soft"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

// Form validation schema
const schema = toTypedSchema(z.object({
  enquiryName: z.string().min(3, 'Name must be at least 3 characters'),
  enquiryCompany: z.string().optional(),
  enquiryEmail: z.string().email('Please enter a valid email'),
  enquiryTelephone: z.string().min(10, 'Phone number must be at least 10 digits'),
  enquiryMessage: z.string().min(20, 'Message must be at least 20 characters')
}))

// Form state
const formStatus = ref(0)
const sending = ref(false)

// Form validation
const { handleSubmit, errors, resetForm: resetValidation, values } = useForm({
  validationSchema: schema,
  initialValues: {
    enquiryName: '',
    enquiryCompany: '',
    enquiryEmail: '',
    enquiryTelephone: '',
    enquiryMessage: ''
  }
})

// Form data
const form = reactive({
  enquiryName: '',
  enquiryCompany: '',
  enquiryEmail: '',
  enquiryTelephone: '',
  enquiryMessage: ''
})

// Watch form values for validation
watch(form, (newValues) => {
  Object.assign(values, newValues)
}, { deep: true })

// Check if form is valid
const isValid = computed(() => {
  return Object.keys(errors.value).length === 0 &&
         form.enquiryName && 
         form.enquiryEmail && 
         form.enquiryTelephone && 
         form.enquiryMessage
})

// Reset form
const resetForm = () => {
  Object.assign(form, {
    enquiryName: '',
    enquiryCompany: '',
    enquiryEmail: '',
    enquiryTelephone: '',
    enquiryMessage: ''
  })
  resetValidation()
}

// Submit form
const onSubmit = handleSubmit(async () => {
  sending.value = true
  
  try {
    // Simulate email sending (replace with actual email service)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    formStatus.value = 1
    sending.value = false
  } catch (error) {
    console.error('Failed to send email:', error)
    sending.value = false
  }
})
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;
  align-items: center;
}
</style>
