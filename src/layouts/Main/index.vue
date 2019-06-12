<template>
<div class="hello">
  <div>
    <router-link to="/customer/login">
      <h3>Home</h3>
    </router-link>
    <a-button type="primary">Primary</a-button>
    <a-button>Default</a-button>
    <a-button type="dashed">Dashed</a-button>
    <a-button type="danger">Danger</a-button>
  </div>
  <h2>MainLayout</h2>
  <router-view />
</div>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
