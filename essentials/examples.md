---
title: Examples
description: Examples you can use in your project today.
---

# Examples

A broad collection of examples with working code you can use in your project today.

## Forms & structure

<ExampleCard
  href="https://formkit.link/012a9d91d7ddfc29400fb38297e220d7"
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
  href="https://formkit.link/004bb4689e29ff2d9caedf884171affe"
  title="Conditionally show input based on value of another input">
Use the <code>FormKitSchema</code> component to conditionally show an input (with validation rules) based on the value of another input.
</ExampleCard>

## Plugins

<ExampleCard
  href="https://formkit.link/65ccc2d278832743796f8e1337148954"
  title="Make number inputs return number values">
Use a plugin to cast string values to numbers. Useful if you want inputs of type <code>number</code> to return a JS <code>Number</code> primitive.
</ExampleCard>

<ExampleCard
  href="https://formkit.link/98c2026ae770a1073d953f776c692a29"
  title="Make radio inputs return booleans">
By default HTML only supports string values, but you can use a plugin to cast radio inputs to booleans.
</ExampleCard>

<ExampleCard
  href="https://formkit.link/17071b70d7a6f8f1a1720a36f37652cf"
  title="Remove the inner wrapper on all checkboxes">
Use a plugin to modify the HTML of all descendant checkbox inputs.
</ExampleCard>

## User interface

<ExampleCard
  href="https://formkit.link/7bfec79f1a5dc009b079e4b4823e92df"
  title="Add transitions to validation messages">
Add transitions to validation messages by injecting a Vue <code>TransitionGroup</code> component using FormKit's <code>:sections-schema</code>.
</ExampleCard>

<ExampleCard
  href="https://stackblitz.com/edit/github-vqvsuh"
  title="Starter project with Nuxt, FormKit, and Tailwind">
A working starter project on StackBlitz with Nuxt, FormKit and Tailwind CSS.
</ExampleCard>

<ExampleCard
  href="https://formkit.link/882b4192c1e0c50c0ca0b1e029a6fcea"
  title="Produce dynamic classes based on an input's state">
Use the <code>rootClasses</code> config function and FormKit props to produce a dynamic classes based on input state. Helpful for Tailwind and other CSS utility libraries.
</ExampleCard>
