---
title: Integrating FormKit with Laravel 9 — Streamlining Form Creation and Validation
description: FormKit and Laravel are both powerful tools for building web applications, but they can be even more effective when used together.
---

# Integrating FormKit with Laravel 9: Streamlining form creation and validation

<page-toc></page-toc>

FormKit and Laravel are both powerful tools for building web applications, but they can be even more effective when used together. FormKit is a form building library that makes it easy to create and validate forms, while Laravel is a popular PHP framework for building web applications. By integrating FormKit with Laravel, developers can streamline the form creation and validation process and take advantage of the benefits of both tools. In this article, we will explore how to integrate FormKit with Laravel 9, including a step-by-step guide for getting started.

## Installing Laravel 9 with Laravel Sail

Laravel Sail is a light-weight command-line interface for interacting with Laravel's default Docker configuration. It allows developers to spin up a local development environment with minimal setup. To install Laravel 9 with Laravel Sail, you will need to have Docker and Docker Compose installed on your system.

First, we will create a new Laravel Sail application by running the following command, where `laravel-formkit` is the name of our app:

<client-only>

```bash
curl -s https://laravel.build/laravel-formkit | bash
```

</client-only>

Of course, you can change `laravel-formkit` in this URL to anything you like - just make sure the application name only contains alpha-numeric characters, dashes, and underscores.

Next, navigate to the newly created directory and start the local development environment by running the following command:

<client-only>

```bash
cd laravel-formkit

./vendor/bin/sail up

./vendor/bin/sail artisan migrate
```

</client-only>

This command will start up the necessary Docker containers and configure the necessary services.

Once the environment is up and running, you can access your application in your browser by visiting `http://localhost`. You can also run any command inside the app container by running the command via `./vendor/bin/sail` followed by the command you want to run.

## Adding Vue.js with Laravel Breeze to a Laravel 9 Application

Laravel Breeze is a simple, minimal implementation of all of Laravel's authentication features, including login, registration, password reset, email verification, and more. It also includes support for Vue.js out of the box, making it easy to add authentication to your Laravel 9 application.

To add Laravel Breeze to your Laravel 9 application, you'll first need to install it using Composer:

<client-only>

```bash
./vendor/bin/sail composer require laravel/breeze --dev
```

</client-only>

Next, you'll need to run the `breeze:install vue` command:

<client-only>

```bash
./vendor/bin/sail artisan breeze:install vue
```

</client-only>

This command will install the necessary views, routes, and controllers for authentication, as well as the Vue.js components that make up the front-end of the authentication system.

To serve the Vue.js components, you'll need to run the following command to compile the assets:

<client-only>

```bash
npm install && npm run dev

# The reason to run npm without sail is because,
# some files cannot be found if run inside of it.
```

</client-only>

Now, you can access the login page by visiting `http://localhost/login` and the registration page by visiting `http://localhost/register` in your browser.

By adding Laravel Breeze to your Laravel 9 application, you can quickly add authentication functionality to your application, as well as take advantage of Vue.js for the front-end.

## Why using the built-in login page from Laravel Breeze is less optimal than using FormKit

While Laravel Breeze does provide a built-in login page, it may not be the best option for all use cases. Here are a few reasons why using FormKit as a form library can be a better choice:

1. **Time-saving:** FormKit provides a simple and easy-to-use API that allows you to quickly create and manage forms, saving you time and effort.
2. **Value handling:** FormKit collects the values from children to its parent automatically, making it easier to get the collection when submiting to your backend.
3. **Error handling:** FormKit automatically handles form validation and error messages, making it easy to ensure that your forms are accurate and user-friendly.
4. **Customization:** FormKit allows you to easily customize the look and feel of your forms, including adding custom CSS classes and attributes.

While the built-in login page from Laravel Breeze does provide basic authentication functionality, it may not be able to fully meet the needs of a complex web application. Using FormKit as your form library provides greater flexibility, customizability, and security for your login forms.

## Adding FormKit to Vue.js: Enhancing Form Functionality

FormKit provides a convenient way to handle form submission, errors and loading state, that can be easily integrated with Laravel Inertia to keep your application state consistent.

First, we need to install FormKit using `npm` or `yarn`:

<client-only>

```bash
npm install @formkit/vue
```

</client-only>

Next, we will go to our `resources/js/app.js` file so we cann add FormKit as a plugin to Vue.js:

<client-only>

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

</client-only>

Lastly, we should also add some styling to our forms so that they look nice. FormKit ships with a beautiful theme called `genesis` — it even has a Tailwind CSS variant for it! To use FormKit's default theme we need to install it from `@formkit/themes`:

<client-only>

```bash
npm install @formkit/themes
```

</client-only>

And then we can import the theme:

<client-only>

```js
import { plugin as FormKitPlugin, defaultConfig } from '@formkit/vue' // Import FormKit plugin and defaultConfig here
import '@formkit/themes/genesis'
```

</client-only>

In conclusion, integrating FormKit with Vue.js is straightforward and is a powerful way to enhance the functionality of your forms in your Laravel application.

## Laravel Breeze Input Components vs. FormKit Component

Laravel Breeze provides built-in solution for creating forms in Laravel, with a set of pre-designed input components that can be easily dropped into your views. However, these components come with more boilerplate, as the developer is responsible for taking care of input handling, ensuring accessibile dom structure, validation, and much more.

Here is a basic form built using Lavarel's provided input components:

<client-only>

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

</client-only>

FormKit, on the other hand, provides a more customizable and flexible solution for form building. It allows you to create custom form components and gives you control over the form markup and logic. FormKit also provides advanced features, such as form validation, error handling, and dynamic form fields, that are not available in Laravel Breeze:

<client-only>

```html
// less boilerplate, better validation, built-in translations and automatic
accessibility in our markup.
<FormKit type="form" @submit="submit">
  <FormKit type="email" label="email" validation="required|email" />
</FormKit>
```

</client-only>

## Integrating Backend Responses with FormKit

One of the key benefits of using FormKit is its ability to easily integrate with your backend and handle form submissions, errors, and loading state.

When a form is submitted, FormKit can send a request to your backend, handle the response, and update the form's state accordingly.

First, let's update the Login page to use FormKit. Comments are included throughout to explain the example architecture.

<client-only>

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
      <FormKit type="email" label="Email" name="email" validation="required|email" />
      <FormKit type="password" label="Password" name="password" validation="required">
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

      <FormKit type="checkbox" name="remember" label="Remember me" />
    </FormKit>
  </GuestLayout>
</template>
```

</client-only>

We're getting there! But if you try to run this example now you will notice that there are some missing features because of how Inertia works with FormKit. Our loading state, disabled state and backend errors aren't there. Adding those features requires using the FormKit `node` to integrate with the `router` inside our submit handler:

<client-only>

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

</client-only>

And there we have it! FormKit is now integrated neatly with Inertia in our Laravel project.

In conclusion, FormKit is a powerful and flexible form library for Vue.js applications — including those powered by Laravel. By using FormKit you can take advantage of its many advanced features to create user-friendly forms that provide a better experience for your users.

The process of integrating FormKit with Laravel is straightforward and it will help you keep your codebase more consistent and maintainable. Regardless of your application's form complexity, FormKit provides a robust solution that can meet your needs.

## Bonus: A FormKit Inertia plugin

While it's great to understand how we can integrate FormKit with Inertia — it would still be difficult to do manually for every form in a larger project. It would be great if we could encapsulate this setup in a plugin and apply it across our entire project.

Fortunately a [3rd-party plugin](https://github.com/GustavoFenilli/formkit-addon-inertia) (maintained by a FormKit team member) that integrates FormKit tightly with Inertia is availble.

First, we need to install it:

<client-only>

```bash
npm install formkit-addon-inertia
```

</client-only>

Next, we need to add the plugin to our FormKit configuration by extending the `defaultConfig`:

<client-only>

```js
// app.js

// we import the new InertiaPlugin here
import { plugin as inertiaPlugin } from 'formkit-addon-inertia'

return (
  createApp({ render: () => h(App, props) })
    .use(plugin)
    .use(ZiggyVue, Ziggy)
    // here we are extending the defaultConfig with out configuration
    .use(
      FormKitPlugin,
      defaultConfig({
        plugins: [inertiaPlugin],
      })
    )
    .mount(el)
)
```

</client-only>

Lastly, we go back to our submit function and update it:

<client-only>

```js
const submit = (fields, node) => {
  // we use our new context.inertia object from node added by the plugin instead.
  // When using the plugin all of the disabled, loading and error states are handled for us automatically.
  node.context.inertia.post(route('login'), fields, {
    onFinish: (_, node) => {
      // Our FormKit node is passed to our Inerta callbacks so that we can
      // do clean up such as reseting the form after submit.
      node.reset()
    },
  })
}
```

</client-only>

With all of our previous logic encapsulated into a plugin it is now trivial to add FormKit to our project. Adding FormKit to a Laravel 9 application using Breeze with Vue.js and Inertia is will provide both developers and application end-users with a better overall form experience.

<cta label="Ready to dive deeper into FormKit?" button="Learn more about FormKit's unique architecture" href="/essentials/architecture"></cta>
