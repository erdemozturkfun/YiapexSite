<script setup>
import AppNavBar from "~/components/AppNavBar.vue";
</script>

<template>
    <div>
    <AppNavBar videoRef="vidRef"/>
    
    <slot/>
	<AppFooter/>
</div>
</template>