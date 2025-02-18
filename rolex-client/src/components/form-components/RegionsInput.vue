<script setup>
import regions from "../../data/regions.json";
const props = defineProps(["country"]);
const region = defineModel();
</script>

<template>
  <select v-if="props.country == ''" name="regions">
    <option value="" default>--Escoja un país--</option>
  </select>

  <select v-else name="regions" v-model="region">
    <option value="">--Escoja un país--</option>
    <option
      v-for="item in regions[props.country].regions"
      :key="item"
      :value="item.name"
    >
      {{ item.name }}
    </option>
  </select>
</template>



