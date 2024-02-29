<script>
// 导入钩子函数
import sum from "@/hooks/sum.js";

export default {
  name: 'App',
  setup() {
    // 调用钩子函数
    return sum()
  }
}
</script>

<template>
  <input type="number" v-model="data.num1">
  <br>
  <input type="number" v-model="data.num2">
  <br>
  {{ data.result }}
  <br>
  <button @click="sum">求和</button>
</template>
