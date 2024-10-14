<script setup>
import AppNavBar from "~/components/AppNavBar.vue";
import { onMounted, ref } from "vue";
const isHome = ref();
onMounted(() => {
	if (document.location == "http://localhost:3000") {
		isHome.value = true;
	}
});
const vidRef = ref();
const updateNav = (a) => {
	vidRef.value = a;
	console.log(vidRef.value);
};
</script>

<template>
    <div>
    <AppNavBar videoRef="vidRef"/>
    
    <slot/>
	<AppFooter/>
</div>
</template>