<template>
  <div>
    <nav-section /> 

    <router-view> </router-view>
  </div>

</template>

<script>
import NavSection from './components/NavSection.vue'

export default {
  name: 'App',
  components: {
    NavSection
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
