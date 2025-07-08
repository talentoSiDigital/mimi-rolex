<script setup>
import { useSwipe, useWindowSize } from "@vueuse/core";
import { computed, onMounted, onUpdated, ref, useTemplateRef, watch } from "vue";
import NavigationButtons from "./NavigationButtons.vue";

const {
  itemsToShow,
  buttons,
  navigation,
  breakpoints,
  autoPlay,
  gap,
  animationType,
  stagger,
  mainColor,
  accentColor,
  infinite
} = defineProps([
  "items-to-show",
  "buttons",
  "navigation",
  "breakpoints",
  "auto-play",
  "gap",
  "animation-type",
  "stagger",
  "main-color",
  "accent-color",
 "infinite"
]);
// GLOBAL VARIABLES
const { width } = useWindowSize();
const element = useTemplateRef("element");
const { isSwiping, direction } = useSwipe(element);
let counter = defineModel();
const updated = ref(true)
const infinity = computed(()=>{
  return infinite == undefined ? false : infinite
})

// COLOR MODULE

function isValidHexaCode(str, type) {
  const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  const defaultColors = {
    main: "#2c2c2c",
    accent: "#c9c9c9",
  };

  if (str == null || !regex.test(str)) {
    return defaultColors[type] || null;
  }

  return str;
}

let colors = {
  main: `background-color:${isValidHexaCode(mainColor, "main")}`,
  rounded: `border-color:${isValidHexaCode(mainColor, "main")}`,
  mainAccent: `background-color:${isValidHexaCode(accentColor, "accent")}`,
  fill:`fill:${isValidHexaCode(mainColor, "main")}`
};



// PROPS HANDLING

const innerWidth = ref("w-0");
const itemToShow = ref(itemsToShow);
const finalWidth = ref(0);
const gapProp = ref(gap ? gap : "10");
const gapClass = ref(`gap: ${gapProp.value}px`);
const moveTranslate = ref("transform:translateX(0px)");
const translation = ref("");
const slideElements = ref(0);
const duration = ref("duration-200");


// BREAKPOINTS MODULE
function searchBreakpoints(keys){
  let pos = 0;
  for (let index = 0; index < keys.length; index++) {
    if (keys[index] <= width.value) {
      pos = index;
    }
  }
  return keys[pos];
}
function checkBreakpoint() {
  let keys = [];
  let values = [];
  for (const [key, value] of Object.entries(breakpoints)) {
    keys.push(parseInt(key));
    values.push(parseInt(value));
  }
  let actualPosition = searchBreakpoints(keys);
  itemToShow.value = breakpoints[actualPosition];
}

// SLIDER MOVE MODULE
// --moveAnimation(int){ animate slider enter when component is mounted }
function moveAnimation(miliseconds) {
  let count = 0;
  const interval = setInterval(() => {
    if(element.value){

      if (count < itemToShow.value) {
        element.value.children[count].classList.add(
          animation.value[animationName.value][1]
        );
        element.value.children[count].classList.remove(
          animation.value[animationName.value][0]
        );
        count++;
      } else {
        count = 0;
        clearInterval(interval);
      }
    }else{
      clearInterval(interval)
    }
  }, miliseconds);
}
// --goToAnimate{ handler for animate each item, if the item is visible or not visible}
function goToAnimate() {
  let index = 0;

  const goToInterval = setInterval(() => {
    if (index >= counter.value && index < itemToShow.value + counter.value) {
      element.value.children[index].classList.remove(
        animation.value[animationName.value][0]
      );
      element.value.children[index].classList.add(
        animation.value[animationName.value][1]
      );
    } else {
      element.value.children[index].classList.remove(
        animation.value[animationName.value][1]
      );
      element.value.children[index].classList.add(
        animation.value[animationName.value][0]
      );
    }

    index++;

    if (index == slideElements.value) {
      clearInterval(goToInterval);
    }
  }, 25);
}
// -- moveSlider(string){ move to the desired side  }
function moveSlider(side) {
  let aux = false
  if (side == "right") {
    if (counter.value < slideElements.value - itemToShow.value) {
      counter.value++;
      goToAnimate();
      aux=true
    } 
    else {

      if(infinity.value == true){

        counter.value = 0;
        goToAnimate();
      }
      aux=false
    }
  } else {
    if (counter.value != 0) {
      counter.value--;
      goToAnimate();
      aux=true
    }
     else {
      aux=false
      if(infinity.value == true){

        counter.value = slideElements.value - itemToShow.value;
        goToAnimate();
      }
    }
  }
  if(aux == true) {
    translation.value =
      (innerWidth.value + parseInt(gapProp.value)) * counter.value;
    moveTranslate.value = "transform:translateX(" + translation.value + "px)";
  }

}
// goTo(int){ navigation handler }
function goTo(pos) {
  counter.value = pos;
  translation.value =
    (innerWidth.value + parseInt(gapProp.value)) * counter.value;
  moveTranslate.value = "transform:translateX(" + translation.value + "px)";
  goToAnimate();
}


function autoplay() {
  setInterval(() => {
    moveSlider("right");
  }, autoPlay);
}

if (counter.value == undefined) {
  counter = ref(0);
}
if (itemToShow.value == undefined) {
  checkBreakpoint();
}

if (autoPlay) {
  autoplay();
}

// WATCHERS MODULE

watch(isSwiping, () => {
  if (isSwiping.value == true) {
    if (direction.value == "right") {
      moveSlider("left");
    } else {
      moveSlider("right");
    }
  }
});

watch(counter, () => {
  translation.value =
    (innerWidth.value + parseInt(gapProp.value)) * -counter.value;
  moveTranslate.value = "transform:translateX(" + translation.value + "px)";
});

watch(width, () => {
  checkBreakpoint();
});


// ANIMATION MODULE
const animationName = ref(animationType);
if (animationType == undefined) {
  animationName.value = "none";
}

const animation = ref({
  translateUp: ["translate-up-off", "translate-up-on"],
  translateDown: ["translate-down-off", "translate-down-on"],
  scale: ["scale-off", "scale-on"],
  rotate: ["circle-off", "circle-on"],
  none: ["none", "none"],
});
const correction = animation.value[animationName.value][0];

// Mounted module
onMounted(() => {
  slideElements.value = element.value.childElementCount;
  innerWidth.value = element.value.children[0].offsetWidth;

  finalWidth.value =
    innerWidth.value * itemToShow.value +
    gapProp.value * (itemToShow.value - 1);
  for (let index = 0; index < element.value.children.length; index++) {
    element.value.children[index].classList.add(correction);
  }
  moveAnimation(stagger ? stagger : 100);
});

onUpdated(() => {
  slideElements.value = element.value.childElementCount;
  innerWidth.value = element.value.children[0].offsetWidth;
  finalWidth.value =
    innerWidth.value * itemToShow.value +
    gapProp.value * (itemToShow.value - 1);
    
});
</script>

<template>
  <section class="flex flex-col justify-center items-center">
    <div class="flex items-center gap-4">
      <button
        v-if="buttons"
        class="block w-10 p-2 translate-x-14 relative z-1"
        @click="moveSlider('left')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          :style="colors.fill"
          class="w-full cursor-pointer hover:scale-125 duration-200"
          
        >
          <path
            d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"
          />
        </svg>
      </button>

      <section
        :style="`width: ${finalWidth}px`"
        class="h-fit py-10 overflow-hidden"
      >
        <div
          ref="element"
          :style="[gapClass, moveTranslate]"
          :class="duration"
          class="flex justify-start w-fit ease-in-out relative"
        >
          <slot></slot>
        </div>
      </section>

      <button
        v-if="buttons"
        class="block p-2 w-10 -translate-x-14 relative z-1"
        @click="moveSlider('right')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          :style="colors.fill"
          class="w-full cursor-pointer hover:scale-125  duration-200"
        >
          <path
            d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"
          />
        </svg>
      </button>
    </div>



    <NavigationButtons v-if="navigation && slideElements !=0" :navigation="navigation" :slide-counter="slideElements - itemToShow + 1" :counter="counter" @go-to="goTo" :colors="colors"/>
    
  </section>
</template>


<style scoped>
:slotted(.translate-up-off) {
  transform: translateY(120%);
  opacity: 0;
}

:slotted(.translate-up-on) {
  animation: showUp 0.7s ease-in-out;
}

:slotted(.translate-down-off) {
  transform: translateY(-120%);
  opacity: 0;
}
:slotted(.translate-down-on) {
  animation: showDown 0.7s ease-in-out;
}

:slotted(.scale-off) {
  transform: scale(0);
  opacity: 0;
}
:slotted(.scale-on) {
  animation: scale 0.3s ease-in-out;
}
:slotted(.circle-off) {
  transform: rotate(360deg) scale(0);

  opacity: 0;
}
:slotted(.circle-on) {
  animation: rotate 0.3s ease-in-out;
}

@keyframes showUp {
  0% {
    transform: translateY(2000%);
    opacity: 0;
  }
  70% {
    transform: translateY(-20%);
  }
  90% {
    transform: translateY(5%);
    opacity: 1;
  }
  100% {
    transform: translateY(0%);
  }
}

@keyframes showDown {
  0% {
    transform: translateY(-2000%);
    opacity: 0;
  }
  70% {
    transform: translateY(20%);
  }
  90% {
    transform: translateY(-5%);
    opacity: 1;
  }
  100% {
    transform: translateY(0%);
  }
}

@keyframes scale {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  70% {
    opacity: 1;
  }

  100% {
    transform: scale(1);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(360deg) scale(0);
    opacity: 0;
  }

  100% {
    transform: rotate(0deg) scale(1);
  }
}
</style>