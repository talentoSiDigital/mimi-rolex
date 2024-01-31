<script setup>
import { ref ,computed} from "vue";
import { RouterLink } from 'vue-router';
import router from '../../router'

import { auth } from '../../store/auth.module'
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const piniaStore = auth()
const loggedIn = computed(()=>{
    return  piniaStore.$state.status.loggedIn
})

if(loggedIn.value){
    router.push('/dashboard')
}


const user = ref({
    "username": "",
    "email": "",
    "password": ""
})

const schema = yup.object().shape({
    username: yup
        .string()
        .required("Nombre de usuario es obligatorio")
        .min(3, "Debe contener al menos 3 caracteres")
        .max(20, "Debe contener un maximo de 20 caracteres"),
    email: yup
        .string()
        .required("Email es obligatorio")
        .email("Email invalido!")
        .max(50, "Debe contener un maximo de 50 caracteres"),
    password: yup
        .string()
        .required("Contraseña es obligatoria")
        .min(6, "Debe contener al menos 6 caracteres")
        .max(40, "Debe contener un maximo de 40 caracteres"),
});

const message = ref("");
const successful = ref(false);
const loading = ref(true);

function handleRegister(user) {
    // piniaStore.test()
    piniaStore.register(user).then(
        (data) => {
            message.value = data.message;
            successful.value = true;
            loading.value = false;
        },
        (error) => {
            message.value =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            successful.value = false;
            loading.value = false;
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
                        Registrar
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
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                                <Field type="email" name="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    placeholder="nombre@example.com" v-model="user.email" />
                                <ErrorMessage name="email" class="error-feedback" />
                            </div>
                            <div>
                                <label for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                <Field type="password" name="password" id="password" placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    v-model="user.password" />
                                <ErrorMessage name="password" class="error-feedback" />
                            </div>

                            <button @click="handleRegister(user)"
                                class="w-full border border-main-green text-white bg-main-green hover:bg-white hover:text-main-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0">Registrar</button>

                        </div>

                    </Form>
                    <div v-if="message" class="font-bold">
                        <p :class="successful ? 'text-rolex-green' : 'text-red-700'" class="pb-4">{{ message }}</p>
                        <RouterLink to="/login" :class="[successful ? 'block' : 'hidden']"
                            class="rounded px-4 py-2 text-white bg-rolex-green w-fit">
                            Iniciar sesión
                        </RouterLink>
                    </div>
                    <div v-else class="flex">
                        <p>Ya tienes una cuenta?</p>
                    <RouterLink to="/login"
                        class="w-full border border-main-green text-white bg-main-green hover:bg-white hover:text-main-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0">
                        Iniciar sesion</RouterLink>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>


