<template>
  <div class="pixel-tab" :style="{width:width+'px',height:height+'px'}">
    <div class="pixel-tab-indexs">
      <div
        class="pixel-tab-indexs-btn"
        v-for="index in indexs"
        :key="index"
        @click="change(index.name)"
        :class="{checked:state[index.name]}"
      >
        {{index.value}}
      </div>
    </div>
    <div class="pixel-tab-content">
      <slot
        :name="soltName"
      >
      </slot>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive,ref,onBeforeMount,watchEffect } from "vue";
export default defineComponent({
  name:"pixel-tab",
  props: {
    indexs: { type: Array, default(){return [
        {name:"tab1",value:'选项卡1'},
        {name:"tab2",value:'选项卡2'}
    ]} },
    cur:{type: String},
    width: { type: Number, default: 300 },
    height: { type: Number, default: 300 },
    icnos: { type: Array }
  },
  setup(props) {
      let state = reactive({});
      let soltName = ref("");
      
      let now = ref(props.cur!=null?props.cur:props.indexs[0].name);
      function change(tabName){
          now.value = tabName;
      }
      watchEffect(()=>{
          props.indexs.forEach(cur=>{
            state[cur.name] = now.value == cur.name ? true : false; 
          })
          Object.keys(state).forEach(key=>{
            if(state[key]) soltName.value = key;
          })
      })
      onBeforeMount(()=>{
        change(now.value);
      })
      return {state,soltName,change,now}
  },
});
</script>

