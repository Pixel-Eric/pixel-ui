# PageTurn 分页

此项目是原有像素论坛的重构项目，但功能已经较为完善。



## 参数

| 属性名称  |   类型   | 是否必须 |     可选值/格式      |        说明        |                             备注                             |
| :-------: | :------: | :------: | :------------------: | :----------------: | :----------------------------------------------------------: |
|   type    |  string  |    no    |      none/rigth      | 是否开启分页的插槽 |          如果使用rigth则分页会自动到达父元素最右边           |
|  config   |  object  |    no    | {all,total,curpage}- |    分页的配置项    | all是指示分页总共有多少数据，total是指示分页一页显示多少条数据，curpage是指示当前为第几页 |
|  pageUp   | function |   yes    |                      |   上一页回调函数   |                 会向该回调函传递上一页的页码                 |
| pageDown  | function |   yes    |                      |   下一页回调函数   |                 会向该回调函传递下一页的页码                 |
| jumpPage  | function |   yes    |                      |    跳转回调函数    |                 回向该回调函数传递跳转的页数                 |
| pageStyle |  object  |    no    |    Vue Style写法     |   自定义样式外观   |                                                              |



```vue
```
