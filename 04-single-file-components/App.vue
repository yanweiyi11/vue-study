<template>
  <div>
    <h1>App 组件</h1>
    <!-- 使用组件 -->
    <X></X>
    <Y></Y>
  </div>
</template>

<script>
  import X from './X.vue'
  import Y from './Y.vue'

  export default {
    // 注册组件
    components: {X, Y},
  }
</script>