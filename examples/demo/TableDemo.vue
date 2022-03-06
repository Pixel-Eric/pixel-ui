<template>
  <div>
      <pixel-table
      :data="news"
      :width="500"
      :height="200"
      :stickerOptions="{
          mode:'config',
          config:[
            {content:'1th',color:'red'},
            {content:'2th',color:'red'},
            {content:'3th',color:'green'},
          ],
          key:'title'
      }"
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
        let d = [
            {name:'张三',age:20,num:12,salary:1000},
            {name:'李四',age:30,num:123,salary:1200},
            {name:'王五',age:22,num:123,salary:2200},
            {name:'赵六',age:27,num:123,salary:4300},
            {name:'田七',age:24,num:123,salary:5600}
        ];
        let news = [
            {title:'【杂谈】浅谈游戏中的道德困境',time:'2022-2-16'},
            {title:'【GDC中字】游戏考古学 - 挖掘并保存电子游戏挖掘并保存电子游戏挖掘并保存电子游戏123',time:'2022-2-16'},
            {title:'【中英字幕】【GDC2021】设计解谜游戏的 30【中英字幕】【GDC2021】设计解谜游戏的.',time:'2022-2-16'},
            {title:'【教学课程】Unity 中的光照模型',time:'2022-2-16'},
            {title:'【科普知识】游戏基础知识——毒',time:'2022-2-16'},
            {title:'【科普知识】Blender 新手雕刻入门教程 #4',time:'2022-2-16'},
            {title:'【游戏拓展】体素沙漠地牢（TINY DUNGEON ...',time:'2022-2-16'}
        ]
        // console.log(d[1].length);
        
        return {d,news};
    }
})
</script>