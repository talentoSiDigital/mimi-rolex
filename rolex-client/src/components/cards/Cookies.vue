<script setup>
import { computed, ref } from "vue";
import  Cookies from "../../services/cookiesDataService"

// Cookies.getCookies()
// Cookies.updateCookies(false)



const activate = ref(false)

const checkButton = computed(()=>{
    return activate ? 'ml-0':'ml-10'
})
function activateButton() {
    activate.value = !activate.value
    console.log(activate.value)

}




// .then(function(data){
//     console.log(data)
// })


</script>

<template>
    <div class="absolute w-full h-screen ">
        <div class="border-t border-main-green fixed h-20 w-full bg-white z-50 bottom-0 flex items-center justify-between px-6">
            <h2 class="w-10/12">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, itaque. Quas possimus architecto molestias accusantium vero dignissimos esse. Voluptate, neque error nisi unde inventore commodi nam temporibus libero quisquam facilis!</h2>
            <div >
                <div  class="bg-main-green h-6 w-16 rounded-xl">
                    <span @click="activateButton" :class="checkButton"  class=" block bg-white w-6 h-6 border border-gray-800 rounded-full cursor-pointer"></span>
                </div>
            </div>

        </div>
    </div>
</template>



