---
title: Create a Tailwind CSS theme
description: Follow this guide to learn how to leverage Tailwind CSS with your FormKit forms and inputs
---

# Create a Tailwind CSS theme

:PageToc

In this guide, we’ll walk through the process of creating a custom Tailwind theme for your forms and inputs. Tailwind has risen to the forefront of CSS utility class libraries, and FormKit was authored with its capabilities in mind. Let’s get started!

::Callout
---
type: "tip"
label: "SFC Build tool"
---
This guide assumes you are using a standard Vue 3 build tool like Vite, Nuxt 3, or Vue CLI that will allow you to import <code>.vue</code> single file components.
::

## Inline usage

::Callout
---
type: "warning"
label: "Not recommended in most cases"
---
Inline usage can be great for one-offs overrides or very simple forms. For full theme creation keep reading.
::

In the context of a `.vue` file that represents a component, it's possible to create a Tailwind theme using the `section-key` [class props](/essentials/styling#section-key-class-props) or the `classes` [prop](/essentials/styling#classes-prop) provided by FormKit.

If your component represents your entire form and your project only requires a single form, this may be all that you need. Here is an example of applying the same Tailwind classes to a FormKit `text` input using both the `section-key` props and the `classes` prop:

::Example
---
file: "_content/_examples/guides/tailwind-theme/inline-usage/example.vue"
css-framework: "tailwind"
add-tailwind-files: false
editable: true
---
::

This is a low-barrier way to apply Tailwind styles to your FormKit forms, but what if you have multiple forms — or you need to handle a large variety of inputs? Copy-pasting class lists between components is not ideal and will lead to inadvertent variations in styling across your project over time.

Let's explore how we can create a Tailwind theme — with configurable options — that can cover all inputs in your project at a global level.

## Creating a configurable FormKit theme

By following the instructions below we will create a theme like the ones available at [https://themes.formkit.com](https://themes.formkit.com). This includes support for variable configuration options if you as a theme author want to provide them. 

::ArticleCard
---
img: "https://themes.formkit.com/og.png"
label: "FormKit Themes"
title: "Versatile, configurable, MIT-licensed Tailwind themes for use in your projects. Spend less time styling — more time building."
href: "https://themes.formkit.com"
---
::

Better yet, once your theme is complete — if you provided styling for every available FormKit input — you can submit your theme to be included on [https://themes.formkit.com](https://themes.formkit.com) by [opening a PR](https://github.com/formkit/themes.formkit.com/pulls) against the site repo. Once approved it will become available for anyone else to use in their project via the CLI or web UI.

### Initialize a copy of the starter theme

FormKit provides a starter theme — which comes with structural styles and plentiful comments — that is intended to help new authors get started quickly creating their own FormKit themes. To get started, run the following command in your terminal:

```bash
npx formkit create-theme
```

This will download a copy of the starter theme in the directory where you run the command. The starter theme is a fully functional Vite application that includes a "Kitchen Sink" to help you see how your theme applies to every available input in every available input state as you work.

To begin work on your theme run:

```bash
# or npm or yarn
pnpm install
pnpm dev
```

### The anatomy of the starter theme

The `src` directory in the starter theme contains the following important files and directories:

- `theme.ts`: This is the entry point for your theme. It is where you will configure your theme's metadata, variables, and import your theme's CSS class lists for each input.
  - `meta`: The meta information such as the theme name, supported inputs, and declarations for light mode and dark mode support.
  - `variables`: The variables that will be used in your theme's CSS class lists — variables that are assigned an 'editor' will expose UI controls for theme users in the theme editor. More on this below.
  - `inputs`: An object of input names each mapped to an object of section names and class lists. By default the class lists for each input are done as separate imports.
- `globals.ts`: This file contains global classes for inputs. Any matching section name (eg, 'outer') will be applied to _every_ FormKit input. A time-saver, but use with caution.
- `familes/*.ts`: One step higher in specificity than global classes, these files contain class lists for each input family. Families are groupings of similar inputs where sharing of styles makes sense — for example, the 'text' family includes 16+ inputs supported in FormKit. Each family file contains a comment at the top with a list of inputs that are included in that family.
- `inputs/*.ts`: The most specific class lists for each input. These classes apply only to the input indicated by the file name (assuming you have assigned them correctly in your theme.ts, which is done for you by default). When applicable, these files include a comment indicating which family they inherit classes from.

The remaining files in the starter theme can be ignored (but not removed) as they are scaffolding for the included Vite application and the Kitchen Sink. They will have no material effect on your published theme.

### Working with variables

Variables are a powerful way to share values across your theme and to optionally allow theme users to customize your theme to their liking. Variables are used in your inputs' class lists via the following syntax:

```js
// global.ts
export default {
  outer: `$myVariable`
}
```

The starter theme comes with many variables predefined.

#### Basic variables

The following variables are defined for convenience in the starter theme but do _not_ expose any UI for theme users:

- `accentColor`
- `accentColorStrength`
- `accentColorStrengthDark`
- `colorTemperature`
- `colorTemperatureStrength`
- `colorTemperatureStrengthDark`
- `inputMaxWidth`

You can create your own variables in this fashion by providing a new key/value pair in the variables object:

```js
export default createTheme({
  ...
  variables: {
    ...
    textSize: 'lg'
  }
})
```

Variables can be used in your input's class lists using the following syntax:

```js
// globals.ts
export default {
  // becomes 'text-lg'
  label: 'text-$textSize'
}
```

Putting shared common values into variables allows theme authors to quickly adjust values across all class lists in their theme from a single location.

### Variables with scales

One of the best aspects of Tailwind is that all values operate on predictable scales. This means that we can provided a "range" for a variable and then move up and down the scale as needed within our theme. 

For example, a `spacing` variable might operate using the following Tailwind scale (`0`, `px`, `0.5`, `1`, `1.5`, `2`, `2.5`, `3` etc). By providing a `scale` and default `value` we can give ourselves the ability to step up and down the scale at will.

```js
spacing: {
  value: "2",
  // We can define a scale that we can step through. 
  // The default value will be used as the starting point.
  // Because we are defining the scale we can omit default 
  // Tailwind values like '0' and 'px` if they don't make
  // sense for our use case.
  scale: ["0.5", "1", "1.5", "2", "2.5", "3", "4", "6"]
},
```

With the above variable defined we can now dynamically step up and down the scale in our class lists with the following syntax:

```js
// globals.ts
export default {
  // becomes 'mb-3' — two steps up our scale
  outer: 'mb-$spacing(2)',
  // becomes 'mb-2' — our default scale value
  label: 'mb-$spacing',
  // becomes 'mb-1 — two steps down our scale'
  help: 'mb-$spacing(-2)'
  // a mix of mulitple values using the same variable
  // becomes 'mb-1 px-3 py-2'
  inner: 'mb-$spacing(-2) px-$spacing(2) py-$spacing'
}
```

Variables can never exceed the limits of their scales, so `mb-$spacing(100)` would become `mb-6` as that is the upper bound of our provided scale.

### Variables with user-controllable values

Variables are cool — but the real power comes from exposing variables to end-users of our theme and allowing them to configure the values to their own liking. 

To do this we provide an `editor` value for our variable. The `editor` determines which UI control is exposed in the theme customization panel. The available `editor` values are as follows:

- `buttons`: A set of buttons in a group used to select a value. Theme authors must provide their own scale.
- `color`: A set of swatches each representing a default Tailwind color. By default includes a scale of all 22 available Tailwind colors.
- `fontSize`: A set of buttons with the letter `A` in different sizes. By default includes a scale from `xs` to `9xl`.
- `radius`: A set of buttons each depicting a different intensity of border radius. By default includes a scale from `rounded-none` to `rounded-full`.
- `shadow`: A stepper with a depiction of the selected shadow level. By default includes a scale from `shadows-none` to `shadows-2xl`. 
- `spacing`: A slider with a range of values with depictions of tighter spacing at the beginning and wider spacing at the end. By default includes a scale from `0` to `96`.
- `select`: A standard HTML select list that can contain any number of values. Theme authors must provided their own scale.

You can see an example of each of these editor values by looking at the `Regenesis` theme [here](https://themes.formkit.com/editor?theme=regenesis).

We can update our `spacing` variable to use an appropriate editor.

```js
spacing: {
  editor: "spacing",
  value: "2"
}
```

Now when we run our theme locally we will see a new control in the theme editor for our `spacing` variable with a slider that allows us to go from `0` to `96` as we step through the default Tailwind scale.

::Callout
---
type: "tip"
label: "User selections affect dynamic values"
---
When you expose a variable to a theme user they are changing the base value when they modify a variable. This means that variable usage such as `mb-$spacing(1)` is always one step on the scale above the user's _selected_ value, not the theme's default value.
::

### Setting min and max for user-controlled variables

In most cases it makes sense to constrain the available scale for a user defined variable. Allowing our users to adjust `spacing` is great, but we probably don't want them to be able to crank the value all the way up to `96` or all the way down to `0`. We can constrain the range of the scale that is available to a user by using the `min` and `max` properties on our variable.

```js
spacing: {
  editor: "spacing",
  value: "2",
  min: "1",
  max: "3"
}
```

This means that our `spacing` variable will now only allow values `1`, `1.5`, `2`, `2.5`, and `3` to be selected by using via the customizer UI.

### Creating one-off min and max constraints

Sometimes as a theme author you need to clamp or expand available values beyond what is defined in a variable's default scale. You can do this by passing additional `min` and `max` arguments to a particular instance of a variable in a class list.

The provided values for `min` and `max` _must_ be values or the variables associated scale — whether that is a default scale for an editor or a custom scale defined by the theme author.

You can also provide a wildcard `*` symbol as the 2nd argument to allow any valid value on the associated scale.

```js
// globals.ts
export default {
  // steps up 5 steps on the scale. 
  // sets the min value to 3 
  // and the max value to 8
  outer: 'mb-$spacing(5, 3, 8)',
  // steps down 2 steps on the scale
  // sets the minimum value to 1 
  // and the max value to 2
  label: 'mb-$spacing(-2, 1, 2)',
  // steps down 2 steps on the scale
  // allows any valid value on the scale
  help: 'mb-$spacing(-2,*)'
}
```

### Overriding default editor scales

Some `editor` types such as `scale` or `color` come with default scales. However, we can still include a custom `scale` property of our own and override which options are available in the UI.

```js
accentColor: {
  editor: "color",
  value: "blue",
  // excludes all "gray" colors
  // included in the default scale
  scale: [
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
  ],
},
```

You can even combine custom scales with `min` and `max` properties to create entirely new scales beyond the values that are available in the default Tailwind scales.

```js
scale: {
  editor: "fontSize",
  value: "base",
  scale: [
    // a custom size and accompanying
    // custom line-hight for the size.
    "[11px] [line-height:1em]",

    // default values from Tailwind
    // in a range we find sensible.
    "xs",
    "sm",
    "base",
    "lg",
    "xl",
    "2xl",
  ],
  min: "sm",
  max: "lg",
},
```

## Publishing your theme

There are many more comments in the `@formkit/theme-starter` theme itself to help you along your way as you work. 

When you're done creating your theme you can use the included publishing script to build and publish your theme to npm.

First, ensure that you have modified the contents of your theme's `meta` key and `package.json` file to accurate reflect your theme's name, description, version, and author information.

::Callout
---
type: "warning"
label: "FormKit theme prefix"
---
It is recommended to name your theme with the prefix `formkit-theme-` to help users discover and understand that your package is a FormKit theme.
::

When you're ready, run the following command in your terminal

```bash
#pnpm highly recommended
pnpm release
```

This command builds your theme, runs a linter to ensure that your `package.json` is valid, runs a script to bump the version of your theme (and create release notes automatically if you're using semantic commit messages), and then publishes your theme to `npm` under your provided package name.

users can then install your theme from npm like any other dependency:

```bash
# for theoretical theme named 'starlight'
pnpm install formkit-theme-starlight
```

## Submitting your theme to themes.formkit.com

Proud of your theme? Offering something unique that other FormKit users would enjoy using? 

[Open a pull request](https://github.com/formkit/themes.formkit.com/pulls) against the themes.formkit.com repo and submit your theme! If approved — it'll be listed in the theme gallery and be available for anyone to use in their project as easily as the provided 1st-party FormKit themes.

## Getting help

Writing a comprehensive FormKit theme is a large undertaking. If you get stuck, need ideas, or otherwise want to talk about creating themes for FormKit be sure to join us in our official Discord community. We're happy to help!

::LinkDiscord
