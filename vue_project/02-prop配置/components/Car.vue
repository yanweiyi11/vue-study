<template>
  <div>
    <h3>品牌：{{brand}}</h3>
    <h3>价格：{{cPrice}}</h3>
    <h3>颜色：{{color}}</h3>
    <button @click="add">价格加1</button>
  </div>
</template>

<script>
  export default {
    name: 'Car',
    data() {
      return {
        cPrice: this.price
      };
    },
    methods: {
      add() {
        this.cPrice++;
      }
    },
    // 在 Car 这个子组件中使用 props 配置项进行数据的接收。
    // 第一种：简单的接收方式，直接采用数组接收。
    // props: ['brand', 'color', 'price']
    // 第二种：添加类型显示
    /* props: {
      brand: String,
      color: String,
      price: Number
    } */
    // 第三种：添加类型限制，并且还可以添加默认值，还可以添加必要性。
    // 避免直接更改 prop，因为每当父组件重新渲染时，该值都会被覆盖。
    // 注意：不要修改 prop 中的数据。
    props: {
      brand: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        default: '红色'
      },
      price: {
        type: Number,
        required: true
      }
    },
  };
</script>
