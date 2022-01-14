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
  name="One time password - register"
  file="/_content/examples/otp-register/otp-register"
  langs="vue">
</example>

Excellent! Now we can iterate on our `OneTimePassword.vue` file and see the results. One of the first things to notice is how our input already supports labels, help text, validation, and other universal FormKit props. Those features come courtesy of `createInput()`.

Also, notice that `<pre>` tag in the above example? It is outputting the current state of the form’s data. We'll use this visualize the value of our custom input. Since our input currently has no value it does not appear in the form’s data. Time to change that!

## Input & Output

Let’s open up `OneTimePassword.vue` again and change our `<div>` to an `<input>` tag. We’ll start with a single text input, and work our way up from there. But how do we actually set and display the value of our custom input?

All custom inputs are passed the all-mighty [context object](/advanced/context) as the `context` prop. In order for our input to set its value, it needs to call `context.node.input(value)`. To properly display the value of our input we should set the input’s `:value` attribute to `context._value`.

<example
  name="One time password - first value"
  file="/_content/examples/otp-first-value/otp-first-value"
  langs="vue">
</example>

Our little baby input is all grown up! It now reads and writes values. As proof, try setting the initial value of the form’s `values` object to `{ two_factor_code: '12345' }` and you'll see the input gets auto-populated with the value.

## OTP requirements

Ok, now that we understand how to create an input, how to use it, and how to read and write values — let’s tackle the actual "business logic" of our one time password input. Let’s discuss our requirements:

- Users enter a series of digits and each digit has its own `<input>` tag.
- The value of the input should always be all the digits concatenated.
- We only want the input to change values if all digits have been completed (no need to commit and validate the value if its not complete).
- It should allow a user to click on a given digit to edit it.
- When a user types a number, it should automatically focus on the next input.
- It should support copy/paste.

## Adding a prop

Tackling our first requirement — we need `n` `<input>` tags. Perhaps it would be best to expose the number of digits as a prop. To do that, we need to inform our `createInput` function that we want to accept a new prop:

```js
createInput(OneTimePassword, {
  props: ['digits'],
})
```

We now have access to `context.digits`. Back in `OneTimePassword.vue` lets use that to output the correct number of `<input>` tags.

<example
  name="One time password - input tags"
  file="/_content/examples/otp-tags/otp-tags"
  langs="vue">
</example>

OK, Multiple inputs! Our first requirement is complete:

- ~Users enter a series of digits and each digit has its own `<input>` tag.~

<callout type="tip" label="Styling">
We’ve added a touch of css in the above example, but in general we’re not going to dive into styling in this guide. It is recommended to use <code>context.classes.yourKey</code> as the class name of elements in your input.
</callout>

## Interactivity

Notice in the above example that when you type into one input all the other inputs are synced to the same value? Kinda neat, but not what we want. This is because we are still using the same input handler and `:value`. Here's a plan to improve our input:

- Each input should only modify the character at its respective index in the final string.
- The input handler should call `focus()` on the next input.
- When the string is the same length as `digits` we update the value of the input by calling `context.node.input()`.

<example
  name="One time password - input handlers"
  file="/_content/examples/otp-handlers/otp-handlers"
  langs="vue">
</example>

Great! This is starting to work like we expect. Let’s check our requirements again:

- ~Users enter a series of digits and each digit has its own `<input>` tag.~
- ~The value of the input should always be all the digits concatenated.~
- ~We only want the input to change values if all digits have been completed (no need to commit and validate the value if its not complete).~
- ~It should allow a user to click on a given digit to edit it.~
- ~When a user types a number, it should automatically focus on the next input.~
- It should support copy/paste.

### Copy & Paste

Looks like we only have one thing left to do — copy & paste support. Fortunately, browsers [have a `paste` event](https://developer.mozilla.org/en-US/docs/Web/API/Element/paste_event). To ensure our user experience is top notch we’ll make an assumption: if a user is copy/pasting they are trying to copy and paste the entire code. Not a single digit of the code. Seems reasonable.

All we need to do is capture the copy/paste event on any of our input tags, get the text being pasted, and set the `tmp` value to that string of digits. Let’s whip up another event handler:

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

<example
  name="One time password - input handlers"
  file="/_content/examples/otp-copy-paste/otp-copy-paste"
  langs="vue">
</example>

Our requirements are all complete!

## Registration

Now that we've worked up an excellent input, let’s register it with our application so we can use it anywhere by just using the string `otp`. Open up your Vue application’s main file (where `app.use(formKit)` is). We’ll just add to it:

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

Done! Now you can use your input anywhere in your application:

```html
<FormKit type="otp" digits="4" />
```

## Next steps

Our one time password input is working great — here are some ideas of additional features we could flesh out even further:

- An accompanying validation rule to perform our 2 factor authentication call to the backend.
- Some additional styles could really make it pop.
- If the form only contains a one time password input, you could auto-submit the form!
- Complete the [custom input checklist](/advanced/custom-input#input-checklist).
- Publish it! If this input (or any others you make) is useful to you, it is probably useful to lots of other people too. You might consider opensourcing it!

Hopefully this guide helped you understand how custom inputs are declared, written, and registered. If you want to dive in deeper — try reading about the [core internals of FormKit](/advanced/core) and [creating custom inputs](/advanced/custom-inputs)!

<cta label="Want more? Start by reading about FormKit core." button="Dig deeper" href="/advanced/core"></cta>
