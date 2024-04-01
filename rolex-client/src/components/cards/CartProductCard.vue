<script setup>

</script>

<template>
    <section class="flex items-center border rounded-md my-4 p-2 w-full bg-main-green text-white shadow-lg">
        <img src="http://localhost:3000/storage/store-products/tudor-black-bay-1.webp" alt=""
            class="w-1/5 border bg-white rounded-md">
        <header class=" h-24 w-1/3 ml-5 flex flex-col justify-center ">
            <h3 class="text-xl">Black Bay GMT</h3>
            <h3 class="text-lg">Tudor</h3>
            <h3 class="text-xl font-bold">$7000</h3>
        </header>

        <header class=" h-24 w-2/6 ml-5 flex flex-col justify-center items-end ">
            <button class=" hover:scale-125 duration-200 ease-in-out">
                <font-awesome-icon :icon="['fas', 'trash-can']" class="text-4xl" />

            </button>
        </header>

    </section>
</template>
