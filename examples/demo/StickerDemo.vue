<template>
  <pixel-sticker
    position="right"
  >
    <p>这是一个贴了自定义组件的标题</p>
    <template v-slot:customize>
        <pixel-btn value="移除"></pixel-btn>
    </template>
  </pixel-sticker>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style>
</style>