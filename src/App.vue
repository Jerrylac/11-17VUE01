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
  height: 10vmin;
}
.content{
  width: 100vmax;
  height: 100vmax;
  padding-top: 10vmin;
  background-color: #4F4557;
  text-align: center;
  color: #fff;
  margin-top: 0px;
}
</style>
