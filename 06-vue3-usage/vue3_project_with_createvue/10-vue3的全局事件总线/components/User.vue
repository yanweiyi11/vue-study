<script>
import emitter from '@/utils/event-bus.js'

export default {
  name: "User",
  // context代表组件上下文对象
  setup() {
    function triggerEvent1() {
      // 触发全局事件总线上的事件event1
      emitter.emit('event1', {name: 'zs', age: 30})
    }

    function clearAllEvent() {
      // 清除总线上绑定的所有事件
      emitter.all.clear()
    }

    function clearEvent1() {
      // 解绑指定的事件
      emitter.off('event1')
    }

    return {triggerEvent1, clearAllEvent, clearEvent1}
  }
}
</script>

<template>
  <button @click="triggerEvent1">触发全局事件总线上的event1事件</button>
  <br><br>
  <button @click="clearAllEvent">解除全局事件总线上的所有绑定的事件</button>
  <br><br>
  <button @click="clearEvent1">解除全局事件总线上的event1事件</button>
</template>
