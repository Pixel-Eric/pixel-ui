<template>
  <div>
      <button @click="t = !t">123123</button>
      <transition enter-active-class="animate__animated animate__fadeInDown">
          <p v-if="t">TASDAWDAWDA</p>
      </transition>
      
  </div>
</template>

<script>
import 'animate.css'
import { defineComponent,ref } from 'vue'
export default defineComponent({
    setup(){
        let t = ref(true);
        return {t}
    }
})
</script>

<style>

</style>