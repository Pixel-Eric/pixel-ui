# DisplayBox 展示盒子
一个可以展示信息的盒子，你也可以称它为卡片，目前功能还在开发当中，后续会将继续完善相关的内容。
<style>
    .box{
        margin:1rem;
    }
    .test{
        display:flex;
        justify-content: space-between;
    }
    .test div{
        display:flex;
    }
</style>
## 预览
 作为版块信息展示:
<div class="box">
    <pixel-displaybox
    title="梦魇官方2交流"
    width="500"
    height="150"
    icon="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp5.gexing.com%2FGSF%2Ftouxiang%2F20200712%2F20%2Fb4a5846ea2b3caae99ec5698b598a596.jpg%40%21200x200_3%3Frecache%3D20131108&refer=http%3A%2F%2Fp5.gexing.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647178278&t=7a16d537a6100e8eb6641ca7c03caa9a"
    content="这是我要显示的信息！！！">
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
    </pixel-displaybox >
</div>
作为评论信息:
<div class="box">
    <pixel-displaybox
        title="Eric 评论了《SELF》"
        width="500"
        height="150"
        icon="https://pixelfile-1306262005.cos.ap-nanjing.myqcloud.com/upload/2021/12/ec1d26e8-8e41-4bbb-947b-659bf6a26e9d.jpeg"
        content="所实话有点小小的失望，对于这款游戏抱有的期望还是太高了！"
        footer="time:2022-2-11"
        footerAlign="right"
    />
</div>
作为用户推荐卡片:
<div class="box">
    <pixel-displaybox
        title="ID:Avery"
        content="此人很懒，暂时没有签名"
        icon="https://pixelfile-1306262005.cos.ap-nanjing.myqcloud.com/upload/2022/1/3907d0e9-c25f-4f0f-89e0-75f50b1830ad.jpeg"
    >
        <div style="text-align:right">
            <pixel-btn type="warn" value="添加好友" />
        </div>
    </pixel-displaybox>
</div>

## 代码
```html

<pixel-displaybox
    title="梦魇官方2交流"
    width="500"
    height="150" icon="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp5.gexing.com%2FGSF%2Ftouxiang%2F20200712%2F20%2Fb4a5846ea2b3caae99ec5698b598a596.jpg%40%21200x200_3%3Frecache%3D20131108&refer=http%3A%2F%2Fp5.gexing.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647178278&t=7a16d537a6100e8eb6641ca7c03caa9a"
    content="这是我要显示的信息！！！"
  >
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
  </pixel-displaybox>

  <pixel-displaybox
    title="Eric 评论了《SELF》"
    width="500"
    height="150"
    icon="https://pixelfile-1306262005.cos.ap-nanjing.myqcloud.com/upload/2021/12/ec1d26e8-8e41-4bbb-947b-659bf6a26e9d.jpeg"
    content="所实话有点小小的失望，对于这款游戏抱有的期望还是太高了！"
    footer="time:2022-2-11"
    footerAlign="right"
  />
    <pixel-displaybox
        title="ID:Avery"
        content="此人很懒，暂时没有签名"
        icon="https://pixelfile-1306262005.cos.ap-nanjing.myqcloud.com/upload/2022/1/3907d0e9-c25f-4f0f-89e0-75f50b1830ad.jpeg"
    >
        <div style="text-align:right">
            <pixel-btn type="warn" value="添加好友" />
        </div>
    </pixel-displaybox>
```

## 参数

|   属性名称   |  类型  | 是否必须 |    可选值     |        说明        |  备注  |
| :----------: | :----: | :------: | :-----------: | :----------------: | :----: |
|    width     | number |    no    |       -       |   展示卡片的宽度   |  暂无  |
|    height    | number |    no    |       -       |   展示卡片的高度   |  暂无  |
|     icon     | string |    no    |               |   展示卡片的图片   |  暂无  |
|    title     | string |    no    |       -       |   展示卡片的标题   |  暂无  |
|   content    | string |    no    |               |   展示卡片的内容   |  暂无  |
|    footer    | string |    no    |               |   展示卡片的页脚   |        |
|  iconWidth   | number |    no    |               | 展示卡片图标的宽度 | 百分百 |
|  titleStyle  | Object |    no    | Vue Style写法 |   标题样式配置项   |        |
| contentStyle | Object |    no    | Vue Style写法 |   内容样式配置项   |        |
| footerStyle  | Object |    no    | Vue Style写法 |   页脚样式配置项   |        |

### footer

如果是一个string类型的值，会直接显示在底部，如果给定一个插槽会将插入底部。

注:footer-align属性只在 footer为string时生效。