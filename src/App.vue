<template>
  <router-link to="/">HOME</router-link> | 
  <router-link to="/events">Events</router-link> | 
  <router-link to="/films">Films</router-link> | 
  <router-link to="/channel">Channel</router-link> | 
  <router-link to="/media">Media</router-link> | 
  <router-link to="/blog">Blog</router-link> | 
  <br><br>
  <router-view />
</template>

<script>

export default {
  name: 'App'
}
</script>
