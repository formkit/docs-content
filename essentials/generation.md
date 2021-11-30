# Form generation

FormKit ships with first-class support for generating forms from JSON (or other JavaScript objects). This makes it possible to store generative forms in databases and files. Heck, you could put a form’s JSON a QR code if you wanted to. To generate a form, just pass that Data to the `<FormKitSchema>` component.

Let’s take a quick look at an example and we'll pick it up on the other side.

<example
  name="Generating forms"
  file="/_content/examples/generating/generating"
  langs="vue">
</example>

## Schema

[FormKit's schema](/advanced/schema) is a JSON-serializable data format for storing DOM structures and component implementations including FormKit forms. Schemas support advanced features like conditional logic, boolean operators, loops, slots, and data scoping — all guaranteed to serialize to a string.

A schema is an array of objects (schema nodes) — where each "node" is either an HTML element or a component. The node type is determined by using `$el` or `$cmp` properties — HTML element and component respectively. This array is then passed a prop to the `<FormKitSchema>` component.

<callout type="tip" label="Full Schema docs">
This page serves as an introduction to the schema — to learn more about the advanced features of the FormKit schema <a href="/advanced/schema">read the full schema documentation</a>.
</callout>

### FormKit inputs

FormKit’s schema is most frequently used to generate forms (although it is not limited to that use case). If you wanted to render a FormKit select list, you would use the `$cmp` node — for example:

<example
  name="Generating forms - verbose"
  file="/_content/examples/generating-cmp/generating-cmp"
  langs="vue">
</example>

#### Shorthand

While this syntax is generalized (it works for any Vue component) it is somewhat verbose when creating lots of FormKit inputs. To make this easier, formkit supports a third node type `$formkit`, which is syntactic sugar for the full `$cmp` format shown above. For example:

<example
  name="Generating forms - sugar"
  file="/_content/examples/generating-sugar/generating-sugar"
  langs="vue">
</example>

## Forms

To render a form element, you can either use the `$formkit: 'form'` schema node, or wrap your `<FormKitSchema>` component in a `<FormKit type="form">` component.

<example
  name="Generating forms - form"
  file="/_content/examples/generating-form/generating-form"
  langs="vue">
</example>
