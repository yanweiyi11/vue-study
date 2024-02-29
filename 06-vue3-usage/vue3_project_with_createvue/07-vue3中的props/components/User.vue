<script>
export default {
  name: "User",
  // 使用props配置项接收父组件传递过来的数据
  props: ['name', 'age', 'sex'],
  // 在setup函数中如何使用props配置项呢？
  // setup函数中没有this这个关键字
  // 将来vue3调用setup函数之前，会给setup函数传递参数，第一个参数是：props
  setup(props) {
    // props被包装成了一个代理对象，也是具有响应式的Proxy对象
    console.log(props.name);
    console.log(props.age);
    console.log(props.sex);
  }
}
</script>

<template>
  <h2>{{ name }}</h2>
  <h2>{{ age }}</h2>
  <h2>{{ sex }}</h2>
</template>
