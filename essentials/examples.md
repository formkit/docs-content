---
title: Examples
description: Examples you can use in your project today.
---

# Examples

<page-toc></page-toc>

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
Using the <code>list</code> type, we can create repeater inputs that can have multiple values. This example uses a loop to let users add/remove email addresses.
</ExampleCard>

## Schema

<ExampleCard
  href="https://formkit.link/7373dc9cfd753e8ed3acd3c815438b62"
  title="Conditionally show input based on value of another input">
Use the <code>FormKitSchema</code> component to conditionally show an input (with validation rules) based on the value of another input.
</ExampleCard>

<ExampleCard
  href="https://formkit.link/9fc88976fc72d4d09f5deb2b1891abce"
  title="Multi-step form built from Schema">
Use the <code>FormKitSchema</code> component to render the multi-step form from the multi-step form guide.
</ExampleCard>

<ExampleCard
  href="https://formkit.link/6e6d3e9b251a3662af15bd0c1c55e4be"
  title="Custom schema submit button with disabled state and loading spinner">
Create a custom schema-powered submit button that dynamically disables while the form is submitting and provides a loading spinner.
</ExampleCard>

## Plugins

<ExampleCard
  href="https://formkit.link/b48228435ec7770fbc81de811fbe35d8"
  title="Add an asterisk to the labels of all required inputs">
Use a plugin to add an asterisk (\*) to the label area of inputs that have the "required" rule.
</ExampleCard>

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

<ExampleCard
  href="https://formkit.link/8b90542319deb5ab29cb5811d7a28db7"
  title="Add an icon before validation messages">
Use a plugin to append an icon before validation messages by extending the schema definition.
</ExampleCard>

<ExampleCard
  href="https://formkit.link/e1ba341cb0e4f9ae08d3b9f90ec84f11"
  title="Set initial values to empty strings instead of undefined">
Use a plugin to set all initial input values to an empty string <code>""</code> instead of <code>undefined</code>.
</ExampleCard>

<ExampleCard
  href="https://formkit.link/82a8f02c1651812d710b28d300334d99"
  title="Add a manually toggleable loading spinner to 'button'-type inputs">
Use a plugin to allow inputs in the <code>button</code> family to have a loading spinner that can be toggled at-will with a new <code>loading</code> prop.
</ExampleCard>

<ExampleCard
  href="https://formkit.link/c253b391d5f16f226457073bb6dc30c4"
  title="Automatically set an input's name, label, and help text based on the id">
Use a plugin to automatically set an input's <code>name</code>, <code>label</code>, and <code>help</code> props based on the <code>id</code>. Reduces repetitive prop declarations in your HTML.
</ExampleCard>

<ExampleCard
  href="https://formkit.link/c4270ef4308aff6a43c46a1e93c14e0f"
  title="Scroll to the first validation or error on the form.">
A plugin that automatically scrolls to the first error on the page on submit or when backend errors are added.
</ExampleCard>

## Inputs

<ExampleCard
  href="https://formkit.link/4c282e69337fdfca35ec613e2f67fcc9"
  title="Number input with custom step buttons">
A custom input with +1 and -1 step buttons. Made using <code>createInput()</code>.
</ExampleCard>

<ExampleCard
  href="https://formkit.link/035bcab1dcba2420902bdae7b64811b4"
  title="Add a link (<a> tag) to a label">
Use slots or the <code>:sections-schema</code> feature to modify a label's HTML.
</ExampleCard>

<ExampleCard
  href="https://formkit.link/d8b7840c35adb657a454eec7c76264fd"
  title="Conditionally update options of a select input">
Conditionally update the <code>options</code> of a <code>select</code> input based on the value of another input.
</ExampleCard>

## User interface

<ExampleCard
  href="https://formkit.link/35c793e3b7b58097098437d0c1707c62"
  title="Add a loading indicator for async validation rules">
Add a loading spinner to your input when an async validation rule is pending validation.
</ExampleCard>

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

<ExampleCard
  href="https://formkit.link/33b779548f9285c854b49d296e080094"
  title="Create reactive UI variations of FormKit inputs using “features”">
Create UI variations of FormKit inputs (like buttons) that update based on reactive data in your components.
</ExampleCard>
