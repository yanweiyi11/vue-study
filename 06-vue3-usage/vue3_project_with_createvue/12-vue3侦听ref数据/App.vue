<script>
import {ref, watch} from "vue";

export default {
  name: 'App',
  // vue3当中如何进行属性的监视/侦听
  // 组合式API：watch
  setup() {
    let counter = ref(1)
    let counter2 = ref(100)

    // 被监视的数据需要具有响应式
    /* watch(counter, (newVal, oldVal) => {
      console.log('counter', newVal, oldVal)
    }, {immediate: true, deep: true})

    watch(counter2, (newVal, oldVal) => {
      console.log('counter2', newVal, oldVal)
    }) */

    // 采用数组的方式一次性监视多个属性
    watch([counter, counter2], (newVal, oldVal) => {
      console.log('counter2', newVal, oldVal)
    })
    
    return {counter, counter2}
  }
}
</script>

<template>
  <h2>{{ counter }}</h2>
  <button @click="counter++"> counter plus one</button>
  <br><br>
  <h2>{{ counter2 }}</h2>
  <button @click="counter2++">counter2 plus one</button>
</template>
