<script setup>
defineProps({
	
	name: String,
	text: String,
});
</script>

<template>
<div class="w-full">

    <div class="flex px-20 w-full gap-x-24"><div>
    <slot>

    </slot>    
    </div>
        <div>

        </div>
    </div>
</div>

</template>