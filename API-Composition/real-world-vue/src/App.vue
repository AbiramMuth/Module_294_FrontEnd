<script setup>
import { RouterLink, RouterView } from 'vue-router' // importe le RouterLink et RouterView
</script>

<!-- La page App.vue est une page générale qui apparait dans toutes les pages -->
<template>
  <div id="layout">
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Events</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</div>
</template>

<style> /* le style est appliqué à l'ensemble de l'application */
#layout{
  font-family: Avenir, Helvetica, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav{
  padding: 30px;
}
nav a{
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-active{
  color: #42b983;
}
h2{
  font-size: 20px;
}
</style>
