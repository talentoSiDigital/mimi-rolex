
<template>
    <header class="flex flex-col justify-center items-center text-neutral-700 h-fit mt-8 mb-6">
        <p>
            <slot name="sub">

            </slot>
        </p>
        <h1 class="text-2xl md:text-4xl text-center py-8 font-arial">
            <slot name="title">
    
            </slot>
            
        </h1>
        <p class="w-3/4 md:w-1/2 text-justify md:text-center font-normal font-arial">
            <slot name="text">
    
            </slot>
            
            
        </p>
    </header>
</template>


