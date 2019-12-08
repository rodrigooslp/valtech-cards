<template>
  <div id="app">
    <landing-page></landing-page>
  </div>
</template>

<script>
import LandingPage from '@/components/views/LandingPage'

export default {
  name: 'app',
  components: {
    LandingPage
  }
}
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
