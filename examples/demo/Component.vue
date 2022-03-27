<template>
  <div>
      <ModalDemoVue />
      <DisplayBoxDemo />
  </div>
</template>

<script>
import { defineComponent } from "vue"
import ModalDemoVue from "./ModalDemo.vue"
import DisplayBoxDemo from "./DisplayBoxDemo.vue"
export default defineComponent({
    components:{
        ModalDemoVue,
        DisplayBoxDemo
    },
    setup(){

    }
})
</script>

<style>

</style>