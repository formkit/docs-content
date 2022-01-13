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

Excellent! Now we can iterate on our `OneTimePassword.vue` file and see the results. One of the first things to notice is how our input already supports labels, help text, validation, and other universal FormKit props. Those features come courtesy of `createInput()`.

Also, notice that `<pre>` tag in the above example? It is outputting the current state of the form’s data. We'll use this visualize the value of our custom input. Since our input currently has no value it does not appear in the form’s data. Time to change that!

## Input & Output

Let’s open up `OneTimePassword.vue` again and change our `<div>` to an `<input>` tag. We’ll start with a single text input, and work our way up from there. But how do we actually set and display the value of our custom input?

All custom inputs are passed the all-mighty [context object](/advanced/context) as the `context` prop. In order for our input to set its value, it needs to call `context.node.input(value)`. To properly display the value of our input we should set the input’s `:value` attribute to `context._value`.

<example
  name="Disabled example"
  file="/_content/examples/otp-first-value/otp-first-value"
  langs="vue">
</example>

Our little baby input is all grown up! It now reads and writes values. As proof, try setting the initial value of the form’s `values` object to `{ two_factor_code: '12345' }` and you'll see the input gets auto-populated with the value.

## OTP requirements

Ok, now that we understand how to create an input, how to use it, and how to read and write values — let’s tackle the actual "business logic" of our one time password input. Let’s discuss our requirements:

- We want users to enter a series of digits and each digit should be its own `<input>` tag.
- When a user types a number, it should automatically focus on the next input.
- It should allow a user to click on a given digit to edit it.
- It should support copy/paste.
- We only want the input to change values if all digits have been completed.
- The value of the input should always be all the digits concatenated.

## Adding a prop

Tackling our first requirement — we need `n` `<input>` tags. Perhaps it would be best to expose the number of digits as a prop. To do that, we need to inform our `createInput` function that we want to accept a new prop:

```js
createInput(OneTimePassword, {
  props: ['digits'],
})
```

We now have access to `context.digits`. Back in `OneTimePassword.vue` lets use that to output the correct number of `<input>` tags.

<example
  name="Disabled example"
  file="/_content/examples/otp-tags/otp-tags"
  langs="vue">
</example>
