// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  site:  {
    url:"https://yiapexsite.pages.dev",
    name:"Yiapex'25 Websitesi"
  },

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
  pinia: {
    storesDirs: ['./stores/**'],
  },
  ssr:true
})