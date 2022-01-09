# 基于 Vite 的前端库开发模版（React）

此模版用于开发基于 React 的前端库，支持**实时开发预览**和**打包构建**。

## 命令

###  开发预览

使用 `yarn dev` 命令启动开发预览。

![截屏2022-01-08 下午3.27.14](https://tva1.sinaimg.cn/large/008i3skNgy1gy6aoxgnrgj31d00g4dg5.jpg)



### 打包构建

使用 `yarn build` 命令启动打包构建。最终打包结果为 ES Module 格式，打包发布后在其他应用中通过以下命令即可引入：

```js
import Button from 'x-button'; // x-button 即包名称，此处是示例
import 'x-button/lib/style.css'; // 引入对应的CSS文件
```



### 测试

使用 `yarn test` 命令运行测试。

使用 `yarn test:coverage` 命令运行测试并生成覆盖率。



## 支持功能

1. 支持 Typescript，支持打包时输出 TS 类型文件
2. 支持使用 Less 语法
3. 支持导入 SVG 组件语法，即 `import { ReactComponent as IconSvg } from './icon.svg'`
4. 支持函数及组件的测试
5. Eslint、Prettier 配置，提交 commit 时自动进行语法检查

关于模版的更多信息可参考 👉[使用 Vite 开发前端库实践](https://juejin.cn/post/7050743861492056078/)

