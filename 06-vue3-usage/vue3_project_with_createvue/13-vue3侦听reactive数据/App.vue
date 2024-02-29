<script>
import {reactive, watch} from "vue";

export default {
  name: 'App',
  setup() {
    let data = reactive({
      counter1: 1,
      a: {
        b: {
          c: {
            d: {
              counter2: 100
            }
          }
        }
      }
    })

    // 对于reactive函数获取的代理对象，在进行监听的时候，只能获取到newValue，不能获取到oldValue
    // 对于reactive函数获取的代理对象来说，默认就是开启深度侦听的
    // 这种深度侦听是无法取消的，配置 deep: false 无效
    /* watch(data, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    }, {deep: false}) */

    // 只想侦听data中的counter1属性
    // 注意点：第一个需要侦听的数据，必须是一个函数
    /* watch(() => data.counter1, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    }) */

    // 如果是这样的，deep设置无效
    /* watch(data.a.b, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    }) */

    // 如果是这样的，deep设置是有效的（oldValue仍然拿不到）
    watch(() => data.a.b, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    }, {deep: false})

    /* watch(() => data.a.b.c.d.counter2, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    }) */

    /* watch([() => data.counter1, () => data.a.b.c.d.counter2], (newValue, oldValue) => {
      console.log(newValue, oldValue)
    }) */

    return {data}
  }
}
</script>

<template>
  <h2>counter1: {{ data.counter1 }}</h2>
  <button @click="data.counter1++">counter1 +1</button>
  <br>
  <h2>counter2: {{ data.a.b.c.d.counter2 }}</h2>
  <button @click="data.a.b.c.d.counter2++">counter2 +1</button>
</template>
