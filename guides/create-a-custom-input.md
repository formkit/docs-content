# Create a custom input

In this guide we’ll walk through the process of creating, registering, and using a custom input. Specifically we’re going create a "one time password" input (OTP for short) — these are commonly used in 2 factor authentication when you’re required to type an sms code in. Let’s get started!

<callout type="tip" label="SFC Build tool">
This guide assumes you are using a standard Vue 3 build tool like Vite, Nuxt 3, or Vue CLI that will allow you to import <code>.vue</code> single file components.
</callout>

## Creating a component

To get started, lets create our input’s component file, we'll call it `OneTimePassword.vue`:

```html
<template>
  <div>More to come here...<div>
</template>

<script>
export default {
  props: {
    context: {
      type: Object,
      required: true
    }
  }
}
</script>
```

FormKit provides a lot of input features that we're going to want to preserve, like labels, help text, and showing error messages — all we really want to modify is the input section of our input. We can preserve these all these standard FormKit features by using the `createInput` function from the `@formkit/vue` package.

As we build out our input we’ll want to visualize it’s progress, so let’s create sample form to import `OneTimePassword.vue`, pass that imported component to `createInput()`, and use the return value (an [input definition](/advanced/custom-inputs#input-definition)) as the `type` prop of a `<FormKit>` component. We’ll call this sample form `Register.vue`:

<example
  name="Disabled example"
  file="/_content/examples/otp-register/otp-register"
  langs="vue">
</example>

Excellent! Now we can iterate on our `OneTimePassword.vue` file and see the results. One of the first things to notice is how our input already supports labels, help text, validation, and other universal FormKit props.

Notice the `<pre>` tag in the above example is outputting the current state of our form — we'll use this visualize the value of our custom input. Since our input currently has no value it does not appear in the form’s data. Let’s change that!

## Input & Output

Let’s open up `OneTimePassword.vue` again and change our `<div>` to an `<input>` tag. We’ll start with a single text input, and work our way up from there. But how do we actually set and display the value of our custom input?

All custom inputs are passed the all-mighty [context object](/advanced/context) as the `context` prop. In order for our input to set its value, it needs to call `context.node.input(value)`. To properly display the value of our input we should set the value `context._value`.

<example
  name="Disabled example"
  file="/_content/examples/otp-first-value/otp-first-value"
  langs="vue">
</example>
