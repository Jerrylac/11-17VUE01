<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <div class="header">
    <Header/>
  </div>
  
  <div class="content">
    
  </div>
  <RouterView />
</template>

<style scoped>
.header{
  width: 100vw;
  height: 15vh;
}
.content{
  width: 100vw;
  height: 85vh;
  background-color: #635985;
}
</style>
