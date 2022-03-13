<template>
  <div>
      <pixel-btn v-on:click="open" value="显示弹窗"  />
      <pix-modal 
        :background="{show:false}"
        :shadow="{show:true}"
        :radius="true"
        :animation="{
            enter:'animate__bounceInLeft',
            leave:'animate__bounceOutRight'
        }"
        :close="()=>{close()}"
        :display="show"
        :title="{text:'123',show:false,fontStyle:{color:'red',textAlign:'center'}}"
        content="123123123123" />
  </div>
</template>

<script>
import { defineComponent,reactive,toRefs } from "vue"
export default defineComponent({
    setup(){
        let config = reactive({
            show:false
        })
        function close(){
            console.log(true);
            config.show = false;
        }
        function open(){
            config.show = true
        }
        return {...toRefs(config),open,close}
    }
})
</script>

<style>

</style>