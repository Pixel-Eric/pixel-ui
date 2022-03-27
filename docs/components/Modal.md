# Modal

您可以基于我们提供的模态框组件快速开发定制属于您自己的弹窗



### 参数

### 基础配置

|       属性名称        |   类型   | 是否必须 |                            可选值                            |           说明           |           备注            |
| :-------------------: | :------: | :------: | :----------------------------------------------------------: | :----------------------: | :-----------------------: |
|         width         |  number  |    no    |                              -                               |       模态框的宽度       |           暂无            |
|        height         |  number  |    no    |                              -                               |       模态框的高度       |           暂无            |
|        radius         | boolean  |    no    |                                                              |      模态框是否圆角      |                           |
|         close         | callback |   yes    |                                                              |     模态框的关闭回调     |                           |
|        display        | boolean  |   yes    |                    一个拥有响应式的布尔值                    |     模态框的显示状态     |        open，close        |
| top/left/right/bottom |  number  |    no    |                                                              | 模态框距离各个方位的距离 |                           |
|       position        |  string  |    no    | center/top/left/right/bottom/top-left/top-right/bottom-left/bottom/right |     模态框出现的位置     |                           |
|     contentStyle      | VueStyle |    no    |                                                              |     模态框内容的样式     | 只有content为string时有效 |
|         icon          |  string  |    no    |                                                              |        模态框图标        | 只有content为string时有效 |

### 背景配置 background

|  属性名称  |  类型   | 是否必须 | 可选值 |             说明             | 备注 |
| :--------: | :-----: | :------: | :----: | :--------------------------: | :--: |
|  bgColor   |  color  |    no    |        |        模态框背景颜色        |      |
| bgOpacity  | number  |    no    |  1-0   |       模态框背景透明度       |      |
|    show    | boolean |    no    |        |      模态框背景是否显示      |      |
| clickClose | boolean |    no    |        | 模态框背景点击是否关闭模态框 |      |

### 动画配置 animation

| 属性名称 |  类型  | 是否必须 | 可选值 |      说明      | 备注 |
| :------: | :----: | :------: | :----: | :------------: | :--: |
|  enter   | string |    no    |        | 模态框进入动画 | 暂无 |
|  leave   | string |    no    |        | 模态框进入动画 | 暂无 |

### 标题配置 title

| 属性名称  |  类型   | 是否必须 |    可选值     |        说明        | 备注 |
| :-------: | :-----: | :------: | :-----------: | :----------------: | :--: |
|   show    | boolean |    no    |               | 模态框标题是否显示 | 暂无 |
| fontStyle | string  |    no    | Vue Style写法 | 模态框标题字体样式 | 暂无 |

### 事件配置 events 暂时未开发

| 属性名称 |   类型   | 是否必须 | 可选值 |      说明      | 备注 |
| :------: | :------: | :------: | :----: | :------------: | :--: |
|  close   | callback |    no    |        | 模态框关闭回调 | 暂无 |
|   open   | callback |    no    |        | 模态框打开回调 | 暂无 |

### 阴影配置 shadow

| 属性名称 |  类型   | 是否必须 | 可选值 |        说明        | 备注 |
| :------: | :-----: | :------: | :----: | :----------------: | :--: |
|   show   | boolean |    no    |        | 模态框阴影是否显示 | 暂无 |
|  color   |  color  |    no    |        |   模态框阴影颜色   | 暂无 |
