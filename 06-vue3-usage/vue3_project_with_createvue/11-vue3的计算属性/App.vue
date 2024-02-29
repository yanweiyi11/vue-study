<script>
import {computed, reactive} from "vue";

export default {
  name: 'App',
  // vue3的计算属性，computed是一个组合式的API
  setup() {
    let data = reactive({
      name: ''
    })

    // computed简写
    /* let reversedName = computed(() => {
      // 这种写法是一种简写形式，如果只需要使用计算属性的get方法的话
      return data.name.split('').reverse().join('')
    }) */

    // computed完整写法
    let reversedName = computed({
      get() {
        // 读取计算属性的值的时候执行
        return data.name.split('').reverse().join('')
      },
      set(val) {
        // 当修改计算属性的值的时候执行
        data.name = val.split('').reverse().join('')
      }
    })
    return {data, reversedName}
  }
}
</script>

<template>
  <input type="text" v-model="data.name">
  <br>
  <input type="text" v-model="reversedName">
</template>
