- [demo 说明](#demo-说明)
- [指令](#指令)
  - [创建新工作区](#创建新工作区)
  - [安装工作区依赖](#安装工作区依赖)
  - [运行工作区指令](#运行工作区指令)
  - [移除工作区依赖](#移除工作区依赖)
- [应用场景](#应用场景)

## demo 说明

```bash
# 安装依赖
npm run install:all

# 运行demo
npm run dev
```

## 指令

### 创建新工作区

```bash
# 初始化多个工作区
npm init -w packages/a -w packages/b -y
```

package.json 多了一条配置：`"workspaces": ["packages/a", "packages/b"]`

注意

- 不需在根目录 package.json 依赖里加上工作区 a 和 b
- 一般我们要支持 ESM 方式，所以我们需要将 packages 里的所有 package.json 都新增一个字段："type": "module",然后再 npm install

### 安装工作区依赖

为指定工作区安装依赖

```bash
# 安装所有
npm i -w a

# 安装指定依赖
npm i dayjs -w a
```

为所有工作区安装依赖

```bash
# 安装所有
npm i

# 安装指定依赖
npm i dayjs -ws

```

或者直接进入工作区安装亦可

### 运行工作区指令

```bash
npm run dev -w a
```

### 移除工作区依赖

指令同安装工作区依赖，即 `npm i` 替换为 `npm uninstall`

## 应用场景

- 使用 workspace 更方便的测试 npm 包，比 npm link 好用
- 依赖提升，大仓库共享依赖，依赖更好管理
