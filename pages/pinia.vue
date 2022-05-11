<template>
  <div class="pinia">
    <van-cell-group>
      <van-cell title="数字" :value="counter.number" />
      <van-cell title="文本" :value="counter.myRef" />
    </van-cell-group>
    <div class="line"></div>
    <van-field v-model="counter.myRef" label="改变文本" placeholder="admin" />
    <div class="line"></div>
    <van-button @click="counter.increment()">+1 number</van-button>
  </div>
</template>
<script  lang="ts">
import { useCounter } from '~/stores/counter'

export default {
  setup() {
    const counter = useCounter()
    return {
      counter,
    }
  },
}
</script>
<style scoped lang='less'>
.pinia {
  .line {
    height: 20px;
  }
}
</style>