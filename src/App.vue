<template>

<div id="app"> 
  <main>
  <router-view></router-view>

  </main>
</div>

</template>

<script>
import controller from './components/controller'

export default {
  name: 'App',
  components: {
    controller
  }
}
</script>

<style>
body, html{
  margin:0;
  padding:0;
  cursor: default;
}


#app {
  font-family: 'Noto Sans','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
