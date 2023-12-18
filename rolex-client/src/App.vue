<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/global-components/Navbar.vue'
import Footer from './components/global-components/Footer.vue'



</script>

<template>
  <div id="app-main">
    <Navbar/>
    
    <RouterView />
    <Footer/>
    
  </div>
</template>

<style scoped></style>
