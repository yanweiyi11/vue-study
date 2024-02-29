<script>
import {reactive} from "vue";

export default {
  name: 'App',
  setup() {
    // data
    // reactive函数可以将一个对象直接包裹实现响应式，底层是生成一个Proxy对象
    // 基本数据类型不能使用reactive包裹，如果是基本数据类型，请使用ref
    let userProxy = reactive({
      name: 'zs',
      age: 30,
      addr: {
        city: 'beijing',
        street: 'daxingqu'
      },
      courses: ['语文', '数学', '英语']
    })

    // methods
    function modifyUser() {
      userProxy.name = 'ls'
      userProxy.age = 20
      userProxy.addr.city = 'guangxi'
      userProxy.addr.street = 'youjiangqu'
    }

    function addSex() {
      // 添加性别
      userProxy.sex = '男'
    }

    function delSex() {
      // 删除性别
      delete userProxy.sex
    }

    function modifyCourse() {
      // 通过数组下标修改，会不会有响应式呢？
      userProxy.courses[2] = '政治'
    }

    // return
    return {userProxy, modifyUser, addSex, delSex, modifyCourse}
  }
}
</script>

<template>
  <h2>{{ userProxy.name }}</h2>
  <h2>{{ userProxy.age }}</h2>
  <h2>{{ userProxy.addr.city }}</h2>
  <h2>{{ userProxy.addr.street }}</h2>
  <h2>{{ userProxy.sex }}</h2>
  <ul>
    <li v-for="course in userProxy.courses">
      <b>{{ course }}</b>
    </li>
  </ul>
  <button @click="modifyUser">修改用户信息</button>
  <br>
  <button @click="addSex">增加sex属性</button>
  <br>
  <button @click="delSex">删除sex属性</button>
  <br>
  <button @click="modifyCourse">修改课程</button>
</template>
