<script setup>

import {ref} from "vue";
import User from "@/components/User.vue";

let counter = ref(100)

function add() {
  counter.value++
}

/* export default {
  name: 'App',
  setup() {
    let counter = ref(100)

    function add() {
      counter.value++
    }

    return {counter, add}
  }
} */
</script>

<template>
  <h2>{{ counter }}</h2>
  <button @click="add">点我加一</button>
  <hr>
  <User></User>
</template>
