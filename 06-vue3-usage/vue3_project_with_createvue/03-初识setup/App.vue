<script>

export default {
  name: 'App',

  // 如果你把data、methods、computed...还是配置到这里的话，表示你还是使用了vue2的语法规则。
  // 如果你使用了vue3，建议不要在出现vue2的语法，不建议vue3 + vue2混合使用。

  // vue2仍然可以用，但是不建议了。
  /* data() {
     return {
       name: 'jackson'
     }
   },*/

  // 1. setup是vue3当中新增的一个配置项。
  // 2. setup是一个函数。
  // 3. 在setup函数体当中编写 data、methods、computed、watch、生命周期钩子函数....
  setup() {
    // 数据
    // 在setup函数体当中定义的这个变量，可以看作是之前的data
    let name = 'zs'
    let age = 20

    // 函数
    /*function sayHi() {
      alert('hi vue3')
    }*/
    function sayHi(a, b, e) {
      alert(a + ',' + b)
      alert(e.target.innerText)
    }

    // 如果你想在模板当中使用name和age，就必须把name和age封装成一个对象，然后作为setup对象的返回值返回即可。
    // 当然这个对象当中也可以有函数
    /*return {
      a: name,
      b: age,
      c: sayHi
    }*/

    /*return {
      name: name,
      age: age,
      sayHi: sayHi
    }*/

    return {name, age, sayHi}

    // 可以返回一个渲染函数
    /*return function () {
      return h('h1', 'hello')
    }*/

    // return () => h('h1', 'hello')
  }
}
</script>

<template>
  <!--  <h1>姓名：{{ a }}</h1>
    <h1>年龄：{{ b }}</h1>
    <button @click="c">say hi</button>-->

  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <button @click="sayHi('jack', 20, $event)">SAY HI</button>
</template>
