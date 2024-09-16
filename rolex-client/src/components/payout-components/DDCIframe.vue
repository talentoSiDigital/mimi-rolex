<script setup>
import { computed, onMounted, ref } from 'vue';

const { data } = defineProps(['data'])
const checkResponse = defineModel()
const input = ref(null)

console.log(data);
console.log(data.consumerAuthenticationInformation);
console.log(data.consumerAuthenticationInformation.deviceDataCollectionUrl);

onMounted(() => {
    input.value.click()
    window.addEventListener("message", function (event) {
        if (event.origin === "https://centinelapi.cardinalcommerce.com") {
            checkResponse.value = event.data
            console.log(event.data);
        }
    }, false);
})

</script>

<template>
    <div>
        <iframe id="cardinal_collection_iframe" name="collectionIframe" height="10" width="10"
            style="display:none;"></iframe>
        <form id="cardinal_collection_form" method="POST" target="collectionIframe"
            :action="data.consumerAuthenticationInformation.deviceDataCollectionUrl">
            <input id="cardinal_collection_form_input" type="hidden" name="JWT"
                :value="data.consumerAuthenticationInformation.accessToken" />
            <button ref="input"></button>
        </form>
    </div>
</template>
