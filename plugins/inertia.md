---
title: Inertia Plugin
description: A plugin for integrating FormKit with Laravel Inertia.
---

# Inertia Plugin

:PageToc

The `@formkit/inertia` plugin aims to seamlessly integrate Inertia.js with FormKit forms, leveraging a robust event system that harnesses Inertia.js event callbacks and FormKit plugins for a smooth and powerful web development experience.


## Installation

To use the Inertia plugin we need to to have a Laravel project already with Inertia Vue.JS installed and running you can check how by looking into the first sections of the guide [Using FormKit with Laravel Inertia](/guides/using-formkit-with-laravel-inertia).

Now you can install using your preferred package manager by following this bash command:

```command
npm install @formkit/inertia
```

## Usage

To use the Inertia plugin we need to import the `useForm` function from `@formkit/inertia`, call the `useForm` function to receive the `form`, it comes with Inertia method calls, reactive states, the plugin event system, and the FormKit plugin.

The `useForm` function can take one optional argument:

- `initialFields`: The initial fields to be passed to your form.

### Method Calls

The `useForm()` composable returns the methods `get`, `post`, `put`, `patch` and `delete`. All of these methods will return a suitable function for use as FormKit’s `@submit` handler.

The easiest way to use it is by creating a new `const` with the resulting method of your choice:

```html
<script setup lang="ts">
  import { useForm } from '@formkit/inertia'

  const form = useForm()
  const submitHandler = form.post('/login')
</script>

<template>
  <FormKit type="form" @submit="submitHandler" :plugins="[form.plugin]">
    <FormKit type="text" name="username" label="Username" />
    <FormKit type="password" name="password" label="Password" />
  </FormKit>
</template>
```

You could also also define the handler directly in your template:

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

The `useForm()` composable also returns reactive states. The Inertia ones are: `processing`, `progress`, `recentlySuccessful` and `wasSuccessful`, the FormKit based ones are `valid`, `errors`, `dirty` and `node`. For example, you could use the `processing` state to disable the form submit button while Inertia is processing the form (assuming that you’re using your own submit button):

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

If you need to new features, or want to run some code on Inertia event callbacks but want to keep the functionality of this package intact, you can use the provided event functions `on()` and `combine()`. These add functions to the event callbacks without having to deal with option merging.

The `on()` function accepts any of the events from Inertia’s event callbacks (without the `on` prefix), specifically: `before`, `start`, `progress`, `success`, `error`, `cancel`, and `finish`. The arguments passed to your callback are the Inertia event’s callback arguments and then FormKit's node:

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

The `useEventsSystem()` composable returns 4 functions `on()`, `combine()`, `execute()` and `toVisitOptions()`. The `on` function accepts these events `before`, `start`, `progress`, `success`, `error`, `cancel`, `finish`:

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

The `combine()` function allows you to define multiple events in a single block:

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

The `execute()` function executes the given event. It expects the event, parameters, and any other parameter passed as a type to `useEventSystem` and returns the result of the event callback from Inertia:

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

The `toVisitOptions()` functions returns a compatible `VisitOptions` where all event callbacks will be defined for you, and inside it will already have the `execute()` function being returned for convenience making it already ready to be used in Inertia's `router()` function as its options:

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
