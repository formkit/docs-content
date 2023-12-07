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
href: "https://formkit.link/89345c29dafb8b9fe48ff295445fbcfe"
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
href: "https://formkit.link/4b2d12a695cbeff5f01d43d96962c804"
title: "Custom schema submit button with disabled state and loading spinner"
---
Create a custom schema-powered submit button that dynamically disables while the form is submitting and provides a loading spinner.
::

::ExampleCard
---
href: "https://formkit.link/31b5b2db729dcf02819873e218f6299b"
title: "Add a maxlength coutdown to a textarea"
---
Adds a simple countdown of characters left in a textarea with a hover tooltip based on the textarea's maxlength prop
::

## Plugins

::ExampleCard
---
href: "https://formkit.link/51bb54aaa81191456f171cf728d42d5e"
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
href: "https://formkit.link/92bd5e0280272f1fc37e242033f0ce5a"
title: "Add an icon before validation messages"
---
Use a plugin to append an icon before validation messages by extending the schema definition.
::

::ExampleCard
---
href: "https://formkit.link/084bc870824bdd31242b3f35658c6ac4"
title: "Set initial values to empty strings instead of undefined"
---
Use a plugin to set all initial input values to an empty string <code>""</code> instead of <code>undefined</code>.
::

::ExampleCard
---
href: "https://formkit.link/35903e50377a701718c6fed0e72485e2"
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
href: "https://formkit.link/51f76f8678e596423656f031bf6b42f8"
title: "Adds attribute for libraries like @testing-library for testing"
---
A plugin that adds the attribute <code>data-testid</code> with the node id for testing libraries.
::

::ExampleCard
---
href: "https://formkit.link/3f66cdbd1c2430f890d5b350cfa30ab0"
title: "Scroll to the first validation or error on the form."
---
A plugin that automatically scrolls to the first error on the page on submit or when backend errors are added.
::

## Inputs

::ExampleCard
---
href: "https://formkit.link/6baa2eb395745befd60d41c1a36a27fb"
title: "Number input with custom step buttons"
---
A custom input with +1 and -1 step buttons. Made using <code>createInput()</code>.
::

::ExampleCard
---
href: "https://formkit.link/68e51abc7431687edc8f9ff008477b3d"
title: "A currency input with currency selector"
---
A simple custom input that allows users to select a currency and enter a value. Made using <code>createInput()</code>.
::

::ExampleCard
---
href: "https://formkit.link/de8e6530b80717f5229813258e739e7b"
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
href: "https://formkit.link/636db65605305d28dd6efe47f89c025d"
title: "Style radio input options to look like cards"
---
Using only new styles (Tailwind Classes in this example) apply a card treatment to the default FormKit Radio input structure.
::

## User interface

::ExampleCard
---
href: "https://formkit.link/1651eb2ab9a75efbf85941f43dcbc875"
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
href: "https://formkit.link/3f8dc94953130131549b4abc8a3b64d1"
title: "Produce dynamic classes based on an input's state"
---
Use the <code>classes</code> config object and FormKit props to produce a dynamic classes based on input state. Helpful for Tailwind and other CSS utility libraries.
::

::ExampleCard
---
href: "https://formkit.link/44e1285084158fe8e2ef2ae598660ffa"
title: "Create reactive UI variations of FormKit inputs using “features”"
---
Create UI variations of FormKit inputs (like buttons) that update based on reactive data in your components.
::
