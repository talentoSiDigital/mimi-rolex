<script setup>

</script>

<template>


    <div class="relative overflow-x-auto w-full">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase bg-main-green ">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Usuario
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Producto
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Marca
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Precio
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b " v-for="item in 15" :key="item">

                    <th scope="row" 
                    :class="item % 2 == 0 ? 'bg-white':'bg-neutral-200'"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        @usuario{{ item }}
                    </th>
                    <td 
                    :class="item % 2 == 0 ? 'bg-white':'bg-neutral-200'"
                    class="px-6 py-4">
                        Black bay
                    </td>
                    <td 
                    :class="item % 2 == 0 ? 'bg-white':'bg-neutral-200'"
                    class="px-6 py-4">
                        Tissot
                    </td>
                    <td 
                    :class="item % 2 == 0 ? 'bg-white':'bg-neutral-200'"
                    class="px-6 py-4">
                        $1000
                    </td>


                </tr>

            </tbody>
        </table>
    </div>

</template>
