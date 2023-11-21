<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <div class="header">
    <Header/>
  </div>
  
  <div class="content">
    
    <RouterView />
  </div>
</template>

<style scoped>  

.header{
  width: 100vw;
  height: 15vh;
}
.content{
  width: 100vmax;
  height: 100vmax;
  background-color: #635985;
  text-align: center;
  color: #fff;
}
</style>
