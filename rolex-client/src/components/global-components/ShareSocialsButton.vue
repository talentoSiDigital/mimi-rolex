<script setup>
const {social} = defineProps(["social"])

const currentUrl = window.location.href

const socialsLinks = {
    "facebook": {
        "link": "https://www.facebook.com/sharer.php?u=",
        "color1": "bg-[#1877f2]",
        "color2": "bg-[#16509c]",
        "iconColor": "text-white",
        "icon": "facebook-f"


    },
    "x": {
        "link": "https://x.com/share?url=",
        "color1": "bg-[#0f1419]",
        "color2": "bg-[#2d3f52]",
        "iconColor": "text-white",
        "icon": "x-twitter"


    },
    "pinterest": {
        "link": "http://pinterest.com/pin/create/button/?url=",
        "color1": "bg-[#e7082a]",
        "color2": "bg-red-200",
        "iconColor": "text-black",
        "icon": "pinterest"

    },


}


</script>

<template>
    <a :href="`${socialsLinks[social].link}${currentUrl}`" target="_blank" class="text-md w-fit  flex items-center h-7 ">
        <font-awesome-icon :icon="['fab', socialsLinks[social].icon]" :class="[socialsLinks[social].color2, socialsLinks[social].iconColor]" class="px-4 py-1 rounded-l text-xl"/>
        <p  class="capitalize text-white px-4 rounded-r h-full" :class="socialsLinks[social].color1">{{ social }}</p>

    </a>
</template>

