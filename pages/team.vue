<script setup>
import TeamMembers from "~/components/TeamMembers.vue";

const template = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed convallis metus. Sed pellentesque lorem sit amet vulputate pellentesque. Curabitur velit sem, suscipit tincidunt sagittis non, ultrices vel justo. Phasellus egestas cursus turpis, et varius velit. Nam eget vulputate orci, id sodales leo. Suspendisse maximus in lectus in vulputate. Aenean pretium venenatis sapien vel imperdiet.

Phasellus interdum libero non lacinia euismod. Maecenas ultricies a ipsum eget tempor. Etiam varius cursus commodo. Donec pharetra odio dictum ex porttitor eleifend. Sed mollis sodales lacus, quis volutpat urna molestie sit amet. Sed sed auctor nunc. Etiam viverra dui odio, nec egestas turpis convallis non. Quisque feugiat sollicitudin ipsum, vitae ornare ligula tincidunt vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur at pretium enim. `;
</script>
<template>
    <div class="h-full bg-gradient-90 animate-gradRotate transition from-neutral-800 to-zinc-900 pb-20  ">
        <div class="h-48"/>
        <div class="flex flex-col gap-y-16">
        <TeamMembers  name="Hey!" :text=template>
       <div class=" flex max-xl:flex-col md:basis-1/2 justify-center xl:flex-row gap-x-12">
        <img src="/fas.png" height="200" width="200" class="rounded-3xl   object-contain">
        <img src="/fas.png" height="300" width="300" class="rounded-3xl object-contain ">
       </div>
        </TeamMembers>
        <TeamMembers >
            <img src="/fas.png" height="300" width="300" class="rounded-3xl">
        </TeamMembers>
        <TeamMembers >
            <img src="/fas.png" height="300" width="300" class="rounded-3xl">
        </TeamMembers>
        <TeamMembers >
            <img src="/fas.png" height="300" width="300" class="rounded-3xl">
        </TeamMembers>
    </div>
    </div>
</template>