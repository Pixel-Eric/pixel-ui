<template>
  <div>
    <pixel-btn
      v-on:click="open"
      value="显示弹窗"
    />
    <pix-modal
      :width="600"
      :height="60"
      :background="{show:true}"
      :shadow="{show:true}"
      position="bottom"
      :bottom="30"
      :radius="true"
      :animation="{
            enter:'animate__fadeInDown',
            leave:'animate__fadeOutUp'
        }"
      :close="()=>{close()}"
      :display="show"
      :title="{text:'123',show:false,fontStyle:{color:'red',textAlign:'center'}}"
      content="123123123123"
      icon="icon-quan"
      :contentStyle="{color:'red'}"
    />
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  setup() {
    let config = reactive({
      show: false,
    });
    function close() {
      console.log(true);
      config.show = false;
    }
    function open() {
      config.show = true;
    }
    return { ...toRefs(config), open, close };
  },
});
</script>

<style>
</style>