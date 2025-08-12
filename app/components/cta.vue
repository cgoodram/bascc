<template>
  <div class="cta">
    <UContainer>
      <div class="flex justify-between items-center">
        <div class="cta-text">
          <h3>{{ ctaText }}</h3>
        </div>
        <div class="cta-btn">
          <UButton to="/contact" color="blue" variant="solid">
            Get in touch
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
interface Props {
  ctaText: string
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.cta {
  background: $dblue;
  color: white;
  padding: 30px 0;
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
