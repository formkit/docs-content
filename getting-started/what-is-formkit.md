---
title: What is Formkit?
description: FormKit is a form authoring framework for Vue developers that makes building high quality production-ready forms 10x faster.
---

# What is FormKit?

<page-toc></page-toc>

## Introduction

FormKit is a form building framework for Vue developers that makes authoring high quality production-ready forms 10x faster. It is easy-to-learn and ships with production-ready scaffolding like inputs, validation rules, and error handling.

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

- [Single API](#single-api): FormKit was designed with a single component for all inputs.
- [Accessible](#accessible): We output an opinionated accessible markup by default.
- [Validation](#validation): Powerful built-in validation rules with instant feedback.
- [Internationalization](#internationalization): Great i18n language support.
- [Styles](#styles): Beautifully crafted theme.
- [Extensibility](#extensibility): Easy to extend any feature.
- [Community](/getting-started/community): Friendly community that will help you solve your questions.

### Single API

Developers love to learn — but no one enjoys pouring over third-party APIs and configuration options. That's why FormKit uses a single component for all of its [inputs](/essentials/inputs). `<FormKit>` is the only component you need to know to get started — and it works just like you would expect an `<input>` tag to work.

### Accessible

Creating accessible forms is a serious challenge. Especially when accessibility standards are not always clear and most developers are under time pressure. Ideally, all developers would be well versed in accessibility best practices, but unfortunately that is not the case. To address this, FormKit outputs an opinionated accessible DOM structure. This is different than many popular “renderless” form libraries that provide no markup at all, and rely on developers to supply the inputs themselves.

### Validation

Front-end [validation](/essentials/validation) that gives instant feedback is an important part of providing a good experience to your users. Unfortunately, it can be incredibly tedious to implement even if you're using a great validation library. FormKit takes the pain out of front end validation by baking the [rules](/essentials/validation#available-rules) directly into the inputs.

### Internationalization

<!-- Needs a internationalization cool description -->

### Styles

<!-- Needs styles information about genesis too -->

FormKit is made for front end developers. Each DOM element can have its [classes changed](/essentials/styling#custom-classes), [attributes manipulated](/essentials/inputs#setting-attributes), and position altered. You can even replace an input's entire structure while keeping all of the functionality you need. FormKit is ready for your styles whether you use vanilla CSS, Sass, [Tailwind](/essentials/styling#tailwind-css-example) or any other CSS utility.

### Extensibility

FormKit comes with great production-ready defaults, and for many users, the defaults are all they'll ever need. But FormKit is more than just inputs. It is a form building _framework_, complete with a [hooks](/advanced/core#hooks), [events](/advanced/core#events), [plugins](/advanced/core#plugins), libraries and [schemas](/advanced/schema). Advanced developers can craft their own form systems using FormKit's low-level tooling.

## Community

Community involvement and contributions are one of the most important aspects of the FormKit ecosystem. We invite you to actively participate — whether using FormKit, translating validation messages, being an active member of the Discord, or filing bug reports and making pull requests to the [FormKit codebase](https://github.com/formkit/formkit).

### Sponsor

[FormKit](https://github.com/formkit/formkit) will always be free and open source. If you want to help accelerate its development and maintenance, please consider [sponsoring the project](https://github.com/sponsors/formkit)! In addition to our gratitude and enabling us to spend more time improving FormKit, you'll also get various perks at different tiers of sponsorship!

<LinkGithub href="https://github.com/sponsors/formkit" button-text="Sponsor FormKit"></LinkGithub>

<h4><span class="emoji">💍</span> Platinum sponsors</h4>

<a class="no-underline" href="https://vueschool.io/">
    <img
        class="docs-partner"
        src="https://cdn.formk.it/web-assets/sponsors/vueschool.png"
        alt="Vue School logo"
        target="_blank"
        style="display:inline-block;vertical-align: middle;width: 200px;margin-right: 25px;margin-top: 10px;"
    />
</a>

<h4><span class="emoji">🥉</span> Bronze sponsors</h4>

<a class="no-underline" href="https://www.perbyte.com">
    <img
        class="docs-partner"
        src="https://cdn.formk.it/web-assets/sponsors/bronze-sponsor_perbyte.png"
        alt="PerByte logo"
        target="_blank"
        style="display:inline-block;vertical-align: middle;width: 120px;margin-right: 25px;"
    />
</a><a class="no-underline" href="https://sharpless.co">
    <img
        class="docs-partner"
        src="https://cdn.formk.it/web-assets/sponsors/sharpless-logo-small.png"
        alt="PerByte logo"
        target="_blank"
        style="display:inline-block;vertical-align:middle;width:80px; margin-right: 10px;"
    />
</a>

### Backers

[uscreen](https://uscreen.de)

### Contribute

We invite you to contribute to FormKit! There are many ways to help — from creating pull requests to our open source code bases, to filing issues so we can improve FormKit for everyone.

#### Contribute to open source code bases

We encourage contributions to the FormKit open source code bases! When contributing, consider first discussing your desired change with the core team via [GitHub issues](https://github.com/formkit/formkit/issues) or [Discord](https://discord.gg/Vhu97pAC76).

#### Contributors to [`formkit/formkit`](https://github.com/formkit/formkit)

<a href="https://github.com/formkit/formkit/graphs/contributors">
  <img style="max-width: 100%;" src="https://contributors-img.web.app/image?repo=formkit/formkit" />
</a>

#### Contributors to [`formkit/docs-content`](https://github.com/formkit/docs-content)

<a href="https://github.com/formkit/docs-content/graphs/contributors">
  <img style="max-width: 100%;" src="https://contributors-img.web.app/image?repo=formkit/docs-content" />
</a>

Thank you to all contributors and community members who help us improve FormKit every day.

### Open issues on GitHub (bugs and features)

GitHub issues are for feature requests and bug reports. If you've found a bug, please create a GitHub issue by reproducing it in the [playground](/playground) and clicking the share button! Feature requests are always a bit subjective, but if you believe there's a good use case that is currently underserved by FormKit, we want to know.

<LinkGithub href="https://github.com/formkit/formkit/issues" button-text="GitHub issues"></LinkGithub>

### Submit a locale

We are always looking for native speakers to submit a translation of the FormKit validation messages and UI elements. This is a great way to get involved, even with minimal coding experience. The easiest way to provide a translation is by using the locale builder:

<LinkLocaleBuilder></LinkLocaleBuilder>

### Create content to share

One of the best ways to enrich the FormKit (and Vue 3) community at large is to create content such as articles, guides, YouTube videos, or other educational content to share with others! We will be happy to include links to high-quality content in our docs.

<!-- Add link to @formkit/awesome-formkit -->

### Join the community

#### FormKit Discord server (generalized help & discussion)

If you need generalized help or want to make connections within the community, consider joining the official FormKit Discord (used for both FormKit and Vue Formulate — FormKit's predecessor). Over 525 developers along with the core team spend time there. If you are not already a member (it's free and open), you'll need to use the following invite link to join the server:

<LinkDiscord></LinkDiscord>

#### Stack Overflow

If you have a specific question about how to use FormKit, please ask it on Stack Overflow tagged with `formkit`. Make sure to include code examples and if possible, a link [to the playground](/playground) so the community can further assist you.

<LinkStackOverflow></LinkStackOverflow>

<!-- If you have a PRO subscription, you'll be able to see and upvote feature requests from others -->

#### Join the FormKit channels

- Star on [GitHub](https://github.com/formkit/formkit) ⭐️. This helps visibility.
- Subscribe to the [email list](https://t.co/hEBF5FZPrB).
- Follow on [Twitter](https://twitter.com/useformkit).
- Join the [Discord](https://discord.gg/NZ6nchBDGx).
- Subscribe on [YouTube](https://www.youtube.com/formkit).

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
