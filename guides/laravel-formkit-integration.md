# Integrating FormKit with Laravel 9: Streamlining Form Creation and Validation

FormKit and Laravel are both powerful tools for building web applications, but they can be even more effective when used together. FormKit is a form building library that makes it easy to create and validate forms, while Laravel is a popular PHP framework for building web applications. By integrating FormKit with Laravel, developers can streamline the form creation and validation process and take advantage of the benefits of both tools. In this article, we will explore how to integrate FormKit with Laravel 9, including a step-by-step guide for getting started.

## Installing Laravel 9 with Laravel Sail

Laravel Sail is a light-weight command-line interface for interacting with Laravel's default Docker configuration. It allows developers to easily spin up a local development environment with minimal setup. To install Laravel 9 with Laravel Sail, you will need to have Docker and Docker Compose installed on your system.

First, we will create a new Laravel Sail application by running the following command, where "laravel-formkit" is the name of our app:

```bash
curl -s https://laravel.build/laravel-formkit | bash
```

Of course, you can change "laravel-formkit" in this URL to anything you like - just make sure the application name only contains alpha-numeric characters, dashes, and underscores.

Next, navigate to the newly created directory and start the local development environment by running the following command:

```bash
cd laravel-formkit
 
./vendor/bin/sail up

./vendor/bin/sail artisan migrate
```

This command will start up the necessary Docker containers and configure the necessary services.

Once the environment is up and running, you can access your application in your browser by visiting http://localhost. You can also run any command inside the app container by running the command via `./vendor/bin/sail` followed by the command you want to run.

## Adding Vue.js with Laravel Breeze to a Laravel 9 Application

Laravel Breeze is a simple, minimal implementation of all of Laravel's authentication features, including login, registration, password reset, email verification, and more. It also includes support for Vue.js out of the box, making it easy to add authentication to your Laravel 9 application.

To add Laravel Breeze to your Laravel 9 application, you'll first need to install it using Composer:

```bash
./vendor/bin/sail composer require laravel/breeze --dev
```

Next, you'll need to run the `breeze:install vue` command:

```bash
./vendor/bin/sail artisan breeze:install vue
```

This command will install the necessary views, routes, and controllers for authentication, as well as the Vue.js components that make up the front-end of the authentication system.

To serve the Vue.js components, you'll need to run the following command to compile the assets:

```bash
npm install && npm run dev # The reason to run npm without sail is because, some files cannot be found if run inside of it.
```

Now, you can access the login page by visiting http://localhost/login and the registration page by visiting http://localhost/register in your browser.

By adding Laravel Breeze to your Laravel 9 application, you can quickly add authentication functionality to your application, as well as take advantage of Vue.js for the front-end.

# Why Using the In-built Login Page from Laravel Breeze is Less Optimal Than Using FormKit

While Laravel Breeze does provide an in-built login page, it may not be the best option for all use cases. Here are a few reasons why using FormKit as a form library might be a better choice:

1. Time-saving: FormKit provides a simple and easy-to-use API that allows you to quickly create and manage forms, saving you time and effort.
2. Value handling: FormKit collects the values from children to its parent automatically, making it easier to get the collection when submiting to your backend.
3. Error handling: FormKit automatically handles form validation and error messages, making it easy to ensure that your forms are accurate and user-friendly.
4. Customization: FormKit allows you to easily customize the look and feel of your forms, including adding custom CSS classes and attributes.

While the in-built login page from Laravel Breeze does provide basic authentication functionality, it may not be able to fully meet the needs of your application. Using FormKit as your form library can provide greater flexibility, customizability, and security for your login forms.

## Adding FormKit to Vue.js: Enhancing Form Functionality

FormKit provides a convenient way to handle form submission, errors and loading state, that can be easily integrated with Laravel Inertia to keep your application state consistent.

First, we need to install FormKit using `npm` or `yarn`:

```bash
npm install @formkit/vue
```

Next, we will go to our `resources/js/app.js` file so we cann add FormKit as a plugin to Vue.js:

```js
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import { plugin as FormKitPlugin, defaultConfig } from '@formkit/vue'; // Import FormKit plugin and defaultConfig here

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(FormKitPlugin, defaultConfig) // Add the plugin here
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
```

Lastly, we should also add some styling to our forms to make them look good, FormKit comes with a beautiful theme called genesis, it even has a tailwindcss variant for it, for that we need to install `@formkit/themes`:

```bash
npm install @formkit/themes
```

And than, we can import the theme:

```js
import { plugin as FormKitPlugin, defaultConfig } from '@formkit/vue'; // Import FormKit plugin and defaultConfig here
import '@formkit/themes/genesis';
```

In conclusion, integrating FormKit with Vue.js is straightforward, and can be an easy and powerful way to enhance the functionality of your forms in your Laravel application.

## Laravel Breeze Input Components vs. FormKit Component

Laravel Breeze provides a simple, in-built solution for creating forms in Laravel, with a set of pre-designed input components that can be easily dropped into your views, but they come with more boilerplate, as you need to take care of input handling, accessibility dom structure, validation, and much more:

```jsx
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

FormKit, on the other hand, provides a more customizable and flexible solution for form building. It allows you to create custom form components and gives you control over the form markup and logic. FormKit also provides advanced features, such as form validation, error handling, and dynamic form fields, that are not available in Laravel Breeze:

```jsx
// way less boilerplate, validation, translations and accessibility is built-in.
<FormKit type="form" @submit="submit">
    <FormKit
        type="email"
        id="email"
        name="email"
        validation="required"
    />
</FormKit>
```

## Integrating Backend Responses with FormKit

One of the key benefits of using FormKit is its ability to easily integrate with your backend and handle form submissions, errors, and loading state.

When a form is submitted, FormKit can send a request to your backend, handle the response, and update the form's state accordingly.

First, let's update the Login page to use FormKit:

```vue
<script setup>
// we can remove all breeze input imports.
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3'; // we also won't be using the useForm from inertia, instead we will use router.

defineProps({
    canResetPassword: Boolean,
    status: String,
});

// we will changing it to the initial state of the form.
const initialState = {
    email: '',
    password: '',
    remember: false,
};

// FormKit collects all the values for you, and pass it to the first parameter of the @submit event.
// we also get the FormKit form node as the second parameter
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

        <!-- we will change all it to FormKit types -->
        <FormKit type="form" @submit="submit" submit-label="Log in">
            <FormKit type="email" label="E-mail" id="email" name="email" validation="required" />
            <FormKit type="password" label="Password" id="password" name="password" validation="required">
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

            <FormKit type="checkbox" id="remember" name="remember" label="Remember me" />
        </FormKit>
    </GuestLayout>
</template>
```

Next, if you try to run this right now, you will see that there are some missing features because of how inertia runs with FormKit, where loading, disabled and backend errors aren't there. So now we will be adding those features and with FormKit it is a simple case of using the `node` to integrate correctly with `router` inside the submit:

```js
// first we import the createMessage helper, so we can create a loading message. 
import { createMessage } from '@formkit/core';

const submit = (fields, node) => {
    // here we create the loading message, that is not a visible message.
    const loadingMessage = createMessage({
        key: 'loading',
        visible: false,
        value: true,
    });

    router.post(route('login'), fields, {
        onStart = (visit) => {
            // when the inertia starts the fetch we need to disable the form and start loading.
            // first we add the loading store message
            node.store.set(loadingMessage);

            // next we add the disabled state
            node.props.disabled = true;
        },
        onFinish: () => {
            // now when the inertia finishes the request we need to enable and stop the loading.
            //first we remove the store loading message
            node.store.remove('loading');

            // next we stop the disabled state
            node.props.disabled = false;
            
            node.reset();
        },
        onError: (errors) => {
            // we also need to add the backend errors when there are any.
            // this will propagate any error field in the object to the form children.
            node.setErrors([], errors);
        }
    });
};
```

In conclusion, FormKit is a powerful and flexible form library for Laravel and Vue.js applications. By using FormKit, you can take advantage of its advanced features, such as customizability, error handling, reusability, and built-in security features, to create user-friendly forms that provide a better experience for your users. The process of integrating FormKit with Laravel and Vue is straightforward, and it can help you keep your codebase consistent and maintainable. Whether you are building simple or complex forms, FormKit provides a robust solution that can meet your needs.

## Bonus: An FormKit Inertia plugin for you!

As we can see, adding that to all forms and submits would be not productive, but we can add everything as a plugin to FormKit, with that in mind there already exists a plugin for FormKit that integrates greatly with Inertia.

First, we need to install it:

```bash
npm install formkit-addon-inertia
```

Next, we need to add the plugin to FormKit configuration by extending `defaultConfig`:

```js
// app.js

// we import the new inertiaPlugin here
import { plugin as inertiaPlugin } from "formkit-addon-inertia";

return createApp({ render: () => h(App, props) })
    .use(plugin)
    .use(ZiggyVue, Ziggy)
    // here we are extending the defaultConfig with out configuration
    .use(FormKitPlugin, defaultConfig({
        plugins: [inertiaPlugin]
    }))
    .mount(el);
```

Lastly, we go back to our submit function and update it:

```js
const submit = (fields, node) => {
    // we use our new context.inertia object from node added by the plugin instead.
    // as you can see all the disabled, loading and error states are handled automatically by the plugin.
    node.context.inertia.post(route('login'), fields, {
        onFinish: (_, node) => {
            // we can also update the node that the plugin adds to the end of all inertia callbacks.
            node.reset();
        }
    });
};
```

Now we can see that adding FormKit to a Laravel 9 application using Breeze with Vue.js and Inertia is straighforward and it will give you a better experience overall.
