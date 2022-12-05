---
title: What is Formkit?
description: FormKit is a form authoring framework for Vue developers that makes building high quality production-ready forms 10x faster.
---

# What is FormKit?

<page-toc></page-toc>

## Introduction

FormKit is far more than a UI library. It is a _form building framework_ for Vue developers that makes authoring high quality production-ready forms faster, more accessible, with better DX and UX, and less code. It is easy to learn, and ships with production-ready features like inputs, validation rules, and submission/error handling.

<VideoCard
  title="FormKit Overview Trailer"
  poster="https://cdn.formk.it/web-assets/formkit-poster.jpg"
  watch-time="1 min"
  youtube-id="89dijjTlveI">
</VideoCard>

<ArticleCard
  img="https://cdn.formk.it/web-assets/og-introducing-formkit.jpeg"
  label="Article"
  title='Read the full "Introducing FormKit" manifesto from core team member Justin Schroeder on DEV.to.'
  href="https://dev.to/justinschroeder/introducing-formkit-a-vue-3-form-building-framework-53ji">
</ArticleCard>

## Why FormKit?

Forms seem simple. After all, a `<form>` and an `<input>` tag are all that's required. Yet, experienced engineers know that implementing production-ready forms is tedious and complicated. FormKit built-in key features where designed to solve these problems, while making form authoring efficient and enjoyable for developers:

#### Key Features

- [Single Component](#single-component): FormKit was designed with a single component for all inputs.
- [Accessible](#accessible): We output an opinionated accessible markup by default.
- [Validation](#validation): Powerful built-in validation rules with instant feedback.
- [Internationalization](#internationalization): Great i18n language support.
- [Styles](#styles): Beautifully crafted theme.
- [Extensibility](#extensibility): Easy to extend any feature.
- [Community](#community): Friendly community that will help you solve your questions.

### Single Component

Developers love to learn — but no one enjoys pouring over third-party APIs and configuration options. That's why FormKit uses a single component for all of its [inputs](/essentials/inputs). `<FormKit>` is the only component you need to know to get started — and it works just like you would expect an `<input>` tag to work.

### Accessible

Creating accessible forms is a serious challenge. Especially when accessibility standards are not always clear and most developers are under time pressure. Ideally, all developers would be well versed in accessibility best practices, but unfortunately that is not the case. To address this, FormKit outputs an opinionated accessible DOM structure. This is different than many popular “renderless” form libraries that provide no markup at all, and rely on developers to supply the inputs themselves.

### Validation

Front-end [validation](/essentials/validation) that gives instant feedback is an important part of providing a good experience to your users. Unfortunately, it can be incredibly tedious to implement even if you're using a great validation library. FormKit takes the pain out of front end validation by baking the [rules](/essentials/validation#available-rules) directly into the inputs.

### Internationalization

<!-- Needs a internationalization cool description -->

### Styles

<!-- Needs styles information about genesis too -->

### Extensibility

FormKit comes with great production-ready defaults, and for many users, the defaults are all they'll ever need. But FormKit is more than just inputs. It is a form building _framework_, complete with a [hooks](/advanced/core#hooks), [events](/advanced/core#events), [plugins](/advanced/core#plugins), libraries and [schemas](/advanced/schema). Advanced developers can craft their own form systems using FormKit's low-level tooling.

### Community

<!-- Needs community description -->

## Why not...?

While FormKit does a lot of things, it is not a UI framework or a _layout_ tool. Want inputs next to each other? Cool! Wrap some inputs in a `<div>` and sprinkle on some `flexbox`. While FormKit ships with a [default theme](/essentials/styling#optional-genesis-theme), this package assumes you'll still be responsible for most of your form's style and layout. FormKit plays nicely with any UI framework or your own custom styles.

If you need a full UI framework, you can check these other great tools:

#### Vuetify

Vuetify is full UI framework while FormKit is a focused tool for building forms. Some people prefer not to use large UI frameworks, don’t have them on a pre-existing project, don’t want to learn a new framework, or just prefer writing their own narrowly scoped styles. Also, we think composing forms in FormKit is second-to-none.

#### Buefy

Similar to Vuetify, Buefy is a full UI framework. If you’re already using Bulma or you're looking for a comprehensive UI solution, it’s a solid choice. FormKit can live alongside any UI framework and still offers the benefits of slick form composition, validation, and error handling to name a few. Even still there are plenty of people who don’t want or need a full UI framework that would benefit from FormKit’s focused approach.

#### VeeValidate

VeeValidate is a great option for Vue form validation, and thats it’s primary mission — validation. FormKit makes building high quality forms easier by including validation as a sub-feature of the field composition itself. Building forms with FormKit is super easy and blazing fast — of course if you need the extra validation power, you still have it. You can write any [custom validation logic](/essentials/validation#custom-rules) you want.

#### Vuelidate

Yet another great option for form validation, but focused solely on validation. FormKit provides additional scaffolding and features such as accessibility, i18n, and input composition, enabling developers to create complex forms with minimal friction with validation and error handling included.

#### vue-form-generator

Generating forms from JSON is great — that's why schema is a sub-feature of FormKit. Simply pass your form schema to the `FormKitSchema` component and voilà! Checkout the documentation [here](/essentials/generation). Now you can use the same tool for form composition and generation!