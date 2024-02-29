<script>
import {markRaw, reactive, toRaw} from "vue";

export default {
  name: 'App',
  setup() {
    let data = reactive({
      counter1: 1,
    })

    // 获取data这个响应式对象的原始对象
    // 操作原始对象的时候，没有响应式处理的
    function getRawObject() {
      // rawObj就是一个原始对象，是data的原始对象
      let rawObj = toRaw(data) // toRaw: 将响应式对象转换为普通对象。只适用于reactive生成的响应式对象。
      // 修改原始对象，不会具有响应式
      rawObj.counter1++
      console.log(rawObj)
    }

    function addX() {
      // 给data扩展一个x属性
      data.x = markRaw({ // markRaw: 标记某个对象，让这个对象永远都不具备响应式。
        counter2: 500
      })
    }

    return {data, getRawObject, addX}
  }
}
</script>

<template>
  <h2>counter1: {{ data.counter1 }}</h2>
  <button @click="data.counter1++">点我加1</button>
  <hr>
  <h2>counter2: {{ data.x }}</h2>
  <button @click="data.x.counter2++">点我加1</button>
  <br><br>
  <button @click="getRawObject">获取data的原始对象</button>
  <br><br>
  <button @click="addX">给data扩展x属性</button>
</template>
