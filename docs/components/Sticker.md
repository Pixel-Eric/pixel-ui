# Sticker 贴纸

为你的文字或其他贴上一个小小的提示，我们将它命名为贴纸。

## 预览

<pixel-sticker content="Hot" bgColor="red">
    <span>这是一个很长的文章标题</span>
</pixel-sticker>

## 代码

```vue
    <pixel-sticker content="Hot">
        <span>这是一个很长的文章标题</span>
    </pixel-sticker>
```



## 参数

| 属性名称 |  类型  | 是否必须 |                         可选值/格式                          |      说明      |               备注               |
| :------: | :----: | :------: | :----------------------------------------------------------: | :------------: | :------------------------------: |
| content  | string |   yes    |                                                              | 贴纸显示的内容 |    这里可以设置选项卡,例如{}     |
|   mode   | string |    no    |                         normal、tip                          | 贴纸的工作模式 | 下面的例子会将展示每种模式的区别 |
| position | string |    no    | left、right、top、bottom、left-top、left-bottom、right-bottom、right-top、center-top、center-bottom | 贴纸显示的位置 | 根据设置可以让贴纸贴在不同的位置 |
| bgColor  | string |    no    |                                                              |  贴纸背景颜色  |                                  |
|  color   | string |    no    |                                                              |  帖子文字颜色  |                                  |

接下来将为您介绍两种工作模式

### 内容模式

如果您设置了content这个参数并传入了相应的值，则会启用内容模式进行渲染。

当然如果仅仅是想要快速创建一个贴纸，我们推荐您使用内容模式，如果想要定制自己的贴纸，我们推荐您使用插槽模式，因为那样会更加灵活。

### 插槽模式

如果您没有设置对应的值则会使用插槽模式进行渲染。

例如您想再每个文章标题右侧贴上一个按钮组件，则您可以这样编写

```vue
  <pixel-sticker
    position="right"
  >
    <p>这是一个贴了自定义组件的标题</p>
    <template v-slot:customize>
        <pixel-btn value="移除"></pixel-btn>
    </template>
  </pixel-sticker>
```


  <pixel-sticker position="right">
    <p>这是一个贴了自定义组件的标题</p>
    <template v-slot:customize>
        <pixel-btn value="移除"></pixel-btn>
    </template>
  </pixel-sticker>




#### 如何使用该模式？

将您创建的内容插入到我们为您预留的customize插槽当中即可。
