<script setup>
import { computed, onMounted, ref } from 'vue';

const { data } = defineProps(['data'])
const link = JSON.parse(atob(data.consumerAuthenticationInformation.pareq))

const checkResponse = defineModel()
const input = ref(null)
const sizes = ref({
    "01":"w-[250px] h-[400px]",
    "02":"w-[390px] h-[400px]",
    "03":"w-[500px] h-[600px]",
    "04":"w-[600px] h-[400px]",
    "05":"w-full h-screen",
})

// onMounted(() => {

//     input.value.click()
//     window.addEventListener("message", function (event) {
//         if (event.origin === "https://centinelapistag.cardinalcommerce.com") {
//             checkResponse.value = event.data
//         }
//     }, false);
// })


// =========================================================================
// ENVIAR IFRAME Y CONTINUAR CON EL PASO 5
// 
// 
// 
// =========================================================================
</script>

<template>
    <div id="challenge" class="relative z-[60]">
        <!-- <iframe id="cardinal_collection_iframe" name="collectionIframe" height="10" width="10"
            style="display:none;"></iframe>
        <form id="cardinal_collection_form" method="POST" target="collectionIframe"
            :action="data.consumerAuthenticationInformation.deviceDataCollectionUrl">
            <input id="cardinal_collection_form_input" type="hidden" name="JWT"
                :value="data.consumerAuthenticationInformation.accessToken" />
            <button ref="input">c</button>
        </form> -->
        
        <iframe name="step-up-iframe" :class="sizes[link.challengeWindowSize]"></iframe>
        <form id="step-up-form" target="step-up-iframe" method="post" :action="data.consumerAuthenticationInformation.stepUpUrl"> 
            <input type="hidden" name="JWT" :value="data.consumerAuthenticationInformation.token" />
            <button ref="input">c</button>
        </form>

    </div>
</template>
