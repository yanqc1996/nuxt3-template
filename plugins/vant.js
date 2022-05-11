// https://github.com/youzan/vant-demo/blob/master/vant/nuxt3/plugins/vant.js
import { defineNuxtPlugin } from '#app'
import { Row, Col, Icon, Image, Cell, CellGroup, Button } from 'vant'

// 目前在 nuxt 中无法按需引入样式，因此采用手动引入的方式
import 'vant/lib/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Row).use(Col).use(Image).use(Icon).use(Cell).use(CellGroup).use(Button)
})
