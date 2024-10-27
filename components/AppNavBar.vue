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
          <div class="flex  content-center w-full items-center bg-red-800 h-full transition-all justify-center duration-200"  :class="{'bg-transparent':transStore.transparency, 'translate-y-2': transStore.transparency}">
            <div class="flex">
            <div class="rounded-full hover:bg-zinc-900 w-16 h-16 flex justify-center items-center transition duration-700 delay-200" :class="{'bg-zinc-900':!transStore.transparency}">
            <img class="h-12 xl:w-12 bg-transparent    transition " src="/yiapexlogo.svg"/>
          </div>
           <div class="flex flex-row items-center md:ml-96  shadow-2xl gap-x-10 outfit-links rounded-full bg-white px-4">
             <NuxtLink to="/" class=" transition-all hover:scale-110">Ana Sayfa</NuxtLink> <div class="flex flex-col py-4 bg-gradient-15 from-violet-900 to-pink-600 rounded-full px-4  group  transition-all hover:scale-105 cursor-pointer"><h1 class="text-white group-hover:scale-110">YİAPEX</h1>
              <ul class="flex-col group-hover:visible invisible absolute mt-8 bg-white py-4 rounded-sm  px-6 "><li>Komiteler</li><li>Sponsorlar </li></ul></div> <NuxtLink to="/about" class=" transition-all hover:scale-110">Hakkımızda</NuxtLink>  <NuxtLink to="/contact" class=" transition-all hover:scale-110">İletişim</NuxtLink></div>
            
          </div>
          </div>
          
        </div>

      </div>
</template>