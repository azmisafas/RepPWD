<template>
  <div id="app">
    <div>
      <img src="./assets/logo.png">
    </div>
    <div>
      <router-link to="/">To Home</router-link>
      <router-link to="/Muskuis">Quiz</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
