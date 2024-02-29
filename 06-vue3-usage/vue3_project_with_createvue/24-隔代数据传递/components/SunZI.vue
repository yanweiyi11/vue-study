<script>
import {inject, ref} from "vue";

export default {
  name: 'SunZi',
  setup() {
    let isShow = ref(false)

    // 注入inject
    let counter = inject('c');

    return {isShow, counter}
  }
}
</script>

<template>
  <div>
    <h2>SunZi ({{ counter }})</h2>
    <button @click="isShow = true">弹出</button>

    <teleport to="body">
      <!--遮罩层-->
      <div v-show="isShow" class="cover">
        <!--模态窗口-->
        <div>
          我是一个窗口...
          <button @click="isShow = false">关闭</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<style scoped>
.cover {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: darkgray;
  opacity: 90%;
}
</style>