<script>
import {ref} from "vue";

export default {
  name: 'App',

  // 使用ref函数实现data响应式
  setup() {
    // data
    // ref对'zs'这个数据进行包裹，返回了一个全新的对象：引用对象RefImpl
    // RefImpl对象中有value属性，这个value属性是具有响应式的，并且这个value底层使用了Object.defineProperty完成了响应式
    // RefImpl队形的value属性有对应的set和get
    // 当读取RefImpl对象的value属性时，get执行
    // 当修改RefImpl对象的value属性时，set执行
    let nameRefImpl = ref('zs')
    let ageRefImpl = ref(30)

    // methods
    function modifyInfo() {
      console.log('modifyInfo')

      nameRefImpl.value = 'ls'
      ageRefImpl.value = 10
    }

    // 反回一个对象（只有返回了，这些数据以及函数才能在模板语法中使用）
    return {nameRefImpl, ageRefImpl, modifyInfo}
  }

  // 以下代码没有响应式
  /* setup() {
    // 数据data
    let name = 'zs'
    let age = 20

    // 方法methods
    function modifyInfo() {
      console.log('modifyInfo')
      // 修改这个数据data时有没有响应式
      // 通过测试得知，如果当前的data这样写是没有响应式的
      name = 'ls'
      age = 10
    }

    // 反回一个对象
    return {name, age, modifyInfo}
  } */
}
</script>

<template>
  <!--RefImpl对象在模板语法中可以直接使用，不用'.value'-->
  <h2>{{ nameRefImpl }}</h2>
  <h2>{{ ageRefImpl }}</h2>
  <button @click="modifyInfo">修改信息</button>

  <!--<h2>{{ name }}</h2>
  <h2>{{ age }}</h2>
  <button @click="modifyInfo">修改信息</button>-->
</template>
