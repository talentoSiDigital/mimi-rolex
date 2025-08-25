<script setup>
import { ref } from "vue";

import router from "../../router";

import PageBanner from "../../components/banners-components/PageBanner.vue";
import Loading from "../../components/global-components/Loading.vue";

import emailjs from "@emailjs/browser";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import mailDataService from "../../services/mailDataService";
const check = ref(false);
const notification = ref(false);
const message = ref("");
const loading = ref(false);
const schema = yup.object().shape({
  name: yup.string().required("El nombre es obligatorio!"),
  phone: yup.number().required("El numero de telefono es obligatorio!"),
  email: yup
    .string()
    .required("Email es obligatorio")
    .email("Email invalido!")
    .max(50, "Debe contener un maximo de 50 caracteres"),
  message: yup
    .string()
    .required("El campo no puede estar vacio")
    .min(5, "Debe contener un minimo de 5 caracteres!"),
});

function sendValue(value, { resetForm }) {
  loading.value = !loading.value;

  mailDataService
    .contact(value)
    .then((d) => {
      notification.value = true;
      setTimeout(() => {
        notification.value = false
      }, 4000)
      mailDataService.contactTrack(value).then(() => {
        loading.value = !loading.value;
        message.value = ""
        resetForm()
      })
    })
    .catch(() => {
      check.value = true;
      loading.value = false;
    });
}
</script>

<template>
  <Transition>
    <div v-if="notification" class="fixed z-[99] top-0 w-full flex justify-center">
      <h2 class="border text-xl bg-main-green p-3">Mensaje enviado con éxito</h2>
    </div>

  </Transition>
  <div id="relojeria" class="my-20 text-gray-600">
    <div class="mb-10 flex flex-col md:flex-row items-center justify-center w-full">
      <!-- The left line -->
      <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
      <!-- Your text here -->
      <h1 class="text-center text-3xl tracking-widest mx-4 my-4 font-normal">
        PARA MÁS INFORMACIÓN
      </h1>

      <!-- The right line -->
      <span class="block h-px w-1/3 md:w-1/6 bg-neutral-300"></span>
    </div>

    <div class="flex flex-col md:flex-row items-center justify-center gap-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.251050917702!2d-66.86339612548622!3d10.480864864576938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a59f37042f1a5%3A0x7697992e7ac226cb!2sMimi%20Joyer%C3%ADa%20-%20Distribuidor%20Oficial%20Rolex!5e0!3m2!1ses-419!2sve!4v1705353418244!5m2!1ses-419!2sve"
        width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade" class="pt-2/4 w-10/12 md:w-1/3"></iframe>

      <div class="w-10/12 md:w-1/3">
        <div class="w-full flex flex-col gap-6">
          <h2 class="text-3xl text-center">CONTACTA CON NOSOTROS</h2>

          <a href="https://maps.app.goo.gl/FemKdGHF9r7tBANW6" target="_blank"
            class="flex items-center gap-6 text-xl cursor-pointer">
            <font-awesome-icon :icon="['fas', 'location-dot']" class="w-4" />
            <p>
              Mimi Joyería - Distribuidor Oficial Rolex. C.C Tólon Fashion Mall
              Piso 1. Las Mercedes, 1080 Caracas.
            </p>
          </a>
          <a href="tel:212-3008742" target="_blank" class="flex items-center gap-6 text-xl cursor-pointer">
            <font-awesome-icon :icon="['fas', 'phone']" class="w-4" />
            <p>Llámenos al +58 212-3008742</p>
          </a>
          <a href="https://www.facebook.com/inversionesmimijoyeria/" target="_blank"
            class="flex items-center gap-6 text-xl cursor-pointer">
            <font-awesome-icon :icon="['fab', 'facebook-f']" class="w-4" />
            <p>Facebook</p>
          </a>
          <a href="https://www.instagram.com/mimijoyeria/" target="_blank"
            class="flex items-center gap-6 text-xl cursor-pointer">
            <font-awesome-icon :icon="['fab', 'instagram']" class="w-4" />
            <p>Instagram</p>
          </a>
        </div>
      </div>
    </div>
    <Form v-if="!loading" @submit="sendValue" class="flex flex-col items-center my-20" :validation-schema="schema">
      <h2 class="text-3xl text-left py-6 font-light">ENVÍANOS UN MENSAJE</h2>

      <div class="flex flex-col gap-2 w-10/12 md:w-2/3">
        <Field type="text" name="name" placeholder="Nombre y apellido" class="bg-neutral-100 h-12 p-4" />
        <ErrorMessage name="name" class="text-red-700" />

        <Field type="email" name="email" placeholder="email@ejemplo.com" class="bg-neutral-100 h-12 p-4" />
        <ErrorMessage name="email" class="text-red-700" />
        <Field type="number" name="phone" placeholder="+58 222 2222" class="bg-neutral-100 h-12 p-4" />
        <ErrorMessage name="phone" class="text-red-700" />
        <Field as="textarea" name="message" id="" cols="30" rows="10" placeholder="Mensaje"
          class="bg-neutral-100 h-24 p-4" v-model="message" />
        <ErrorMessage name="message" class="text-red-700" />
        <button class="border bg-[#adbaad] text-white h-14 hover:bg-white hover:text-[#adbaad] duration-150">
          Enviar mensaje
        </button>
      </div>
    </Form>
    <Loading v-if="loading && !check" />
    <div v-if="!loading && check" class=" flex flex-col items-center justify-center h-[50vh] gap-4">
      <font-awesome-icon :icon="['fas', 'circle-xmark']" class="text-9xl text-red-400" />
      <h2>Ha ocurrido un error al enviar tu mensaje. Intente de nuevo mas tarde.</h2>

    </div>
  </div>
</template>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: transform 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-100%);
}
</style>
