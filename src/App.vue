<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/test">Test</router-link>
    </div>
    <router-view/>
    <!-- <div class="noData" v-if="noData">
      <p>没有更多数据了</p>
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'app',
  // data () {
  //   return {
  //     noData: false
  //   }
  // },
  created () {
    this.$store.dispatch('getDataCall', { startIndex: 0, count: 10 })
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
