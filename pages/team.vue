<script setup>
import TeamMembers from "~/components/TeamMembers.vue";

const template = `Eren Kaya Eren KayaEren KayaEren KayaEren KayaEren KayaEren KayaEren KayaEren KayaEren Kaya
Eren KayaEren KayaEren KayaEren KayaEren Kaya       

Eren KayaEren KayaEren KayaEren Kaya
Eren KayaEren KayaEren Kaya`;
</script>
<template>
    <div class="h-full bg-gradient-90 animate-gradRotate transition from-neutral-800 to-zinc-900 pb-20  overflow-hidden">
        <div class="h-48"/>
        <div class="flex flex-col gap-y-16">
        <TeamMembers  name="Eren Kaya" :text=template title-color=" bg-amber-800 ">
       <div class=" flex max-xl:flex-col md:basis-1/2 justify-center xl:flex-row gap-x-12">
        <img src="/fas.png" height="200" width="200" class="rounded-3xl   object-contain">
        <img src="/fas.png" height="300" width="300" class="rounded-3xl object-contain ">
       </div>
        </TeamMembers>
        <TeamMembers  name="Hayat Çalışkan" title-color="bg-red-900">
            <div class=" flex max-xl:flex-col md:basis-1/2 justify-center xl:flex-row gap-x-12">
            <img src="/fas.png" height="300" width="300" class="rounded-3xl">
        </div>
        </TeamMembers>
        <TeamMembers name="Duru Ayhan" title-color="bg-pink-500">
            <div class=" flex max-xl:flex-col md:basis-1/2 justify-center xl:flex-row gap-x-12">
            <img src="/fas.png" height="300" width="300" class="rounded-3xl">
        </div>
        </TeamMembers>
        <TeamMembers >
            <img src="/fas.png" height="300" width="300" class="rounded-3xl">
        </TeamMembers>
    </div>
    </div>
</template>