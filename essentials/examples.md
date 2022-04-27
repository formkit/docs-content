---
title: Examples
description: Examples you can use in your project today.
---

# Examples

A broad collection of examples with working code you can use in your project today.

## Forms & structure

<ExampleCard
  href="https://formkit.link/3d916fc062c00fa1b277974b19161b66"
  title="Add classes to the FormKit-provided submit button">
The <code>form</code> type automatically adds a submit button. Add classes so its UI can conform to your project's styles
</ExampleCard>

<ExampleCard
  href="https://formkit.link/54951f959813962364c5d87fbd8cce2f"
  title="Using a list to repeat an input">
Using the <code>list</code> type we can create inputs that can have multiple values. This example uses a loop to let users add/remove email addresses.
</ExampleCard>

## Schema

<ExampleCard
  href="https://formkit.link/3f6da65e41ba138432aee67602430ecd"
  title="Conditionally show input based on value of another input">
Use the <code>FormKitSchema</code> component to conditionally show an input (with validation rules) based on the value of another input.
</ExampleCard>

## Plugins

<ExampleCard
  href="https://formkit.link/91d045ef5d66d57d7f4844e72817896d"
  title="Make number inputs return number values">
Use a plugin to cast string values to numbers. Useful if you want inputs of type <code>number</code> to return a JS <code>Number</code> primitive.
</ExampleCard>

<ExampleCard
  href="https://formkit.link/29ae665b7b0a5729329680bc968c6806"
  title="Make radio inputs return booleans">
By default HTML only supports string values, but you can use a plugin to cast radio inputs to booleans.
</ExampleCard>

<ExampleCard
  href="https://formkit.link/551a67cd4666f91629336b7b9601fcc8"
  title="Remove the inner wrapper on all checkboxes">
Use a plugin to modify the HTML of all descendant checkbox inputs.
</ExampleCard>

## User interface

<ExampleCard
  href="https://formkit.link/2973682a9d2314d41cf96691e508aaa7"
  title="Add transitions to validation messages">
Add transitions to validation messages by injecting a Vue <code>TransitionGroup</code> component using FormKit's <code>:sections-schema</code>.
</ExampleCard>

<ExampleCard
  href="https://stackblitz.com/edit/github-vqvsuh"
  title="Starter project with Nuxt, FormKit, and Tailwind">
A working starter project on StackBlitz with Nuxt, FormKit and Tailwind CSS.
</ExampleCard>

<ExampleCard
  href="https://formkit.link/f6dc9c3ac7c564084b5ff340654062e4"
  title="Produce dynamic classes based on an input's state">
Use the <code>rootClasses</code> config function and FormKit props to produce a dynamic classes based on input state. Helpful for Tailwind and other CSS utility libraries.
</ExampleCard>
