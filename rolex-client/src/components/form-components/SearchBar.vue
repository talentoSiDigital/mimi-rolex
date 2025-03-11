<script setup>
import { ref, computed, watch, onMounted } from "vue";
import searchResults from "../../data/searchResults.json";
import router from "../../router";
import Search from "../../services/routesDataServices";

const emit = defineEmits(["activateSearch"]);
const search = defineModel();

const input = ref("");
let suggestions = [];
function searchTags() {
  Search.getTags(input.value)
    .then((d) => {
      suggestions = d.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

watch(input, () => {
  if (input.value.length >= 3) {
    searchTags();
  }
});

function checkSearch(param) {
  if (param) {
    input.value = param;
  }
  const searchValue = input.value.toLowerCase();
  input.value = "";
  emit("activateSearch");
  router.push({ name: "busqueda", query: { search: searchValue } });
}
onMounted(() => {
  if (search.value == true) {
    emit("activateSearch");
  }
});
</script>

<template>
  <div
    :class="search"
    class="absolute duration-200 w-full overflow-hidden z-40 bg-main-green border-t border-white text-rolex-green "
  >
    <form
      @submit.prevent="checkSearch()"
      class="w-full flex items-center justify-center h-20"
    >
      <input
        v-model="input"
        type="text"
        placeholder="Buscar"
        name="search"
        id=""
        class="w-11/12 h-1/2 rounded-full bg-[#909a90] px-6 placeholder:text-rolex-green/75"
      />
      <button>
        <font-awesome-icon
          :icon="['fas', 'arrow-right']"
          class="duration-200 -translate-x-6"
          @click="$emit('activateSearch')"
        />
      </button>
    </form>
    <div id="results" class="w-full flex flex-col items-center ">
      <h2 class="w-11/12">Resultados:</h2>
      <h2 v-if="input.length < 3" class="text-center w-full">
        Comienza a buscar
      </h2>
      <ul
        v-else-if="input.length >= 3 && suggestions.length > 0"
        class="w-11/12 pl-4"
      >
        <li
          v-for="item in suggestions"
          :key="item"
          class="list-disc cursor-pointer hover:underline"
        >
          <button @click="checkSearch(item.title)">
            {{ item.title }}
          </button>
        </li>
      </ul>
      <h2 v-else class="text-center w-full">No hay resultados</h2>
    </div>
  </div>
</template>



