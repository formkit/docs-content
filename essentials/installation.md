# Installation

FormKit can be downloaded using a package manager like `npm` or `yarn` or it can be used directly via CDN.

## Alpha Group Setup

Thanks for joining the FormKit Alpha Program 🎉 ! Here are special instructions for installing FormKit during the private Alpha.

<callout type="warning" label="Important Installation Instructions">
<strong>During the Alpha and Beta phases of development, FormKit packages will be hosted on
Github Packages</strong>. In order to <code>npm install</code> FormKit you will need to be:

1. Added as a collaborator to the `@formkit/formkit` repo on Github.
<!-- 2. Authenticated with Github via an `~/.npmrc` entry or via `npm` on the command line. -->
2. Have an `.npmrc` file for the `@formkit` scope in the root of your project directory.

Follow the instructions below to complete these requirements.

</callout>

### 1) Joining the `@formkit/formkit` repo

All active Alpha and Beta members will be added as collaborators to the `@formkit/formkit` repo.
If you have not been added as a collaborator and believe that this is in error, then please message us via the
community Discord in the `#formkit-general-chat` channel: https://discord.gg/NZ6nchBDGx

<!-- ### 2) Authenticating with Github Packages

In order to download private Github packages via `npm` you will need to [create a
personal access token (PAT)](https://github.com/settings/tokens) in your Github
account with at least the `repo` and `read:packages` scopes enabled.

Next, you can either add the token to your global `~/.npmrc` file:

```bash
//npm.pkg.github.com/:_authToken=TOKEN
```
#### — OR —

Sign in via the command line with the `@formkit` scope flag set.
<strong>the password prompt requires your Personal Access Token, not your GitHub password.</strong>

```bash
$ npm login --scope=@formkit --registry=https://npm.pkg.github.com

> Username: GITHUB_USERNAME
> Password: PERSONAL_ACCESS_TOKEN
> Email: PUBLIC_EMAIL_ADDRESS
``` -->

### 2) Adding a `.npmrc` file to your project.

Lastly, you will need to create an `.npmrc` file in your project adjacent to your
`package.json` file that sets the `@formkit` scope to Github Packages.
For this starter project, the `.npmrc` file already exists.

```bash
@formkit:registry=https://npm.pkg.github.com
```
## NPM install

<callout type="warning" label="Important Installation Instructions">
During the Alpha and Beta program you must complete the <a href="#alpha-group-setup">authentication steps above</a>
in order to successfully install the <code>@formkit/vue</code> package.
</callout>

Most new projects use a build tool like Vite, Snowpack, or webpack. This makes installing npm dependencies a piece of cake 🍰.

```sh
npm install @formkit/vue
```

The `@formkit/vue` package ships with a Vue plugin and a default configuration for easy setup.

```js
import { createApp } from 'vue'
import App from 'App.vue'
import { plugin, defaultConfig } from '@formkit/vue'

createApp(App).use(plugin, defaultConfig).mount('#app')
```

That's it! You're now ready to use the `<FormKit>` component in your Vue application. The `defaultConfig` includes all of FormKit's inputs, validation rules, and the English language. You can replace the `defaultConfig` with your own configuration, which allows for improved tree-shaking (only include the rules and languages you want to actually use) and more fine-grained control.

<callout type="warning" label="Vue 2">
FormKit only supports Vue 3. If you're required to use Vue 2 on a project, consider using the spiritual ancestor of FormKit — <a href="https://vueformulate.com" target="_blank">Vue Formulate</a>.
</callout>

## Starter Project

If you would like to get up and running on a new project quickly to kick the tires, then consider
cloning the our available [FormKit Vue Starter Project on Github](https://github.com/formkit/formkit-vue-starter-project).
You will still need to complete the [Alpha Group Setup](#alpha-group-setup) steps above
— but those instructions are also available in the starter project readme file.

<!-- ## From a CDN

FormKit can also be used directly from a CDN with a simple `<script>` tag.

```html
<script src="https://unpkg.com/vue@next"></script>
<script src="https://unpkg.com/@formkit/vue/formkit-vue.js"></script>
```

Then anywhere after that point in your application, you can access the `FormKitVue` global variable which includes everything you need to boot up FormKit.

```js
// Extract from FormKitVue global.
const { plugin, defaultConfig, FormKit } = FormKitVue

// Some root application
const App = {
  template: `
  <div>
    <h1>Your App!</h1>
    <FormKit type="text" />
  </div>`
}

Vue.createApp(App).use(plugin, defaultConfig).mount('#app')
``` -->
