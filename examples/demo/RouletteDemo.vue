<template>
  <div class="demo-roulette">
      <pixel-roulette 
      :data="d" 
      :width="800"
      :height="480"
      :speed="2000"
      :titleStyle="{fontSize:'1.8rem'}">
          <template v-slot:direction="scope">
              <div class="demo-direction">
                  <div style="padding-top:1rem">
                      <pixel-sticker fontSize="1.5rem" :height="30" :content="scope.data.hot" color="#fff" bgColor="tomato" />
                  </div>
              </div>
          </template>
      </pixel-roulette>
  </div>
</template>

<script>
import { defineComponent } from "vue"
export default defineComponent({
    setup(){
        let d = [
            {imgUrl:require('../assets/head-5928mm-Moral_Choices.jpg'),title:'测试标题1',subtitle:'这个标题1的副标题',hot:'120',badge:'扮演,解密'},
            {imgUrl:require('../assets/head-6371eu-The_Forgotten_City.jpg'),title:'测试标题2',subtitle:'这个标题2的副标题',hot:'292',badge:'奇幻,动作'},
            {imgUrl:require('../assets/l-3012688-YtKdaf.jpg'),title:'测试标题3',subtitle:'这个标题2的副标题',hot:'300',badge:'魔法,RPG'}
        ]
        return {d}
    }
})
</script>

<style scoped lang='scss'>
.demo-direction{
    height: 100%;
    background-color: rgba(0,0,0,0.5);
}
</style>