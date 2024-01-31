<script setup>
import RolexNavbar from '../../components/global-components/RolexNavbar.vue'

import SliderNavigationRolex from '../../components/global-components/SliderNavigationRolex.vue'
import RolexFooter from '../../components/global-components/RolexFooter.vue'

import { onMounted, onUnmounted } from 'vue';

let externalScript = document.createElement('script')
externalScript.setAttribute('src', '//assets.adobedtm.com/7e3b3fa0902e/7ba12da1470f/launch-5de25e657d80.min.js')
onMounted(() => {
    document.head.appendChild(externalScript)
})

onUnmounted(() => {
    document.head.removeChild(externalScript)
})

</script>

<template>
    <div id="rolex-main-content">
        <RolexNavbar />

        <slot name="content">


        </slot>
        <SliderNavigationRolex />
        <RolexFooter />



    </div>
</template>



