<template>
  <div class="pixel-sticker">
      <!-- 默认插槽 -->
      <slot></slot>
      <!-- 客制化插槽 -->
      <div  class="pixel-sticker-content" :style="{backgroundColor:bgColor,color,...config}">
        <div v-if="content" class="pixel-sticker-content-default">
            <p>{{content}}</p>
        </div>
        <slot class="pixel-sticker-content-customize"  
        v-else name="customize"></slot>
      </div>

  </div>
</template>

<script>
import { defineComponent } from "vue"
import position from "../hooks/postion"
export default defineComponent({
    name:'pixel-sticker',
    props:{
        content:String,
        mode:{type:String,default:'normal'},
        bgColor:{type:String,default:'red'},
        color:{type:String,default:'#fff'},
        position:{type:String,default:'right'}
    },
    setup(props){
        let config = position(props.position);
        
        return {config}
    }
})
</script>
<style lang='scss'>
@import 'sticker';
</style>