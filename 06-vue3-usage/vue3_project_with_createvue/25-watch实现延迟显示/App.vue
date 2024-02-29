<script>
import {ref, watch} from "vue";

export default {
  name: 'App',
  setup() {
    let name = ref('')
    let newName = ref(name.value)
    // 侦听属性
    watch(name, (newValue, oldValue) => {
      setTimeout(() => {
        newName.value = newValue
      }, 300)
    })
    return {name, newName}
  }
}
</script>

<template>
  <input type="text" v-model="name">
  <br><br>
  {{ newName }}
</template>
