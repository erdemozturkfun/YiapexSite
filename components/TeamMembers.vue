<script setup>
defineProps({
	name: String,
	text: String,
});
</script>

<template>
<div class="w-full">

    <div class=" w-full  px-20">    
    <div  class="shadow-xl  px-10 flex md:flex-row flex-col gap-y-12 py-10 xl:gap-x-24 bg-zinc-800 rounded-xl  " v-motion
    :initial="{opacity:0, x:200}"
    :visibleOnce="{opacity:1, x:0}"
    :duration="1000"
    :delay="200">
        <slot class="">

        </slot>
        <div class="basis-1/2">
            <div class="text-center"><h1 class="xl:text-5xl font-bold">{{ name }}</h1></div>
            <div class="mt-10"><h1>{{ text }}</h1></div>
        </div>
   </div>
    </div>
</div>

</template>