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
		<LetterComponent title="Yiapex'e hoş geldin!" content="Değişim yaratmak isteyenler burada buluşuyor! Yaratıcılığını serbest bırak, yenilikçi fikirlerini hayata geçir ve geleceğin liderlerinden biri ol! Yiapex İnovasyon Kampı, sınırları zorlamak ve dünyayı dönüştürecek çözümler üretmek isteyen girişimciler, öğrenciler ve profesyoneller için eşsiz bir fırsat sunuyor.">
			<h1 class="font-bold text-white text-2xl pt-2">Bu kamp boyunca:</h1>
			<ul class="text-xl list-disc text-white list-inside pt-4">
				<li><b>Yaratıcı Düşünme</b> teknikleriyle sorunlara yeni yaklaşımlar geliştirecek,</li>
				<li><b>Mentörlük</b> desteğiyle projeni somut bir adım ileri taşıyacak,</li>
				<li><b>Ekip çalışması</b> ile işbirliğini ve liderlik becerilerini güçlendirecek,</li>
				<li><b>Gerçek dünyadan vakalar</b> üzerinde çalışarak inovasyon dünyasına adım atacaksın!</li>
			</ul>
			<h1 class="font-bold text-white text-2xl pt-2">Sana sunduklarımız</h1>
			<ul class="text-xl list-disc text-white list-inside pt-4">
				<li v-motion
				:initial="{x:-100, opacity:0}"
				:visible-once="{x:0,  opacity:1}"
				:delay="250"
				:duration="500" >İlham verici konuşmacılar ve liderlerle tanışma fırsatı</li>
				<li v-motion
				:initial="{x:-100, opacity:0}"
				:visible-once="{x:0,  opacity:1}"
				:delay="500"
				:duration="500"
				 >Network ağını genişletme şansı,</li>
				
				<li v-motion
				:initial="{x:-100, opacity:0}"
				:visible-once="{x:0,  opacity:1}"
				:delay="750"
				:duration="500" >Türkiye'nin yeni ve globalleşen şirketleriyle işbirliği yapma fırsatı</li>
				<li v-motion
				:initial="{x:-100, opacity:0}"
				:visible-once="{x:0,  opacity:1}"
				:delay="1200"
				:duration="500"  class="font-bold">Ve projelerinle fark yaratma fırsatı!</li>
			</ul>
			<h1 class="pt-8 text-white text-2xl">Sen de sınırların ötesine geçmeye ve geleceği şekillendirmeye hazırsan, <b>Yiapex İnovasyon Kampı</b> seni bekliyor!</h1>
			<h1 class="pt-8 text-white text-2xl font-black">Hayal et, tasarla, uygula ve fark yarat!</h1>
		</LetterComponent>
        <h1 class="h-60"/>
		<h1 class="h-60"/>
		<h1 class="h-60"/>
		<h1 class="h-60"/>
    </div>
</div>
</template>