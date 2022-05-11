import { defineNuxtConfig } from 'nuxt'
const lifecycle = process.env.npm_lifecycle_event
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // meta
  meta: {
    title: 'Nuxt 3 Template',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '基于Nuxt3的demo,Vue3/TS学习，Element_Plus UI',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Nuxt3 Vue3 Element_Plus TS',
      },
    ],
    script: [
      {
        src: 'https://hm.baidu.com/hm.js?60aca0cd89f3483306cc8e7e18dc6795',
        async: true,
        defer: true,
      },
    ],
  },
  // build modules
  buildModules: ['@pinia/nuxt'],
  // build
  build: {
    transpile: lifecycle === 'build' || lifecycle === 'generate' ? ['element-plus'] : [],
  },
})
