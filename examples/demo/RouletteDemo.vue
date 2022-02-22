<template>
  <div class="demo-roulette">
      <pixel-roulette :data="d" :width="800" :height="480" :speed="2000">

      </pixel-roulette>
  </div>
</template>

<script>
import { defineComponent } from "vue"
export default defineComponent({
    setup(){
        let d = [
            {imgUrl:require('../assets/head-5928mm-Moral_Choices.jpg'),title:'测试标题1'},
            {imgUrl:require('../assets/head-6371eu-The_Forgotten_City.jpg'),title:'测试标题2'},
            {imgUrl:require('../assets/l-3012688-YtKdaf.jpg'),title:'测试标题3'}
        ]
        return {d}
    }
})
</script>

<style scoped lang='scss'>

</style>