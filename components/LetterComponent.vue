<script setup>
defineProps({
	title: String,
	content: String,
});
</script>

<template>
    <div class="w-full justify-center flex pt-20">
        <div class="w-1/2">
            <div><h1 class=" text-6xl text-white">{{ title }}</h1></div>
            <div class="pt-8 flex flex-col">
                <pre class="text-xl whitespace-pre-wrap font-sans text-white">{{ content }}</pre> 
                <slot>
                    
                </slot>
            </div>
        </div>
    </div>
</template>