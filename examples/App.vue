<template>
<div id="app">
    <TableDemoVue />
</div>
</template>

<script>
import { defineComponent} from 'vue'

import TableDemoVue from './demo/TableDemo.vue'
export default defineComponent({
  name: "App",
  components:{TableDemoVue}
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
