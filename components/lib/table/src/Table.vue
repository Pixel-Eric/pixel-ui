<template>
  <div
    class="pixel-table"
    :class="table_style"
    :style="{width:width+'px',height:height+'px'}"
  >
    <!-- 表格头部 Table Header -->
    <div class="pixel-table-header-wrapper">
      <div v-if="!enable_slot&&head">
        <table class="pixel-table-reality">
          <colgroup>
            <col
              v-for="i in header_data.length"
              :name="`pixel-table_1_col_${i}`"
              width="100%"
              :key="i"
            >
          </colgroup>
          <thead >
            <tr class="pixel-table-header-line">
              <td
                v-for="h in Object.keys(header_data)"
                :class="`pixel-table_1_col_${parseInt(h)+1}`"
                :key="h"
              >{{header_data[h]}}</td>
            </tr>
          </thead>
        </table>
      </div>
      <!-- 表格数据插槽 Table Data Slot -->
      <div v-show="head" :class="{'pixel-table-header-line':lineBorder}">
          <table class="pixel-table-reality">
              <colgroup>
                <col v-for="w in Object.keys(header_widths)"
                :name="`pixel-table-1_col_${parseInt(w)+1}`"
                :width="header_widths[w]"
                :align="slot_align[w]"
                :key="w">
              </colgroup>
              <thead>
                  <tr>
                      <slot ></slot>
                  </tr>
              </thead>
          </table>
      </div>
    </div>
    <!-- 数据显示区域 -->
    <div class="pixel-table-data-wrapper">
      <table class="pixel-table-reality" cellspacing="0">
        <colgroup>
            <col v-for="w in Object.keys(header_widths)"
            :name="`pixel-table-1_col_${parseInt(w)+1}`"
            :width="header_widths[w]"
            :key="w">
        </colgroup>
        <tr
          v-for="h in data"
          :class="{'pixel-table-data-line':lineBorder}"
          :key="h"
        >
          <td
            v-for="d in Object.keys(header_data)"
            :style="{textAlign:slot_align[d]}"
            :key="d"
          >{{h[header_data[d]]}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, provide,nextTick,onBeforeMount } from "vue";
export default defineComponent({
  name: "pixel-table",
  props: {
    head: { type: Boolean, default: false },
    width: { type: Number, default: 300 },
    height: { type: Number, default: 300 },
    data: { type: Array, default: new Array() },
    serial: { type: Boolean, default: false },
    outBorder:{type:Boolean, default: false},
    lineBorder:{type:Boolean, default: false},
    mode: { type:String, default: "normal"}
  },
  setup(props) {
    let config = reactive({
      header_data: [],
      enable_slot: false,
      header_widths: [],
      slot_align:[],
      table_style:{'pixel-table-border':props.outBorder}
    });

    onBeforeMount(()=>{
        config.table_style[`pixel-table-${props.mode}`] = true;
    })

    function isColComponent(flag = false) {
        config.enable_slot = flag;
        if(!flag){
            config.header_data = Object.keys(props.data[0]);
        }
    }
    //表格数据渲染
    function dataRender(col) {
      //将列名称依次返回
      config.header_data.push(col.name);
      //将列的宽度依次返回
      config.header_widths.push(col.width);
      config.slot_align.push(col.align);
    }
    //将回调函数传递给子组件，用于检测是否存在列组件
    provide("dataRender", dataRender);
    provide("isColComponent", isColComponent);

    //检测一下是否传入列组件
    nextTick(()=>{
        if(!config.enable_slot){
            config.header_data = Object.keys(props.data[0]);
        }
    })
    // isColComponent();
    return { ...toRefs(config) };
  },
});
</script>