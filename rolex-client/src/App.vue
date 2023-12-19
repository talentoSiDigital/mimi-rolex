<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/global-components/Navbar.vue'



</script>

<template>
  <div id="app-main">
    <Navbar/>
    
    <RouterView />
    
  </div>
</template>

<style scoped></style>
