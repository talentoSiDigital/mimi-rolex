<script setup>

function scrollToTop() {
    window.scrollTo(0, 0);
}
</script>

<template>
    <div id="rolex-footer" class="flex flex-col justify-center items-center  h-fit py-4 bg-rolex-gradient">
        <img src="/assets/crown-logo-rolex.svg" alt="logo-rolex" class="w-12 py-4">
        <hr class="opacity-40 bg-white w-full my-4">
        <div  @click="scrollToTop" class=" cursor-pointer w-full flex flex-col items-center">
          
            <font-awesome-icon :icon="['fas', 'angle-up']" class="text-white" />
            <h2 class="text-sm font-helvetica-bold text-white">Volver al inicio</h2>
        </div>

    </div>

</template>

<style scoped></style>
