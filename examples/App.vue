<template>
<div id="app">
    <TableDemoVue />
    <TabDemoVue />
    <pixel-tab>
        <template v-slot:tab1>
            T1
        </template>
        <template v-slot:tab2>
            T2
        </template>
    </pixel-tab>
</div>
</template>

<script>
import { defineComponent} from 'vue'
import TableDemoVue from './demo/TableDemo.vue'
import TabDemoVue from './demo/TabDemo.vue'
export default defineComponent({
  name: "App",
  components:{TableDemoVue,TabDemoVue}
})
</script>

<style lang='scss'>
#app{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
