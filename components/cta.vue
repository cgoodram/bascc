<template>
  <div class="cta">
    <b-container>
      <b-row class="justify-content-between">
        <b-col class="cta-text"
          ><h3>{{ ctaText }}</h3></b-col
        >
        <b-col sm="3" class="cta-btn">
          <button class="btn btn-info" @click="ctaClicked">
            Get in touch
          </button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    ctaText: {
      required: true,
      type: String,
    },
  },
  data() {
    return {}
  },
  methods: {
    ctaClicked() {
      alert('cta clicked')
    },
  },
}
</script>

<style lang="scss" scoped>
.cta {
  background: $dblue;
  color: white;
  padding: 30px 0;
  //   text-align: center;
  border-bottom: 5px solid $lblue;
  .cta-text {
    flex-grow: 1;
  }
  .cta-btn {
    display: flex;
    justify-content: flex-end;
  }

  h3 {
    font-size: 28px;
  }
}
</style>
