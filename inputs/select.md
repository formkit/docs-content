---
title: Select Input
description: A native HTML select input. Supports both single-value and multi-value selections.
---

:InputPageHero{title="Select"}

:PageToc

The select input uses HTML's [native select input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select). Select inputs can be single value selections, or multi-value selections by using the `multiple` attribute. There are 4 ways to provide options to a select input:

- An array of strings
- An object of value/label pairs
- An array of objects with `label` and `value` properties (the same as the [checkbox](/inputs/checkbox) and [radio](/inputs/radio) inputs)
- Using `<option>` tags directly inside the `default` slot.

## Single selection

Select lists are most commonly used to select a single item from a list of options.

### Array of strings

The simplest way to provide options is an array of strings. The provided strings will be used for both the label and the value of the option.

::Example
---
name: "Select input - strings"
file: "/_content/examples/select-strings/select-strings.vue"
---
::


### Value / Label object

You may also provide the `options` prop where the keys are values and the values of each property are labels.

::Example
---
name: "Select input"
file: "/_content/examples/select/select.vue"
---
::


### Array of objects

The most flexible way to define options is by providing an array of objects. The objects _must_ include `value` and `label` properties — but may also include a `help` property as well as an `attrs` object of additional attributes to apply to each select input tag.

::Example
---
name: "Select input - objects"
file: "/_content/examples/select-objects/select-objects.vue"
---
::


<callout type="tip" label="Option attributes">
To pass additional attributes to each <code>&lt;option&gt;</code> element, your object can also contain an <code>attrs</code> property.<br><br>
<code class="block">[
  {
    label: 'My Label',
    value: 'a-value',
    attrs: {
      disabled: true
    }
  }
]</code>
</callout>

### Default slot

Sometimes it may be desirable to manually output the contents of a select list in order to create specialized structures. This can be done by using the `default` slot to explicitly output your options.

::Example
---
name: "Select input - objects"
file: "/_content/examples/select-slot/select-slot.vue"
---
::


<callout type="warning">
When using the default slot to output options, you should not use the <code>placeholder</code> or <code>options</code> props.
</callout>

## Multiple

The `select` input also supports a `multiple` attribute that allows for multi-selection. When used with FormKit, this option produces an array of values.

::Example
---
name: "Select input - objects"
file: "/_content/examples/select-multiple/select-multiple.vue"
---
::


<callout type="tip" label="Alternatives">
Select inputs with the <code>multiple</code> attribute can be challenging for some users because they require holding-down the control or command keys to perform multiple selections. Depending on your audience, you may want to consider using a <a href="/inputs/checkbox">checkbox input with <code>options</code></a> instead.
</callout>

<callout type="warning" label="Multiple with default slot">
When using the default slot in conjunction with the <code>multiple</code> attribute you must explicitly assign the <code>selected</code> attribute to each option.
</callout>

## Props & Attributes

::ReferenceTable
---
input: "select" 
data: [
  {
    prop: "options",
    type: "Array/Object",
    default: "[]",
    description:
      "An object of value/label pairs or an array of strings, or an array of objects that <em>must</em> contain a label and value property.",
  },
  {
    prop: "placeholder",
    type: "String",
    default: "none",
    description:
      "When defined, FormKit injects a non-selectable hidden <code>option</code> tag as the first value of the list to serve as a placeholder.",
  },
  {
    prop: "select-icon",
    type: "String",
    default: "’’",
    description:
      "Specifies <a href=&quot;/essentials/icons&quot;>an icon</a> to put in the <code>selectIcon</code> section. Defaults to the <code>down</code> icon.",
  },
]
---
::


## Sections

:SectionKeysIntro

::FormKitInputDiagram
---
class: "input-diagram--select"
schema: [
  {
    name: 'outer',
    children: [
      {
        name: 'wrapper',
        position: 'right',
        children: [
          {
            name: 'label',
            content: 'Smoothie size',
            position: 'right',
          }, 
          {
            name: 'inner',
            children: [
              {
                name: 'prefixIcon',
                content: '👩🏼‍🦱'
              },
              {
                name: 'prefix',
              },
              {
                name: 'input',
                children: [
                  {
                    name: 'option',
                    content: 'Medium'
                  }
                ]
              },
              {
                name: 'selectIcon',
                position: 'right',
                content: '⌄',
                class: 'center-vert'
              },
              {
                name: 'suffix',
                position: 'right',
              },
              {
                name: 'suffixIcon',
                position: 'right',
              },
            ]
          },
        ]
      },
      {
        name: 'help',
        content: 'Choose a smoothie size.',
        position: 'right'
      },
      {
        name: 'messages',
        position: 'right',
        children: [
          {
            name: 'message',
            content: 'You must make a selection.',
            position: 'right'
          }
        ]
      }
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
    "section-key": "option",
    description:
      "Responsible for rendering each option. Context includes an <code>option</code> property with the option being rendered. This object includes <code>label</code> and <code>value</code> properties.",
  },
  {
    "section-key": "selectIcon",
    description:
      "An element for outputting an icon for opening the select list. Usually a down arrow.",
  },
]
---
::

