<script setup>
import { ref, computed } from "vue";
import router from '../../router'
import { auth } from '../../store/auth.module'
import { RouterLink, RouterView } from 'vue-router'


const piniaStore = auth()


const currentUser = computed(() => {
    return piniaStore.$state.user
})

</script>

<template>
    <section>
        <div>
            <h2 class="text-center text-3xl font-montserrat font-bold py-4 my-4">Bienvenido al panel de control,
                @{{ currentUser.username }}</h2>

        </div>
        <div v-if="currentUser.roles == 'ROLE_USER'">
            <h2 class="text-center text-2xl text-red-950 font-montserrat font-bold py-4 my-4">Ponte en contacto con un
                administrador para que te conceda los permisos necesarios para seguir navegando</h2>
        </div>
        <div v-else class="flex flex-col items-center justify-center">
            <h2 class="text-center text-2xl font-montserrat font-bold py-4 my-4">
                ¿Que deseas hacer?
            </h2>

            <ul class="flex flex-col items-center justify-center bg-main-green w-1/5 p-4 rounded-md">
                <li>
                    <RouterLink to="/dashboard/banner-edit" class="hover:underline">
                        <p>Editar banner principal</p>
                     </RouterLink>
                </li>
                <li>
                    <RouterLink to="/dashboard/agregar-relojeria" class="hover:underline">
                        <p>Agregar Nuevo Reloj</p>

                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/dashboard/agregar-joyeria" class="hover:underline">
                        <p>Agregar nueva joyeria</p>

                    </RouterLink>
                </li>

            </ul>


        </div>
    </section>
</template>

