<script setup>
import { ref, watch } from 'vue';
import HeaderSlider from '../services/headerSliderDataServices'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


const results = ref('')


HeaderSlider.getAll().then(data => results.value = data)





</script>

<template>
    <div id="main-content">
       
        <h2 v-if="results.data == ''" >Loading</h2>   
        <div  v-else :v-for="items in results.data">
            <h2>{{ items.route }}</h2>
        </div>
         
        
      
        <!-- <carousel :items-to-show="1.5">
            <slide v-for="slide in 10" :key="slide">
                {{ slide }}
            </slide>

            <template #addons>
                <navigation />
                <pagination />
            </template>
        </carousel> -->

    </div>
</template>

<style scoped></style>

