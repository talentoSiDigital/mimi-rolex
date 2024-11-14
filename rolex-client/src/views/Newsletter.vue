<script setup>
import headerSliderDataServices from '../services/headerSliderDataServices'
import { useRouter, useRoute } from 'vue-router';
const router = useRouter()
const route = useRoute();

headerSliderDataServices.clickBanner("newsletter").then(()=>{
    if(route.params.id == "pelagos-fxd"){
        
        router.push('/relojeria/tudor/tudor-pelagos-fxd')
    }
    if(route.params.id == "pelagos-fxd-chrono"){

        router.push('/relojeria/tudor/tudor-pelagos-fxd-chrono')
    }
    if(route.params.id == "pelagos-fxd-gmt"){

        router.push('/relojeria/tudor/tudor-pelagos-fxd-gmt')
    }
    if(route.params.id == "tudor"){

        router.push('/tudor')
    }
   
}).catch((e)=>{
    router.push('/tudor')
})
</script>

<template>
    
</template>