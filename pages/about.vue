<script setup>
import TeamMembers from "~/components/TeamMembers.vue";
</script>
<template>

    <div class="bg-gradient-90 via-red-800 from-zinc-900 from-25% via-50% to-zinc-900 to-75%">
    <div class="h-48"></div>
      <div class="flex flex-col items-center gap-y-32">
  
        
    
      <div class="flex flex-row justify-center gap-x-16">
        <TeamMembers name="Masal Kabataş" title-color="bg-amber-700" status="Akademi Başkanı" insta-link="https://www.instagram.com/masalkabatas/" :rotation-delay="1000">
          <img src="/fas.png" class="group-hover/item:invisible rounded-3xl group-hover/item:opacity-0 delay-300 " height="200 " width="200"/>
        </TeamMembers>

        <TeamMembers name="Şevval Büyükbaş" insta-link="https://www.instagram.com/sevv.albykbs/" title-color="bg-amber-700" status="Akademi Başkanı" :rotation-delay="1000">
          <img src="/fas.png" class="group-hover/item:invisible rounded-3xl group-hover/item:opacity-0 delay-300 " height="200 " width="200"/>
        </TeamMembers>
      </div>
          
      <div class="flex flex-row justify-center gap-x-16">
        <TeamMembers name="Eren Kaya" title-color="bg-sky-600" status="IT Başkanı" insta-link="https://www.instagram.com/erenkaya1025/" :rotation-delay="200">
          <img src="/fas.png" class="group-hover/item:invisible rounded-3xl group-hover/item:opacity-0 delay-300 " height="200" width="200"/>
        </TeamMembers>
        <TeamMembers name="Erdem Öztürk" title-color="bg-blue-900" status="Website Tasarımcısı" :rotation-delay="200">
          <img src="/fas.png" class="group-hover/item:invisible rounded-3xl group-hover/item:opacity-0 delay-300 " height="200" width="200"/>
        </TeamMembers>
        <TeamMembers name="Deniz Özten" title-color="bg-sky-600" status="IT Başkanı"  :rotation-delay="200">
          <img src="/fas.png" class="group-hover/item:invisible rounded-3xl group-hover/item:opacity-0 delay-300 " height="200" width="200"/>
        </TeamMembers>
      </div>
      <div class="flex flex-row justify-center max-md:gap-x-4 md:gap-x-16">
        <TeamMembers name="Melike Neva Gümüş" title-color="bg-violet-950" status="PR Başkanı" insta-link="https://www.instagram.com/evaneva.7/" :rotation-delay="1000">
          <img src="/fas.png" class="group-hover/item:invisible rounded-3xl group-hover/item:opacity-0 delay-300 " height="200 " width="200"/>
        </TeamMembers>
        <TeamMembers name="Hayat Çalışkan" title-color="bg-red-900" status="Organizasyon Başkanı" insta-link="https://www.instagram.com/hayatcaliiskan/" :rotation-delay="1000">
          <img src="/fas.png" class="group-hover/item:invisible rounded-3xl group-hover/item:opacity-0 delay-300 " height="200 " width="200"/>
        </TeamMembers>
        <TeamMembers name="Sıla Demirel" title-color="bg-rose-800" status="Sosyal Medya Başkanı" insta-link="https://www.instagram.com/sowil00/" :rotation-delay="1000">
          <img src="/fas.png" class="group-hover/item:invisible rounded-3xl group-hover/item:opacity-0 delay-300 " height="200 " width="200"/>
        </TeamMembers>
      </div>
      <div class="flex flex-row justify-center gap-x-16">

     
        <TeamMembers name="Defne Özdemir" title-color="bg-lime-600" insta-link="https://www.instagram.com/dfnzdemir/" status="Finans Başkanı" :rotation-delay="1000">
          <img src="/fas.png" class="group-hover/item:invisible rounded-3xl group-hover/item:opacity-0 delay-300 " height="200 " width="200"/>
        </TeamMembers>
        <TeamMembers name="Duru Ayhan" title-color="bg-pink-500" status="Lojistik Başkanı" insta-link="https://www.instagram.com/dduru.ayhan139/" :rotation-delay="1000">
          <img src="/fas.png" class="group-hover/item:invisible rounded-3xl group-hover/item:opacity-0 delay-300 " height="200 " width="200"/>
        </TeamMembers>
      </div>
        <div class="flex flex-row justify-center gap-x-16">
          <TeamMembers name="Ada Orhan" title-color="bg-emerald-700" status="Etkinlik Başkanı" insta-link="https://www.instagram.com/adaorhn/" :rotation-delay="1000">
          <img src="/fas.png" class="group-hover/item:invisible rounded-3xl group-hover/item:opacity-0 delay-300 " height="200 " width="200"/>
        </TeamMembers>  
        <TeamMembers name="Enes Kerem Aydın" title-color="bg-emerald-700" status="Etkinlik Başkanı" :rotation-delay="1000">
          <img src="/fas.png" class="group-hover/item:invisible rounded-3xl group-hover/item:opacity-0 delay-300 " height="200 " width="200"/>
        </TeamMembers>
        </div>
        <div class="h-40 w-20 "><h1 class="text-white">Hi</h1></div>
        <div class="h-40 w-20 "><h1 class="text-white">Hi</h1></div>
      </div>
    </div>
</template> 