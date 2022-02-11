<template>
  <button class="pixel-btn" :class="{...config,radius}">
      <span>{{value}}</span>
  </button>
</template>

<script>

import {defineComponent} from 'vue'
export default defineComponent({
    name:'pixel-btn',
    props:{
        value:{type:String,default:'默认按钮'},
        icon:String,
        type:{type:String,default:'normal'},
        radius:Boolean,
        mode:{type:String,default:'fill'},
    },
    setup(props){
        //按钮样式处理
        const config = {};
        config[`${props.mode}-${props.type}`] = true;
        if(props.icon!==null){
            config[`iconfont ${props.icon}`] = true;
        }
        return {config}
    }
})
</script>
