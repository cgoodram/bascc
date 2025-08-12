<template>
  <div class="cta-section">
    <UContainer>
      <div class="cta-content">
        <div class="cta-text">
          <h2>Ready to get started?</h2>
          <p>Contact us today to discuss your cleanroom validation needs</p>
        </div>
        <div class="cta-action">
          <UButton 
            to="/contact" 
            color="white" 
            variant="solid"
            size="lg"
          >
            Get in Touch
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
// No props needed for this simple CTA component
</script>

<style lang="scss" scoped>
.cta-section {
  background: var(--color-dblue);
  color: white;
  padding: 3rem 0;
  
  .cta-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    
    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
    
    .cta-text {
      h2 {
        margin: 0 0 1rem 0;
        font-size: 2rem;
      }
      
      p {
        margin: 0;
        font-size: 1.1rem;
        opacity: 0.9;
      }
    }
    
    .cta-action {
      flex-shrink: 0;
    }
  }
}
</style>
