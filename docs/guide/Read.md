# 准备
## 安装
<CodeGroup>
  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn add pixel-ui
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install pixel-ui
```

  </CodeGroupItem>
</CodeGroup>

## 使用
### 引入组件库
#### 全部引入
```js
import PixelUI from "pixel-ui"
import 'pixel-ui/dist/css/pixelCss.css'
app.user(PixelUI).mount("#app")
```
#### 按需加载

```js
import {Button} from "pixel-ui"
import 'pixel-ui/dist/css/button.css'
app.user(Button).mount("#app")
```