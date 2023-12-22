<script setup>
const { imgSrc, altText, type } = defineProps(['imgSrc', 'altText', 'type'])
</script>

<template>
    <section :class="[type == 'reverse' ? 'md:flex-row-reverse' : 'md:flex-row']" class="flex p-4 flex-col justify-center m-2">
        <img :src="'/src/assets/routes-assets/' + imgSrc" :alt="altText" class="w-full md:w-2/4 ">
        <header class="flex flex-col justify-center items-center p-10 md:p-20 text-neutral-700 w-full md:w-2/5  ">
            
                <h1 class="text-3xl pb-4 ">
                    <slot name="title">


                    </slot>
                </h1>
                <p class=" font-normal text-center">
                    <slot name="text">


                    </slot>

                </p>

                <a href="#" class="mt-10 bg-[#818a91] text-lg text-white py-3 px-10 shadow-lg rounded hover:scale-110 duration-200">
                    <slot name="button">

                    </slot>
                </a>

        </header>




    </section>
</template>

