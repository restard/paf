<template>
  <main class="main">
  <router-link to="/">HOME</router-link> | 
  <router-link to="/events">Events</router-link> | 
  <router-link to="/films">Films</router-link> | 
  <router-link to="/channel">Channel</router-link> | 
  <router-link to="/media">Media</router-link> | 
  <router-link to="/blog">Blog</router-link> | 
  <br><br>
  <router-view />
  </main>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap');
  @import '@/assets/scss/reset';
  #app {
    font-family: 'Noto Sans JP', sans-serif;
  }
</style>