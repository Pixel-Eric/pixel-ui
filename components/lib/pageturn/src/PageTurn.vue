<template>
  <div class="page">
    <slot v-if="enableSlot"></slot>
    <div v-if="!enableSlot"></div>
    <div class="pageturn">
      <div>
        <span>跳转到</span>
        <input
          v-model="gopage"
          type="text"
        />
        <p
          @click="goToPage(gopage)"
          :style="pageStyle"
        >Go</p>
      </div>

      <!-- 上一页显示 -->
      <p
        class="last-page"
        :style="pageStyle"
        v-if="curpage!==1"
        @click="beforePage(curpage-1)"
      >上一页</p>
      <p
        class="page-disabled"
        v-else
      >上一页</p>

      <!-- 正常显示 -->
      <template v-if="!Toolong">
        <p
          v-for="p in page"
          :key="p"
          @click="goToPage(p)"
          :class="{pageselect:p==curpage}"
          :style="pageStyle"
        >{{p}}</p>
      </template>
      <template v-else>
        <p
          v-for="p in plus"
          :class="{pageselect:p==curpage}"
          @click="goToPage(p)"
          :key="p"
          :style="pageStyle"
        >{{p}}</p>
      </template>
      <!-- 超出正常显示范围 -->

      <span v-if="Toolong&&(curpage!==page)&&(page-curpage>4)">...</span>
      <p
        v-if="Toolong"
        :style="pageStyle"
        @click="goToPage(page)"
        :class="{pageselect:curpage==page} "
      >{{page}}</p>

      <p
        class="next-page"
        :style="pageStyle"
        v-if="curpage!==page"
        @click="nextPage(curpage+1)"
      >下一页</p>
      <p
        class="page-disabled"
        v-else
      >下一页</p>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent, watchEffect, watch } from "vue";
export default defineComponent({
  name: "pixel-pageturn",
  props: {
    type: String,
    config: Object,
    pageUp: { type: Function, default: () => {} },
    pageDown: { type: Function, default: () => {} },
    jumpPage: { type: Function, default: () => {} },
    getAllpage: { type: Function, default: () => {} },
    pageStyle: { type: Object },
  },
  setup(props) {
    //默认值
    let def = {
      //总数
      all: 0,
      //一页显示多少数据
      total: 30,
      //当前页数
      curpage: 1,
    };

    //初始化翻页的配置信息
    let config = reactive({
      //是否开启插槽
      enableSlot: true,
      //是否超出最大显示长度
      Toolong: false,
      //组件显示的页数
      plus: [],
      page: 1,
      gopage: props.config?.curpage ? props.config.curpage : 1,
      ...(props?.config != null ? props.config : def),
    });
    //检测模式
    if (props.type == "rigth") {
      config.enableSlot = false;
    }

    //判断条数是否为整数
    let regx = /(?<before>\d+).(?<last>\d{1})/;
    //初始化组件显示的页数
    //保证除数不为零
    watch(
      () => props.config,
      () => {
        config.all = props.config.all;
        config.total = props.config.total;
        config.curpage = props.config.curpage;
      },
      { immediate: true, deep: true }
    );

    watchEffect(() => {
      let all = config.all ? config.all : 1; //总条数
      let total = config.total ? config.total : 1; //显示条数

      if (parseInt(regx.exec(all / total)?.groups.last) < 5) {
        config.page = Math.round(config.all / config.total) + 1;
      } else {
        config.page = Math.round(config.all / config.total);
      }
    });

    function beforePage(lastpage) {
      props.pageUp(lastpage);
      config.curpage = lastpage;
    }

    function nextPage(nextpage) {
      props.pageDown(nextpage);
      config.curpage = nextpage;
      console.log(config.curpage);
    }

    function goToPage(targetpage) {
      props.jumpPage(targetpage);
      config.curpage = targetpage;
    }

    watchEffect(() => {
      //是否超出标准最大显示长度
      if (config.page >= 10) {
        config.Toolong = true;
        //起始位置
        let start =
          parseInt(config.curpage) - 3 > 0 ? parseInt(config.curpage) - 3 : 1;
        //结束位置
        let end =
          parseInt(config.curpage) + 4 <= config.page
            ? parseInt(config.curpage) + 4
            : config.page;

        //清空当前显示索引数组
        config.plus = [];
        //添加页面索引
        for (let i = start; i < end; i++) {
          config.plus.push(i);
        }
      }else{
          config.Toolong = false;
      }
    });

    //如果父组件使用了getAllpage事件，就将计算后的总页数返回给父组件
    if (props.getAllpage !== undefined) {
      props.getAllpage(config.page);
    }

    return { ...toRefs(config), beforePage, nextPage, goToPage };
  },
});
</script>
