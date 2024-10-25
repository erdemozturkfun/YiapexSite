<script setup>
import { ref, onBeforeMount } from "vue";
import { useTransStore } from "~/stores/transStore";
const store = useTransStore();
const vidRef = ref();
const scrollListener = (e) => {
	const vidheight = vidRef.value.scrollHeight;
	if (vidheight) {
		store.setTrans(!(window.scrollY >= vidheight));
		console.log(window.scrollY >= vidheight);
	}
};
onBeforeMount(() => {
	addEventListener("scroll", scrollListener);
});
onBeforeUnmount(() => {
	removeEventListener("scroll", scrollListener);
});
</script>
<template>
<div class="h-full">
<div class="flex h-full">
    <video  class=" -z-10" ref="vidRef" id="bgvideo"  src="/titlescreen.mp4" autoplay loop/>
	<div class=" inset-0 absolute text-center top-0 w-full h-96 md:pt-96	max-sm:pt-40">
		<h1 
		v-motion
		:initial="{scale:0, opacity:0
		}"
		:visible="{scale:1, opacity:1}"
		:duration="300"
		class="md:text-9xl max-sm:text-4xl text-white drop-shadow-2xl font-bold" 
		>Yiapex'25</h1>
	</div>
</div>
    <div class="bg-gradient-90 animate-gradRotate transition from-neutral-800 to-zinc-900">
		<Paragraph/>
        <h1 class="h-60"/>
		<h1 class="h-60"/>
		<h1 class="h-60"/>
		<h1 class="h-60"/>
    </div>
</div>
</template>