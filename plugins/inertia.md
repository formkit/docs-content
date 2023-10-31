---
title: Inertia Plugin
description: Use this to integrate your FormKit forms with Inertia calls.
---

# Inertia Plugin

:PageToc

The `@formkit/inertia` plugin aims to seamlessly integrate Inertia.js with FormKit forms, leveraging a robust event system that harnesses Inertia.js event callbacks and FormKit plugins for a smooth and powerful web development experience, and here is why:

- Your time should be used on creating forms and backends, not integrations.
- Having an easy to install and use package, makes it so you don't need to care about packaging and publishing.

::Callout
---
type: "warning"
label: "Inertia Plugin"
---
The <code>@formkit/inertia</code> is intended to run on a FormKit form. Your usage of the composable and plugin will be on a per-form basis and each form that requires Inertia integration.
::

## Installation

To use the Inertia plugin we need to to have a Laravel project already with Inertia Vue.JS installed and running you can check how by looking into the first sections of the guide [Using FormKit with Laravel Inertia](/guides/using-formkit-with-laravel-inertia).

Now you can install using your preferred package manager by following this bash command:

```command
npm install @formkit/inertia
```

## Usage

To use the Inertia plugin we need to import the `useForm` function from `@formkit/inertia`, call the `useForm` function to create receive the `form`, it comes with Inertia method calls, reactive states, the plugin event system and the FormKit plugin.

The `useForm` function can take one optional argument:

- `initialFields`: The initial fields to be passed to your form.

### Method Calls

To submit the form, `useForm()` returns the methods `get`, `post`, `put`, `patch` and `delete`, any of those will return a suitable function that FormKit `@submit` expects.

The easiest way to use it is by creating a new `const` with the resulting method of your choice:

```html
<script setup lang="ts">
  import { useForm } from '@formkit/inertia'

  const form = useForm()
  const submit = form.post('/login')
</script>

<template>
  <FormKit type="form" @submit="submit" :plugins="[form.plugin]">
    <FormKit type="text" name="username" label="Username" />
    <FormKit type="password" name="password" label="Password" />
  </FormKit>
</template>
```

But you can also manually pass the variables to the returned function:

```html
<FormKit
  type="form"
  @submit="(fields, node) => form.post('/login')(fields, node)"
  :plugins="[form.plugin]"
>
  <!-- The rest of your form -->
</FormKit>
```

The functions support all [visit options](https://inertiajs.com/manual-visits) from Inertia, such as `preserveState`, `preserveScroll`, and event callbacks.

::Callout
---
type: "info"
label: "Overwriting"
---
The <code>options</code> event callbacks will overwrite any default events to that specific event, meaning that if you for example add `onStart` you will lose the events from `start` that are for example loading, disabling and processing.
::

```html
<FormKit
  type="form"
  @submit="(fields, node) => form.post('/login', {
    preserveScroll: true,
    onSuccess: () => form.node.reset(),
  })(fields, node)"
  :plugins="[form.plugin]"
>
  <!-- The rest of your form -->
</FormKit>
```

To cancel a form submission, use the `cancel()` method.

```html
<FormKit
  type="form"
  @submit="(fields, node) => form.post('/login')(fields, node)"
  :plugins="[form.plugin]"
>
  <!-- The rest of your form -->
</FormKit>

<FormKit type="button" @click="form.cancel()" label="Cancel" />
```

### States

The `useForm()` returns some helpful reactive states, the Inertia based ones are: `processing`, `progress`, `recentlySuccessful` and `wasSuccessful`, the FormKit based ones are `valid`, `errors`, `dirty` and `node`, those events can be helpful for example for disabling the form submit button if you're using your own submit instead of the provided FormKit one:

```html
<template>
  <FormKit type="form" @submit="submit" :plugins="[form.plugin]">
    <FormKit type="text" name="username" label="Username" />
    <FormKit type="password" name="password" label="Password" />

    <template #submit>
      <FormKit type="submit" label="Log in" :disabled="form.processing" />
    </template>
  </FormKit>
</template>
```

### Event Functions

If you need to new features, or want to run some code on Inertia event callbacks but want to keep the functionality of this package intact, you can use the provided event functions `on()` and `combine()`, those functions are meant to add functions to the event callbacks without having to deal with option merging.

The `on()` function accepts any of the events from Inertia event callbacks without the `on` prefix, those being `before`, `start`, `progress`, `success`, `error`, `cancel`, `finish` and the parameters will be always the event callback parameter then FormKit's node:

```html
<script setup lang="ts">
  import { useForm } from '@formkit/inertia'

  const form = useForm()
  form.on('before', () => {
    return confirm('Are you sure you want to delete this user?')
  })
</script>
```

The `combine()` function is just a easier way to add multiple events in a single place:

```html
<script setup lang="ts">
  import { useForm } from '@formkit/inertia'

  const form = useForm()
  form.combine((on) => {
    on('before', () => {
      return confirm('Are you sure you want to delete this user?')
    })

    on('success', () => {
      toast('User deleted.')
    })
  })
</script>
```

## Event System

The core functionality of all comes from the simple and yet porweful event system wrapper for Inertia visit options, the `useForm()` uses the `useEventsSystem()` to create a way to access and retrive the event callbacks with multiple function calls correctly, without having to deal with object merging.

The `useEventsSystem()` returns 4 functions `on()`, `combine()`, `execute()` and `toVisitOptions()`, the `on` function is just the same as its passed to the return of `useForm`, it also accepts these events `before`, `start`, `progress`, `success`, `error`, `cancel`, `finish`:

```ts
const event = useEventsSystem()
event.on('before', (visit) => {
  console.log(visit)
})
```

As you can see it only gets `visit` as a parameter because `useEventsSystem()` was not specified that its events will receive more than that, but you can extend by passing an array of types of parameters to it:

```ts
const event = useEventsSystem<[node: FormKitNode]>()
event.on('before', (visit, node) => {
  console.log(visit, node)
})
```

The `combine()` function is meant to be used for easily pass multiple events in a single place:

```ts
// addon.ts
return (on) => {
  on('before', (visit, node) => {
    console.log(visit, node)
  })

  on('success', (page, node) => {
    console.log(page, node)
  })
}

// app.ts
import addon from './addon'

const event = useEventsSystem<[node: FormKitNode]>()
event.combine(addon)
```

The `execute()` function runs the events expects the event and the parameters to returns the expected return of that event callback from Inertia:

```ts
const event = useEventsSystem<[node: FormKitNode]>()

event.on('before', (visit, node) => {
  console.log(visit, node)
})
event.on('before', (visit, node) => {
  return false
})

const result = event.execute('before', visit, node) // runs console.log
console.log(result) // returns false
```

The `toVisitOptions()` functions returns a `VisitOptions` with all events that where passed prior to it by wrapping the `execute()` function, and its already ready to used in Inertia's `router()` function:

```ts
const event = useEventsSystem<[node: FormKitNode]>()

event.on('before', (visit, node) => {
  console.log(visit, node)
})
event.on('start', (visit, node) => {
  console.log(visit, node)
})

const options = event.toVisitOptions(node)
/**
 * {
 *    onBefore: (visit) => {
 *        return execute('before', visit, node)
 *    },
 *    onStart: (visit) => {
 *        return execute('start', visit, node)
 *    },
 * }
 */

router.post('/login', options)
```
