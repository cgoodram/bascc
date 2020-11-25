<template>
  <div class="pageTitle">
    <b-container>
      <b-row>
        <b-col
          ><h1>{{ title }}</h1></b-col
        >
        <b-col v-if="breadcrumb">
          <ul class="breadcrumb-list">
            <li v-for="crumb in breadcrumb" :key="crumb.label" class="crumb">
              <router-link v-if="crumb.url" :to="crumb.url">{{
                crumb.label
              }}</router-link>
              <span v-else>{{ crumb.label }}</span>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    breadcrumb: {
      type: Array,
      default: () => {
        return [{ label: 'home', url: '/' }]
      },
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.pageTitle {
  background: #f5f5f5;
  color: black;
  padding: 30px 0;
  //   text-align: center;
  border-bottom: 5px solid $dblue;

  h1 {
    font-size: 28px;
  }
  .breadcrumb-list {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0;
    line-height: 30px;
    font-size: 14px;
    .crumb {
      list-style: none;
      margin-right: 5px;
      a {
        margin-right: 5px;
      }
      display: inline-block;
      &:not(:last-child) {
        &:after {
          content: '/';
          width: 10px;
        }
      }
    }
  }
}
</style>
