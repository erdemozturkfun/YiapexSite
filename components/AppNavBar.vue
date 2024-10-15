<script setup>
import { useTransStore } from "~/stores/transStore";
import { onBeforeRouteUpdate } from "#app";

const transStore = useTransStore();

onBeforeRouteUpdate((to, from) => {
	if (to.fullPath != "/") {
		console.log(to.fullPath);
		transStore.setTrans(false);
	} else {
		transStore.setTrans(true);
		console.log(to.fullPath);
	}
});
onMounted(() => {
	if (window.location.pathname != "/") {
		transStore.setTrans(false);
	}
});
</script>
<template>
    <div>
        <div class="fixed h-20 w-full z-20">
          <div class="flex  content-center w-full items-center bg-red-800 h-full transition justify-center" :class="{'bg-transparent':transStore.transparency, 'translate-y-2': transStore.transparency}">
            <div class="flex">
            <div class="rounded-full hover:bg-zinc-900 w-16 h-16 flex justify-center items-center transition" :class="{'bg-zinc-900':!transStore.transparency}">
            <img class="h-12 xl:w-12 bg-transparent    transition " src="/yiapex logo.svg"/>
          </div>
           <div class="flex flex-row items-center md:ml-96  shadow-2xl gap-x-10 outfit-links rounded-full bg-white px-4">
            <NuxtLink to="/" class=" transition hover:scale-110">Ana Sayfa</NuxtLink> <NuxtLink to="/about" class=" transition hover:scale-110">Hakkımızda</NuxtLink> <NuxtLink to="/team" class=" transition hover:scale-110">Ekibimiz</NuxtLink> <h1>İletişim</h1></div>
            
          </div>
          </div>
          
        </div>

      </div>
</template>