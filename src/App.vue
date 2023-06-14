<template>
  <div id="app">
    <NavigationBar />
    <router-view />
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';

export default {
  name: 'App',
  components: {
    NavigationBar
  }
}
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  font-family: serif;
  background-color: #000;
  color: #fff;
}
#app {
  text-align: center;
}
</style>
