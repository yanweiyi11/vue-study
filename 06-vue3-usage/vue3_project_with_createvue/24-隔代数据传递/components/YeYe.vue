<script>
import ErZi from "@/components/ErZi.vue";
import {provide, ref} from "vue";

export default {
  name: 'YeYe',
  components: {ErZi},
  setup() {
    let counter = ref(1)

    // 在祖宗组件中使用provide提供数据
    // provide('name', value)
    provide('c', counter)

    return {counter}
  }
}
</script>

<template>
  <div>
    <h2>YeYe ({{ counter }})</h2>
    <ErZi></ErZi>
  </div>
</template>
