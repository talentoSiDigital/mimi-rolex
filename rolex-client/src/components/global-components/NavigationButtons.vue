<script setup>
const { navigation, slideCounter, counter, colors} =
  defineProps([
    "navigation",
    "slide-counter",
    "counter",
    "colors"
  ]);


</script>

<template>
  <section class="flex flex-col justify-center items-center">
    <div id="rounded" v-if="navigation == 'solid-rounded'" class="flex gap-1">
      <div v-for="items in slideCounter" :key="items">
        <button
          :style="[counter == items - 1 ? colors.main : colors.mainAccent]"
          class="cursor-pointer border w-4 h-4 rounded-full duration-200"
          @click="$emit('goTo', items - 1)"
        ></button>
      </div>
    </div>

    <div id="rectangle" v-if="navigation == 'solid-rectangle'" class="flex gap-1">
      <div v-for="items in slideCounter" :key="items">
        <button
          :style="[counter == items - 1 ? colors.main : colors.mainAccent]"
          class="cursor-pointer border w-4 h-2 duration-200"
          @click="$emit('goTo', items - 1)"
        ></button>
      </div>
    </div>

    <div id="square" v-if="navigation == 'solid-square'" class="flex gap-1">
      <div v-for="items in slideCounter" :key="items">
        <button
          :style="[counter == items - 1 ? colors.main : colors.mainAccent]"
          class="cursor-pointer border w-3 h-3 duration-200"
          @click="$emit('goTo', items - 1)"
        ></button>
      </div>
    </div>

    <div
      id="border-rounded"
      v-if="navigation == 'outline-rounded'"
      class="flex gap-1"
    >
      <div v-for="items in slideCounter" :key="items">
        <button
          :style="[
            counter == items - 1 ? colors.main : 'background-color:transparent',
            colors.rounded,
          ]"
          class="cursor-pointer border w-4 h-4 rounded-full duration-200"
          @click="$emit('goTo', items - 1)"
        ></button>
      </div>
    </div>

    <div
      id="border-rectangle"
      v-if="navigation == 'outline-rectangle'"
      class="flex gap-1"
    >
      <div v-for="items in slideCounter" :key="items">
        <button
          :style="[
            counter == items - 1 ? colors.main : 'background-color:transparent',
            colors.rounded,
          ]"
          class="cursor-pointer border w-4 h-2 duration-200"
          @click="$emit('goTo', items - 1)"
        ></button>
      </div>
    </div>

    <div
      id="border-square"
      v-if="navigation == 'outline-square'"
      class="flex gap-1"
    >
      <div v-for="items in slideCounter" :key="items">
        <button
          :style="[
            counter == items - 1 ? colors.main : 'background-color:transparent',
            colors.rounded,
          ]"
          class="cursor-pointer border w-3 h-3 duration-200"
          @click="$emit('goTo', items - 1)"
        ></button>
      </div>
    </div>

    <div id="morph-bars" v-if="navigation == 'solid-morph-bars'" class="flex gap-1">
      <div v-for="items in slideCounter" :key="items">
        <button
          :class="[counter == items - 1 ? 'w-8' : ' w-4']"
          :style="[counter == items - 1 ? colors.main : colors.mainAccent]"
          class="cursor-pointer border h-3 rounded-lg duration-200"
          @click="$emit('goTo', items - 1)"
        ></button>
      </div>
    </div>

    <div
      id="border-morph-bars"
      v-if="navigation == 'outline-morph-bars'"
      class="flex gap-1"
    >
      <div v-for="items in slideCounter" :key="items">
        <button
          :class="[counter == items - 1 ? 'w-8' : ' w-4']"
          :style="[
            counter == items - 1 ? colors.main : 'background-color:transparent',
            colors.rounded,
          ]"
          class="cursor-pointer border h-3 rounded-lg duration-200"
          @click="$emit('goTo', items - 1)"
        ></button>
      </div>
    </div>
  </section>
</template>
