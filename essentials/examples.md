---
title: Examples
description: Examples you can use in your project today.
---

# Examples

A broad collection of examples with working code you can use in your project today.

## Forms & structure

<ExampleCard
  href="https://formkit.link/15ed219785d1da903088fcf33ab852af"
  title="Add classes to the FormKit-provided submit button">
The <code>form</code> type automatically adds a submit button. Add classes so its UI can conform to your project's styles
</ExampleCard>

<ExampleCard
  href="https://formkit.link/b7cc2c4ae2b02807065d6617ead62783"
  title="Using a list to repeat an input">
Using the <code>list</code> type we can create inputs that can have multiple values. This example uses a loop to let users add/remove email addresses.
</ExampleCard>

## Schema

<ExampleCard
  href="https://formkit.link/0098db1ae3860a7f80a7be42eff3b058"
  title="Conditionally show input based on value of another input">
Use the <code>FormKitSchema</code> component to conditionally show an input (with validation rules) based on the value of another input.
</ExampleCard>

<ExampleCard
  href="https://formkit.link/9fc88976fc72d4d09f5deb2b1891abce"
  title="Multi-step form built from Schema">
  <client-only>
    Use the <code>FormKitSchema</code> component to render the multi-step form from <nuxt-link to="/guides/build-a-multi-step-form">the multi-step form guide</nuxt-link>.
  </client-only>
</ExampleCard>

## Plugins

<ExampleCard
  href="https://formkit.link/b37c7d36263ab0ee1bd626aa0a405b93"
  title="Make number inputs return number values">
Use a plugin to cast string values to numbers. Useful if you want inputs of type <code>number</code> to return a JS <code>Number</code> primitive.
</ExampleCard>

<ExampleCard
  href="https://formkit.link/e9712ba9d7f6c0ab5648b15a89147ba7"
  title="Remove the inner wrapper on all checkboxes">
Use a plugin to modify the HTML of all descendant checkbox inputs.
</ExampleCard>

## Inputs

<ExampleCard
  href="https://formkit.link/4c282e69337fdfca35ec613e2f67fcc9"
  title="Number input with custom step buttons">
A custom input with +1 and -1 step buttons. Made using <code>createInput()</code>.
</ExampleCard>

## User interface

<ExampleCard
  href="https://formkit.link/c210b252deb3433e5444a3d7ec1b9582"
  title="Add transitions to validation messages">
Add transitions to validation messages by injecting a Vue <code>TransitionGroup</code> component using FormKit's <code>:sections-schema</code>.
</ExampleCard>

<ExampleCard
  href="https://stackblitz.com/edit/github-vqvsuh"
  title="Starter project with Nuxt, FormKit, and Tailwind">
A working starter project on StackBlitz with Nuxt, FormKit and Tailwind CSS.
</ExampleCard>

<ExampleCard
  href="https://formkit.link/c7c68f83dd98aa8744abff97466fc49d"
  title="Produce dynamic classes based on an input's state">
Use the <code>rootClasses</code> config function and FormKit props to produce a dynamic classes based on input state. Helpful for Tailwind and other CSS utility libraries.
</ExampleCard>
