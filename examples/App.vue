<template>
<div id="app">
<TabDemoVue />
</div>
</template>

<script>
import { defineComponent} from 'vue'
import TabDemoVue from "./demo/TabDemo.vue";
export default defineComponent({
  name: "App",
  components:{TabDemoVue}
})
</script>

<style lang='scss'>

</style>
