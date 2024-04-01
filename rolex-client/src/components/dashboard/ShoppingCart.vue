<script setup>
import DashboardCards from '../cards/DashboardCards.vue'
import CartProductCard from '../cards/CartProductCard.vue'

</script>

<template>
    <section>
        <div class="my-10 flex flex-col md:flex-row items-center justify-center w-full">
            <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
            <h1 class="text-center text-3xl tracking-widest mx-4 my-4 font-normal ">
                CARRITO DE COMPRAS
            </h1>

            <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
        </div>
        <div class="w-full h-screen flex items-center justify-between px-20 mb-10">

            <div
                class="h-full border-2 rounded-lg border-main-green w-[55%] p-6 ml-5 -translate-x-1.5 -translate-y-1.5">
                <h2 class="text-2xl pb-1">Resumen del pedido</h2>
                <section class="h-[88%] overflow-y-scroll">
                   <CartProductCard/>
                </section>

                <hr class="mt-2">
                <section>
                    <h2 class="text-2xl  text-right  py-2">Total: $7000 </h2>

                </section>

            </div>

            <DashboardCards class="w-2/5 bg-white">

            </DashboardCards>

        </div>
    </section>

</template>

<style scoped></style>
