<template>
  <div class="demo-page">
    <pix-btn @click="change" :options="{
          value:'变更'
      }" />
    <pixel-pageturn
      :config="config"
      type="rigth"
      :pageStyle="{color:'#fff',borderRadius:'10px',backgroundColor:'red'}"
    />
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    let config = reactive({
      all: 300,
      total: 10,
      curpage: 1,
    });
    
    function change(){
        config.all = 30;
    }

    return { config , change };
  },
});
</script>

<style>
</style>