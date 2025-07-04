<script setup>
import RolexTemplate from '../Rolex/RolexTemplate.view.vue'
import { onMounted } from 'vue';


onMounted(() => {
  // Add the async script tag
  const script = document.createElement("script");
  script.id = "rlxCorner";
  script.async = true;
  script.defer = true;
  script.src = "https://cornersv7.rolex.com/retailer.js?apikey=7513b85ede328a319698cf7a3eebed49&callback=rlxCornerCallback";

  // Define the callback function
  window.rlxCornerCallback = (Corner) => {
    window.rlxCornerCallback = null; // Clear the callback reference
    const corner = new Corner({
      as: "standalone",
      lang: "es",
      consent: true,
      legal: "https://mimijoyeria.com/",
      destination: "new-watches-2025",
    });
    corner.mount("#rlxCorner");
  };

  // Append the script to the document
  document.body.appendChild(script);

})
</script>

<template>
  <RolexTemplate>
    <template #content>
      <div id="rlxCorner"></div>

    </template>
  </RolexTemplate>
</template>
