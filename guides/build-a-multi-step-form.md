---
title: Build a multi-step form
description: Follow this guide to learn how to build a multi-step form with FormKit.
---

# Build a multi-step form

:PageToc

<callout type="warning" label="Official Multi-Step Plugin">
Starting with <code>1.0.0-beta.15</code> FormKit ships an official 1st-party plugin that creates a <code>multi-step</code> input type. <br><br> While there is still value in understanding how to build a multi-step input on your own — if you're looking for the easiest way to use a multi-step input in your project check out the <a href="/plugins/multi-step">official FormKit multi-step plugin</a> — it's free and open-source!
</callout>

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

::Example
---
  file: [
    '/_content/examples/guides/multi-step-form/basic-form/example.vue'
  ]
  bp: 880
  editable: true
---
::

## Breaking the form into sections

Now that we have a defined structure, let's break the form into distinct sections.

To start, let's wrap each section of inputs with a [group](/inputs/group) (`<FormKit type="group" />`) so we can validate each group independently. FormKit groups are powerful because they are aware of the validation state of all their descendants without affecting the markup of your form.

A group itself becomes valid when all its children (and their children) are valid:

```html
<!-- Only showing a single group here for brevity -->
<FormKit type="group" name: "contactInfo">
  <FormKit type="email" label="*Email address" validation="required|email" />
</FormKit>
...
```

In our case, we're also going to want wrapping HTML. Let's put each group into a "step" section which we can conditionally show and hide:

```html
<!-- Only showing a single group here for brevity -->
<section v-show="step === 'contactInfo'">
  <FormKit type="group" name: "contactInfo">
    <FormKit type="email" label="*Email address" validation="required|email" />
  </FormKit>
</section>
...
```

Next, let's introduce some navigation UI so we can toggle between each step:

```js
// for now, manually set step names
const stepNames = ['contactInfo', 'organizationInfo', 'application']
```

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

Here's what it looks like put together:

<callout type="info" label="Styles not included">
  The CSS for multi-step forms — such as the tabs in this example — is not included in the default Genesis theme. Styles were custom-written for this example and you will need to provide your own.
</callout>

::Example
---
  file: [
    '/_content/examples/guides/multi-step-form/form-in-steps/example.vue'
  ]
  bp: 880
  editable: true
---
::

It's starting to look like a real multi-step form! There's more work to be done though as we've got a few issues:

- The validity of each individual step is not being shown.
- When there are validations on a tab that's not the "current step", they cannot be seen.

Let's address the first issue.

## Tracking validity for each step

FormKit already tracks `group` validity out-of-the-box. We'll just need to capture this data so we can use it in our UI.

One important concept to remember about FormKit is that every `<FormKit>` component has a matching [core node](/essentials/architecture#node), which itself has a reactive `node.context` object. This `context` object tracks the validity of the node in `context.state.valid`. As mentioned above, a `group` becomes valid when all its descendants are valid. With that in mind, let's build up an object that stores the reactive validity of each of the groups.

We'll leverage FormKit's [plugin](/essentials/architecture#plugins) functionality to do this job. While the term "plugin" may sound intimidating, plugins in FormKit are just setup functions that are called when a node is created. Plugins are inherited by all descendants (such as children within a group).

Here's our custom plugin, called `stepPlugin`:

```js
// our plugin and our template code will make use of 'steps'
const steps = reactive({})

const stepPlugin = (node) => {
  // only runs for <FormKit type="group" />
  if (node.props.type == 'group') {
    // build up our steps object
    steps[node.name] = steps[node.name] || {}

    // add the current group's reactive validity
    node.on('created', () => {
      steps[node.name].valid = toRef(node.context.state, 'valid')
    })

    // Stop plugin inheritance to descendant nodes.
    // We only care about the the top-level groups
    // that represent the steps.
    return false
  }
}
```

The resulting `steps` reactive object from our plugin above looks like this:

```js
{
  contactInfo: { valid: false },
  organizationInfo: { valid: false }
  application: { valid: false }
}
```

To use our plugin, we'll add it to our root form `<FormKit type="form" />`. This means that every top-level group in our form will inherit the plugin:

```html
<FormKit type="form" :plugins="[stepPlugin]"> ... rest of the form </FormKit>
```

## Showing validity

Now that our template has real-time access to each group's validity state via our plugin, let's write the UI to show this data in the step navigation bar.

We also no longer need to manually define our steps since our plugin is dynamically storing the name of all groups in the `steps` object. Let's add a `data-step-valid="true"` attribute to each step if it's valid so we can target with CSS:

```html
<ul class="steps">
  <li
    v-for="(step, stepName) in steps"
    class="step"
    @click="activeStep = stepName"
    :data-step-valid="step.valid"
    :data-step-active="activeStep === stepName"
  >
    {{ camel2title(stepName) }}
  </li>
</ul>
```

With these updates, our form is now capable of informing a user when they have correctly filled out all of the fields in a given step!

We'll also make a few other improvements:

- Extract the "step logic" to a [Vue composable](https://vuejs.org/guide/reusability/composables.html) so it can be reused elsewhere.
- Create a utils.js file for our utility functions.
- Set the 1st step we find as the `activeStep`.

::Example
---
  file: [
    '/_content/examples/guides/multi-step-form/showing-validity/example.vue',
    '/_content/examples/guides/multi-step-form/showing-validity/useSteps.js',
    '/_content/examples/guides/multi-step-form/showing-validity/utils.js',
  ]
  bp: 880
  editable: true
---
::

## Showing errors

Showing errors is more nuanced. Though the user may not be aware, there are actually 2 types of errors we need to handle and communicate to the user:

- Errors from failing _frontend_ validation rules (`messages` of type `validation`)
- Backend errors (`messages` of type `error`)

FormKit uses its [message store](/essentials/architecture#message-store) to track both of these types of errors/messages.

With our plugin already in place, it's relatively simple to add tracking for both:

```js
const stepPlugin = (node) => {
  ...
  // Store or update the count of blocking validation messages.
  // FormKit emits the "count:blocking" event (with the count) each time
  // the count changes.
  node.on('count:blocking', ({ payload: count }) => {
    steps[node.name].blockingCount = count
  })

  // Store or update the count of backend error messages.
  node.on('count:errors', ({ payload: count }) => {
    steps[node.name].errorCount = count
  })
  ...
}
```

<callout type="tip" label="Blocking validation messages vs errors">
FormKit makes a distinction between frontend validation messages (<code>messages</code> of type <code>validation</code>), and errors (<code>messages</code> of type <code>error</code>).
</callout>

Let's update our example to show both types of errors with the following requirements:

- We'll always show the count of backend errors if they exist.
- We'll only show the count of frontend validation errors if the user visits and then exits (blurs) a group — as we don't want to confront them with error UI if they are still in progress.

### Adding a group blur event

Since "blurring a group" doesn't exist in HTML, we'll introduce it in our plugin with an array called `visitedSteps`. Here's the relevant code:

```js
import { watch } from 'vue'
import { getNode, createMessage } from '@formkit/core'

const stepPlugin = (node) => {
  ...
  const activeStep = ref('')
  const visitedSteps = ref([]) // track visited steps

  // Watch our activeStep and store visited steps
  watch(activeStep, (newStep, oldStep) => {
    if (oldStep && !visitedSteps.value.includes(oldStep)) {
      visitedSteps.value.push(oldStep)
    }
    // Trigger showing validation on fields if a group has been visited
    visitedSteps.value.forEach((step) => {
      const node = getNode(step)

      // the node.walk() method walks through all the descendants of the current node
      // and executes the provided function.
      node.walk((n) => {
        n.store.set(
          createMessage({
            key: 'submitted',
            value: true,
            visible: false
          })
        )
      })
    })
  })
  ...
}
```

You might be wondering why we are walking all of the descendants of a given step (`node.walk()`) and creating messages with a key of `submitted` and value of `true`? When a user attempts to submit a form, this is how FormKit informs itself that all inputs are in a `submitted` state. In this state, FormKit forces any blocking validation messages to appear. We are manually triggering the same thing in our "group blur" event.

### The error UI

We'll use the same UI for both types of errors since end-users don't really care about the distinction. Here's our updated step HTML, which outputs a red bubble with the sum total of the errors `errorCount` + `blockingCount`:

```html
<li v-for="(step, stepName) in steps" class="step" ...>
  <span
    v-if="checkStepValidity(stepName)"
    class="step--errors"
    v-text="step.errorCount + step.blockingCount"
  />
  {{ camel2title(stepName) }}
</li>
```

We are almost to the finish line! Here's our current form — which can now tell a user when they have properly _or improperly_ filled out each step:

::Example
---
  file: [
    '/_content/examples/guides/multi-step-form/showing-all-state/example.vue',
    '/_content/examples/guides/multi-step-form/showing-all-state/useSteps.js',
    '/_content/examples/guides/multi-step-form/showing-all-state/utils.js',
  ]
  bp: 880
  editable: true
---
::

## Form submission and receiving errors

The last piece of the puzzle is submitting the form and handling any errors we receive from the backend server. We'll fake the backend for the purposes of this guide.

We submit the form by adding an `@submit` handler to the `<FormKit type="form">`:

```html
<FormKit type="form" @submit="submitApp"> ... rest of form</FormKit>
```

And here's our submit handler:

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

Notice that FormKit passes our submit handler 2 helpful arguments: the form's data in a single request-ready object (which we're calling `formData`), and the form's underlying core `node`, which we can use to clear errors or set any returned errors using the `node.clearErrors()` and `node.setErrors()` helpers, respectively.

[`setErrors()`](/inputs/form#clearing-errors-using-nodeseterrors-or-formkitseterrors) takes 2 arguments: form-level errors and field-specific errors. Our fake backend returns the `err` response which we use to set any errors.

So, what happens if the user is on step 3 (Application) when they submit, and there are field-level errors on a hidden step? Thankfully, so long as the nodes exist the DOM, FormKit is able place these errors appropriately. This is why we used a `v-show` for the steps instead of `v-if` — The DOM node needs to exist in order to have errors set on the corresponding FormKit node.

## Putting it all together

And Voilà! 🎉 We are finished! In addition to our submit handler, we've added some more UI and UX flourishes to this final form to make it feel more real:

- Added Previous / Next buttons for step navigation.
- Added a fake backend to `utils.js` that returns errors.
- The form submit button is now disabled until the entire form is in a `valid` state.
- Added some additional text to the form to better mock a real-world UI.

Here it is — a fully functioning multi-step form:

::Example
---
  file: [
    '/_content/examples/guides/multi-step-form/final-form/example.vue',
    '/_content/examples/guides/multi-step-form/final-form/useSteps.js',
    '/_content/examples/guides/multi-step-form/final-form/utils.js'
  ]
  bp: 880
  editable: true
---
::

<cta label="Want to see it built using FormKit Schema?" button="Check out the Playground" href="https://formkit.link/7b74e4469f5c6eb1820cea4423a3ccbe" type="ghost"></cta>

## Ways to improve

Of course, there are always ways to improve anything, and this form is no exception. Here are a few ideas:

- Save form state to `window.localStorage` so a user's form state is maintained even if they accidentally leave.
- Pre-populate any known form values so the user doesn't have to fill out known data.
- Add a "not yet submitted" status indicator to warn the user that they still need to submit.

We've covered a lot of topics in this guide and hope you've learned more about FormKit and how to use it to make multi-step forms easier!

<cta label="Want to use a multi-step input in your project?" button="Try the official plugin" href="/plugins/multi-step"></cta>
