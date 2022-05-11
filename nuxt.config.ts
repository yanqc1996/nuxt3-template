import { defineNuxtConfig } from 'nuxt'

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
        content: '基于Nuxt3的demo',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Nuxt3 Vue3 Vant TS',
      },
    ],
  },
  // build modules
  buildModules: ['@pinia/nuxt'],
})
