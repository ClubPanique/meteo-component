<template>
  <div id="app">
    <Meteo />
  </div>
</template>

<script>
import Meteo from './components/Meteo.vue'

export default {
  name: 'app',
  components: {
    Meteo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
