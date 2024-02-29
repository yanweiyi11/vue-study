<script>
import User from "@/components/User.vue";
import {ref} from "vue";

export default {
  name: 'App',
  components: {User},
  setup() {
    let sex = ref('男')
    return {sex}
  }
}
</script>

<template>
  <User name="zs" :age="20" :sex="sex"></User>
</template>
