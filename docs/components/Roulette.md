# Roulette 轮盘

乍一听名字，你可能有点懵。虽然在Pixel中这东西叫做轮盘，但是其它UI组件库中你可能听到过另一个熟悉的名字，跑马灯。

为什么PixelUI叫它为轮盘，这是因为我们认为它是一个轮询式的UI组件，就像左轮枪的轮盘弹夹那样，所以我们称它为轮盘。



## 参数

|   属性名称    |   类型   | 是否必须 |             可选值/格式              |      说明      |                备注                 |
| :-----------: | :------: | :------: | :----------------------------------: | :------------: | :---------------------------------: |
|     width     |  number  |    no    |                                      |   轮盘的宽度   |                                     |
|    height     |  number  |    no    |                  -                   |   轮盘的高度   |                                     |
|    render     |  string  |    no    |               arr\slot               | 轮盘的渲染模式 |                                     |
|     data      | string[] |    no    | [{imgUrl:'',title:'','subtitle':''}] |   轮盘的数据   | 仅在使用arr渲染模式的情况下会被读取 |
|  titleStyle   |  object  |    no    |              Vue Style               |    标题样式    |                                     |
| subtitleStyle |  object  |    no    |              Vue Style               |   副标题样式   |                                     |

## 指定组件

所谓的指定组件也称为指针组件，即指针指上去的一瞬间显示的内容，可以是各种数据，也可以是其他的内容，总之你可以在指定组件中显示更多的组件。

#### 使用方法

```vue
      <pixel-roulette :data="d" :width="800" :height="480" :speed="2000">
          <template v-slot:direction>
              <div class="demo-direction">
                  123123
              </div>
          </template>
      </pixel-roulette>
```

> 将组件插入到预留的direction组件中即可

#### 获取当前轮盘详细数据

你肯定有点疑惑，我该如何获取显示的数据?

例如您的数据已经包含在了轮盘的data当中，那么您可以使用作用域插槽进行接收值，我们会将data传递您。

```vue
      <pixel-roulette :data="d" :width="800" :height="480" :speed="2000">
          <template v-slot:direction="scope">
              <div class="demo-direction">
                  {{scope.data}}
              </div>
          </template>
      </pixel-roulette>
```

