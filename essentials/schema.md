---
title: FormKit Schema
description: Harness all the power of FormKit in a serializable, JSON-compatible schema language.
---

# Schema

:PageToc

## Introduction

FormKit's schema is a JSON-serializable data format for storing DOM structures and component implementations, including FormKit forms. Although created specifically for implementing and generating forms, the format is capable of generating any HTML markup or using any third-party components.



::Callout
---
type: "tip" 
name: "Using FormKitSchema"
---
The `<FormKitSchema/>` component is globally available in Nuxt and ready to use like the FormKit component when autoImport: false.
::


Schemas are rendered using FormKit's `<FormKitSchema>` component, which is not registered globally by default. You will need to import it:

```js
import { FormKitSchema } from '@formkit/vue'
```

## Form generation example

FormKit ships with first-class support for generating forms using schema. This makes it possible to store generated forms in databases, files, or even QR codes! To generate a form, pass your schema array to the `<FormKitSchema>` component using the `:schema` prop.

```html
<FormKitSchema :schema="yourSchemaArray" />
```

Let’s look at a quick example:

::Example
---
name: "Generating forms"
file: "_content/_examples/generating/generating.vue"
---
::

We see many features above including the `$el` and `$cmp` props, the `$formkit` prop shorthand, validation, conditional rendering, labels, help text, and multiple types of inputs. We'll unpack all these features in the remainder of this page.

## Schema array

A schema is an array of objects or strings (called "schema nodes"), where each array item defines a single schema node. There are 3 types of of schema nodes:

1. **Text nodes** — produced by strings.
2. [HTML elements](#html-elements-el) — defined by the `$el` property.
3. [Components](#components-cmp) — defined by the `$cmp` property.
4. [FormKit components](#shorthand) — defined by the `$formkit` property. Syntactic sugar for the full `$cmp` format.

Schemas support advanced features like [conditional logic](#conditionals), [boolean operators](#expressions), [loops](#loops), [slots](#slots), and [data scoping](#references) — all guaranteed to serialize to a string.

## HTML elements ($el)

HTML elements are defined using the `$el` property. You can use `$el` to render any HTML element. Attributes can be added with the `attrs` property, and content is assigned with the `children` property:

::Example
---
name: "Schema - elements"
file: "_content/_examples/schema-elements/schema-elements.vue"
layout: "auto"
---
::

::Callout
---
type: "tip" 
name: "The style attribute"
---
Notice in the above example that the <code>style</code> attribute is unique in that it should be defined as an object of style to value pairs rather than a string.
::

## Components ($cmp)

Components can be defined with the `$cmp` property. The `$cmp` property should be a string that references a globally defined component or a component passed
into `FormKitSchema` with the `library` prop:

::Example
---
name: "Schema - components"
file: "_content/_examples/schema-components/schema-components.vue"
layout: "auto"
---
::

::Callout
---
type: "warning"
label: "Components as props"
---
In order to pass concrete components via the <code>library</code> prop, it's best to wrap your library with <a href="https://vuejs.org/api/reactivity-advanced.html#markraw">Vue’s <code>markRaw</code> signature</a>.
::

## References

In addition to the schema array (and optional library), the `FormKitSchema` object can also include a `data` prop. Values from the data object can then be referenced directly in your schema — and your schema will maintain the reactivity of the original data object.

To reference a value from the data object, you simply use a dollar sign `$` followed by the property name from the data object. References can be used in `attrs`, `props`, conditionals and as `children`:

::Example
---
name: "Schema - data"
file: "_content/_examples/schema-data/schema-data.vue"
layout: "auto"
---
::

::Callout
---
type: "warning"
label: "Important note"
---
Notice in the above example that we used an array to concatenate "Hello" and "$location". We did this because data references and logical expressions in the schema must always begin with a dollar sign <code>$</code> — otherwise they are treated as unparsed string literals.
::

### Referencing functions

Schemas support calling functions that are in your original reference data — and you can even pass data references as arguments of that function!

::Example
---
name: "Schema - functions"
file: "_content/_examples/schema-functions/schema-functions.vue"
layout: "auto"
---
::

### Deep references

Just like JavaScript — you can access properties of a deeply nested object using dot-syntax `object.property`:

::Example
---
name: "Schema - functions"
file: "_content/_examples/schema-dot-syntax/schema-dot-syntax.vue"
layout: "auto"
---
::

::Callout
---
type: "info"
label: "Reserved words"
---
Schema references can have any structure or properties, but at the root of the data reference object there are 2 reserved words: <code>$slots</code> and <code>$get</code>.
::

## Expressions

Schemas also support logic in the form of boolean logic, comparison, and arithmetic expressions. These expressions can be used anywhere a data reference can be used (`attrs`, `props`, conditionals, and `children`):

::Example
---
name: "Schema - expressions"
file: "_content/_examples/schema-expressions/schema-expressions.vue"
layout: "auto"
---
::

::Callout
---
type: "tip"
label: "Labeling expressions"
---
Expressions must always begin with a <code>$</code>. If the first element of an expression is a data reference (ex: <code>$count + 2</code>), then it already begins with a <code>$</code> and no further labeling is required. However, often the first character of an expression is not a dollar sign — these expressions need to be "labeled" with <code>$:</code> — for example <code>$: ($count * 3) - 7</code>.
::

Although it looks very much like JavaScript — *schema expressions are not JavaScript*. They are better thought of as a templating language. Expressions are compiled down to functional JavaScript at `setup` but the syntax is not 1-1 compatible with JavaScript. This improves performance and provides a critical layer of security as only explicitly exposed data and functionality can be executed.

Schema expressions are limited to the following operators and parenthesis:

| Operator | Use case              |
| -------- | --------------------- |
| `+`      | Addition              |
| `-`      | Subtraction           |
| `*`      | Multiplication        |
| `/`      | Division              |
| `%`      | Modulus               |
| `&&`     | Boolean AND           |
| `\|\|`   | Boolean OR            |
| `===`    | Strict equals         |
| `!==`    | Strict not equals     |
| `==`     | Loose equals          |
| `!=`     | Loose not equals      |
| `>=`     | Greater than or equal |
| `<=`     | Less than or equal    |
| `>`      | Greater than          |
| `<`      | Less than             |

## Conditionals

FormKit schema can leverage references and expressions to make schema nodes and attributes conditional. These conditionals can be added in two ways:

- The `if` property on `$el` and `$cmp` nodes.
- The `if/then/else` object

### The `if` property

Both `$el` and `$cmp` schema nodes can leverage an `if` property that roughly equates to a `v-if` in Vue. If the expression assigned to the `if` property is truthy, the node is rendered, otherwise it is not:

::Example
---
name: "Schema - conditional"
file: "_content/_examples/schema-conditional/schema-conditional.vue"
layout: "auto"
---
::

::Callout
---
type: "tip"
label: "Ensure re-render with a key"
---
Conditional or iterative (when using `if` or `for`) schema nodes should always include an explicit `key` prop. Without this prop Vue may reuse the DOM nodes from the previous render, which can lead to unexpected behavior, errors, and performance issues.
::

### The `if/then/else` object

The `if/then/else` object allows for more complex conditional logic. It can be used to conditionally render nodes, a list of schema nodes, values of the `attrs` object or values of the `props` object. It is also possible to nest `if/then/else` objects to create more complex structures — similar to an `else if` statement in JavaScript.

#### Using `if/then/else` on schema nodes

You can use the `if/then/else` object anywhere you would normally use a schema node. This includes the root schema array, or the `children` property of another schema node:

::Callout
---
type: "tip"
label: "Ensure re-render with a key"
---
Conditional or iterative (when using `if` or `for`) schema nodes should always include an explicit `key` prop. Without this prop Vue may reuse the DOM nodes from the previous render, which can lead to unexpected behavior, errors, and performance issues.
::

::Example
---
name: "Schema - conditional object"
file: "_content/_examples/schema-conditional-object/schema-conditional-object.vue"
layout: "auto"
---
::

#### Using `if/then/else` on attrs and props

You can also use `if/then/else` statements to conditionally output the values of `attrs` or `props`:

::Example
---
name: "Schema - conditional attrs"
file: "_content/_examples/schema-conditional-attrs/schema-conditional-attrs.vue"
layout: "auto"
---
::

## Loops

Both `$el` and `$cmp` schema nodes support looping. The loop syntax is similar to `v-for` in Vue and expects an object or array to iterate over and a property to assign the current iteration value to. Optionally, you can also capture the index or property of the current iteration:

::Callout
---
type: "tip"
label: "Ensure re-render with a key"
---
Conditional or iterative (when using `if` or `for`) schema nodes should always include an explicit `key` prop. Without this prop Vue may reuse the DOM nodes from the previous render, which can lead to unexpected behavior, errors, and performance issues.
::

::Example
---
name: "Schema - loops"
file: "_content/_examples/schema-loops/schema-loops.vue"
layout: "auto"
---
::

## Slots

Schemas can render the slot content of the `<FormKitSchema>` component anywhere within the schema that a normal schema node can be rendered. All scoped slots are automatically provided to the schema under the `$slots` reference object:

::Example
---
name: "Schema - slots"
file: "_content/_examples/schema-slots/schema-slots.vue"
layout: "auto"
---
::

::Callout
---
type: "tip"
label: "FormKit input slots"
---
Inside of a <code>$formkit</code> schema node, it is also possible to pass content to preexisting FormKit slots like <code>label</code> or <code>prefix</code> inside of the node's <code>__raw__sectionsSchema</code> property. Read more about raw values <a href="#raw-values">below</a>, and `sectionsSchema` in the <a href="/essentials/inputs#sections-schema">inputs documentation</a>.
::

## Binding attrs and props

At times it may be necessary to pass an object of variable or unknown attributes or props to a `$cmp` or `$el`. In Vue we would do this using `v-bind` — in schema land we use the `bind` property:

::Example
---
name: "Schema - bind"
file: "_content/_examples/schema-bind/schema-bind.vue"
layout: "auto"
---
::

## Raw values

At times it may be necessary to prevent a given attribute or prop from being parsed. This can be done by prefixing an attribute or prop with `__raw__`:

```js
{
  $cmp: 'PriceComponent',
  props: {
    __raw__price: '$2.99'
  }
}
```

In the above example, the `__raw__` prefix will be removed, and the unparsed value of `$2.99` will be passed as the `price` prop to the `PriceComponent`.

Another scenario where this comes into play is rendering FormKit components. The `<FormKit>` component has a `sections-schema` prop that allows users to pass down schema partials to merge with various sections of their input. In this edge case, we want to pass the schema chunks to the `<FormKit>` component as a raw JavaScript object. To do so, we once again prefix the `sectionsSchema` prop with `__raw__`:

::Example
---
name: "Schema - **raw**"
file: "_content/_examples/schema-raw/schema-raw.vue"
---
::


Notice if you remove the `__raw__` prefix from the above example, the prefix no longer has effect — this is because the `sectionsSchema` prop’s value was parsed when creating the component instead of passed as a JavaScript object.

## FormKit Inputs

Although schemas can be used for almost any purpose — the primary objective is to empower developers to build complex and dynamic forms using a serializable data format. Using the schema with FormKit Inputs covers this use case well.

Assuming you globally registered the `FormKit` component — you can render your `FormKit` inputs from schema by using the `$cmp` type schema node:

::Example
---
name: "Schema - formkit"
file: "_content/_examples/schema-formkit/schema-formkit.vue"
layout: "auto"
---
::

### Shorthand

While the `cmp` syntax is generalized and works for any Vue component, it is somewhat verbose for FormKit Inputs. To make this easier, FormKit supports a fourth node type `$formkit`, which is syntactic sugar for the full `$cmp` format.

When using the `$formkit` shorthand, the `props` object is flattened with the top-level properties (siblings of `$formkit`) For example:

::Example
---
name: "Generating forms - sugar"
file: "_content/_examples/generating-sugar/generating-sugar.vue"
---
::

### Accessing other inputs

The schema format has one built-in function specific to FormKit Inputs: the `$get` function. This builtin allows the schema to access the context object of any other FormKit Input (even outside the immediate form) — provided the input in question has an explicitly declared `id` prop. This allows the schema to respond conditionally to the state of your own inputs:

::Example
---
name: "Schema - formkit"
file: "_content/_examples/schema-get/schema-get.vue"
layout: "auto"
---
::

### Forms

To render a form element, you can either use the `$formkit: 'form'` schema node, or wrap your `<FormKitSchema>` component in a `<FormKit type="form">` component:

::Example
---
name: "Generating forms - form"
file: "_content/_examples/generating-form/generating-form.vue"
---
::
