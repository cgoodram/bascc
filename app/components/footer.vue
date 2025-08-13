<template>
  <footer class="footer">
    <UContainer>
      <div class="footer-content">
        <div class="footer-section">
          <h3>Contact Information</h3>
          <p><strong>Address:</strong></p>
          <p>Unit 1, The Old Post Office<br>
          Leigh Road<br>
          Leigh, Greater Manchester<br>
          WN7 1QR</p>
          
          <p><strong>Phone:</strong> <a href="tel:+441942870584">(01942) 870 584</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@bascc.co.uk">info@bascc.co.uk</a></p>
        </div>
        
        <div class="footer-section">
          <h3>Services</h3>
          <ul>
            <li><NuxtLink to="/breathing-air-quality-testing">Breathing Air Quality Testing</NuxtLink></li>
            <li><NuxtLink to="/clean-air-device-qualification">Clean Air Device Qualification</NuxtLink></li>
            <li><NuxtLink to="/cleanroom-validation">Cleanroom Validation</NuxtLink></li>
            <li><NuxtLink to="/compressed-air-testing">Compressed Air Testing</NuxtLink></li>
            <li><NuxtLink to="/healthcare-ventilation-verification-htm-03-01">Healthcare Ventilation Verification</NuxtLink></li>
            <li><NuxtLink to="/ki-discus-operator-protection-test">KI Discus Operator Protection Test</NuxtLink></li>
            <li><NuxtLink to="/lev-testing-local-exhaust-ventilation">LEV Testing</NuxtLink></li>
            <li><NuxtLink to="/ucv-testing-htm-03-01">UCV Testing</NuxtLink></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Company</h3>
          <ul>
            <li><NuxtLink to="/about">About Us</NuxtLink></li>
            <li><NuxtLink to="/quality">Quality & Certifications</NuxtLink></li>
            <li><NuxtLink to="/latest-news">Latest News</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Follow Us</h3>
          <div class="social-links">
            <UButton
              href="https://www.facebook.com/balancedairspecialists"
              target="_blank"
              aria-label="Visit our Facebook page"
              variant="ghost"
              color="white"
              icon="i-simple-icons-facebook"
            />
            <UButton 
              href="https://twitter.com/balanced_air" 
              target="_blank"
              aria-label="Visit our Twitter page"
              variant="ghost"
              color="white"
              icon="i-simple-icons-twitter"
            />
            <UButton
              href="https://www.linkedin.com/company/bascc"
              target="_blank"
              aria-label="Visit our LinkedIn page"
              variant="ghost"
              color="white"
              icon="i-simple-icons-linkedin"
            />
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} BAS Cleanroom Commissioning. All rights reserved.</p>
        <p>Registered in England and Wales. Company No: 12345678</p>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
// Footer component logic
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--color-dblue);
  color: white;
  padding: 3rem 0 1rem;
  
  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
    
    .footer-section {
      h3 {
        color: var(--color-lblue);
        margin-bottom: 1rem;
        font-size: 1.2rem;
      }
      
      ul {
        list-style: none;
        padding: 0;
        
        li {
          margin-bottom: 0.5rem;
          
          a {
            color: white;
            text-decoration: none;
            
            &:hover {
              color: var(--color-lblue);
            }
          }
        }
      }
      
      .social-links {
        display: flex;
        gap: 0.5rem;
      }
    }
  }
  
  .footer-bottom {
    border-top: 1px solid var(--color-gray-600);
    padding-top: 1rem;
    text-align: center;
    font-size: 0.9rem;
    color: var(--color-gray-300);
    
    p {
      margin-bottom: 0.5rem;
    }
  }
}
</style>
