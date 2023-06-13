---
title: 样式定制
description: 为您的 FormKit 组件添加自定义样式 - 可以全局设置，也可以单独设置。
---

# 样式定制

:PageToc

FormKit 提供了功能强大且易于访问的标记 - 但不会对您想要的样式做任何假设。在这些文档中可以看到一个名为 `Genesis（创世纪）` 的_可选_基本主题，您可以在项目中使用该主题。

### 安装 Genesis 主题

#### CDN 使用方法

要通过 CDN 加载 `genesis` 主题，请将其添加到 `defaultConfig` 的 `theme` 属性中。

```js
...
defaultConfig({
  theme: 'genesis' // 通过 CDN 加载并注入到文档头部
})
...
```

#### 直接导入

要安装 Genesis，首先安装 `@formkit/themes` 包。

```sh
npm install @formkit/themes
```

然后在您的 `main.js`（或者您启动 Vue 的地方）引入 Genesis `theme.css`（这里假设您使用了像 Vite、Webpack、Snowpack 或 Nuxt 这样的构建工具）：

```js
import '@formkit/themes/genesis'
```

## 外部属性

为了样式化，某些属性会自动添加到并从所有 FormKit 输入的 `outer` 部分删除：

- `data-type` — 输入类型，如 `text`、`select`、`checkbox` 等。
- `data-multiple` — 对于接受 `multiple` 属性的输入，如果输入具有多个属性（如 `select` 输入），则将追加此属性。
- `data-disabled` — 当输入被禁用时出现。
- `data-complete` — 当输入 “完整” 时出现。旨在在用户完成填写输入时为输入提供样式（如绿色对勾）。[阅读 `context.state.complete` 关于何时产生 `true` 的条件。](/essentials/configuration#state)
- `data-invalid` — 当输入具有失败验证规则并且失败规则的消息可见时呈现。
- `data-errors` — 当输入具有显式设置的错误时呈现。

您可以通过使用这些属性在以上内容中为填写表单的用户提供实时的视觉反馈：

::Example
---
name: "追加类"
file: "_content/_examples/outer-data-attrs/outer-data-attrs.vue"
---
::

## 自定义类

大多数用户可能希望将自己的样式和类应用于 FormKit 提供的标记。
FormKit 提供了许多应用类的方法。

可以使用以下任何方法修改所有[部分](/essentials/inputs#sections)的类（从最高到最低优先级）：

- [{section-key}-class 属性](#section-key-class-props)。（最具针对性）
- [`classes` 属性](#classes-prop)。
- [`classes` 配置选项](#classes-configuration)。
- [`rootClasses` 配置函数](#the-rootclasses-function)。（最不具针对性）

类遵循严格的层次结构。首先，通过 `rootClasses` 函数生成类。然后，通过将 `classes` 配置选项进行修改、然后通过 `classes` 属性，最后通过 `{section-key}-class` 属性进行修改。在这些阶段的每一个阶段，都可以[追加](#appending-classes)、[重置](#resetting-classes)或[有选择地修改](#removing-classes)类。

## 追加类

要追加类，只需返回您要追加的字符串，或者提供一个带有布尔值的类对象 - `true` 属性将被追加：

::Example
---
name: "追加类"
file: "_content/_examples/append-classes/append-classes.vue"
tabs: "html"
---
::


## 重置类

通过在字符串格式或对象格式中提供一个特殊（不渲染）的类 `$reset`，可以完全删除先前层次步骤中产生的所有类：

::Example
---
name: "重置类"
file: "_content/_examples/resetting-classes/resetting-classes.vue"
tabs: "html"
---
::


## 删除类

通过为要删除的类提供值 `false` 的对象，或者为 `{section-key}-class` 属性提供一个以 `$remove:` 开头并与类列表中的现有类匹配的类名，可以选择性地删除前一个步骤中产生的类。这包括删除 FormKit 默认的 `formkit-` 前缀类：

::Example
---
name: "删除类"
file: "_content/_examples/removing-classes/removing-classes.vue"
tabs: "html"
---
::


::Callout
---
type: "tip"
---
此外还有许多泛化的方法来覆盖输入的类，比如如何在全局设置、局部设置等情况下，对任意输入信息的 `<Code>classes</Code>` 节点进行操作，或者如何利用槽用法。
::

## Section-key class 属性

在 FormKit 输入中修改元素类的最简单方法是通过 `{section-key}-class` 属性。 若要向特定节元素添加类（如 `label`），只需添加 `label-class` 属性：

::Example
---
name: "Section-key class"
file: "_content/_examples/section-key-class/section-key-class.vue"
tabs: "html"
---
::


## Classes 属性

classes 属性与 section-key class 属性类似，但它允许同时设置所有 sections 的类：

::Example
---
name: "Classes 属性"
file: "_content/_examples/classes-prop/classes-prop.vue"
tabs: "html"
---
::


## Classes 配置

classes 配置选项与 classes 属性类似，只是它适用于配置已应用的所有输入。FormKit 独特的配置系统允许您在整个项目中或仅在特定组或表单中应用类：

### 全局类配置

::Example
---
name: "全局配置"
file: "_content/_examples/global-classes/global-classes.vue"
mode: "editor"
editable: false
line-numbers: false
---
::


### 在组、列表或表单上的类配置

::Example
---
name: "Classes 属性"
file: "_content/_examples/classes-config/classes-config.vue"
tabs: "render,html"
---
::


## 使用来自 @formkit/themes 的 generateClasses

FormKit 随附了一个名为 `generateClasses` 的辅助函数，包含在 `@formkit/themes` 中。

`generateClasses` 函数接受一个由输入类型键入的 javascript 对象，其值为以 `${sectionKey}` 为键的子对象，其值为字符串。 通过此函数，您可以根据给定输入的类型快速将类列表应用于输入内的部分。

::Example
---
name: "generateClasses 示例"
file: [
'/_content/_examples/generate-classes/generate-classes.vue',
'/_content/_examples/generate-classes/formkit.config.js'
]
init-file-tab: "formkit.config.js"
tabs: "html"
---
::


## rootClasses 函数

`rootClasses` 是一个配置函数，负责为每个元素生成默认类。 此函数已经具有一个默认值，可以生成所有默认类（如 `formkit-outer` 和 `formkit-label`）这些与 FormKit 一起提供 - 所以替换这个单一的函数使您可以轻松地替换所有初始类。 这使得它成为在实用程序框架（如 Tailwind）的情况下编写自定义主题的理想选择。

`rootClasses` 函数传递了 2 个参数（按顺序）：

- [部分键](/essentials/inputs#sections)（如 `label` 或 `input`）。
- [输入的节点](/essentials/architecture#node)。

函数将为每个部分调用一次，它必须返回带有布尔值的类对象。

虽然 `rootClasses` 的典型用法是在全局配置级别应用类到整个项目中 - 但您也可以使用 `config` 属性在您的项目中用由您提供的函数内部的逻辑计算的类列表覆盖特定表单或输入：

::Example
---
name: "Root classes 函数"
file: "_content/_examples/root-classes/root-classes.vue"
tabs: "html"
---
::


::Callout
---
type: "tip"
---
因为 <code>rootClasses</code> 是一个配置选项，您可以对每个输入、每个组或全局应用它。
::

## 在 schema 中修改类

除了在 `<FormKit>` 组件上通过配置或属性修改类之外，您还可以在[schema](/essentials/schema)中使用相同的技术：

### 在 schema 内的 Section-key class 属性

在 schema 中，您还可以通过 `{section-key}Class` 属性修改输入内元素的类。例如，要向 label 部分添加一个类，可以添加 `labelClass` 属性：

```js
{
  $formkit: 'text',
  name: 'email',
  // 将'appended-class'添加到 “label” 部分
  labelClass: 'appended-class'
},
```

### 在 schema 中的 Classes 属性

类似于 `<FormKit>` 组件上的 [classes 属性](#classes-prop)，您可以使用 schema 节点上的 `classes` 属性修改输入的任何[部分](/essentials/inputs#sections)的类列表：

```js
{
  $formkit: 'text',
  name: 'email',
  // 修改此输入的 "outer" 和 "inner" 部分上的类
  classes: {
    outer: 'new-outer-class',
    inner: {
      $reset: true, // 重置 "inner" 部分上的类
      'new-inner-class': true
    }
  },
},
```

### 在 schema 中的 Config

由于配置会传递给后代输入，因此您可以更改诸如 `form`、`list` 或 `group` 之类的父级上的配置，这将影响所有后代的任何深度：

::Example
---
name: "Classes 属性"
file: "_content/_examples/classes-config-schema/classes-config-schema.vue"
tabs: "render,html"
---
::


## Tailwind CSS

### 使用提供的 Genesis 主题

FormKit 附带了一个可选的默认 Tailwind 主题，名为 Genesis。要在您的项目中使用这个预制的 Tailwind 主题，请从 `@formkit/themes/tailwindcss/genesis` 引入它，并将其添加到您的 `formkit.config.js`。您还需要从 `@formkit/icons` 中包含需要的 `genesisIcons` 导入。

```js
// formkit.config.js
import { generateClasses } from '@formkit/themes'
import { genesisIcons } from '@formkit/icons'
import genesis from '@formkit/themes/tailwindcss/genesis'

export default {
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: generateClasses(genesis),
  },
}
```

`genesis` 主题导入对于简洁来说很好，但是 Tailwind 分析器需要提供 `node_modules` 中完整主题文件的路径才能知道正在使用哪些类。另外，您应该将 `FormKitVariants` 插件添加到您的 `tailwind.config.js` 中，以便在您的项目中使用有用的 FormKit 变体，如 `formkit-invalid:`。

```js
// tailwind.config.js
const FormKitVariants = require('@formkit/themes/tailwindcss')

module.exports = {
  content: [
    './src/**/*.{html,js,vue}',
    './node_modules/@formkit/themes/dist/tailwindcss/genesis/index.cjs',
  ],
  plugins: [FormKitVariants],
}
```

### 创建您自己的 Tailwind CSS 主题

想要创建自己的 Tailwind 主题吗？我们编写了一篇指南，介绍了使用内联类属性以及使用 `FormKitVariants` 插件和 `@formkit/themes` 中的 `generateClasses` 辅助函数创建全局 Tailwind 主题的过程。

该指南的结尾是用 Tailwind 编写的 FormKit Genesis CSS 主题的完整再现。

::Cta
---
label: "向导：创建一个 Tailwind CSS 主题" 
button: "立即阅读"
href: "/guides/create-a-tailwind-theme"
---
::