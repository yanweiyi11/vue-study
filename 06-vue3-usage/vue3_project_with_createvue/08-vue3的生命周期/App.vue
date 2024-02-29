<script>
import User from "@/components/User.vue";
import {ref} from "vue";

export default {
  name: 'App',
  components: {User},
  setup() {
    let isDisplay = ref(true)
    return {isDisplay}
  }
}
</script>

<template>
  <button @click="isDisplay = !isDisplay">显示或隐藏</button>
  <User v-if="isDisplay"></User>
</template>
