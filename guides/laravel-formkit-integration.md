---
title: Integrating FormKit with Laravel — Streamlining Form Creation and Validation
description: FormKit and Laravel are both powerful tools for building web applications, but they can be even more effective when used together.
---

# Integrating FormKit with Laravel

:PageToc

## Introduction

Building web applications with Laravel becomes even more effective when integrating it with FormKit. By combining these powerful tools, you will benefit from streamlined form creation and validation processes.

In this guide, we'll cover everything you need to know to get started building powerful forms with Laravel using FormKit. Then, we'll conclude with a way to avoid all the boilerplate and get spun up quicker using a third-party plugin (which is maintained by a FormKit team member) that integrates FormKit with Inertia.

## Why use FormKit?

There are a lot of considerations when building complex web applications. Using FormKit, you can offload much of that effort and focus on building better forms. Here are some reasons why you should use FormKit:

- **Consistent API:** FormKit uses a single component for all of its inputs.
- **Accessible:** With 24+ accessible inputs powered, FormKit gives you an accessible DOM structure out-of-the-box.
- **Better DX and UX:** FormKit bakes 20+ production-ready rules directly into the inputs, automatically handling front-end form validation and providing users with instant feedback.
- **Customization:** You have all of the control. FormKit allows you to easily style your form by modifying its classes and even HTML. And for those advanced developers, it's also fully extensible, complete with hooks, events, plugins, libraries, and schemas.

## Getting started

Let's begin setting up Laravel and FormKit using Laravel Sail. Laravel Sail is a lightweight command-line interface for interacting with Laravel's default Docker configuration. With minimal setup, you can spin up a local development environment.

::Callout
---
type: "info"
label: "Preperation"
---
This guide assumes you have Docker and Docker Compose installed on your machine. To get started, you only need to install [Docker Desktop](https://www.docker.com/products/docker-desktop).
::

### Installing Laravel with Laravel Sail
With Docker already installed, we can create a new Laravel Sail application by running the following command, where `laravel-formkit` is the name of our app:

```bash
curl -s https://laravel.build/laravel-formkit | bash
```

Feel free to change `laravel-formkit` in this URL to anything you like - it just needs to contain alphanumeric characters, dashes, and underscores.


Navigate to the newly created directory:

```bash
cd laravel-formkit
```

We can start our local development environment in detached mode (runs in the background) by running the following command:

```bash
./vendor/bin/sail up
```

Once the environment is up and running, we can access our application in a browser by visiting `http://localhost`.


### Adding Laravel Breeze

Laravel Breeze gives you a starting point for your Laravel application by automatically scaffolding your application with the routes, controllers, and views you'll need to register and authenticate your application's users. It also offers Vue scaffolding, so let's add Laravel Breeze to our application.

We can add Laravel Breeze by installing it via Composer:

```bash
./vendor/bin/sail composer require laravel/breeze --dev
```

Running this opens up the `breeze:install` command that will allow us to install Vue:

```bash
./vendor/bin/sail artisan breeze:install vue
```

Now that we've scaffolded our application, we can compile our front-end assets and serve our application by running the following commands:

```bash
npm install && npm run dev
```

To access the login page go to `http://localhost/login`, or to view the registration page, go to `http://localhost/register`. Here we should see our application's Vue.js front end.

### Adding FormKit

As we discussed in [Why use FormKit?](#why-use-formkit) there are many reasons to leverage the form-building framework features of FormKit. To begin using these features, let's add FormKit to our application. We can install it using `npm` or `yarn`:

```bash
npm install @formkit/vue
```

Next, we'll add FormKit to Vue.js as a plugin. Let's open up resources/js/app.js to import `FormKitPlugin` and `defaultConfig` from `@formkit/vue` and begin using it within our app:

```js
import '../css/app.css'

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m'
import { plugin as FormKitPlugin, defaultConfig } from '@formkit/vue' // Here we import our plugin and default config
 
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
      .use(FormKitPlugin, defaultConfig) // Here we use our imported plugin and default config
      .mount(el)
  },
  progress: {
    color: '#4B5563',
  },
})
```

Lastly, we'll add FormKit's convenient base theme `Genesis` to add some styles to our forms. `Genesis` even has a [Tailwind CSS](/essentials/styling#tailwind-css) version if that's your preference. To use FormKit's base theme, we can install it from `@formkit/themes`:

```bash
npm install @formkit/themes
```

Then we can import the theme by adding it below the other import statments in `resources/js/app.js`:

```js
import '@formkit/themes/genesis'
```

### Integrating Back-End Responses with FormKit

One of the key benefits of using FormKit is its ability to easily integrate with your back-end and handle form submissions, errors, and loading state.

You can configure FormKit to send a request to our back-end, handle the response, and update the form's state accordingly when a form is submitted.

Open up `resources/js/Pages/Auth/Login.vue` so we can begin updating our project's login page to use FormKit:

```html
<script setup>
// We can remove all breeze input imports.
import GuestLayout from '@/Layouts/GuestLayout.vue';
// We also won't be using `useForm` from Inertia. Instead, we will use `router`.
import { Head, Link, router } from '@inertiajs/vue3';

defineProps({
 canResetPassword: Boolean,
 status: String,
});

// Set to the initial values for our FormKit form.
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
          </span>
        </template>
        <FormKit type="checkbox" name="remember" label="Remember me" />
    </FormKit>
  </GuestLayout>
</template>
```

We're getting there! Though, if we try to run this example, we'll notice some missing features because of the lack of integration between Inertia and FormKit. Our loading state, disabled state, and back-end errors aren't available yet. Adding these features requires us to integrate the FormKit node with the Inertia router inside our submit handler:

First, import the `createMessage` helper so that we can create a loading message:

```js
import { createMessage } from '@formkit/core';
```

Now, we can alter the submit handler to integrate the FormKit node and Inertia router:

```js
const submit = (fields, node) => {
  // Here, we create a loading message with visibility set to false.
  const loadingMessage = createMessage({
    key: 'loading',
    visible: false,
    value: true,
  });
  router.post(route('login'), fields, {
    onStart: (visit) => {
      // When Inertia starts a fetch, we'll disable the form and start loading.
      // To do this, we'll first add the loading message to the FormKit form message store.
      node.store.set(loadingMessage);
      // Then we add the disabled state
      node.props.disabled = true;
    },
    onFinish: () => {
      // When Inertia finishes its request, we need to re-enable our form.
      // First, we remove the loading message from the FormKit form's message store
      node.store.remove('loading');
      // Then we remove the disabled state
      node.props.disabled = false;
      node.reset();
    },
    onError: (errors) => {
      // Should we have back-end errors, we need to supply them to the form.
      // `setErrors` will propagate any error field in the errors object to the correct form children.
      node.setErrors([], errors);
    }
  });
};
```
## Remove Code Repetition

Now that we've integrated FormKit with Inertia and understand the process of doing so, it would be time-consuming to do this manually for every form in a much larger project.

Fortunately, we have a [third-party plugin](https://github.com/GustavoFenilli/formkit-addon-inertia) (maintained by a FormKit team member) at our disposal for integrating FormKit with Inertia.

Let's get that installed:

```bash
npm install formkit-addon-inertia
```

Next, we need to import the plugin in `resources/js/app.js`:

```js
import { plugin as inertiaPlugin } from 'formkit-addon-inertia'
```

Now we can update our FormKit configuration by extending the `defaultConfig`:

```js
return (
  createApp({ render: () => h(App, props) })
    .use(plugin)
    .use(ZiggyVue, Ziggy)
    // Here we are extending the defaultConfig to use our inertiaPlugin
    .use(
      FormKitPlugin,
      defaultConfig({
        plugins: [inertiaPlugin],
      })
    )
    .mount(el)
)
```

Now, we can go back to `resources/js/Pages/Auth/Login.vue` and update the submit handler we altered in the previous section to work with our new plugin:

```js
const submit = (fields, node) => {
  // We use our new context.inertia object from the node added by the plugin instead.
  // When using the plugin, all of the disabled, loading, and error states are handled for us automatically.
  node.context.inertia.post(route('login'), fields, {
    onFinish: (_, node) => {
      // Our FormKit node is passed to our Inerta callbacks so that we can
      // clean up things such as resetting the form after submission.
      node.reset()
    },
  })
}
```

It's now super easy to add FormKit to our application with all that previous logic wrapped up into a plugin. Adding FormKit to a Laravel application delivers a better form development experience for developers and end-users with an exceptional user experience.

## Bonus: Adding Orders to our Application

Adding FormKit to the existing login page was a good introduction. However, let's add a new migration, model, controller, and form to our application to give more insight into how well FormKit works when it's integrated with Laravel.


### Creating The Order Migration

We'll be adding the ability for users to order a free promotional t-shirt, so let's begin by generating a new migration for our `Orders`.

To generate a migration, we'll use the Artisan command make:migration:

```bash
./vendor/bin/sail artisan make:migration create_orders_table
```

Let's take a look at the migration generated for us in the `database/migrations` directory and begin updating it with the additional fields that we'll need to take our orders:

```php
<?php
 
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
 
return new class extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('orders', function (Blueprint $table) {
      $table->id();
      $table->string('name');
      $table->string('email');
      $table->string('address');
      $table->enum('size', ['s', 'm', 'l', 'xl', 'xxl']);
      $table->text('notes')->nullable(true);
    });
  }
  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::drop('orders');
  }
};
```

Now we can run our migrations to include our newly added fields on the Orders table:

```bash
./vendor/bin/sail artisan migrate
```

### Creating The Order Model

We need an Order model for the Order migration we just created. You can generate new models in Laravel using the Artisan command make:model.

Let's create our Order model by running the following command:

```bash
./vendor/bin/sail artisan make:model Order
```

Having generated our `Order` model, we'll need to add some functionality. Open up `Order.php` in the `app/Models` directory and add the following attributes to the `$fillable` property on the `Order` model like so:

```php
<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class Order extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = ['name', 'email', 'address', 'size', 'notes'];
}
```

### Creating The Order Controller

Now we need an Order controller for the Order model we just created. You can generate new controllers in Laravel using the Artisan command `make:controller`.

Let's create our Order controller by running the following command:

```bash
./vendor/bin/sail artisan make:controller OrderController
```

Let's look at the `OrderController.php` file generated for us. You can find it in the `app/Http/Controller` directory. Here we can add `show` and `store` methods to handle the functionality when visiting those routes.

```FINISH ARTICLE```


::Cta
---
label: "Ready to dive deeper into FormKit?" 
button: "Learn more about FormKit's architecture" 
href: "/essentials/architecture"
---
::