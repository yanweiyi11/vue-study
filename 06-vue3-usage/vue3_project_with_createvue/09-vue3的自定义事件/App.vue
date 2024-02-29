<script>
import User from "@/components/User.vue";

export default {
  name: 'App',
  components: {User},
  setup() {
    function showInfo(name, age) {
      console.log(`name: ${name}, age: ${age}`)
    }

    return {showInfo}
  }
}
</script>

<template>
  <!--给User组件绑定自定义事件-->
  <User @event1="showInfo"></User>
</template>
