<script setup>
const {  imgSrc, altText, type } = defineProps(['parent', 'imgSrc', 'altText', 'type'])



</script>

<template>
    <section :class="[type == 'reverse' ? 'md:flex-row-reverse' : 'md:flex-row']" class="flex p-4 flex-col justify-center m-2">
        <img :src="`/assets/routes-assets/${imgSrc}.webp`" :alt="altText" class="w-full md:w-2/4 ">
        <header class="flex flex-col justify-center items-center p-10 md:p-20 text-neutral-700 w-full md:w-2/5  ">
            
                <h1 class="text-3xl pb-4 ">
                    <slot name="title">


                    </slot>
                </h1>
                <p class=" font-normal text-center">
                    <slot name="text">


                    </slot>

                </p>

                    <slot name="button">

                    </slot>

        </header>




    </section>
</template>

