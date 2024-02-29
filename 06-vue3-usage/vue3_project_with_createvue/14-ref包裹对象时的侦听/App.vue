<script>
import {ref, watch} from "vue";

export default {
  name: 'App',
  setup() {
    let counter = ref(1)

    let data = ref({
      a: {
        b: {
          c: {
            counter: 1
          }
        }
      }
    })

    // oldValue拿不到
    // deep配置有效
    /* watch(data.value, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    }, {deep: false}) */

    // data是RefImpl对象，支持deep配置的。默认是没有开启深度监视的
    watch(data, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    }, {deep: true})

    // console.log(counter.value)

    // 错误的
    // watch(counter.value, (newValue, oldValue) => {})

    // 可以监视到
    /* watch(() => counter.value, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    }) */

    return {counter, data}
  }
}
</script>

<template>
  <h2>{{ counter }}</h2>
  <button @click="counter++">点我加1</button>
  <hr>
  <h2>{{ data.a.b.c.counter }}</h2>
  <button @click="data.a.b.c.counter++">点我加1</button>
</template>
