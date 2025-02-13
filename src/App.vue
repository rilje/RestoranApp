<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import Navigacija from './components/Navigacija.vue';
import Footer from './components/Footer.vue';
</script>

<template>
 
  <div class="kont">
    <Navigacija/>
    <br>
    <RouterView class="container"/>
    <br>
    <Footer />
  </div>
</template>

<style scoped>
  .kont{
    /* height: 2000px; */
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url('/public/Cover/cover.jpg');
    
  }
</style>
