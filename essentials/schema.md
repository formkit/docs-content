# Schema

FormKit's schema is a JSON-serializable data format for storing DOM structures and component implementations including FormKit forms. Although created specifically for implementing forms the format is capable of generating any HTML markup or using any third party components. Schemas are rendered using FormKit's `<FormKitSchema>` component.

A schema is an array of objects, where each object defines a single HTML element or component. These two object types have their own structural definition.

## HTML Elements ($el)

HTML elements are defined using `$el` property. You can use `$el` to render any HTML element. Attributes can be added with the `attrs` property, and content is
assigned with the `children` property.

<example
  name="Schema - elements"
  file="/_content/examples/schema-elements/schema-elements"
  langs="vue"
  layout="row">
</example>

<callout type="tip" name="The style attribute">
Notice in the above example that the <code>style</code> attribute is unique in that it should be defined as an object of style to value pairs rather than a string.
</callout>

## Components ($cmp)

Components can be defined with the `$cmp` property. The `$cmp` property should be a string that references a globally defined component or a component passed
into `FormKitSchema` with the `library` prop.

<example
  name="Schema - components"
  file="/_content/examples/schema-components/schema-components"
  langs="vue"
  layout="row">
</example>

<callout type="warning" label="Components as props">
In order to pass concrete components via the <code>library</code> prop it's best to wrap your library with <a href="https://v3.vuejs.org/api/basic-reactivity.html#markraw">Vue’s <code>markRaw</code> signature</a>.
</callout>

## References

In addition to the schema array (and optional library) the `FormKitSchema` object can also include a `data` prop. Values from the data object can then be referenced directly in your schema — and your schema will maintain the reactivity of the original data object.

To reference a value from the data object, you simply use a dollar sign `$` followed by the property name from the data object.

<example
  name="Schema - data"
  file="/_content/examples/schema-data/schema-data"
  langs="vue"
  layout="row">
</example>

<callout type="warning" label="Important note">
Notice in the above example that we used an array to concatenate "Hello" and "$location". We did this because data references and logical expressions in the schema must always begin with a dollar sign <code>$</code> — otherwise they are treated as unparsed string literals.
</callout>

### Referencing functions

Schemas support calling functions that are in your original reference data — and you can even pass data references as arguments of that function!

<example
  name="Schema - functions"
  file="/_content/examples/schema-functions/schema-functions"
  langs="vue"
  layout="row">
</example>

## Logical expressions

Schemas also support expressions like and boolean logic, comparisons and arithmetic.
