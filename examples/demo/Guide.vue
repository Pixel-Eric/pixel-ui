<template>
  <div>
    <RouletteDemoVue />
    <TabDemoVue />
    <TableDemoVue />
    <PageDemoVue />
    <ButtonDemoVue />
    <ModalDemoVue />
  </div>
</template>

<script>
import RouletteDemoVue from './RouletteDemo.vue';
import PageDemoVue from './PageDemo.vue'
import TabDemoVue from './TabDemo.vue';
import TableDemoVue from './TableDemo.vue';
import ButtonDemoVue from './ButtonDemo.vue';
import ModalDemoVue from './ModalDemo.vue'
import { defineComponent,ref } from 'vue'
export default defineComponent({
    setup(){
        let t = ref(true);
        return {t}
    },
    components:{
        RouletteDemoVue,
        TabDemoVue,
        TableDemoVue,
        PageDemoVue,
        ButtonDemoVue,
        ModalDemoVue
        }
})
</script>

<style lang="scss" scoped>

</style>