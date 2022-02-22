<template>
  <div class="pixel-roulette" :style="{width:width+'px',height:height+'px'}">
      <div class="pixel-roulette-plate">
          <div v-if="isArr" class="pixel-roulette-plate-arr" :style="{width:width+'px',height:height+'px'}" >
              <transition-group enter-active-class="animate__animated animate__slideInRight"
              leave-active-class="animate__animated animate__slideOutLeft" >
                  <img v-show="data[curIndex-1] == d" v-for="d in data" :key="d" :src="d.imgUrl" alt="">
              </transition-group>
          </div>
      </div>
      <div class="pixel-roulette-titles">
          <transition-group enter-active-class="animate__animated animate__fadeIn"
              leave-active-class="animate__animated animate__fadeOut">
              <p v-show="data[curIndex-1] == d" v-for="d in data"  :key="d" >{{d.title}}</p>
          </transition-group>
      </div>
  </div>
</template>

<script>
import { defineComponent,reactive,toRefs,onBeforeMount,onUnmounted } from "vue"
import renderCheack from '../../../hooks/renderCheack'
import "animate.css";
import Scroll from '../../../hooks/Scroll'
export default defineComponent({
    name:'pixel-roulette',
    props: {
        width:{type:Number,default:300},
        height:{type:Number,default:200},
        render:{type:String,default:'arr'},
        data:{type:Array},
        speed:{type:Number,default:1000}
    },
    setup(props){
        let model = ['arr','slot'];
        let config = reactive({
            isArr:renderCheack(props.render,model,props.data),
            curIndex:1
        })
        let timerID;

        onBeforeMount(()=>{
            timerID = setInterval(()=>{
                config.curIndex = Scroll(config.curIndex,props.data.length);
            },props.speed);
        })

        onUnmounted(()=>{
            clearInterval(timerID);
        })

        return {...toRefs(config)}
    }
})
</script>
