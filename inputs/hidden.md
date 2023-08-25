---
title: Hidden Input
description: A native HTML hidden input.
---

::InputPageHero
---
type: "Hidden"
---
::

:PageToc

The `hidden` input uses HTML's [native hidden input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/hidden). It is not a visible element, and should only be used to provide data that is not entered by a user.

## Basic example

::Example
---
name: "Hidden input"
file: "_content/_examples/hidden/hidden.vue"
tabs: "html,render"
---
::


::Callout
---
type: "warning"
---
Since <code>hidden</code> inputs are not intended for display to end users, FormKit does not render common user-facing features such as the <code>label</code>, <code>help text</code> , or <code>messages</code>.<br><br>Validation rules can still be applied to a hidden input that will prevent a form from submitting, but please note that the errors will not be displayed on this hidden input.
::

## Cast to number

By default all native HTML `<input>` elements return a string value. The `number` prop allows you to cast the value to a true `number` type. There are two valid values for the `number` prop: `float` and `integer`.

These options use `parseFloat` (default) or `parseInt` respectively. If the value cannot be parsed by the respective function it will set the value to `undefined`. Additionally applying the `number` prop will constrain the `value` of the input to be exclusively `number | undefined` in TypeScript.

::Example
---
name: "Hidden cast input"
file: "_content/_examples/hidden/hidden-cast.vue"
---
::

## Props & Attributes

The `hidden` input has only one unique prop, `number`, which can be used to cast the value of the input to a `number` type.
::ReferenceTable
---
without: ['help', 'label', 'errors', 'prefix-icon', 'suffix-icon', ]
data: [
  {
    prop: "number",
    type: "String",
    default: "float",
    description:
      "Specifies how to cast a value to a number. Valid values are <code>float</code> and <code>integer</code>.",
  },
]
---
::


## Sections

Hidden inputs do not render all of the surrounding markup typical of other inputs. As such, most section keys do not apply.

::ReferenceTable
---
type: "sectionKeys"
primary: "section-key"
without: ['outer', 'wrapper', 'label', 'inner', 'help', 'messages', 'message', 'prefix', 'prefixIcon', 'suffix', 'suffixIcon']
---
::
