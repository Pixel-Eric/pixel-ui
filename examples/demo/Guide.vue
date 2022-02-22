<template>
  <div>
    <RouletteDemoVue />
  </div>
</template>

<script>
import 'animate.css'
import RouletteDemoVue from './RouletteDemo.vue';
import { defineComponent,ref } from 'vue'
export default defineComponent({
    setup(){
        let t = ref(true);
        return {t}
    },
    components:{RouletteDemoVue}
})
</script>

<style>

</style>