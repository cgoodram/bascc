<template>
  <div class="sidebar-wrapper">
    <!-- <div class="header">Services</div> -->
    <ul class="sidebar">
      <li
        v-for="service in services"
        :key="service.page"
        class="service-item"
        :class="{ active: currentUrlPath === service.page }"
      >
        <router-link :to="service.page">{{ service.label }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ServicesSidebar',
  data() {
    return {}
  },
  computed: {
    services() {
      return this.$store.state.services
    },
    currentUrlPath() {
      return this.$route.path
    },
  },
}
</script>

<style lang="scss" scoped>
.sidebar-wrapper {
  .header {
    font-size: 20px;
    padding: 5px;
  }
  .sidebar {
    margin: 0;
    padding: 0;
    // box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    .service-item {
      list-style: none;
      padding: 5px;
      border-left: 2px solid transparent;
      font-size: 12px;
      border-bottom: 1px solid $lblue;
      cursor: pointer;
      &:hover,
      &.active {
        border-left: 2px solid $blue;
      }
      &.active {
        background: $lblue;
        a {
          color: white !important;
        }
      }
      a {
        text-decoration: none;
        color: $blue;
      }
    }
  }
}
</style>
