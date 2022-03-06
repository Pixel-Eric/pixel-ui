<template>
  <pixel-tab :indexs="config" position="bottom">
      <template v-slot:new>
          最新消息列表
      </template>
      <template v-slot:hot>
          热门消息列表
      </template>
      <template v-slot:publish>
          公告列表
      </template>
  </pixel-tab>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
    setup(){
        let config = [
            {name:'new',value:'最新'},
            {name:'hot',value:'热门'},
            {name:'publish',value:'公告'}
        ]
        return {config}
    }
})
</script>
