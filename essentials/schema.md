# Schema

FormKit's schema is a JSON-serializable data format for storing DOM structures and component implementations including FormKit forms. Although created specifically for implementing forms the format is capable of generating any HTML markup or using any <current-framework></current-framework> components. Schemas are rendered using FormKit's `<FormKitSchema>` component.

## The basics

A schema is an array of objects, where each object defines a single HTML element or component. These two object types have their own structural definition.

### HTML Elements ($el)

HTML elements are defined using `$el` property. You can use `$el` to render any HTML element. Attributes can be added with the `attrs` property, and content is
assigned with the `children` property.

<example
  name="Schema - elements"
  file="/_content/examples/schema-elements/schema-elements"
  langs="vue"
  layout="row">
</example>

### Components ($cmp)

Components can be defined with the `$cmp` property. The `$cmp` property should be a string that references a globally defined component or a component passed
into the `library` prop.

<example
  name="Schema - components"
  file="/_content/examples/schema-components/schema-components"
  langs="vue"
  layout="row">
</example>
