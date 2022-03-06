<template>
  <div class="pixel-sticker">
      <!-- 默认插槽 -->
      <slot></slot>
      <!-- 客制化插槽 -->
      <div  class="pixel-sticker-content" :style="{backgroundColor:bgColor,color,height:height+'px',...config}">
        <div v-if="content" class="pixel-sticker-content-default">
            <p :style="{fontSize}">{{content}}</p>
        </div>
        <slot class="pixel-sticker-content-customize"  
        v-else name="customize"></slot>
      </div>

  </div>
</template>

<script>
import { defineComponent } from "vue"
import position from '../../../hooks/postion';
export default defineComponent({
    name:'pixel-sticker',
    props:{
        content:String,
        mode:{type:String,default:'normal'},
        bgColor:{type:String,default:'none'},
        color:{type:String,default:'#fff'},
        position:{type:String,default:'right'},
        fontSize:{type:String,default:'1rem'},
        height:{type:Number,default:20}
    },
    setup(props){
        let config = position(props.position);
        return {config}
    }
})
</script>
