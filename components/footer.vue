<template>
  <footer>
    <div class="footer-main">
      <b-container>
        <b-row>
          <b-col md="4">
            <img
              src="/imgs/bascc-logo-white.png"
              class="img-fluid logo-footer"
            />
            <p>Balanced Air Specialists - Experts in Cleanroom Validation</p>
          </b-col>
          <b-col md="4">
            <div class="header">
              <h2>Services</h2>
            </div>
            <ul class="serviceList">
              <li
                v-for="service in services"
                :key="service.label"
                class="service"
              >
                <font-awesome-icon :icon="['fas', 'chevron-right']" />
                <router-link :to="service.page">
                  {{ service.label }}
                </router-link>
              </li>
            </ul>
          </b-col>
          <b-col md="4" class="contact">
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
                <a href="mailto:info@bascc.co.uk" target="_blank"
                  >info@bascc.co.uk</a
                >
              </p>
            </div>
            <div class="contact-item">
              <h3 class="title">Phone:</h3>
              <p>
                <a href="tel:+44194270584" target="_blank">(01942) 870 584</a>
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="sub-footer">
      <b-container>
        THis is the bottom text
      </b-container>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {}
  },
  computed: {
    services() {
      return this.$store.state.services
    },
  },
}
</script>

<style lang="scss" scoped>
footer {
  color: white;
  font-size: 14px;
  background-image: radial-gradient(
    circle farthest-side at 110% 0,
    #596070,
    #31353e
  );
  .footer-main {
    padding: 40px 0;
  }
  .logo-footer {
    margin-bottom: 20px;
  }
  a {
    color: white;
    text-decoration: none;
  }
  .serviceList {
    list-style: none;
    padding: 0;
    margin: 0;
    .service {
      margin-bottom: 10px;
      svg {
        transition: all 0.3s ease-in-out;
      }
      a {
        padding-left: 5px;
      }
      &:hover {
        svg {
          transform: translateX(3px);
        }
      }
    }
  }
  .contact {
    .contact-item {
      .title {
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
  .header {
    margin-bottom: 20px;
    display: block;
    &:after {
      width: 5rem;
      border-top-width: 1px;
      content: '';
      display: inline-block;
      border-top-style: solid;
      border-color: inherit;
      margin-top: 0;
    }
    h2 {
      display: block;
      font-size: 18px;
      margin-bottom: 0;
      width: 100%;
    }
  }
  .sub-footer {
    padding: 10px 0;
    background-color: rgba(0, 0, 0, 0.1) !important;
  }
}
</style>
