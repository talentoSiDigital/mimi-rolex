<script setup>
import { ref, computed } from "vue";
import { RouterLink } from 'vue-router';
import router from '../../router'
import uuid from 'uuid-random';

import { auth } from '../../store/auth.module'
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const piniaStore = auth()
const loggedIn = computed(() => {
    return piniaStore.$state.status.loggedIn
})

if (loggedIn.value) {
    router.push('/dashboard')
}

const phoneNumber = ref({
    "phone": 0,
    "code": 58
})
function randomStr() {
    let ans = uuid()
    let array = ans.split('-')
    return array[array.length - 1].toUpperCase();
}

const user = ref({

    "name": "",
    "lastname": "",
    "username": "",
    "age": 0,
    "phone": "",
    "email": "",
    "password": ""
})

const schema = yup.object().shape({
    name: yup
        .string()
        .required("El nombre es obligatorio")
        .min(2, "Debe contener al menos 1 caracter")
        .max(40, "Debe contener un maximo de 40 caracteres"),
    lastname: yup
        .string()
        .required("Nombre de usuario es obligatorio")
        .min(2, "Debe contener al menos 1 caracter")
        .max(30, "Debe contener un maximo de 30 caracteres"),
    username: yup
        .string()
        .required("Nombre de usuario es obligatorio")
        .min(3, "Debe contener al menos 3 caracteres")
        .max(20, "Debe contener un maximo de 20 caracteres"),
    age: yup
        .number("Debes colocar un número")
        .positive("Número Inválido")
        .integer("Número Inválido")
        .required("La edad es obligatorio")
        .min(18, "Debes ser mayor de edad para registrarte")
    ,
    phonecode: yup
        .number("Debes colocar un número")
        .positive("Número Inválido")
        .integer("Esté numero es invalido")
        .required("Número obligatorio")
        .max(999, "Numero no válido")
    ,
    phonenumber: yup
        .number("Debes colocar un número")
        .positive("Número Inválido")
        .integer("Esté numero es invalido")
        .required("Número obligatorio")
        .max(99999999999, "El número es muy largo!")
        .min(999, "El número es muy corto!"),
    email: yup
        .string()
        .required("Email es obligatorio")
        .email("Email invalido!")
        .max(50, "Debe contener un maximo de 50 caracteres"),
    password: yup
        .string()
        .required("Contraseña es obligatoria")
        .min(6, "Debe contener al menos 6 caracteres")
        .max(40, "Debe   contener un maximo de 40 caracteres"),
});

const message = ref("");
const successful = ref(false);
const loading = ref(true);

function handleRegister(user,phoneNumber) {
    // piniaStore.test()
    user.phone = "+"+ phoneNumber.code + phoneNumber.phone
    user.age = user.age.toString() 
    user.referenceCode = randomStr()
    console.log(user)
    piniaStore.register(user).then(
        (data) => {
            console.log("Successfully registered")
            message.value = data.message;
            successful.value = true;
            loading.value = false;
        },
        (error) => {
            console.log("Error: " + error.message)
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
    <section class=" w-full">
        <div class="flex flex-col items-center justify-center  py-8 mx-auto  lg:py-0">

            <img src="/assets/mimi-logo.png" alt="logo">

            <div class="w-full bg-white rounded-lg shadow  md:mt-0  xl:p-0   ">
                <div class="p-6 space-y-4 md:space-y-6 ">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl">
                        Registrar
                    </h1>
                    <p>*Todos los campos son obligatorios</p>
                

                    <Form :validation-schema="schema"  @submit="handleRegister(user,phoneNumber)">
                        <div v-if="!successful" class="space-y-4 md:space-y-6">
                            <div>
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Nombre</label>
                                <Field id="name" type="text" name="name" placeholder="Luis"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    v-model="user.name" />
                             
                                    <ErrorMessage name="name" class="text-red-700 " />
                            </div>
                            <div>
                                <label for="lastname"
                                    class="block mb-2 text-sm font-medium text-gray-900 ">Apellidos</label>
                                <Field id="lastname" type="text" name="lastname" placeholder="García"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    v-model="user.lastname" />
                                <ErrorMessage name="lastname" class="text-red-700" />
                            </div>
                            <div>
                                <label for="user" class="block mb-2 text-sm font-medium text-gray-900 ">Usuario</label>
                                <Field id="username" type="text" name="username" placeholder="Usuario"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    v-model="user.username" />
                                <ErrorMessage name="username" class="text-red-700" />
                            </div>
                            <div>
                                <label for="age" class="block mb-2 text-sm font-medium text-gray-900 ">Edad</label>
                                <Field id="age" type="number" name="age" placeholder="Edad"
                                    class="appearance-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    v-model="user.age" />
                                <ErrorMessage name="age" class="text-red-700" />
                            </div>
                            <div>
                                <label for="phonecode"
                                    class="block mb-2 text-sm font-medium text-gray-900 ">Teléfono</label>
                                <label for="phonenumber" class="block text-sm font-medium text-gray-900 "></label>

                                <div class="flex items-center gap-2">
                                    <h2>+</h2>
                                    <Field id="phonecode" type="number" name="phonecode" placeholder="00"
                                        class="appearance-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-16 p-2.5 "
                                        v-model="phoneNumber.code" />
                                    <Field id="phonenumber" type="number" name="phonenumber" placeholder="4245556666"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        v-model="phoneNumber.phone" />
                                </div>
                                <div class="flex flex-col">

                                    <ErrorMessage name="phonecode" class="text-red-700" />
                                    <ErrorMessage name="phonenumber" class="text-red-700" />
                                </div>
                            </div>

                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                                <Field id="email" type="email" name="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    placeholder="nombre@example.com" v-model="user.email" />
                                <ErrorMessage name="email" class="text-red-700" />
                            </div>
                            <div>
                                <label for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                <Field type="password" name="password" id="password" placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    v-model="user.password" />
                                <ErrorMessage name="password" class="text-red-700" />
                            </div>

                            
                            <button
                               
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
                        <p>¿Ya tienes una cuenta?</p>
                        <RouterLink to="/login"
                            class="w-full border border-main-green text-white bg-main-green hover:bg-white hover:text-main-green font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 mt-0">
                            Iniciar sesion</RouterLink>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
