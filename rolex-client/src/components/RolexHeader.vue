
<template>
    <header class="flex flex-col justify-center items-center text-neutral-700 h-fit mt-8 mb-6">
        <p>
            <slot name="sub">

            </slot>
        </p>
        <h1 class="text-4xl text-center py-8 tracking-wider">
            <slot name="title">
    
            </slot>
            
        </h1>
        <p class="w-1/2 text-center font-normal">
            <slot name="text">
    
            </slot>
            
            
        </p>
    </header>
</template>


