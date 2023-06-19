---
title: 自动完成输入
description: 一种 Pro 输入框，允许用户从可自定义的选项列表中搜索和选择。支持单选和多选。
---

:InputPageHero{title="自动完成"}

:PageToc

:ProInstallSnippet

## 基本示例

自动完成输入框允许您在选项列表中进行搜索。在第一个示例中，让我们给 `options` 属性提供一个国家列表：

::Example
---
name: "自动完成"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-base.vue"
---
::

## 定义选项

`options` 属性可以接受三种不同格式的值：

- 一个带有 `value` 和 `label` 键的对象数组（参见上面的示例）
- 一个字符串数组 <code>['A', 'B', 'C']</code>
- 一个键值对的对象文字 <code>{ a: 'A', b: 'B', c: 'C' }</code>
- 返回上述任意类型的函数

::Callout
---
type: "warning"
label: "空选项"
---
如果将选项分配为空数组，输入框将以禁用状态呈现。
::

## 过滤

自动完成输入框将使用内部的搜索函数过滤选项。您可以通过向 `filter` 属性提供自定义的过滤函数来替换此搜索函数。您的函数将接收两个参数，正在迭代的 `option` 和当前的 `search` 值：

::Example
---
name: "自动完成"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-filter.vue"
---
::

## 空消息

自动完成输入框默认情况下，当搜索结果为空时，列表框将关闭。您可以通过将 `empty-message` 属性分配一个消息来更改此行为，以在未找到结果时显示消息：

::Example
---
name: "自动完成"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-empty-message.vue"
---
::

## 选择外观

自动完成输入框有一个 `selectionAppearance` 属性，用于确定所选选项的显示方式。

### 文本输入

自动完成输入框将默认使用 `text-input` 选择外观。当选择了一个选项时，文本输入框将显示所选选项的标签：

::Example
---
name: "自动完成"
min-height: 300
file: "_content/_examples/autocomplete-pro/autocomplete-text-input.vue"
---
::

### 选项

或者，您可以将自动完成的选择外观设置为 `option`。在这种模式下，当选择完成后，文本输入框将被删除，并用包含所选选项标签的 div 元素进行替换。此外，`option` 选择外观还会呈现一个 `removeSelection` 按钮，单击该按钮将清除所选选项：

::Example
---
name: "自动完成"
min-height: 300
file: "_content/_examples/autocomplete-pro/autocomplete-option.vue"
---
::

## 插槽

就像[下拉输入框](/inputs/dropdown)一样，自动完成输入框允许您使用插槽来自定义选项列表和所选选项的外观和感觉，借助 [渲染无组件模式](https://adamwathan.me/renderless-components-in-vuejs/)。

### 选项插槽

在此示例中，我们将使用选项插槽来显示汽车品牌和它们的标志：

::Example
---
name: "自动完成"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-option-slot.vue"
---
::

### 所选项插槽

如果只想自定义所选选项的显示方式，请使用 `selection` 插槽：

::Example
---
name: "自动完成"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-selection-slot.vue"
---
::

## 多选

自动完成支持多选，并且适用于 `text-input` 或 `option` 选择外观。要启用多选功能，只需设置 `multiple` 属性。

::Callout
---
type: "warning"
label: "使用 multiple 属性"
---
当设置 <code>multiple</code> 属性时，自动完成的值必须始终是一个数组。
::

### 文本输入的多选

对于 `text-input` 选择外观，所选选项会显示为逗号分隔的列表：

::Example
---
name: "自动完成"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-selection-appearance-text-multiple.vue"
---
::

### 选项的多选

对于 `option` 选择外观，所选选项会显示为文本输入框下方的 `div` 列表：

::Example
---
name: "自动完成"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-selection-appearance-option-multiple.vue"
---
::

### 最大值

`max` 属性允许您限制可以选择的选项数。当达到 `max` 限制时，自动完成输入框将禁用列表框：

::Example
---
name: "自动完成"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-max.vue"
---
::

### 选择后关闭

如果希望自动完成的列表框在选择之间保持打开状态，请将 `close-on-select` 属性设置为 `false`：

::Example
---
name: "自动完成"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-close-on-select.vue"
---
::

## 加载选项

与将静态选项列表传递给 `options` 属性不同，您可以将其分配给一个函数。这样做对于需要从 API 或其他来源加载选项的情况非常有用。

### 搜索参数

在此示例中，我们将 `options` 属性分配给 `searchMovies` 函数。通过这样做，`searchMovies` 将接收 `context` 对象作为参数。在该 `context` 对象中，有一个 `search` 属性，它是当前的搜索值。为了执行搜索，我们将使用 `search` 值作为 API 请求的查询参数：

::Example
---
name: "自动完成"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-single-request.vue"
---
::

### page 和 hasNextPage 参数

您可能会遇到的一个常见情况是需要搜索分页的 API。通过引用前面提到的同一个 `context` 对象，可以实现这一点。在此对象中，我们可以利用 `page` 和 `hasNextPage` 属性。`page` 属性是当前页码，`hasNextPage` 属性是在加载更多页面时要调用的函数：

::Example
---
name: "自动完成"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-pagination.vue"
---
::

### 加载样式

与其要求用户点击“加载更多”按钮来加载其他选项，您可以将 `loadOnScroll` 属性设置为 `true`，这样在滚动到选项列表底部时将分页加载选项。

### 选项加载器

#### 恢复值

FormKit 的自动完成输入框还提供了 `optionLoader` 属性，可以用于恢复不在选项列表中的值。在此示例中，我们将为自动完成输入框提供一个初始值（电影 ID），并将 `optionLoader` 分配给一个函数，该函数将向 API 发送请求以获取电影：

::Example
---
name: "自动完成"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-pagination-option-loader.vue"
---
::

请注意，上面的示例中，`optionLoader` 函数接收两个参数：所选选项的 `value`（在本例中为电影 ID）和 `cachedOption`。`cachedOption` 属性用于防止不必要的查找。如果 `cachedOption` 不为 `null`，则意味着已经加载了所选选项，您可以直接返回 `cachedOption`。

#### 获取其他数据

除了使用 `optionLoader` 属性来恢复不在选项列表中的值之外，您还可以使用 `optionLoader` 执行查找以获取其他数据。在此示例中，选择选项后，我们将执行查找以加载所选选项的电影评论：

::Example
---
name: "自动完成"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-option-loader-additional-data.vue"
---
::

## 完整示例

现在让我们结合到目前为止学到的知识，通过使用 `option` 插槽进行自定义标记，并将 `options` 属性设置为一个函数，该函数将从 API 返回电影的页面：

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-full.vue"
---
::

<!-- ## 辅助功能 -->

## Props 和属性

::ReferenceTable
---
input: "autocomplete"
data: [
  {
    prop: "debounce",
    type: "number",
    default: "200",
    description: "调用选项函数的延迟时间（以毫秒为单位）。",
  },
  {
    prop: "options",
    type: "any",
    default: "[]",
    description: "用户可以从中选择的选项列表。",
  },
  {
    prop: "load-on-scroll",
    type: "boolean",
    default: "false",
    description: "当设置为 <code>true</code> 时，根据终端用户的滚动位置尝试加载更多选项。",
  },
  {
    prop: "selection-appearance",
    type: "string",
    default: "text-input",
    description: "更改选项标签的显示方式。",
  },
  {
    prop: "multiple",
    type: "boolean",
    default: "false",
    description: "允许多个选择。",
  },
  {
    prop: "open-on-click",
    type: "boolean",
    default: "false",
    description: "在输入框获得焦点时展开自动完成输入框，而不是等到输入搜索值。",
  },
  {
    prop: "filter",
    type: "function",
    default: "null",
    description: "用于应用自定义的静态选项过滤函数。",
  },
  {
    prop: "option-loader",
    type: "function",
    default: "null",
    description: "用于恢复初始值或执行其他请求以加载所选选项的更多信息。",
  },
  {
    prop: "empty-message",
    type: "string",
    default: "undefined",
    description: "当没有选项可显示时，呈现的消息。",
  },
  {
    prop: "max",
    type: "number",
    default: "undefined",
    description: "限制可以选择的选项数。",
  },
  {
    prop: "close-on-select",
    type: "boolean",
    default: "true",
    description: "当选择选项时关闭列表框。",
  },
]
---
::

## 部分

:SectionKeysIntro

自动完成输入框的结构根据几种不同情况而变化：

- 是否已将 `selection-appearance` 设置为 `text-input`（默认值）或 `option`。
- 是否通过 `multiple` 属性启用多选。

### 选择外观 `text-input`

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--autocomplete-outer autocomplete-text-input"
schema: [
  {
    name: "outer",
    position: "right",
    children: [
      {
        name: "wrapper",
        children: [
          {
            name: "label",
            content: "您最喜欢的运动员",
            class: "center-vert",
          },
          {
            name: "inner",
            children: [
              {
                name: "prefixIcon",
                class: "tiny-section",
              },
              {
                name: "prefix",
                class: "tiny-section",
              },
              {
                name: "input",
                content: "Serena, Pelé",
              },
              {
                name: "loaderIcon",
                position: "right",
              },
              {
                name: "listboxButton",
                position: "right",
                class: "small-pad center-vert",
                children: [
                  {
                    name: "selectIcon",
                    content: "⌄",
                    position: "right",
                  },
                ],
              },
              {
                name: "listbox",
                content: "Tiger Pelé",
                class: "wrap-text",
                position: "right",
              },
              {
                name: "suffix",
                position: "right",
                class: "tiny-section",
              },
              {
                name: "suffixIcon",
                position: "right",
                class: "tiny-section",
              },
            ],
          },
        ],
      },
      {
        name: "help",
        content: "搜索您最喜欢的运动员。",
        position: "right",
      },
      {
        name: "messages",
        children: [
          {
            name: "message",
            content: "抱歉，找不到该运动员。",
          },
        ],
      },
    ],
  },
]
---
::

### 选择外观 `option`，单个选择

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--autocomplete-outer autocomplete-option-single"
schema: [
  {
    name: 'outer',
    position: 'right',
    children: [
      {
        name: 'wrapper',
        children: [
          {
            name: 'label',
            content: '您最喜欢的运动员',
            class: 'center-vert',
            position: 'right'
          },
          {
            name: 'inner',
            children: [
              {
                name: 'prefixIcon',
                class: 'tiny-section'
              },
              {
                name: 'prefix',
                class: 'tiny-section'
              },
              {
                name: 'input',
                class: 'flex-grow-0'
              },
              {
                name: 'selections',
                class: 'flex flex-grow small-pad',
                children: [
                  {
                    name: 'selection',
                    class: 'flex flex-grow small-pad',
                    children: [
                      {
                        name: 'option',
                        content: 'Pelé',
                        class: 'flex flex-grow small-pad',
                        children: [
                          {
                            name: 'optionLoading',
                            class: 'flex-grow-0'
                          }
                        ]
                      },
                      {
                        name: 'removeSelection',
                        class: 'small-pad',
                        children: [
                          {
                            name: 'closeIcon',
                            content: 'X',
                            class: 'small-pad'
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                name: 'loaderIcon',
                position: 'right'
              },
              {
                name: 'listboxButton',
                position: 'right',
                class: 'small-pad center-vert',
                children: [
                  {
                    name: 'selectIcon',
                    content: '⌄',
                    position: 'right'
                  }
                ]
              },
              {
                name: 'listbox',
                content: 'Tiger Pelé',
                class: 'wrap-text',
                position: 'right'
              },
              {
                name: 'suffix',
                position: 'right',
                class: 'tiny-section'
              },
              {
                name: 'suffixIcon',
                position: 'right',
                class: 'tiny-section'
              },
            ]
          },
        ]
      },
      {
        name: 'help',
        content: '搜索您最喜欢的运动员。',
        position: 'right'
      },
      {
        name: 'messages',
        position: 'right',
        children: [
          {
            name: 'message',
            content: '抱歉，找不到该运动员。',
            position: 'right'
          }
        ]
      }
    ]
  }
]
---
::

### 选择外观 `option`，多个选择

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--autocomplete-outer autocomplete-option-single"
schema: [
  {
    name: 'outer',
    position: 'right',
    children: [
      {
        name: 'wrapper',
        children: [
          {
            name: 'label',
            content: '您最喜欢的运动员',
            class: 'center-vert',
            position: 'right'
          },
          {
            name: 'inner',
            children: [
              {
                name: 'prefixIcon',
                class: 'tiny-section'
              },
              {
                name: 'prefix',
                class: 'tiny-section'
              },
              {
                name: 'input',
              },
              {
                name: 'loaderIcon',
                position: 'right'
              },
              {
                name: 'listboxButton',
                position: 'right',
                class: 'center-vert small-pad',
                children: [
                  {
                    name: 'selectIcon',
                    content: '⌄',
                    position: 'right'
                  }
                ]
              },
              {
                name: 'listbox',
                content: 'Tiger Pelé',
                class: 'wrap-text',
                position: 'right'
              },
              {
                name: 'suffix',
                position: 'right',
                class: 'tiny-section'
              },
              {
                name: 'suffixIcon',
                position: 'right',
                class: 'tiny-section'
              },
            ]
          },
          {
            name: 'selections',
            class: 'flex flex-grow',
            children: [
              {
                name: 'selection',
                class: 'flex flex-grow',
                children: [
                  {
                    name: 'option',
                    content: 'Pelé',
                    class: 'flex flex-grow',
                    children: [
                      {
                        name: 'optionLoading',
                        class: 'flex-grow-0',
                        position: 'right'
                      }
                    ]
                  },
                  {
                    name: 'removeSelection',
                    class: 'small-pad',
                    position: 'right',
                    children: [
                      {
                        name: 'closeIcon',
                        content: 'X',
                        class: 'small-pad',
                        position: 'right'
                      }
                    ]
                  }
                ]
              }
            ]
          },
        ]
      },
      {
        name: 'help',
        content: '搜索您最喜欢的运动员。',
      },
      {
        name: 'messages',
        children: [
          {
            name: 'message',
            content: '抱歉，找不到该运动员。',
          }
        ]
      }
    ]
  }
]
---
::

### 内部选项列表结构

下面是上面图示中的内部选项列表（`listbox`）结构：

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--autocomplete"
schema: [
  {
    name: 'dropdownWrapper',
    position: 'right',
    children: [
      {
        name: 'listbox',
        position: 'right',
        children: [
        {
            name: 'emptyMessage',
            children: [
              {
                name: 'emptyMessageInner',
                content: '没有要显示的选项。',
              }
            ]
          },
          {
            name: 'listitem',
            class: 'flex flex-grow',
            position: 'right',
            children: [
              {
                name: 'selectedIcon',
                content: '✔️'
              },
              {
                name: 'option',
                content: 'Serena',
                position: 'right',
                class: 'flex flex-grow'
              },
            ]
          },
          {
            name: 'loadMore',
            children: [
              {
                name: 'loadMoreInner',
                children: [
                  {
                    name: 'loaderIcon',
                    content: '⏳',
                    class: 'text-center'
                  }
                ]
              },
            ]
          },
        ]
      },
    ]
  }
]
---
::

::ReferenceTable
---
type: "sectionKeys"
primary: "section-key"
data: [
  {
    'section-key': 'selector',
    description: '选择器部分是一个打开下拉选项列表的按钮元素。'
  },
  {
    'section-key': 'selections',
    description: '包含各个选择部分。'
  },
  {
    'section-key': 'selection',
    description: '包含所选选项。'
  },
  {
    'section-key': 'listitem',
    description: '列表项元素，包含选项部分。'
  },
  {
    'section-key': 'option',
    description: '包含选项内容的 div。'
  },
  {
    'section-key': 'listbox',
    description: '列表框部分是一个 ul 元素，包含选项列表。'
  },
  {
    'section-key': 'dropdownWrapper',
    description: '包装列表框部分的 div。负责滚动列表框。'
  },
  {
    'section-key': 'optionLoading',
    description: '在加载进行中时条件渲染在所选选项内部的 span 元素。'
  },
  {
    'section-key': 'loaderIcon',
    description: '用于在选择器元素中输出图标的元素，表示加载进行中。'
  },
  {
    'section-key': 'selectIcon',
    description: '用于在选择器元素中输出图标，表示下拉列表已关闭。'
  },
  {
    'section-key': 'loadMore',
    description: '在有更多页面需要加载时，在选项列表底部条件渲染的列表项元素。'
  },
  {
    'section-key': 'loadMoreInner',
    description: '用于在 loadMore 部分内部包装 loaderIcon 的 span 元素。'
  },
  {
    'section-key': 'removeSelection',
    description: '用于移除特定选择的按钮元素。'
  },
  {
    'section-key': 'closeIcon',
    description: '在 removeSelection 按钮内部输出图标的元素。'
  },
  {
    'section-key': 'listboxButton',
    description: '用于打开下拉列表的按钮元素。'
  },
  {
    'section-key': 'emptyMessage',
    description: '在没有要显示的选项时条件渲染的列表项元素。'
  },
  {
    'section-key': 'emptyMessageInner',
    description: '用于在 emptyMessage 部分内部包装的 span 元素。'
  }
]
---
::
