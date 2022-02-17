# Table 表格

表格是我们在Web开发当中一个必不可少的数据载体，PixelUI也内置了这种载体，让你在使用时更加便利，内置了更多强大的效果，用最少的代码开发出一个漂亮的表格。

## 预览

<TableDemo />

## 代码

```vue
      <template>
        <div id="table-demo">
            <pixel-table
            :data="news"
            :width="520"
            :height="320"
            :animation="true"
            >
                <pixel-table-col name="title" :width="400" />
                <pixel-table-col name="time" :width="100" color="#999" />
            </pixel-table>
        </div>
        </template>

        <script>
        import { defineComponent } from "vue"
        export default defineComponent({
            setup(){
                let news = [
                    {title:'【杂谈】浅谈游戏中的道德困境',time:'2022-2-16'},
                    {title:'【GDC中字】游戏考古学 - 挖掘并保存电子游戏挖掘并保存电子游戏挖掘并保存电子游戏123',time:'2022-2-16'},
                    {title:'【中英字幕】【GDC2021】设计解谜游戏的 30【中英字幕】【GDC2021】设计解谜游戏的.',time:'2022-2-16'},
                    {title:'【教学课程】Unity 中的光照模型',time:'2022-2-16'},
                    {title:'【科普知识】游戏基础知识——毒',time:'2022-2-16'},
                    {title:'【科普知识】Blender 新手雕刻入门教程 #4',time:'2022-2-16'},
                    {title:'【游戏拓展】体素沙漠地牢（TINY DUNGEON ...',time:'2022-2-16'}
                ]  
                return {news};
            }
        })
        </script>
        <style >
        #table-demo{
            overflow: hidden;
        }
        </style>
```



## 参数

|  属性名称  |   类型   | 是否必须 |   可选值/格式    |      说明      |                             备注                             |
| :--------: | :------: | :------: | :--------------: | :------------: | :----------------------------------------------------------: |
|    head    | boolean  |    no    |                  | 是否开启导航头 |         如果开启导航头会默认插入th标签，默认为false          |
|   width    |  number  |    no    |        -         |   表格的宽度   |                                                              |
|   height   |  number  |    no    |        -         |   表格的高度   |                                                              |
|    data    | object[] |    no    |        -         |  表格的数据源  |                                                              |
|   serial   | boolean  |    no    |                  | 是否开启序列号 |                                                              |
|    mode    |  string  |    no    | nomal、staggered |    表格模式    | 正常模式、交错模式，交错模式会按照奇数行和偶数行进行变换颜色 |
| outBorder  | boolean  |    no    |                  |     外边框     |                         是否带外边框                         |
| lineBorder | boolean  |    no    |                  |     行边框     |                    是否开启每行数据的边框                    |
| animation  | boolean  |    no    |                  |    动画效果    |                     是否开启指向动画效果                     |

### pixel-table-col参数

| 属性名称 |  类型  | 是否必须 |            可选值/格式             |      说明      | 备注 |
| :------: | :----: | :------: | :--------------------------------: | :------------: | :--: |
|   name   | string |   yes    |                                    |     头标题     |      |
|  width   | number |    no    |                 -                  |   表格的宽度   |      |
|  align   | string |    no    | 默认left,可选值left、center、right |  文字对其方式  |      |
|  color   | string |    no    |                                    | 显示文字的颜色 |      |

### 

## 数据渲染模式

PixelTable提供了两种渲染表格的方式，你可以使用表格内置的辅助渲染，也可以配合PixelTableCol进行自定义渲染。

### 辅助渲染

如果用户仅仅传递了data，那么表格则使用辅助渲染，效果比较简单，如果你仅仅想要快速创建一个可以存放表格额载体，可以尝试一下辅助渲染，如果想要进行客制化表格内容(顺序、对其方式以及其他),那么推荐您使用自定义渲染，因为那将会更加灵活，同时代码也更加复杂，当然也没有太过复杂。

### 自定义渲染

如果用户想要开启自定义渲染可以使用pixe-tab-col组件进行操作

例如传递的数据为:

```js
        let d = [
            {name:'张三',age:20,ye:12},
            {name:'李四',age:30,ye:123}
        ]
```

此时我想将ye作为工号显示,name作为姓名显示，age作为年龄显示,并将工号的数据放置在最前方:

```vue
      <pixel-table :data="d" :head="true" >
          <pixel-table-col name="num" value="工号" />
          <pixel-table-col name="name" value="姓名" />
          <pixel-table-col name="age" value="年龄" />
          <pixel-table-col name="salary" value="薪水">
      </pixel-table>
```

得到的效果如下:

  <pixel-table :data="[
            {name:'张三',age:20,num:12,salary:1000},
            {name:'李四',age:30,num:123,salary:1200},
            {name:'王五',age:22,num:123,salary:2200},
            {name:'赵六',age:27,num:123,salary:4300},
            {name:'田七',age:24,num:123,salary:5600}
        ]" :head="true" :width="500" >
      <pixel-table-col name="num" value="工号" align="center" />
      <pixel-table-col name="name" value="姓名" />
      <pixel-table-col name="age" value="年龄" />
      <pixel-table-col name="salary" value="薪水" />
  </pixel-table>

