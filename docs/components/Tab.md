# Tab 选项卡
一个普普通通的选项卡
## 预览

<pixel-tab  >
    <template v-slot:tab1>
        <div>
            这里是选项卡1的内容
        </div>
    </template>
    <template v-slot:tab2>
        <div>
            这里是选项卡2的内容
        </div>
    </template>
</pixel-tab>

## 代码
```html
<div>
    <pixel-tab  >
        <template v-slot:tab1>
            <div>
                这里是选项卡1的内容
            </div>
        </template>
        <template v-slot:tab2>
            <div>
                这里是选项卡2的内容
            </div>
        </template>
    </pixel-tab>
</div>
```

## options配置项

|   属性名称   |   类型   | 是否必须 |            可选值/格式            |         说明         |           备注            |
| :----------: | :------: | :------: | :-------------------------------: | :------------------: | :-----------------------: |
|    indexs    | string[] |   yes    | {name:test,value:选项卡1,icon:‘’} |     选项卡的索引     | 这里可以设置选项卡,例如{} |
|    width     |  number  |    no    |                 -                 |     选项卡的宽度     |                           |
|    height    |  number  |    no    |                 -                 |     选项卡的高度     |                           |
|  lineColor   |  color   |    no    |                                   | 选项卡选中下划线颜色 |                           |
|  textColor   |  color   |    no    |                                   |    选项卡文字颜色    |                           |
|   tabAlign   |  string  |    no    |     left(默认),right,uniform      |    选项卡布局方式    |                           |
| hiddenHeader | boolean  |    no    |         true,false(默认)          |  是否隐藏选项卡头部  |                           |
|   position   |  string  |    no    |            top/bottom             |    选项卡索引位置    |                           |
|   TabStyle   |  object  |    no    |                                   |      选项卡配置      |                           |
| indexHeight  |  string  |    no    |           '1px/1em/1%'            |      选项卡高度      |                           |

### 如何添加选项内容

在tab组件中插入对应的具名插槽即可，请确保对象选项卡的name值与插槽名称一致。

注:如果不设置indexs的值，会带tab1和tab2两个具名插槽。

#### 示例

```vue
<template>
  <pixel-tab :indexs="config">
      <template v-slot:test>
          测试选项卡内容
      </template>
      <template v-slot:test2>
          测试选项卡内容2
      </template>
  </pixel-tab>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
    setup(){
        let config = [
            {name:test,value:'Test1'},
            {name:test2,value:'Test2'}
        ]
        return {config}
    }
})
</script>
```

