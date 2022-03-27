<template>
  <div>
    <pix-displaybox :options="{
        hiddenFooter:true,
        isHover:true,
            title:'梦魇官方2交流',
            width:500,
            height:150,
            icon:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp5.gexing.com%2FGSF%2Ftouxiang%2F20200712%2F20%2Fb4a5846ea2b3caae99ec5698b598a596.jpg%40%21200x200_3%3Frecache%3D20131108&refer=http%3A%2F%2Fp5.gexing.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647178278&t=7a16d537a6100e8eb6641ca7c03caa9a',
            content:'这是我要显示的信息！！！'
      }">
      <div class="test">
        <div>
          <p>time:</p>
          <p>2022-2-11</p>
        </div>
        <div>
          <p>最新动态:</p>
          <p>XXXXXXXXXXX</p>
        </div>
      </div>
    </pix-displaybox>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.test {
  display: flex;
  & > div {
    display: flex;
  }
}
</style>
