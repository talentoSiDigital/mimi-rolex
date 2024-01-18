<script setup>
import RolexNavbar from '../../components/global-components/RolexNavbar.vue'

import SliderNavigationRolex from '../../components/global-components/SliderNavigationRolex.vue'
import RolexFooter from '../../components/global-components/RolexFooter.vue'  

import {loadScript} from "vue-plugin-load-script";

// loadScript("//assets.adobedtm.com/7e3b3fa0902e/7ba12da1470f/launch-5de25e657d80.min.js")
//     .then(() => {
//       console.log('loaded successfully')
//     })
//     .catch(() => {
//         console.log('Failed to load')
//     });

</script>

<template>
    <div id="rolex-main-content">
        <RolexNavbar />

        <slot name="content">


        </slot>
        <SliderNavigationRolex  /> 
        <RolexFooter  /> 

        

    </div>
</template>

<!-- <script src="//assets.adobedtm.com/7e3b3fa0902e/7ba12da1470f/launch-5de25e657d80.min.js"></script> -->


