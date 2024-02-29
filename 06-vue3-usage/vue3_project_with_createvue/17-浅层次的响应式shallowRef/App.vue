<script>
import {ref, shallowRef} from "vue";

export default {
  name: 'App',
  setup() {
    // 当shallowRef和ref都用在对象上的时候，ref是有响应式的，底层会创建Proxy代理对象
    // shallowRef是没有响应式的，底层也不会创建Proxy对象
    // 有的时候，这个对象中的属性可能永远都不可能修改，如果要改，也是更换对象，显然这个时候，可以使用shallowRef进行优化
    let data = shallowRef({
      counter: 1
    })

    console.log(data)

    function changeCounter() {
      data.value = {
        counter: 500
      }
    }

    return {data, changeCounter}

    // let counter = ref(1)
    // shallowRef和ref用在基本数据类型上没有区别
    // 数据本身就是基本数据类型，再浅也浅不到哪去
    // let counter = shallowRef(1)

    // return {counter}
  }
}
</script>

<template>
  <h2>{{ data.counter }}</h2>
  <button @click="data.counter++">点我加1</button>
  <button @click="changeCounter">修改计数器</button>

  <!--<h2>{{ counter }}</h2>-->
  <!--<button @click="counter++">点我加1</button>-->
</template>
