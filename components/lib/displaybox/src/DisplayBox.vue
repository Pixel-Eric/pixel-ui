<template>
  <div class="pixel-displaybox" :style="{width:width+'px',height:height+'px'}">
      <div class="pixel-displaybox-left" :style="{width:iconWidth+'%'}">
          <img :src="icon" alt="">
      </div>
      <div class="pixel-displaybox-rigth">
          <div 
          class="pixel-displaybox-rigth-title"
          :style="{...titleStyle}">
              {{title}}
          </div>
          <div class="pixel-displaybox-rigth-content" 
          :style="{...contentStyle}">
              {{content}}
          </div>
          <div class="pixel-displaybox-rigth-footer">
              <div v-if="footer" :style="{...footerStyle}">
                  {{footer}}
              </div>
              <div v-else>
                  <slot></slot>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { defineComponent } from "vue"
export default defineComponent({
    name: "pixel-displaybox",
    props:{
        width:{type:Number,default:369},
        height:{type:Number,default:108},
        icon:String,
        title:{type:String,default:"默认展示标题"},
        content:String,
        contentAlign:String,
        footer:String,
        footerAlign:String,
        iconWidth:{type:Number,default:30},
        titleStyle:{type:Object},
        contentStyle:{type:Object},
        footerStyle:{type:Object}
    }
})
</script>