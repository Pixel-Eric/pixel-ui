<template>
  <div>
      <pixel-table 
      :data="d" 
      :width="400" 
      :height="185"
      :head="true" 
      :outBorder="true"
      :lineBorder="true"
      mode="staggered" >
          <pixel-table-col name="num" value="工号" align="center" :width="120" />
          <pixel-table-col name="name" value="姓名" align="center" :width="130" />
          <pixel-table-col name="age" value="年龄" align="center" :width="130" />
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
        ]
        // console.log(d[1].length);
        
        return {d};
    }
})
</script>