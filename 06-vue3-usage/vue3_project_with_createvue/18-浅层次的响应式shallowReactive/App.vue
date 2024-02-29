<script>
import {reactive, shallowReactive} from "vue";

export default {
  name: 'App',
  setup() {
    // shallowReactive 只有第一层有响应式
    let data = shallowReactive({
      counter2: 100,
      a: {
        b: {
          c: {
            counter: 1
          }
        }
      }
    })

    return {data}
  }
}
</script>

<template>
  <h2>{{ data.a.b.c.counter }}</h2>
  <button @click="data.a.b.c.counter++">点我加1</button>
  <hr>
  <h2>{{ data.counter2 }}</h2>
  <button @click="data.counter2++">点我加1</button>
</template>
