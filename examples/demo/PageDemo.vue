<template>
  <div class="demo-page">
      <pixel-pageturn :config="config" type="rigth" :pageStyle="{color:'#fff',borderRadius:'10px',backgroundColor:'red'}" />
  </div>
</template>

<script>
import { defineComponent,reactive } from "vue";
export default defineComponent({
    setup(){
        let config = reactive({
            all:300,
            total:10,
            curpage:1
        })


        return {config}
    }
})
</script>

<style>

</style>