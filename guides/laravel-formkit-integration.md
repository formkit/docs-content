---
title: Integrating FormKit with Laravel 10 — Streamlining Form Creation and Validation
description: FormKit and Laravel are both powerful tools for building web applications, but they can be even more effective when used together.
---

# Laravel with FormKit

:PageToc

## Introduction

FormKit and Laravel are both powerful tools for building web applications — and they're even more effective when used together.

By integrating FormKit with Laravel, developers can streamline the form creation and validation process and take advantage of the benefits of both tools. In this guide, we will explore how to integrate FormKit with Laravel 10, — covering everything you need to get started — and concluding with a plugin you can use in your own projects for effortless integration.

## Installing Laravel 10 with Laravel Sail

Laravel Sail is a light-weight command-line interface for interacting with Laravel's default Docker configuration. It allows us to spin up a local development environment with minimal setup. To install Laravel 10 with Laravel Sail, we will need to have Docker and Docker Compose installed on our system.

We can create a new Laravel Sail application by running the following command, where `laravel-formkit` is the name of our app:

```bash
curl -s https://laravel.build/laravel-formkit | bash
```

We can change `laravel-formkit` in this URL to anything we prefer - we just need to make sure the application name only contains alpha-numeric characters, dashes, and underscores.

Now we can navigate to the newly created directory and start our local development environment by running the following command:

```bash
cd laravel-formkit

./vendor/bin/sail up

./vendor/bin/sail artisan migrate
```

This command will start up the Docker containers for our project and configure the necessary services.

Once the environment is up and running we can access our application in a browser by visiting `http://localhost`. For management of our Laravel project we can run any command inside the application's Docker container by using `./vendor/bin/sail` followed by the command we want to run.

## Adding Vue.js with Laravel Breeze to a Laravel 10 Application

Laravel Breeze is a simple, minimal implementation of all of Laravel's authentication features. This includes login, registration, password reset, email verification, and more. Laravel Breeze also includes support for Vue.js out-of-the-box, making it simple to add authentication to our Laravel 10 applications.

To add Laravel Breeze to our Laravel 10 application we need to install it using Composer:

```bash
./vendor/bin/sail composer require laravel/breeze --dev
```

Next, we need to run the `breeze:install` command and choose the vue frontend stack:

```bash
./vendor/bin/sail artisan breeze:install

./vendor/bin/sail artisan migrate
```

This command will install the necessary views, routes, and controllers for authentication, as well as the Vue.js components that make up the default front-end of the Laravel authentication system.

To serve Vue.js components we will need to run the following command to compile our project's assets:

```bash
npm install && npm run dev

# The reason to run npm without sail is because,
# some files cannot be found if run inside of it.
```

Now when we access the login page by at `http://localhost/login` or the registration page by at `http://localhost/register` we should see our application's Vue.js front-end.

By adding Laravel Breeze to our Laravel 10 application we've quickly added authentication functionality to our application and we are set up to Vue.js for our applicaiton's front-end.

## Adding FormKit to Vue.js: Enhancing Form Functionality

FormKit provides a convenient way to handle form submission, errors, and loading state. We can integrate FormKit with Laravel Inertia to keep our application state consistent.

To get started we need to install FormKit using `npm` or `yarn`:

```bash
npm install @formkit/vue
```

Next, we will go to our `resources/js/app.js` file so that we can add FormKit as a plugin to Vue.js:

```js
import '../css/app.css'

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m'
import { plugin as FormKitPlugin, defaultConfig } from '@formkit/vue' // Import FormKit plugin and defaultConfig here

const appName =
  window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel'

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.vue`,
      import.meta.glob('./Pages/**/*.vue')
    ),
  setup({ el, App, props, plugin }) {
    return createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ZiggyVue, Ziggy)
      .use(FormKitPlugin, defaultConfig) // Add the plugin here
      .mount(el)
  },
  progress: {
    color: '#4B5563',
  },
})
```

Lastly, we should add some styling to our forms so that they look nice. FormKit ships with a beautiful default theme called `genesis` — it even has a [Tailwind CSS version](/essentials/styling#tailwind-css) if that's your preference! To use FormKit's default theme we need to install it from `@formkit/themes`:

```bash
npm install @formkit/themes
```

And then we can import the theme:

```js
import { plugin as FormKitPlugin, defaultConfig } from '@formkit/vue' // Import FormKit plugin and defaultConfig here
import '@formkit/themes/genesis'
```

Great! Now we have installed FormKit with Vue.js and have access to powerful tooling to enhance the functionality of our forms inside our Laravel application.

## Laravel Breeze Input Components vs. FormKit Component

Laravel Breeze comes with a built-in solution for creating forms in Laravel — a set of pre-designed input components that can be easily dropped into your views. However, using these componest requires us as the developers to write large amounts of boilerplate and assume responsibility for input handling, ensuring an accessibile DOM structure, input validation, and much more.

Here is a basic form built using Lavarel's provided input components:

```html
<form @submit.prevent="submit">
  <div>
    <InputLabel for="email" value="Email" />
    <TextInput
      id="email"
      type="email"
      class="mt-1 block w-full"
      v-model="form.email"
      required
      autofocus
      autocomplete="username"
    />
    <InputError class="mt-2" :message="form.errors.email" />
  </div>
</form>
```

In comparison, FormKit provides a more customizable and flexible solution for form building. FormKit allows us to create custom form components, gives us control over the form markup and logic, and comes pre-plummed with accessible markup, validation and error handling and so much more. Here's our same form written with FormKit — much cleaner:

```html
// less boilerplate, better validation, built-in translations and automatic
accessibility in our markup.
<FormKit type="form" @submit="submit">
  <FormKit type="email" label="email" validation="required|email" />
</FormKit>
```

## Integrating Backend Responses with FormKit

One of the key benefits of using FormKit in our project is its ability to easily integrate with your backend and handle form submissions, errors, and loading state.

When a form is submitted, FormKit can be configured to send a request to our backend, handle the response, and update the form's state accordingly.

First — let's update our project's login page to use FormKit. Comments are included throughout to explain the example architecture.

```vue
<script setup>
// we can remove all breeze input imports.
import GuestLayout from '@/Layouts/GuestLayout.vue';
// we also won't be using `useForm` from Inertia, instead we will use `router`.
import { Head, Link, router } from '@inertiajs/vue3';

defineProps({
  canResetPassword: Boolean,
  status: String,
});

// set to the initial values for our FormKit form.
const initialState = {
  email: '',
  password: '',
  remember: false,
};

// FormKit collects all form values for you automatically at infinite depth.
// A non-reactive clone of these values is passed as the first parameter of the @submit event.
// We also get the FormKit form node as the second parameter.
const submit = (fields, node) => {
  router.post(route('login'), fields, {
    onFinish: () => node.reset(),
  });
};
</script>

<template>
  <GuestLayout>
    <Head title="Log in" />

    <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
      {{ status }}
    </div>

    <!-- we will change all form components to be FormKit -->
    <FormKit type="form" :value="initialState" @submit="submit" submit-label="Log in">
      <FormKit type="email" label="Email" name: "email" validation="required|email" />
      <FormKit type="password" label="Password" name="password" validation="required" />
        <template #label="context">
          <span :class="context.classes.label">
            {{ context.label }}
            <Link
              v-if="canResetPassword"
              :href="route('password.request')"
              class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Forgot your password?
            </Link>
          <span>
        </template>
      </FormKit>

      <FormKit type="checkbox" name: "remember" label="Remember me" />
    </FormKit>
  </GuestLayout>
</template>
```

We're getting there! But if we try to run this example we will notice that there are some missing features because of how Inertia works with FormKit. Our loading state, disabled state and backend errors aren't there yet. Adding those features requires integrating the FormKit `node` with the Inertia `router` inside our submit handler:

```js
// first import the createMessage helper, so that we can create a loading message.
import { createMessage } from '@formkit/core';

const submit = (fields, node) => {
  // here we create a loading message with visibility set to false.
  const loadingMessage = createMessage({
    key: 'loading',
    visible: false,
    value: true,
  });

  router.post(route('login'), fields, {
    onStart = (visit) => {
      // when Inertia starts a fetch we need to disable the form and start loading.
      // To do this, first we add the loading message to the FormKit form's message store.
      node.store.set(loadingMessage);

      // Then we add the disabled state
      node.props.disabled = true;
    },
    onFinish: () => {
      // When Inertia finishes its request we need to re-enable our form.
      // First we remove the loading message from the FormKit form's message store
      node.store.remove('loading');

      // Then we remove the disabled state
      node.props.disabled = false;

      node.reset();
    },
    onError: (errors) => {
      // In the event we have back-end errors we need to supply them to the form.
      // `setErrors` will propagate any error field in the errors object to the correct form children.
      node.setErrors([], errors);
    }
  });
};
```

And there we have it! FormKit is now integrated neatly with Inertia in our Laravel project.

In conclusion, FormKit is a powerful and flexible form library for Vue.js applications — including those powered by Laravel. By using FormKit we can take advantage of its many advanced features to create user-friendly forms that provide a better experience for our users.

The process of integrating FormKit with Laravel is straightforward and it will help you keep our codebase more consistent and maintainable. Regardless of our application's form complexity, FormKit provides a robust solution that can meet our project's needs.

## Bonus: A FormKit Inertia plugin

While it's great to understand how we can integrate FormKit with Inertia — it would still be difficult to do manually for every form in a larger project. It would be great if we could encapsulate this setup in a plugin and apply it across our entire project.

Fortunately we already created a [plugin](/plugins/inertia) that integrates FormKit tightly with Inertia.

First, we need to install it:

```bash
npm install @formkit/inertia
```

Next, we need to import and create a form helper using `useForm`:

```ts
import { useForm } from '@formkit/inertia'

const form = useForm(initialState)
```

We also need to add the plugin that it returns to the FormKit `form` component:

```html
<FormKit type="form" @submit="submit" submit-label="Log in" :plugins="[form.plugin]">
  <!-- The rest of the form -->
</FormKit>
```

Lastly, we go back to our submit function and update it:

```js
const submit = form.post('/login')
```

With all of our previous logic encapsulated into a plugin it is now trivial to add FormKit to our project. Adding FormKit to a Laravel 10 application using Breeze with Vue.js and Inertia provides both developers and application end-users with a better overall form experience.

::Cta
---
label: "Ready to dive deeper into FormKit?" 
button: "Learn more about FormKit's unique architecture" 
href: "/essentials/architecture"
---
::
