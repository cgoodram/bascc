<template>
  <footer>
    <div class="footer-main">
      <UContainer>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2>Balanced Air Specialists</h2>
            <p>Experts in Cleanroom Validation</p>
            <div class="socialLinks">
              <a
                href="https://www.facebook.com/balancedairspecialists"
                target="_blank"
              >
                <img src="/imgs/facebook.svg" />
              </a>
              <a href="https://twitter.com/balanced_air" target="_blank">
                <img src="/imgs/twitter.svg" />
              </a>
              <a href="https://www.linkedin.com/company/bascc" target="_blank">
                <img src="/imgs/linkedin.svg" />
              </a>
            </div>
          </div>
          
          <div>
            <div class="header">
              <h2>Services</h2>
            </div>
            <ul class="serviceList">
              <li
                v-for="service in services"
                :key="service.label"
                class="service"
              >
                <UIcon name="i-heroicons-chevron-right" />
                <NuxtLink :to="service.page">
                  {{ service.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          
          <div class="contact">
            <div class="header">
              <h2>Contact us</h2>
            </div>
            <div class="contact-item">
              <h3 class="title">Address:</h3>
              <p>
                Unit 4, Art Business Park,<br />
                Newton-Le-Willows,<br />
                Merseyside,<br />
                WA12 8AT
              </p>
            </div>

            <div class="contact-item">
              <h3 class="title">Email:</h3>
              <p>
                <a href="mailto:info@bascc.co.uk" target="_blank">
                  info@bascc.co.uk
                </a>
              </p>
            </div>
            
            <div class="contact-item">
              <h3 class="title">Phone:</h3>
              <p>
                <a href="tel:+44194270584" target="_blank">(01942) 870 584</a>
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </div>
    
    <div class="sub-footer">
      <UContainer>
        &copy; copyright Balanced Air Specialist {{ new Date().getFullYear() }}
      </UContainer>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useServicesStore } from '~/stores/services'

// Use Pinia store
const servicesStore = useServicesStore()

// Get services from store
const services = computed(() => servicesStore.services)
</script>

<style lang="scss" scoped>
footer {
  color: white;
  background: $dblue;
  
  .footer-main {
    padding: 3rem 0;
    
    h2 {
      color: white;
      margin-bottom: 1rem;
    }
    
    .socialLinks {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
      
      a {
        img {
          width: 24px;
          height: 24px;
        }
      }
    }
    
    .serviceList {
      list-style: none;
      padding: 0;
      
      .service {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
        
        a {
          color: white;
          text-decoration: none;
          
          &:hover {
            color: $lblue;
          }
        }
      }
    }
    
    .contact {
      .contact-item {
        margin-bottom: 1rem;
        
        .title {
          color: $lblue;
          margin-bottom: 0.5rem;
        }
        
        a {
          color: white;
          text-decoration: none;
          
          &:hover {
            color: $lblue;
          }
        }
      }
    }
  }
  
  .sub-footer {
    background: darken($dblue, 10%);
    padding: 1rem 0;
    text-align: center;
  }
}
</style>
