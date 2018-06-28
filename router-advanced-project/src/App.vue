<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link :to="{name:'HelloWorld'}" exac>Home</router-link>
    <router-link :to="{name:'stories.all'}" exac>Stories</router-link>
    <transition name="fade">
      <router-view/>
    </transition>

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
.router-link-active{
  color: green;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.fade-enter-active, .fade-leave-active{
  transition: opacity 1s;
}
.fade-enter-to, .fade-leave{
  opacity: 0.8;
}
</style>
