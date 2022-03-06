<template>
  <div>
    <RouletteDemoVue />
    <TabDemoVue />
    <TableDemoVue />
    <PageDemoVue />
    <ButtonDemoVue />
  </div>
</template>

<script>
import 'animate.css'
import RouletteDemoVue from './RouletteDemo.vue';
import PageDemoVue from './PageDemo.vue'
import TabDemoVue from './TabDemo.vue';
import TableDemoVue from './TableDemo.vue';
import ButtonDemoVue from './ButtonDemo.vue';
import { defineComponent,ref } from 'vue'
export default defineComponent({
    setup(){
        let t = ref(true);
        return {t}
    },
    components:{RouletteDemoVue,TabDemoVue,TableDemoVue,PageDemoVue,ButtonDemoVue}
})
</script>

<style lang="scss" scoped>

</style>