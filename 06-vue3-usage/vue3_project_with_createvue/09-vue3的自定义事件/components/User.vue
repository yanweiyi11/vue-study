<script>
export default {
  name: "User",
  // context代表组件上下文对象
  setup(props, context) {
    function triggerEvent1() {
      // 触发事件event1，传递数据
      context.emit('event1', 'zs', 50)
    }

    return {triggerEvent1}
  }
}
</script>

<template>
  <button @click="triggerEvent1">触发event1事件</button>
</template>
