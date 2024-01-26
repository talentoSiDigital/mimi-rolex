<script setup>
import { ref, computed } from "vue";
import { RouterLink } from 'vue-router';
import router from '../../router'

import { auth } from '../../store/auth.module'
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
const piniaStore = auth()


const message = ref("");
const successful = ref(false);
const loading = ref(false)


const schema = yup.object().shape({
    username: yup.string().required("El nombre de usuario es obligatorio!"),
    password: yup.string().required("La contraseña es obligatoria!"),
});

const user = ref({
    "username": "",
    "password": ""
})

const loggedIn = computed(() => {
    return piniaStore.$state.status.loggedIn
})

if (loggedIn.value) {
    router.push('/dashboard')
}



function handleLogin(user) {
    loading.value = true;
    piniaStore.login(user).then(
        () => {

            router.push("/dashboard");
        },
        (error) => {
            loading.value = false;
            message.value =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
        }
    );
}
</script>

<template>
    <section class="bg-gray-50 ">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <img src="../../assets/mimi-logo.png" alt="logo">
            <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  ">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Iniciar sesión
                    </h1>
                    <Form :validation-schema="schema">
                        <div v-if="!successful" class="space-y-4 md:space-y-6">
                            <div>
                                <label for="user" class="block mb-2 text-sm font-medium text-gray-900 ">Usuario</label>
                                <Field type="text" name="user" placeholder="Usuario"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    v-model="user.username" />
                                <ErrorMessage name="username" class="error-feedback" />
                            </div>

                            <div>
                                <label for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                <Field type="password" name="password" id="password" placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    v-model="user.password" />
                                <ErrorMessage name="password" class="error-feedback" />
                            </div>

                            <button @click="handleLogin(user)"
                                class="w-full border border-main-green text-white bg-main-green hover:bg-white hover:text-main-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0">Iniciar
                                Sesión</button>

                        </div>

                    </Form>
                    <div v-if="message" class="font-bold">
                        <p :class="successful ? 'text-rolex-green' : 'text-red-700'" class="pb-4">{{ message }}</p>
                        <RouterLink to="/login" :class="[successful ? 'block' : 'hidden']"
                            class="rounded px-4 py-2 text-white bg-rolex-green w-fit">
                            Iniciar sesión
                        </RouterLink>
                    </div>
                    <div class="flex">
                        <p>No tienes una cuenta?</p>
                        <RouterLink to="/registrar"
                            class="w-full border border-main-green text-white bg-main-green hover:bg-white hover:text-main-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0">
                            Registrar</RouterLink>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>


