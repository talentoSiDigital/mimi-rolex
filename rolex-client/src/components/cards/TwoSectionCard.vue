<script setup>
const {  imgSrc, altText, type } = defineProps(['parent', 'imgSrc', 'altText', 'type'])



</script>

<template>
        <section :class="[type == 'reverse' ? 'md:flex-row-reverse' : 'md:flex-row']" class="flex flex-col  m-10">
            <img :src="`/assets/routes-assets/${imgSrc}.webp`" :alt="altText" class="w-full md:w-1/2 ">
            <header class="flex flex-col justify-center md:items-start p-10 md:p-20 w-full">

                <slot name="optional">

                </slot>
                <div id="textarea">
                    <h1 class="text-2xl md:text-4xl pb-4 text-center md:text-left ">
                        <slot name="title">


                        </slot>
                    </h1>
                    <p class="font-normal text-justify md:text-left text-neutral-700">
                        <slot name="text">


                        </slot>

                    </p>
                </div>
            </header>




        </section>
</template>

