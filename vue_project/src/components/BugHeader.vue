<template>
  <div class="header">
    <textarea cols="105" rows="4" placeholder="请输入BUG的描述信息"></textarea>
    <br>
    <button class="small green button">保存</button>
  </div>
</template>

<script>
  export default {
    name: 'BugHeader'
  }
</script>

<style scoped>
  .header {
    margin-bottom: 20px;
    margin-top: 20px;
  }
</style>