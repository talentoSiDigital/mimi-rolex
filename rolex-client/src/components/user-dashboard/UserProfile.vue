<script setup>
import { ref, computed } from "vue";
import { auth } from "../../store/auth.module";
import DashboardCards from "../cards/DashboardCards.vue";


import { useAsyncState } from "@vueuse/core";
import userService from "../../services/auth/userService";
import { integer } from "@vee-validate/rules";

const props = defineProps({
  info: Number,
});


const { isLoading, state, isReady, execute } = useAsyncState(
  userService.getUserData(props.info).then((d) => {
    console.log(d);
    return d.data;
  })
);
const tag = {
  name: "Nombre",
  lastName: "Apellido",
  age: "Edad",
  phone: "Teléfono",
  email: "email",
};
</script>

<template>
  <div>
    <section class="flex w-full justify-center my-2">
      <div class="flex w-10/12 justify-around gap-4 items-center">
        <DashboardCards class="w-1/3 correction" v-if="isReady">
          <h2 class="text-2xl font-semibold">Datos Personales</h2>

          <div class="relative w-full my-4 flex justify-center">
            <table
              v-if="state"
              class="w-11/12 text-sm py-4 text-left rtl:text-right text-gray-500 "
            >
              <tbody
                class="border border-main-green "
                v-for="(item, index, pos) in state[0]"
                :key="index"
              >
                <tr class="bg-white">
                  <th
                    scope="row"
                    v-if="pos > 0 && pos <6"
                    class="px-5 bg-neutral-200 w-1/3 py-2 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {{ tag[index] }}
                  </th>

                  <td class="px-6 py-3" v-if="pos > 0 && pos <6 ">
                    {{ item }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <RouterLink
            to="/dashboard/actualizar-datos"
            class="w-11/12 border border-main-green text-black bg-main-green hover:bg-white font-medium text-sm px-4 py-2.5 text-center duration-200"
          >
            <p>Actualizar datos</p>
          </RouterLink>
        </DashboardCards>
        

      
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
