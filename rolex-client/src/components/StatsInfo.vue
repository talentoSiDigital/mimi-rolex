<script setup>




</script>

<template>
    <div class="flex flex-col items-center">
        <h2 class="text-2xl font-semibold ">Estadísticas</h2>

        <p class="text-lg text-center ">Cuentas creadas este més:</p>
        <ul v-for="item in 5" :key="item" class="list-disc">
            <li class="flex gap-8 items-center justify-around ">
                <p>@usuario{{ item }}</p>
            </li>

        </ul>
        <p class="text-lg text-center ">Productos nuevos:</p>
        <ul v-for="item in 5" :key="item" class="">
            <li class="flex items-center justify-center gap-4">
                <p>Reloj Tudor modelo {{ item }}</p>
                <font-awesome-icon :icon="['fas', 'circle-info']"
                    class="text-neutral-600 hover:text-neutral-900 cursor-pointer " />
                <font-awesome-icon :icon="['fas', 'pen-to-square']"
                    class="text-neutral-600 hover:text-neutral-900 cursor-pointer " />
            </li>

        </ul>
        <p class="text-lg text-center ">Productos más vistos:</p>
        <ul v-for="item in 5" :key="item" class="">
            <li class="flex items-center justify-center gap-4">
                <p>Reloj Tudor modelo {{ item }}</p>
                <font-awesome-icon :icon="['fas', 'circle-info']"
                    class="text-neutral-600 hover:text-neutral-900 cursor-pointer " />
                <font-awesome-icon :icon="['fas', 'pen-to-square']"
                    class="text-neutral-600 hover:text-neutral-900 cursor-pointer " />
            </li>

        </ul>
        <p class="text-lg text-center ">Productos más vendidos:</p>
        <ul v-for="item in 5" :key="item" class="">
            <li class="flex items-center justify-center gap-4">
                <p>Reloj Tudor modelo {{ item }}</p>
                <font-awesome-icon :icon="['fas', 'circle-info']"
                    class="text-neutral-600 hover:text-neutral-900 cursor-pointer " />
                <font-awesome-icon :icon="['fas', 'pen-to-square']"
                    class="text-neutral-600 hover:text-neutral-900 cursor-pointer " />
            </li>

        </ul>
    </div>
</template>
