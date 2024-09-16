<script setup>
import { onMounted, ref } from "vue";

const { data, accessToken } = defineProps(["data", "access-token"]);
const link = JSON.parse(atob(data.consumerAuthenticationInformation.pareq));

const challengeResponse = defineModel();
const iframe = ref(true);
const frameData = ref(null)
const inputButton = ref(null);
const sizes = ref({
  "01": "w-[250px] h-[400px]",
  "02": "w-[390px] h-[400px]",
  "03": "w-[500px] h-[600px]",
  "04": "w-[600px] h-[400px]",
  "05": "w-full h-screen",
});

onMounted(() => {
  inputButton.value.click();

  window.addEventListener(
    "message",
    function (e) {
      challengeResponse.value = e.data;
      if(challengeResponse.value != undefined){
        iframe.value = false;

      }
    },
    false
  );

});
</script>

<template>
  <div
    id="challenge"
    class="z-40 fixed h-screen top-0 w-full flex items-center justify-center bg-black/60"
    v-if="iframe"
    ref="frameData"
  >
    <div class="relative">
      <iframe
        id="form"
        name="step-up-iframe"
        :class="sizes[link.challengeWindowSize]"
        class="bg-white"></iframe>
    </div>
    <form
      id="step-up-form"
      target="step-up-iframe"
      method="post"
      :action="data.consumerAuthenticationInformation.stepUpUrl">
      <input
        type="hidden"
        name="JWT"
        :value="data.consumerAuthenticationInformation.accessToken"/>

      <button ref="inputButton"></button>
    </form>
  </div>
</template>
