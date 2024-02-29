<script>
import {ref} from "vue";

export default {
  name: 'App',

  setup() {
    // data
    // 如果ref包裹的是一个基本数据类型，响应式是如何实现的？Object.defineProperty
    // 如果ref包裹的是一个对象，响应式是如何实现的？Object.defineProperty + Proxy 实现的
    // Proxy实现的响应式，对象中的对象，对象中的对象，都有响应式处理。（底层是递归处理了）
    let userRefImpl = ref({
      name: 'jack',
      age: 20,
      addr: {
        city: 'beijing',
        street: 'liangshuihe'
      }
    })
    console.log(userRefImpl);

    // methods
    function modifyUser() {
      // 对于userRefImpl对象来说，应该怎么改才能有响应式呢？
      // 如果采用这种value属性直接赋值的方式，表示这种响应式是基于Object.defineProperty的
      // 这种方法不建议用，因为每次修改都会删除和创建对象
      /* userRefImpl.value = {
        name: 'lucy',
        age: 50
      } */

      // userRefImpl.value 是一个代理对象Proxy
      userRefImpl.value.name = 'lucy'
      userRefImpl.value.age = 30

      // 修改地址信息
      userRefImpl.value.addr.city = 'guangxi'
      userRefImpl.value.addr.street = 'youjiangqu'
    }

    // return
    return {userRefImpl, modifyUser}
  }

  // 没有使用Vue响应式系统的普通数据对象的例子
  /* setup() {
    // data
    // 如果这里是一个对象的话，默认也是没有响应式处理的
    let user = {
      name: 'jack',
      age: 20
    }
    // methods
    function modifyUser() {
      user.name = 'lucy'
      user.age = 30
    }
    // return
    return {user, modifyUser}
  } */
}
</script>

<template>
  <h2>{{ userRefImpl.name }}</h2>
  <h2>{{ userRefImpl.age }}</h2>
  <h2>{{ userRefImpl.addr.city }}</h2>
  <h2>{{ userRefImpl.addr.street }}</h2>
  <button @click="modifyUser">修改用户信息</button>

  <!--<h2>{{ user.name }}</h2>
  <h2>{{ user.age }}</h2>
  <button @click="modifyUser">修改用户信息</button>-->
</template>
