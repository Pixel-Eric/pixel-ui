<template>
  <div id="table-demo">
      <pixel-table
      :data="news"
      :width="520"
      :height="320"
      :animation="true"
      >
        <pixel-table-col name="title" :width="400" />
        <pixel-table-col name="time" :width="100" color="#999" />
      </pixel-table>
  </div>
</template>

<script>
import { defineComponent } from "vue"
export default defineComponent({
    setup(){
        let news = [
            {title:'【杂谈】浅谈游戏中的道德困境',time:'2022-2-16'},
            {title:'【GDC中字】游戏考古学 - 挖掘并保存电子游戏挖掘并保存电子游戏挖掘并保存电子游戏123',time:'2022-2-16'},
            {title:'【中英字幕】【GDC2021】设计解谜游戏的 30【中英字幕】【GDC2021】设计解谜游戏的.',time:'2022-2-16'},
            {title:'【教学课程】Unity 中的光照模型',time:'2022-2-16'},
            {title:'【科普知识】游戏基础知识——毒',time:'2022-2-16'},
            {title:'【科普知识】Blender 新手雕刻入门教程 #4',time:'2022-2-16'},
            {title:'【游戏拓展】体素沙漠地牢（TINY DUNGEON ...',time:'2022-2-16'}
        ]  
        return {news};
    }
})
</script>
<style >
#table-demo{
    overflow: hidden;
}
</style>