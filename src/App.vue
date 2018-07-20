<template>
<div id="app">
  <nav class="menu"> 
      <navigationmenu></navigationmenu> 
    <router-link to="/commits">commits</router-link>
  </nav>
  
  <main>
    <router-view></router-view>
  </main>
</div>

</template>

<script>
import navigationmenu from './components/navigationmenu'

export default {
  name: 'App',
  components: {navigationmenu}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
