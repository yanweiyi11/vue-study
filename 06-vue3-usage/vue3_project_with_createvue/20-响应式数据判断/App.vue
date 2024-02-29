<script>
import {isProxy, isReactive, isReadonly, isRef, reactive, readonly, ref} from "vue";

export default {
  name: 'App',
  setup() {
    // 判断某个数据是否是 ref 的
    let counter = ref(1)
    console.log(isRef(counter))

    // 判断某个对象是否是通过 reactive() 或 shallowReactive() 获取的代理
    let data = reactive({
      counter: 1
    })
    console.log(isReactive(data))

    // 判断某个对象是否为代理对象
    console.log(isProxy(data))

    // 判断某个对象是否为只读对象
    data = readonly(data)
    console.log(isReadonly(data))
  }
}
</script>

<template>

</template>
