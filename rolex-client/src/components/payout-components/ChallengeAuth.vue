<script setup>
import { computed, onMounted, ref } from 'vue';
const { data, accessToken } = defineProps(['data', 'access-token'])
const link = JSON.parse(atob(data.consumerAuthenticationInformation.pareq))

const challengeResponse = defineModel()
const form = ref(null)
const inputButton = ref(null)
const sizes = ref({
    "01": "w-[250px] h-[400px]",
    "02": "w-[390px] h-[400px]",
    "03": "w-[500px] h-[600px]",
    "04": "w-[600px] h-[400px]",
    "05": "w-full h-screen",
})

console.log(data);

onMounted(() => {
    inputButton.value.click()
    window.addEventListener('message', (evnt) => {
        try {
            if (evnt.origin === "https://centinelapistag.cardinalcommerce.com") {
                let data = JSON.parse(evnt.data)
                if (data !== undefined && data.MessageType !== undefined) {
                    switch (data.MessageType) {
                        case 'stepUp.acsRedirection':
                            console.log('stepUp.acsRedirection');
                            break;
                        case 'stepUp.completion':
                            console.log(data);
                            break;
                        case 'stepUp.error':
                            console.log('error');
                            break;
                        default:
                            console.error("Unknown MessageType found [" + data.MessageType + "]");
                            break;
                    }
                }
            }
        } catch (e) {
            console.error('failed to parse CruiseAPI postMessage event', e)
        }
    }, false)
})




</script>

<template>
    <div id="challenge" class="z-40 fixed h-screen top-0 w-full flex  items-center justify-center">
        <iframe  name="step-up-iframe" :class="sizes[link.challengeWindowSize]" class="bg-white"></iframe>
        <form ref="form" id="step-up-form" target="step-up-iframe" method="post"
            :action="data.consumerAuthenticationInformation.stepUpUrl">
            <input type="hidden" name="JWT" :value="accessToken" />
            <button ref="inputButton"></button>
        </form>
       
    </div>
</template>
