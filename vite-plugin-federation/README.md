- [vite 联邦模块](#vite-联邦模块)
  - [各种模块共享方案痛点](#各种模块共享方案痛点)
    - [npm 包](#npm-包)
    - [依赖外部化（external）+CDN 引入](#依赖外部化externalcdn-引入)
    - [Monorepo 大仓库](#monorepo-大仓库)
  - [vite 联邦模块插件](#vite-联邦模块插件)
    - [优势](#优势)
    - [实现原理](#实现原理)
    - [Demo](#demo)
  - [参考文档](#参考文档)

# vite 联邦模块

## 各种模块共享方案痛点

### npm 包

- 包更新后，要在应用生效需修改包版本并重新部署，应用多了流程很繁琐
- 包代码会被打包进应用产物，影响应用打包速度、产物体积

### 依赖外部化（external）+CDN 引入

- 兼容问题，一般依赖外部化会使用 umd 的产物，但并不是所有包都有 umd 产物
- 需手动管理依赖顺序，如：antdv 依赖 vue 、moment，那 vue 、moment 也需要 external 并且在 html 引入，同时还要保证引入先后顺序，moment 放在 antdv 之后代码将无法运行，第三方包的间接依赖非常多，这将是个噩梦。

### Monorepo 大仓库

- 不同应用代码需放在同一个仓库
- ci 复杂，项目多了构建时间长，开发心智负担重
- 包代码会被打包进应用产物，影响应用打包速度、产物体积

## vite 联邦模块插件

### 优势

- 实现任意粒度的模块共享。这里所指的模块粒度可大可小，包括第三方 npm 依赖、业务组件、工具函数，甚至可以是整个前端应用！而整个前端应用能够共享产物，代表着各个应用单独开发、测试、部署，这也是一种微前端的实现。
- 优化构建产物体积。远程模块可以从本地模块运行时被拉取，而不用参与本地模块的构建，可以加速构建过程，同时也能减小构建产物。
- 运行时按需加载。远程模块导入的粒度可以很小，如果你只想使用 app1 模块的 add 函数，只需要在 app1 的构建配置中导出这个函数，然后在本地模块中按照诸如 import('app1/add')的方式导入即可，这样就很好地实现了模块按需加载。
- 第三方依赖共享。通过模块联邦中的共享依赖机制，我们可以很方便地实现在模块间公用依赖代码，从而避免以往的 external + CDN 引入方案的各种问题。

### 实现原理

[实现原理](https://juejin.cn/book/7050063811973218341/section/7068105121523531806#heading-7)

### Demo

`vite-plugin-federation/remote` 即远程模块，用来生产模块并暴露运行时容器供本地模块消费，在生产环境远程模块需要部署到云端(CDN)，demo 这边使用 `vite preview` 来模拟。

启动远程模块

```bash
pnpm i
pnpm preview
```

`vite-plugin-federation/host` 即本地模块用来消费远程模块。

启动本地模块

```bash
pnpm i
pnpm dev
```

## 参考文档

[vite-plugin-federation 官网](https://github.com/originjs/vite-plugin-federation/blob/main/README-zh.md)

[神三元掘金小册对 MF 的说明](https://juejin.cn/book/7050063811973218341/section/7068105121523531806#heading-5)
