<script>
import SunZi from "@/components/SunZI.vue";
import {inject} from "vue";

export default {
  name: 'ErZi',
  components: {SunZi},
  setup() {
    // 注入
    let counter = inject('c');

    return {counter}
  }
}
</script>

<template>
  <div>
    <h2>ErZi ({{ counter }})</h2>
    <SunZi></SunZi>
  </div>
</template>
