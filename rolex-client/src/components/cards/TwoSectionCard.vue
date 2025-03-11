<script setup>
const { imgSrc, altText, type,imgSize } = defineProps(['imgSize', 'imgSrc', 'altText', 'type'])



</script>

<template>
    <section class="flex flex-col ">
        <section :class="type == 'reverse' ? 'bg-rolex-brown-light-2' : 'bg-rolex-brown-light-1'" class="py-[10vh] ">
            <header
                class="flex flex-col gap-8 font-helvetica font-bold justify-around items-center  text-rolex-brown h-fit pb-[10vh]">
                <div class="w-10/12 md:w-1/2">
                    <slot name="optional"></slot>

                </div>
                <h1 class="text-2xl md:text-5xl w-10/12 md:w-1/2">
                    <slot name="title"></slot>
                </h1>
                

                <p class="w-10/12 md:w-1/2 text-justify md:text-left font-light">
                    <slot name="text"></slot>
                </p>
                <p class="w-10/12 md:w-1/2 h-fit">
                    <slot name="date"></slot>

                </p>
            </header>

            <div class="flex justify-center ">
                <img :src="`/assets/routes-assets/${imgSrc}.webp`" :alt="altText" class="hidden md:block " :class="imgSize">
                <img :src="`/assets/routes-assets/${imgSrc}-mobile.webp`" :alt="`${altText}-mobile`"
                    class="md:hidden block " :class="imgSize == 'w-1/2'? 'w-10/12 md:w-1/2': imgSize">
            </div>

        </section>

    </section>
</template>
