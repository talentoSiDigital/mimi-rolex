<script setup>
import { computed, ref } from "vue";
import { useDateFormat, useNow } from '@vueuse/core'

const width = ref("w-20 h-20")
const hour = useDateFormat(useNow(),'h')
const min = useDateFormat(useNow(),'m')
const sec = useDateFormat(useNow(),'s')

const seconds = computed(()=>{
  return `transform:rotate(${sec.value *6}deg)`
})
const minutes = computed(()=>{
  return `transform:rotate(${min.value *6}deg)`
})

function hours(){
  const hourDeg = hour.value*30
  const minDegAdd = min.value/2
  return `transform:rotate(${hourDeg + minDegAdd}deg)`
}
</script>

<template>
  <router-link :to="{ name: 'rolex-contacto' }" class=" relative " :class="width" aria-label="Rolex Contact">
    <div class="absolute z-10" >
      <img src="/assets/watch.png" alt="" class="w-full">
    </div>
    <div id="hours" :style="hours()" class=" absolute z-20 w-full " >
      <svg
        width="100%"
        height="100%"
        x="501.5"
        y="139"
        viewBox="0 0 560 560"
        aria-hidden="true"
        class="scale-y-[0.80]"
      >
        <g class="fill-[#7d5609]">
          <path
            id="d"
            d="M291.5 280c0-3.3-1.4-6.3-3.7-8.4l-2.2-172.3H275l-2.6 172.2c-2.3 2.1-3.8 5.1-3.8 8.5 0 3.2 1.4 6.2 3.5 8.2l-.5 29.3h16.8l-.4-29.4c2.1-2 3.5-4.9 3.5-8.1z"
          ></path>
          <path
            id="d2"
            d="M277.1 107.5L282.9 107.5 283.5 190.3 276.5 190.3z"
          ></path>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#d"></use>
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="#fff"
            xlink:href="#d2"
          ></use>
        </g>
      </svg>
    </div>
   
   
    <div id="minutes" :style="minutes" class=" absolute z-20 scale-y-110 rotate-90 w-full" >
      <svg
        width="100%"
        height="100%"
        x="501.5"
        y="139"
        viewBox="0 0 560 560"
        aria-hidden="true"
      >
        <g class="fill-[#7d5609]">
          <path
            id="d"
            d="M291.5 280c0-3.3-1.4-6.3-3.7-8.4l-2.2-172.3H275l-2.6 172.2c-2.3 2.1-3.8 5.1-3.8 8.5 0 3.2 1.4 6.2 3.5 8.2l-.5 29.3h16.8l-.4-29.4c2.1-2 3.5-4.9 3.5-8.1z"
          ></path>
          <path
            id="d2"
            d="M277.1 107.5L282.9 107.5 283.5 190.3 276.5 190.3z"
          ></path>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#d"></use>
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="#fff"
            xlink:href="#d2"
          ></use>
        </g>
      </svg>
    </div>


    
    <div id="seconds" :style="seconds" class=" absolute z-20 scale-90 rotate-45 w-full" >
      <svg
        width="100%"
        height="100%"
        x="501.5"
        y="139"
        viewBox="0 0 560 560"
        aria-hidden="true"
      >
        <g class="fill-[#7d5609]">
          <path
            id="f"
            d="M287.6 280c0-1.9-.7-3.6-1.9-5l-3.4-205.7H278l-3.6 205.6c-1.2 1.3-2 3.1-2 5.1 0 1.9.7 3.5 1.8 4.8l-1 54.7h13.4l-.9-54.8c1.2-1.2 1.9-2.9 1.9-4.7z"
          ></path>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#f"></use>
        </g>
      </svg>
    </div>
  </router-link>
</template>

<style scoped>
</style>

