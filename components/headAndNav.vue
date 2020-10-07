<template>
  <div>
    <div class="top-bar">
      <b-container>
        <div class="top-brand">BASCC</div>
        <div class="top-contact">(01942) 870 584</div>
      </b-container>
    </div>

    <b-navbar toggleable="lg" type="dark">
      <b-container>
        <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Home</b-nav-item>
            <b-nav-item href="#">About</b-nav-item>
            <b-nav-item href="#">Services</b-nav-item>
            <b-nav-item href="#">Our Team</b-nav-item>
            <b-nav-item href="#">Contact Us</b-nav-item>
            <!-- <b-nav-item href="#">Home</b-nav-item> -->
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Right</b-nav-item>
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
}
</script>

<style lang="scss" scoped>
.top-bar {
  height: 80px;
}
.navbar {
  background: $dblue;
  padding: 0rem 1rem;
  .nav-link {
    padding-right: 1rem;
    padding-left: 1rem;
    color: white;
    &:hover {
      background: $lblue;
      color: white;
    }
  }
}
</style>
