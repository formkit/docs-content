---
title: Build a multi-step form
description: Follow this guide to learn how to build a multi-step form with FormKit.
---

# Build a multi-step form

Few interactions on the web cause as much displeasure as being confronted with a large, intimidating form. Multi-step forms can help by breaking large forms down into approachable steps, but they can be complicated to build.

In this guide, we'll walk through building a multi-step form with FormKit and see how we can provide a good user experience with minimal code. Let's get started!


## Requirements

Let's begin by laying out some requirements that can be challenging with multi-part forms:

- Show the user which step they are on.
- Allow the user to navigate to any step of the form.
- Show if each step has passed all frontend validations ✅ .
- Aggregate form data from all the steps for submission.
- Display any returned backend errors at the appropriate step.

## Creating a basic form

First, let's create a basic form _without steps_ so we have content to work with. We'll organize the form into 3 sections — "Contact Info", "Organization Info", and "Application" — which will become the steps later. We'll limit each section to 1 question for now until we have the full structure in place.

We'll include a mix of validation rules for each input. When all of the rules for a given section are passing, we can let the user know that section is complete. Lastly, for the purposes of this guide, we'll output the Form data at the bottom:

<example
  :file="[
    '/_content/examples/guides/multi-step-form/basic-form/example.vue',
    '/_content/examples/guides/multi-step-form/styles.vue'
  ]"
  :editable="true">
</example>

## Breaking the form into sections

Let's walk through breaking the form down into sections. We'll go step-by-step and show the result at the end of this section.

Let's wrap each section of inputs with a [group](/inputs/group) (`<FormKit type="group" />`) so we can validate each group independently. FormKit groups are powerful because they are aware of the validation state of all their descendants (among many other features). A group itself becomes valid when all its children (and their children) are valid:

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

Then, let's wrap each group in a "step" section so we can conditionally show and hide each group:

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

Next, let's introduce some navigation UI so we can toggle between each step:

```js
// for now, manually set step names
const stepNames = ['contactInfo','organizationInfo','application']
```

```html
<!-- Navigation UI -->
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


<example
  class="cap-height"
  :file="[
    '/_content/examples/guides/multi-step-form/form-in-steps/example.vue',
    '/_content/examples/guides/multi-step-form/styles.vue'
  ]"
  :editable="true">
</example>

## Tracking validity and errors for each step

Out-of-the-box, FormKit already 1) tracks group validity and 2) counts group errors. We just need to expose this data so we can use it in our form. There are a couple concepts to remember about FormKit before we proceed. First, every `<FormKit>` component has a matching [core node](/advanced/core#node), which has a reactive `node.context` object. Second, each core node has a [ledger](/advanced/core#ledger) which counts messages. Here will be our approach:

- We'll track validity of each `group` by looking at the group's `node.context.state.valid`
- We'll track the error counts on each `group` by listening for `count:errors` events — which are emitted every time the error count changes.

Remember that groups already know lots of things about their children, so there is nothing else we need to track ourselves.

We'll leverage the FormKit [plugins](/advanced/core#plugins) to do this job. While the term "plugin" may sound intimidating, plugins in FormKit are just functions that are called when a node is created. Plugins are inherited by all descendants. Here's our plugin, called `stepPlugin`:

```js
// our plugin and our template code will make use of 'steps'
const steps = reactive({})

const stepPlugin = (node) => {
    // only runs for <FormKit type="group" />
    if (node.props.type == "group") {
        steps[node.name] = steps[node.name] || {}
        
        // group's validity
        node.on('created', () => {
            steps[node.name].valid = toRef(node.context.state, 'valid')              
        })

        // group's error count
        node.on('count:errors', ({ payload: count }) => {
            steps[node.name].errorCount = count
        })
        
        // Stop plugin inheritance to descendant nodes.
        // We only care about the groups
        return false 
    }
}

/* the resulting "steps" reactive object looks something like:
{
  contactInfo: { errorCount: 0, valid: false },
  organizationInfo: { errorCount: 0, valid: false }
  application: { errorCount: 0, valid: false }
}
*/
```

Now we define our plugin on the top-level `<FormKit type="form" />`:

```html
<FormKit
  type="form"
  :plugins="[stepPlugin]"
>
... rest of the form
</FormKit>
```

## Showing validity and errors

Now that our template has access to each group's validity and error state, let's write the UI to expose this in the step navigation bar. In addition, we no longer have to manually define our steps since our plugin dynamically stores the `steps`. Here's our approach:

- We'll add a `data-step-valid="true"` attribute to each step if it's valid.
- We'll add the `has-errors` class to the step, and add an error bubble `<span>` inside with the number of errors.

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

Our form is now capable of informing a user when they have correctly filled out all of the fields in a given step! We've also made a few other improvements:
- Extracted the "step logic" to a Vue composable so it can be reused elsewhere
- Created a utils.js file for the utility functions

<example
  class="cap-height"
  :file="[
    '/_content/examples/guides/multi-step-form/showing-state/example.vue',
    '/_content/examples/guides/multi-step-form/styles.vue',
    '/_content/examples/guides/multi-step-form/showing-state/utils.js',
    '/_content/examples/guides/multi-step-form/showing-state/useSteps.js'
  ]"
  :editable="true">
</example>


## Form submission and receiving errors

The last piece of the puzzle is actually submitting the form and handling any errors we receive from the backend. For this guide, we'll just fake a backend in the `utils.js` file. We submit the form by adding an `@submit` handler to the `<FormKit type="form">`. While we're at it, let's modify the FormKit-provided submit button using the `submit-label` prop:

```html
<FormKit
  type="form"
  submit-label="Submit application"
  @submit="submitApp"
/>
```

And here's our submit handler:

```js
const submitApp = async (formData, node) => {
  try {
    const res = await axios.post(formData)
    clearErrors(node)
    alert('Your application was submitted successfully!')
  } catch (err) {
    node.setErrors(err.formErrors, err.fieldErrors)
  }
}
```

Notice that FormKit passes our our submit handler 2 helpful arguments: the form's data in a single request-ready object (which we're calling `formData`), and the form's underlying core `node`, which we can use to set any returned errors using the `node.setErrors()` helper.

[`setErrors()`](/essentials/forms#clearing-errors-using-nodeseterrors-or-formkitseterrors) takes 2 arguments: form-level errors (an array), and field-specific errors (an object). Our fake backend returns the `err` response which we use to set any errors.

So, what happens if the user is on step 3 (Application) when they submit, and there are field-level errors on a hidden step? Thankfully, so long as the nodes exist the DOM, FormKit is able place these errors appropriately. This is why we used a `v-show` for the steps instead of `v-if`. 

## Putting it all together

And Voilà! 🎉 We are finished! The final form has more content and next/prev buttons to make it feel more real. Here it is — a fully functioning multi-step form:

<example
  :file="[
    '/_content/examples/guides/multi-step-form/final-form/example.vue',
    '/_content/examples/guides/multi-step-form/styles.vue',
    '/_content/examples/guides/multi-step-form/final-form/utils.js',
    '/_content/examples/guides/multi-step-form/final-form/useSteps.js'
  ]"
  :editable="true">
</example>

## Ways to improve

Of course, there are always ways to improve anything, and this form is no exception. Here are a few ideas:

- Save form state to `window.localStorage` so a user's form state is maintained even if they accidentally leave.
- Pre-populate any known form values so the user doesn't have to fill out known data.
- Add a "not yet submitted" status indicator to warn the user that they still need to submit.

We've covered a lot of topics in this guide and hope you've learned more about FormKit and how to use it to make multi-step forms easier!

<cta label="Want more? Start by reading about FormKit core." button="Dig deeper" href="/advanced/core"></cta>
