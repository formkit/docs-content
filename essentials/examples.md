---
title: Examples
description: Examples you can use in your project today.
---

# Examples

:PageToc

A broad collection of examples with working code you can use in your project today.

## Forms & structure

::ExampleCard
---
href: "https://formkit.link/9389a3cd144f2077bddecf8b258061df"
title: "Add classes to the FormKit-provided submit button"
---
The <code>form</code> type automatically adds a submit button. Add classes so its UI can conform to your project's styles
::

::ExampleCard
---
href: "https://formkit.link/469d06dfe2742c12703c6a6ad5a68bec"
title: "Using a list to repeat an input"
---
Using the <code>list</code> type, we can create repeater inputs that can have multiple values. This example uses a loop to let users add/remove email addresses.
::

## Schema

::ExampleCard
---
href: "https://formkit.link/6dfd6c4c189b8e4781fb577c5384d516"
title: "Conditionally show input based on value of another input"
---
Use the <code>FormKitSchema</code> component to conditionally show an input (with validation rules) based on the value of another input.
::

::ExampleCard
---
href: "https://formkit.link/83e8b2c3d264d828a020b1cc21a27cbb"
title: "Multi-step form built from Schema"
---
Use the <code>FormKitSchema</code> component to render the multi-step form from the multi-step form guide.
::

::ExampleCard
---
href: "https://formkit.link/a1fe49306a5096e8bffb9a09c0f4fa71"
title: "Custom schema submit button with disabled state and loading spinner"
---
Create a custom schema-powered submit button that dynamically disables while the form is submitting and provides a loading spinner.
::

## Plugins

::ExampleCard
---
href: "https://formkit.link/7e3aafb98dd293e2d2168ecc5ff14dbf"
title: "Add an asterisk to the labels of all required inputs"
---
Use a plugin to add an asterisk (\*) to the label area of inputs that have the "required" rule.
::

::ExampleCard
---
href: "https://formkit.link/9d5ee95835fc654a2887b7c391f3e8e7"
title: "Cast number inputs values from strings to numbers"
---
Use a plugin to cast string values to numbers. Useful if you want inputs of type <code>number</code> to return a JS <code>Number</code> primitive.
::

::ExampleCard
---
href: "https://formkit.link/8da382e1be36fd3b6bfb75d663a4a9cf"
title: "Remove the inner wrapper on all checkboxes"
---
Use a plugin to modify the HTML of all descendant checkbox inputs.
::

::ExampleCard
---
href: "https://formkit.link/48e054ec122c82813dcc2365448a5367"
title: "Add an icon before validation messages"
---
Use a plugin to append an icon before validation messages by extending the schema definition.
::

::ExampleCard
---
href: "https://formkit.link/a09cb95750c894237577650b5648f52b"
title: "Set initial values to empty strings instead of undefined"
---
Use a plugin to set all initial input values to an empty string <code>""</code> instead of <code>undefined</code>.
::

::ExampleCard
---
href: "https://formkit.link/78705726f6791f546376225eb90f8ff5"
title: "Add a manually toggleable loading spinner to 'button'-type inputs"
---
Use a plugin to allow inputs in the <code>button</code> family to have a loading spinner that can be toggled at-will with a new <code>loading</code> prop.
::

::ExampleCard
---
href: "https://formkit.link/177ecbefd0f5f5e58f6ea0bd7ccf8f6f"
title: "Automatically set an input's name, label, and help text based on the id"
---
Use a plugin to automatically set an input's <code>name</code>, <code>label</code>, and <code>help</code> props based on the <code>id</code>. Reduces repetitive prop declarations in your HTML.
::

::ExampleCard
---
href: "https://formkit.link/ceaa7ae0cdc7662f080d289839db02b0"
title: "Scroll to the first validation or error on the form."
---
A plugin that automatically scrolls to the first error on the page on submit or when backend errors are added.
::

## Inputs

::ExampleCard
---
href: "https://formkit.link/fda2e9edf171f52971fbde1cf12cdcfa"
title: "Number input with custom step buttons"
---
A custom input with +1 and -1 step buttons. Made using <code>createInput()</code>.
::

::ExampleCard
---
href: "https://formkit.link/64b491248a0323b6d574ee05ab221d95"
title: "A currency input with currency selector"
---
A simple custom input that allows users to select a currency and enter a value. Made using <code>createInput()</code>.
::

::ExampleCard
---
href: "https://formkit.link/577824c5b5d563120e20abcaecc0c051"
title: "Add a link (<a> tag) to a label"
---
Use slots or the <code>:sections-schema</code> feature to modify a label's HTML.
::

::ExampleCard
---
href: "https://formkit.link/d2cc703cbccd569841e92779258788df"
title: "Conditionally update options of a select input"
---
Conditionally update the <code>options</code> of a <code>select</code> input based on the value of another input.
::

::ExampleCard
---
href: "https://formkit.link/35864d8156cb9c9173a216a1ac9b219f"
title: "Style radio input options to look like cards"
---
Using only new styles (Tailwind Classes in this example) apply a card treatment to the default FormKit Radio input structure.
::

## User interface

::ExampleCard
---
href: "https://formkit.link/9741f666840a11954233982ee189ab43"
title: "Add a loading indicator for async validation rules"
---
Add a loading spinner to your input when an async validation rule is pending validation.
::

::ExampleCard
---
href: "https://formkit.link/ff71de8eb640473ddccd8171eda3f017"
title: "Keep submit button disabled until a form changes"
---
Only enable a save/submit button if a user has changed any value inside a form.
::

::ExampleCard
---
href: "https://formkit.link/ff768a042681afaa932cce9690dd3bfc"
title: "Add transitions to validation messages"
---
Add transitions to validation messages by injecting a Vue <code>TransitionGroup</code> component using FormKit's <code>:sections-schema</code>.
::

::ExampleCard
---
href: "https://stackblitz.com/edit/github-vqvsuh"
title: "Starter project with Nuxt, FormKit, and Tailwind"
---
A working starter project on StackBlitz with Nuxt, FormKit and Tailwind CSS.
::

::ExampleCard
---
href: "https://formkit.link/648b2fb96bdf8dd1b2ff6f646ac453a4"
title: "Produce dynamic classes based on an input's state"
---
Use the <code>rootClasses</code> config function and FormKit props to produce a dynamic classes based on input state. Helpful for Tailwind and other CSS utility libraries.
::

::ExampleCard
---
href: "https://formkit.link/ff5873ed046024331002687c3730db9e"
title: "Create reactive UI variations of FormKit inputs using “features”"
---
Create UI variations of FormKit inputs (like buttons) that update based on reactive data in your components.
::
