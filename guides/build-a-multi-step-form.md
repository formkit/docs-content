---
title: Build a multi-step form
description: Follow this guide to learn how to build a multi-step form with FormKit.
---

# Build a multi-step form

Few interactions on the web cause as much displeasure for a user as being confronted with a large, intimidating form. Multi-step forms can alleviate this pain by breaking a large form into smaller approachable steps — but they can also be complicated to build.

In this guide, we'll walk through building a multi-step form with FormKit and see how we can provide an elevated user experience with minimal code. Let's get started!

<callout type="info" label="Composition API">
This guide assumes you are are familiar with the <a href="https://vuejs.org/guide/introduction.html#api-styles">Vue Composition API</a>.
</callout>


## Requirements

Let's begin by laying out the requirements for our multi-part form:

- Show the user which step they are currently on in relation to all required steps.
- Allow the user to navigate to any step of the form at will.
- Show immediate feedback if each step has passed all frontend validations ✅.
- Aggregate form data from all the steps into a single object for submission.
- Display any returned backend errors on the appropriate fields and also at the appropriate step.

## Creating a basic form

First, let's create a basic form _without steps_ so we have content to work with. Our example will be a pretend application to receive a grant, so we'll organize the form into 3 sections — "Contact Info", "Organization Info", and "Application". These will become the full form steps later.

We'll include a mix of validation rules for each input, and limit each section to 1 question for now until we have the full structure in place. Lastly, for the purposes of this guide, we'll output the collected form data at the bottom of each example:

<example
  :file="[
    '/_content/examples/guides/multi-step-form/basic-form/example.vue'
  ]"
  :bp="880"
  :editable="true">
</example>

## Breaking the form into sections

Now that we have a defined structure, let's break the form into distinct sections.

To start, let's wrap each section of inputs with a [group](/inputs/group) (`<FormKit type="group" />`) so we can validate each group independently. FormKit groups are powerful because they are aware of the validation state of all their descendants without affecting the markup of your form.

A group itself becomes valid when all its children (and their children) are valid:

<client-only>

```html
<!-- Only showing a single group here for brevity -->
<FormKit
  type="group"
  name="contactInfo"
>
  <FormKit
    type="email"
    label="*Email address"
    validation="required|email"
  />
</FormKit>
...
```
</client-only>

In our case, we're also going to want wrapping HTML. Let's put each group into a "step" section which we can conditionally show and hide:

<client-only>

```html
<!-- Only showing a single group here for brevity -->
<section v-show="step === 'contactInfo'">
  <FormKit
    type="group"
    name="contactInfo"
  >
    <FormKit
      type="email"
      label="*Email address"
      validation="required|email"
    />
  </FormKit>
</section>
...
```
</client-only>

Next, let's introduce some navigation UI so we can toggle between each step:

<client-only>

```js
// for now, manually set step names
const stepNames = ['contactInfo','organizationInfo','application']
```
</client-only>

<client-only>

```html
<!-- Set up tab-navigation UI. On click, change step -->
<ul class="steps">
  <li
    v-for="stepName in stepNames"
    class="step"
    @click="step = stepName"
    :data-step-active="step === stepName"
  >
    {{ camel2title(panel) }}
  </li>
</ul>
```
</client-only>

Here's what it looks like put together:

<example
  :file="[
    '/_content/examples/guides/multi-step-form/form-in-steps/example.vue'
  ]"
  :bp="880"
  :editable="true">
</example>

It's starting to look like a real multi-step form! There's more work to be done though as we've got a few issues:

- The validity of each individual step is not being shown.
- When there are validations on a tab that's not the "current step", they cannot be seen.

Let's carry on and fix those issues.

## Tracking validity and errors for each step

Out-of-the-box, FormKit already:

1) Tracks group validity
2) Keeps a count of group errors

We'll need to expose this data so we can use it in our UI.

There are a couple concepts to remember about FormKit before we proceed. First, every `<FormKit>` component has a matching [core node](/advanced/core#node), which itself has a reactive `node.context` object. Second, each core node has a [ledger](/advanced/core#ledger) which counts messages. With that in mind, here's an approach to track validity across steps:

- We'll track validity of each `group` node by looking at the group's `node.context.state.valid`.
- We'll track the error counts on each `group` node by listening for `count:errors` events — which are emitted every time the error count changes.

Remember that groups already know about the complete state of their children, so there is nothing else we need to track for ourselves manually.

We'll leverage FormKit's [plugin](/advanced/core#plugins) functionality to do this job. While the term "plugin" may sound intimidating, plugins in FormKit are just setup functions that are called when a node is created. Plugins are inherited by all descendants (such as children within a group).

Here's our custom plugin, called `stepPlugin`:

<client-only>

```js
// our plugin and our template code will make use of 'steps'
const steps = reactive({})

const stepPlugin = (node) => {
    // only runs for <FormKit type="group" />
    if (node.props.type == "group") {
        // build up our steps object
        steps[node.name] = steps[node.name] || {}

        // add the current group's reactive validity
        node.on('created', () => {
            steps[node.name].valid = toRef(node.context.state, 'valid')
        })

        // add the current group's error count
        node.on('count:errors', ({ payload: count }) => {
            steps[node.name].errorCount = count
        })

        // Stop plugin inheritance to descendant nodes.
        // We only care about the the top-level groups
        // that represent the steps.
        return false
    }
}

/* the resulting "steps" reactive object looks this this: */
{
  contactInfo: { errorCount: 0, valid: false },
  organizationInfo: { errorCount: 0, valid: false }
  application: { errorCount: 0, valid: false }
}
```
</client-only>

To use our plugin, we'll add it to our form at the top-level `<FormKit type="form" />`. This means that every group in our form will inherit the plugin:

<client-only>

```html
<FormKit
  type="form"
  :plugins="[stepPlugin]"
>
... rest of the form
</FormKit>
```
</client-only>

## Showing validity and errors

Now that our template has real-time access to each group's validity and error state via our plugin, let's write the UI to expose this data in the step navigation bar.

We also no longer need to manually define our steps since our plugin dynamically stores the `steps` as part of its tracking. Here's our approach:

- We'll add a `data-step-valid="true"` attribute to each step if it's valid (so that we can target it with CSS).
- We'll add a `has-errors` class to the step, and add an error bubble `<span>` inside that will show the number of errors within a given step.

<client-only>

```html
  <ul class="steps">
    <li
      v-for="(step, stepName) in steps"
      :class="['step', { 'has-errors': step.errorCount > 0 }]"
      @click="activeStep = stepName"
      :data-step-valid="step.valid && step.errorCount === 0"
      :data-step-active="activeStep === stepName"
    >
      <span
        v-if="step.errorCount > 0"
        class="step--errors"
        v-text="step.errorCount"
      />
      {{ camel2title(stepName) }}
    </li>
  </ul>
```
</client-only>

With these updates our form is now capable of informing a user when they have correctly filled out all of the fields in a given step!

We'll also make a few other improvements:

- Extract the "step logic" to a [Vue composable](https://vuejs.org/guide/reusability/composables.html) so it can be reused elsewhere.
- Create a utils.js file for our utility functions.

<example
  :file="[
    '/_content/examples/guides/multi-step-form/showing-state/example.vue',
    '/_content/examples/guides/multi-step-form/showing-state/useSteps.js',
    '/_content/examples/guides/multi-step-form/showing-state/utils.js',
  ]"
  :bp="880"
  :editable="true">
</example>


## Form submission and receiving errors

The last piece of the puzzle is submitting the form and handling any errors we receive from the backend server — which we'll fake for the purposes of this guide.

We submit the form by adding an `@submit` handler to the `<FormKit type="form">`:

<client-only>

```html
<FormKit
  type="form"
  @submit="submitApp"
>
... rest of form
```
</client-only>

And here's our submit handler:

<client-only>

```js
const submitApp = async (formData, node) => {
  try {
    const res = await axios.post(formData)
    node.clearErrors()
    alert('Your application was submitted successfully!')
  } catch (err) {
    node.setErrors(err.formErrors, err.fieldErrors)
  }
}
```
</client-only>

Notice that FormKit passes our submit handler 2 helpful arguments: the form's data in a single request-ready object (which we're calling `formData`), and the form's underlying core `node`, which we can use to clear errors or set any returned errors using the `node.clearErrors()` and `node.setErrors()` helpers.

[`setErrors()`](/essentials/forms#clearing-errors-using-nodeseterrors-or-formkitseterrors) takes 2 arguments: form-level errors (an array), and field-specific errors (an object). Our fake backend returns the `err` response which we use to set any errors.

So, what happens if the user is on step 3 (Application) when they submit, and there are field-level errors on a hidden step? Thankfully, so long as the nodes exist the DOM, FormKit is able place these errors appropriately. This is why we used a `v-show` for the steps instead of `v-if` — The DOM node needs to exist in order to have errors set on the corresponding FormKit node.

## Putting it all together

And Voilà! 🎉 We are finished! In addition to our submit handler, we've added some more UI and UX flourish to this final form to make it feel more real:

- Added Previous / Next buttons for step navigation.
- Added tracking for "visited steps" and we now show validation errors when a user blurs a step.
- Added a fake backend to `utils.js` that returns errors.
- The form submit button is now disabled until the entire form is in a `valid` state.
- Added some additional text to the form to better mock a real-world UI.

 Here it is — a fully functioning multi-step form:

<example
  :file="[
    '/_content/examples/guides/multi-step-form/final-form/example.vue',
    '/_content/examples/guides/multi-step-form/final-form/useSteps.js',
    '/_content/examples/guides/multi-step-form/final-form/utils.js'
  ]"
  :bp="880"
  :editable="true">
</example>

## Ways to improve

Of course, there are always ways to improve anything, and this form is no exception. Here are a few ideas:

- Save form state to `window.localStorage` so a user's form state is maintained even if they accidentally leave.
- Pre-populate any known form values so the user doesn't have to fill out known data.
- Add a "not yet submitted" status indicator to warn the user that they still need to submit.

We've covered a lot of topics in this guide and hope you've learned more about FormKit and how to use it to make multi-step forms easier!

<cta label="Want more? Start by reading about FormKit core." button="Dig deeper" href="/advanced/core"></cta>
