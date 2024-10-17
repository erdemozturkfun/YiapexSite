// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
 

  app:{
   
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@vueuse/motion/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  nitro:{prerender:{
    crawlLinks:true,
    routes
    : ["/sitemap.xml", "/robots.txt"],
  }},
  pinia: {
    storesDirs: ['./stores/**'],
  },
  sitemap:{
  
  },
  ssr:true
})