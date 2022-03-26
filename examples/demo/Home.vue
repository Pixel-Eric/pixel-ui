<template>
  <div class="home">
    <pixel-sticker
      position="right"
      bgColor="rgb(40, 153, 59)"
      content="0.0.27"
    >
      <p class="home-title">PixelUI</p>
    </pixel-sticker>
    <p class="home-title-vice">一个基于Vue3的UI组件库</p>
    <pix-tab :options="{
          indexs:tab,
          width:620,
          height:300,
          cur:'version'
      }">
      <template v-slot:publish>
        <pixel-table
          :stickerOptions="{
              mode:'config',
              config:[
                {content:'Hot',color:'tomato'},
                {content:'new',color:'green'},
                {content:'Hot',color:'tomato'}
              ],
              key:'title'
          }"
          :width="600"
          :data="publish"
        >
          <pixel-table-col
            name="title"
            value="标题"
            :width="450"
          />
          <pixel-table-col
            name="time"
            value="时间"
            align="right"
            color="#999"
          />
        </pixel-table>
      </template>
      <template v-slot:version>
        <pixel-table
          :data="news"
          :width="600"
          :lineBorder="true"
          :animation="true"
          mode="staggered"
          :head="true"
        >
          <pixel-table-col
            name="version"
            value="版本号"
            align="center"
            :width="100"
          />
          <pixel-table-col
            name="content"
            value="更新内容"
            :width="400"
          />
          <pixel-table-col
            name="time"
            value="时间"
            :width="100"
          />
        </pixel-table>
      </template>
    </pix-tab>

  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    let news = [
      {
        version: "0.0.27",
        content: "修复部分BUG，优化组件功能",
        time: "2022-2-16",
      },
      {
        version: "0.0.24",
        content: "添加了其他几个测试组件",
        time: "2022-2-10",
      },
      {
        version: "0.0.8",
        content: "第一个测试组件Button开始发布到NPM",
        time: "2022-2-1",
      },
      { version: "0.0.1", content: "PixelUI正式开始开发", time: "2022-1-20" },
    ];
    let publish = [
      { title: "测试了NavBar组件", time: "2022-2-16" },
      { title: "测试了DisplayBox组件", time: "2022-2-14" },
      { title: "测试了Table组件", time: "2022-2-13" },
      { title: "测试了Stiker组件", time: "2022-2-10" },
      { title: "测试了Tab组件", time: "2022-2-7" },
      { title: "测试了Button组件", time: "2022-2-3" },
    ];
    let tab = [
      { name: "publish", value: "公告",icon:'icon-huiyuanguanli' },
      { name: "version", value: "版本一览" },
    ];
    return { news, tab, publish };
  },
});
</script>

<style lang='scss'>
@font-face {
  font-family: "pixel-font";
  src: url(../assets/Zpix.ttf);
}
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(../assets/bg.png);
  background-repeat: no-repeat;
  font-family: "pixel-font";
  font-weight: bold;
  padding-top: 10rem;
  padding-bottom: 20rem;
  &-title {
    font-size: 2rem;
    color: rgb(255, 255, 255);
    text-shadow: 4px 4px 2px #666;
    font-weight: 800;
  }
  &-title-vice {
    margin-top: 5rem;
    font-size: 1.5rem;
    color: rgb(255, 255, 255);
    text-shadow: 4px 4px 2px #666;
  }
}
</style>