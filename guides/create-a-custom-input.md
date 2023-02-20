---
title: Create a custom input
description: Follow this guide to learn how to create, register, and use a custom FormKit input in your project.
---

# Create a custom input

<page-toc></page-toc>

In this guide, we’ll walk through the process of creating, registering, and using a custom input. Specifically, we’re going create a "one-time password" input ("OTP" for short). OTPs are commonly used for two-factor authentication when a user is required to type in a code sent via SMS or authenticator app. Let’s get started!

<callout type="tip" label="SFC Build tool">
This guide assumes you are using a standard Vue 3 build tool like Vite, Nuxt 3, or Vue CLI that will allow you to import <code>.vue</code> single file components.
</callout>

## Creating a component

To get started, let's create our input’s component file. We'll call it `OneTimePassword.vue`:

<client-only>

```html
<script setup>
  const props = defineProps({
    context: Object,
  })
</script>

<template>
  <div>More to come here...</div>
</template>
```

</client-only>

FormKit provides a lot of input features out-of-the-box that we're going to want to preserve — like labels, help text, and showing error messages. All we really want to modify is the input section of our input. We can preserve these standard FormKit features by using the `createInput` utility function from the `@formkit/vue` package.

As we build out our input, we’ll want to visualize its progress, so let’s create a sample form to:

1. Import `OneTimePassword.vue`
2. Pass that imported component to `createInput()`
3. Use the return value (an [input definition](/essentials/custom-inputs#input-definition)) as the `type` prop of a `<FormKit>` component.

We’ll call this sample form `Register.vue`:

<example
  name="One-time password - register"
  :file="[
    '_content/examples/otp-register/Register.vue',
    '_content/examples/otp-register/OneTimePassword.vue',
  ]">
</example>

Excellent! Now we can iterate on our `OneTimePassword.vue` file and see the results. One of the first things to notice is how our input already supports labels, help text, validation, and other universal FormKit props. Those features come courtesy of `createInput()`.

Also, notice that `<pre>` tag in the above example? It is outputting the current state of the form’s data. We'll use this visualize the value of our custom input. Since our input currently has no value, it does not appear in the form’s data. Time to change that!

## Input & output

Let’s open up `OneTimePassword.vue` again and change our `<div>` to an `<input>` tag. We’ll start with a single text input, and work our way up from there. But how do we actually set and display the value of our custom input?

All custom inputs are passed the almighty [context object](/essentials/configuration) as the `context` prop. In order for our input to _set_ its value, it needs to call `context.node.input(value)`. To properly _display_ the value of our input, we should set the input’s `:value` attribute to `context._value`.

<example
  name="One-time password - first value"
  init-file-tab="OneTimePassword.vue"
  :file="[
    '_content/examples/otp-first-value/Register.vue',
    '_content/examples/otp-first-value/OneTimePassword.vue',
  ]">
</example>

Our little baby input is all grown up! It might not look pretty, but it now reads and writes values. As proof, try setting the initial value of the form’s `values` object to `{ two_factor_code: '12345' }` and you'll see the input gets auto-populated with the value.

## Requirements for our input

Ok, now that we understand how to create an input, how to use it, and how to read and write values — let’s tackle the actual "business logic" of our one-time password input. Here are our requirements:

- Users enter a series of digits, and each digit has its own `<input>` tag.
- The value of the input should always be all the digits concatenated.
- We only want the input to change its value if all digits have been completed (no need to commit and validate on each keystroke if the user is not done).
- It should allow a user to click on a given digit to edit it.
- When a user types a number, it should automatically focus on the next input.
- It should support copy/paste.

## Adding a prop

For our first requirement, we need `n` `<input>` tags. Perhaps it would be best to expose the number of digits as a prop. To do that, we need to inform our `createInput` function that we want to accept a new prop:

<client-only>

```js
createInput(OneTimePassword, {
  props: ['digits'],
})
```

</client-only>

We now have access to `context.digits`. Back in `OneTimePassword.vue`, let's use that to output the correct number of `<input>` tags.

<example
  name="One-time password - input tags"
  init-file-tab="OneTimePassword.vue"
  :file="[
    '_content/examples/otp-tags/Register.vue',
    '_content/examples/otp-tags/OneTimePassword.vue',
  ]">
</example>

OK — we have multiple inputs! Our first requirement is complete:

- ~Users enter a series of digits, and each digit has its own `<input>` tag.~

<callout type="tip" label="Styling">
We’ve added a touch of CSS in the above example, but in general we’re not going to dive into styling in this guide. It is recommended to use <code>context.classes.yourKey</code> as the class name of elements in your input.
</callout>

## Interactivity

Notice in the above example that when you type into one input all the other inputs are synced to the same value? Kinda neat, but not what we want. This is because we are still using the same input handler and `:value`. Here's a plan to improve our input:

- Each input should only modify the character at its respective index in the final string.
- The input handler should call `focus()` on the next input.
- When the string is the same length as `digits`, we update the value of the input by calling `context.node.input()`.

<example
  name="One-time password - input handlers"
  init-file-tab="OneTimePassword.vue"
  :file="[
    '_content/examples/otp-handlers/Register.vue',
    '_content/examples/otp-handlers/OneTimePassword.vue',
  ]"></example>

Great! This is starting to work like we expect. Let’s check our requirements again:

- ~Users enter a series of digits, and each digit has its own `<input>` tag.~
- ~The value of the input should always be all the digits concatenated.~
- ~We only want the input to change its value if all digits have been completed (no need to commit and validate on each keystroke if the user is not done).~
- ~It should allow a user to click on a given digit to edit it.~
- ~When a user types a number, it should automatically focus on the next input.~
- It should support copy/paste.

### Copy & paste

Looks like we only have one thing left to do — copy & paste support. Fortunately, browsers [have a `paste` event](https://developer.mozilla.org/en-US/docs/Web/API/Element/paste_event). To ensure our user experience is top notch, we’ll make an assumption: if a user is copy/pasting they are trying to copy and paste the entire code. Not a single digit of the code. Seems reasonable.

All we need to do is capture the copy/paste event on any of our input tags, get the text being pasted, and set the `tmp` value to that string of digits. Let’s whip up another event handler:

<client-only>

```js
handlePaste(e) {
  const paste = e.clipboardData.getData('text')
  if (typeof paste === 'string') {
    // If it is the right length, paste it.
    this.tmp = paste.substr(0, this.max)
    const inputs = e.target.parentElement.querySelectorAll('input')
    // Focus on the last character
    inputs.item(this.tmp.length - 1).focus()
  }
}
```

</client-only>

<example
  name="One-time password - copy paste"
  init-file-tab="OneTimePassword.vue"
  :file="[
    '_content/examples/otp-copy-paste/Register.vue',
    '_content/examples/otp-copy-paste/OneTimePassword.vue',
  ]">
</example>

Our requirements are all complete!

## Registration

Now that we've worked up an excellent input, let’s register it with our application so we can use it anywhere by just using the string `otp`. Open up your Vue application’s main file (where `app.use(formKit)` is). We’ll just add to it:

<client-only>

```js
import { createApp } from 'Vue'
import App from 'App.vue'
import OneTimePassword from './OneTimePassword.vue'
import { plugin, defaultConfig, createInput } from '@formkit/vue'

const app = createApp(App)
app.use(
  plugin,
  defaultConfig({
    inputs: {
      otp: createInput(OneTimePassword, {
        props: ['digits'],
      }),
    },
  })
)
app.mount('#app')
```

</client-only>

Done! Now you can use your input anywhere in your application:

<client-only>

```html
<FormKit type="otp" digits="4" />
```

</client-only>

## Next steps

Our one-time password input is working great! Here are some ideas for additional features we could flesh out even further:

- An accompanying validation rule to perform a two-factor authentication call to the backend.
- Additional styles to really make it pop.
- If the form only contains a one-time password input, you could auto-submit the form!
- Complete the [custom input checklist](/essentials/custom-inputs#input-checklist).
- Publish it! If this input (or any others you make) is useful to you, it's probably useful to other people too. You might consider open-sourcing it!

Hopefully this guide helped you understand how custom inputs are declared, written, and registered. If you want to dive in deeper, try reading about the [core internals of FormKit](/essentials/architecture) and [creating custom inputs](/essentials/custom-inputs)!

<cta label="Want more? Start by reading about FormKit core." button="Dig deeper" href="/essentials/architecture"></cta>
