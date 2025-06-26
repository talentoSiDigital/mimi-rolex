<script setup>
import { storeToRefs } from "pinia";
import { RouterView, useRoute } from "vue-router";
import Cookies from "./components/cards/Cookies.vue";
import PageLoader from "./components/global-components/PageLoader.vue";
import Footer from './components/navigation-components/Footer.vue';
import Navbar from './components/navigation-components/Navbar.vue';
import ShoppingPop from "./components/payout-components/ShoppingPop.vue";

import { auth } from "./store/auth.module";
import { useLoaderStore } from "./store/loaderState";

const route = useRoute()

const piniaStore = auth();
const loader = useLoaderStore()
const isUserLogged = storeToRefs(piniaStore);
</script>   

<template>
  <div id="app-main">
    <PageLoader v-if="loader.$state.loader"/>
    <Navbar />
    
    <Cookies />
    <ShoppingPop
      v-if="route.path !== '/carrito' && isUserLogged.status.value.loggedIn"
    />
    <div class="correction">

      <RouterView :key="route.fullPath"  />
    </div>

    <Footer v-once/>
  </div>
</template>

<style scoped>
.correction {
  min-height: 100vh;
}
</style>
