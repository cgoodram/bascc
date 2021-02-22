<template>
  <div>
    <div class="top-bar">
      <b-container class="d-flex justify-content-between">
        <div class="top-brand">
          <img src="/imgs/bascc-logo.png" class="img-fluid" />
        </div>
        <div class="top-contact">
          <a href="tel:+441942870584">(01942) 870 584</a>
        </div>
      </b-container>
    </div>

    <b-navbar toggleable="lg" type="dark">
      <b-container>
        <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <!-- <b-nav-item to="/services">Services</b-nav-item> -->
            <b-nav-item-dropdown text="Services">
              <b-dropdown-item
                v-for="service in services"
                :key="service.label"
                :to="service.page"
                >{{ service.label }}</b-dropdown-item
              >
            </b-nav-item-dropdown>
            <!-- <b-nav-item hto="/our-team">Our Team</b-nav-item> -->
            <b-nav-item to="/contact">Contact Us</b-nav-item>
            <!-- <b-nav-item href="#">Home</b-nav-item> -->
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto social">
            <b-nav-item href="#"><img src="/imgs/facebook.svg" /></b-nav-item>
            <b-nav-item href="#"><img src="/imgs/twitter.svg" /></b-nav-item>
            <b-nav-item href="#"><img src="/imgs/linkedin.svg" /></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'HeaderAndNav',
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
.top-bar {
  // height: 80px;
  align-items: center;
  .top-brand {
    img {
      max-height: 70px;
    }
  }
  .top-contact {
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    a {
      text-decoration: none;
      color: $dblue;
      &:hover {
        color: $lblue;
      }
    }
  }
}
.navbar {
  background: $dblue;
  padding: 0rem 1rem;
  .nav-link {
    padding-right: 1rem;
    padding-left: 1rem;
    color: white !important;
    &:hover,
    &.nuxt-link-exact-active {
      background: $lblue;
      color: white;
    }
  }

  .social {
    .nav-link {
      padding: 0.4rem 0.6rem;
      img {
        width: 24px;
      }
    }
  }
}
</style>
