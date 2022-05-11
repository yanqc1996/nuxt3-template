import { ref, Ref } from 'vue'
import { defineStore } from 'pinia'

export interface CounterInterface {
  number: number
  myRef: Ref<string>
}

export const useCounter = defineStore('counter', {
  state: (): CounterInterface => ({
    number: 5,
    myRef: ref('admin'),
  }),
  actions: {
    increment() {
      this.number++
    },
  },
})
