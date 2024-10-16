<script setup>
defineProps({
	name: String,
	text: String,
	titleColor: String,
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
        <div v-motion 
        :initial="{opacity:0, x:-300}"
        :visibleOnce="{opacity:1,x:0}"
        :delay="1000"
        :duration="500"  class="basis-1/2" >
            <div class="text-center" ><h1 class="xl:text-5xl font-bold outfit-links inline-block text-transparent bg-clip-text leading-loose h-16" :class="titleColor">{{ name }}</h1></div>
            <div class="mt-4 "><pre class="outfit-links text-white leading-normal pre">{{ text }}</pre></div>
        </div>
   </div>
    </div>
</div>

</template>