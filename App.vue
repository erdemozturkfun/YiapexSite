<script setup>
useHead({
	title: "Yiapex'25 Websitesi",
	link: [
		{ rel: "icon", type: "image/png", href: "favicon.ico" },
		{ rel: "canonical", href: "https://yiapexsite.pages.dev/" },
	],
	meta: [{ name: "googlebot-news", content: "nosnippet" }],
});
useLoadingIndicator({
	duration: 2000,
	throttle: 200,
});
useSeoMeta({
	title: "YİAPEX'25 Websitesi",
	ogTitle: "YİAPEX",
	description:
		"İnovatif şirketlerin inovatif insanlarla buluştuğu etkinlik. YİAPEX",
	ogDescription:
		"İnovatif şirketlerin inovatif insanlarla buluştuğu etkinlik. YİAPEX",
	ogImage: "/fas.png",
	twitterCard: "summary_large_image",
	twitterSite: "@yiafl_yiapex",
	twitterDescription:
		"İnovatif şirketlerin inovatif insanlarla buluştuğu etkinlik.",
	twitterTitle: "YIAPEX",
	twitterImage:
		"https://pbs.twimg.com/media/FwV_3WxWAAIFW-w?format=jpg&name=large",

	ogLocale: "tr_TR",
	robots: "notranslate",
});
</script>
<style>
  
  @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&family=Outfit:wght@100..900&display=swap');
  
.outfit-links {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
<template>


    <div class=" ">
	<Head>
		<Meta name="google-site-verification" content="_CU3VKmBxrM1gcZxUvewmQ2wK1s6BpdTZZDuMam0VVs" />
	</Head>
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
      
    </div>
</template>

