<script>
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from "vue";

export default {
  name: "User",
  // 在vue3当中，生命周期钩子函数有2种写法：
  // 第一种写法：选项式API
  // 第二种写法：组合式API
  setup() {
    console.log('setup...')
    // 采用组合式API：生命周期钩子函数
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(() => {
      console.log('onMounted')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })
    let counter = ref(0)
    return {counter}
  },
  // 选项式API
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  }

  // 以下为选项式API
  /* beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  } */
}
</script>

<template>
  <h1>User</h1>
  <h2>计数器：{{ counter }}</h2>
  <button @click="counter++">点我加一</button>
</template>
