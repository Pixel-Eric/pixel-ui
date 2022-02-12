# Button 按钮
这仅仅是一个按钮。

<style>
    .box{
        text-align: center;
        margin:1rem;
    }
    .pixel-btn{
        margin:.5rem;
    }
</style>

## 预览
<div class="box">
    <pixel-btn  />
    <pixel-btn type="success" />
    <pixel-btn type="warn" />
    <pixel-btn type="danger" />
</div>
<div class="box">
    <pixel-btn :radius="true" />
    <pixel-btn :radius="true" type="success" />
    <pixel-btn :radius="true" type="warn" />
    <pixel-btn :radius="true" type="danger" />
</div>
<div class="box">
    <pixel-btn mode="border"/>
    <pixel-btn mode="border" type="success" />
    <pixel-btn mode="border" type="warn" />
    <pixel-btn mode="border" type="danger" />
</div>

## 代码
```html
<div>
    <pixel-btn  />
    <pixel-btn type="success" />
    <pixel-btn type="warn" />
    <pixel-btn type="danger" />
</div>
<div>
    <pixel-btn :radius="true" />
    <pixel-btn :radius="true" type="success" />
    <pixel-btn :radius="true" type="warn" />
    <pixel-btn :radius="true" type="danger" />
</div>
<div>
    <pixel-btn mode="border"/>
    <pixel-btn mode="border" type="success" />
    <pixel-btn mode="border" type="warn" />
    <pixel-btn mode="border" type="danger" />
</div>
```
## 参数
| 属性名称 |    类型    | 是否必须 |           可选值           |      说明      |      备注      |
| :------: | :--------: | :------: | :------------------------: | :------------: | :------------: |
|  value   |   string   |   yes    |             -              | 按钮的显示名称 |   暂无   |
|   icon   |   string   |    no    |             -              | 按钮的显示图标 |   暂无   |
|   type   | string |    no    | normal,warn,success,danger |  按钮显示样式  |   暂无   |
|  radius  |  boolean   |    no    |             -              |  按钮是否圆角  |   暂无   |
|   mode   | string |    no    |        fill,border         | 按钮的填充模式 |   暂无   |