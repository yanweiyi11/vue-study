<script>
import emitter from '@/utils/event-bus.js'
import User from "@/components/User.vue";
import {onMounted} from "vue";

export default {
  name: 'App',
  components: {User},
  setup() {
    // 生命周期钩子：mounted
    onMounted(() => {
      // 给全局事件总线绑定事件
      emitter.on('event1', showInfo)
    })

    function showInfo(user) {
      console.log(user)
    }

    return {showInfo}
  }
}
</script>

<template>
  <User></User>
</template>
