<template>
  <div class="pixel-displaybox" :style="{width:width+'px',height:height+'px'}">
      <div class="pixel-displaybox-left">
          <img :src="icon" alt="">
      </div>
      <div class="pixel-displaybox-rigth">
          <div class="pixel-displaybox-rigth-title">
              {{title}}
          </div>
          <div class="pixel-displaybox-rigth-content" :style="{textAlign:contentAlign}">
              {{content}}
          </div>
          <div class="pixel-displaybox-rigth-footer">
              <div v-if="footer" :style="{textAlign:footerAlign}">
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
        footerAlign:String
    }
})
</script>