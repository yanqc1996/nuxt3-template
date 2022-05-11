// https://github.com/element-plus/element-plus-nuxt-starter
import { defineNuxtPlugin } from '#app'
import { ElButton, ElContainer, ElAside, ElMain, ElFooter } from 'element-plus'

// 目前在 nuxt 中无法按需引入样式，因此采用手动引入的方式
import 'element-plus/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElButton).use(ElContainer).use(ElAside).use(ElMain).use(ElFooter)
})
