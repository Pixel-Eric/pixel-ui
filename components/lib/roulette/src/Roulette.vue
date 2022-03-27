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
      <div v-if="showTitle" class="pixel-roulette-titles">
          <transition-group enter-active-class="animate__animated animate__fadeIn"
              leave-active-class="animate__animated animate__fadeOut">
              <div class="pixel-roulette-titles-block" v-show="data[curIndex-1] == d" v-for="d in data" :key="d" >
                  <p :style="{...titleStyle}" >{{d.title}}</p>
                  <p class="pixel-roulette-titles-subtitle" :style="{...subtitleStyle}" >{{d.subtitle}}</p>
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
import Scroll from '../../../hooks/Scroll'
export default defineComponent({
    name:'pix-roulette',
    props: {
        options:{type: Object,default:()=>{}}
    },
    setup(props){
        let options = reactive({
            width:300,
            height:200,
            render:'arr',
            data:[],
            speed:1000,
            titleStyle:{},
            subtitleStyle:{},
            showTitle:true,
            ...props.options
        })
        let model = ['arr'];
        let config = reactive({
            isArr:renderCheack(options.render,model,options.data),
            curIndex:1,
            direction:false
        })
        let timerID;

        function timerStart(){
            timerID = setInterval(()=>{
                config.curIndex = Scroll(config.curIndex,options.data.length);
            },options.speed);
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

        return {...toRefs(config),...toRefs(options),timerStop,timerStart}
    }
})
</script>
