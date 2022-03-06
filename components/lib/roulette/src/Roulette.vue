<template>
  <div class="pixel-roulette" @mouseenter="timerStop()" @mouseleave="timerStart()" :style="{width:width+'px',height:height+'px'}">
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
              <div class="pixel-roulette-titles-block" v-show="data[curIndex-1] == d" v-for="d in data" :key="d" >
                  <p :style="{...titleStyle}" >{{d.title}}</p>
                  <transition
                    enter-active-class="animate__animated animate__fadeInUp"
                    leave-active-class="animate__animated animate__fadeOutDown">
                      <p v-show="direction" :style="{...subtitleStyle}" >{{d.subtitle}}</p>
                  </transition>
              </div>
          </transition-group>
      </div>
      <transition 
         enter-active-class="animate__animated animate__fadeIn"
         leave-active-class="animate__animated animate__fadeOut">
        <div  v-show="direction"  class="pixel-roulette-direction">
              <slot :data="data[curIndex-1]"  name="direction" >

              </slot>
        </div>
      </transition>
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
        speed:{type:Number,default:1000},
        titleStyle:Object,
        subtitleStyle:Object
    },
    setup(props){
        let model = ['arr'];
        let config = reactive({
            isArr:renderCheack(props.render,model,props.data),
            curIndex:1,
            direction:false
        })
        let timerID;

        function timerStart(){
            timerID = setInterval(()=>{
                config.curIndex = Scroll(config.curIndex,props.data.length);
            },props.speed);
            config.direction = false;
        }

        function timerStop(){
            clearInterval(timerID);
            config.direction = true;
        }

        onBeforeMount(()=>{
            timerStart();
        })
        
        
        onUnmounted(()=>{
            timerStop()
        })

        return {...toRefs(config),timerStop,timerStart}
    }
})
</script>
