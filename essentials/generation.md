# Form generation

FormKit ships with first-class support for generating forms using a JSON compatible schema. This makes it possible to store generated forms in databases, files, or heck a QR code if you really want to. To generate a form, just pass your schema to the `<FormKitSchema>` component using the `:schema` prop.

Let’s take a quick look at an example and we'll pick it up on the other side.

<example
  name="Generating forms"
  file="/_content/examples/generating/generating.vue">
</example>

## Schema

[FormKit's schema](/advanced/schema) is a JSON-serializable data format for storing DOM structures and component implementations including FormKit forms. Schemas support advanced features like conditional logic, boolean operators, loops, slots, and data scoping — all guaranteed to serialize to a string.

A schema is an array of objects (schema nodes) — where each "node" is either an HTML element or a component. The node type is determined by using the `$el` or `$cmp` properties — which represent HTML element and component respectively. This array is then passed as a prop to the `<FormKitSchema>` component.

<callout type="tip" label="Full Schema docs">
This page serves as an introduction to the schema. To learn more about the advanced features of the FormKit schema, read the <a href="/advanced/schema">full schema documentation</a>.
</callout>

### FormKit inputs

FormKit’s schema is most frequently used to generate forms (although it is not limited to that use case). For example, if you wanted to render a FormKit [email input](/inputs/email), you would use the `$cmp` node.

<example
  name="Generating forms - verbose"
  file="/_content/examples/generating-cmp/generating-cmp.vue">
</example>

#### Shorthand

While this syntax is generalized (it works for any Vue component) it is somewhat verbose when creating lots of FormKit inputs. To make this easier, FormKit supports a third node type `$formkit`, which is syntactic sugar for the full `$cmp` format shown above. For example:

<example
  name="Generating forms - sugar"
  file="/_content/examples/generating-sugar/generating-sugar.vue">
</example>

## Forms

To render a form element, you can either use the `$formkit: 'form'` schema node, or wrap your `<FormKitSchema>` component in a `<FormKit type="form">` component.

<example
  name="Generating forms - form"
  file="/_content/examples/generating-form/generating-form.vue">
</example>
