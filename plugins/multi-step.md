---
title: Multi-Step Input
description: Easily add multi-step sections to your FormKit forms.
---

# Multi-Step Input

<page-toc></page-toc>

FormKit ships with a first-party multi-step input plugin available from the `@formkit/addons` package. This input allows you to easily break your forms into multiple steps. Breaking forms into multiple steps can improve the user-experice of larger forms by keeping them feeling small and approachable compared to listing all inputs at once.

## Installation

To get started, import `createMultiStepPlugin` from `@formkit/addons` along with the accompanying styles. The styles are completely standalone and have no dependency on the `genesis` theme that ships with FormKit. This means that if you are using Tailwind to style your inputs, your input styles will still display as expected when wrapped in the `multi-step` input type.

<client-only>

```js
// formkit.config.js
import { defaultConfig } from '@formkit/vue'
import { createMultiStepPlugin } from '@formkit/addons'
import '@formkit/addons/css/multistep.css'

const config = defaultConfig({
  plugins: [createMultiStepPlugin()],
})

export default config
```

</client-only>

#### A quick demonstration of the `multi-step` input type in action:

<example
name="Multi-Step Introduction"
:file="[
  '/\_content/examples/multi-step/intro/intro.vue',
  '/\_content/examples/multi-step/stepOne.vue',
  '/\_content/examples/multi-step/stepTwo.vue',
  '/\_content/examples/multi-step/stepThree.vue',
  '/\_content/examples/multi-step/formkit.config.js'
]">
</example>

## Usage

The `createMultiStepPlugin` function registers two new input types for you to use with the `FormKit` component.

- `multi-step`: The wrapping group for the entire multi-step input. This input keeps track of which step is active, validation and errors per step, and should only contain `step` inputs as its immediate children
- `step`: The wrapping group for a given step within your multi-step input. Should only be an immediate child of a `multi-step` input. Its children will be rendered as the contents of the step.

Using these inputs together is as simple as wrapping any markup you want to have present within a step in a multi-step form.

<client-only>

```html
<FormKit type="multi-step">
  <FormKit type="step" name="stepOne">
    <!-- content for stepOne goes here! -->
  </FormKit>
</FormKit>
```

Out-of-the-box the parent `multi-step` input will track the validity of the inputs contained in each child `step` input and prevent advancing to the next `step` until the current step is valid. The count of total blocking validations and errors will be shown next to the current step name if a user attempts to advance to the next step or submit the form before satisfying the current step's input validations.

</client-only>

## Tab style

The `multi-step` input ships with two available tab styles.

- `tab`: The default tab experience. Each step name is show in a tab with an active state. Error count is shown in the top right of the tab.
- `progress`: A progress bar style where each step is a "node" on a timeline of total steps. With this display mode you can also use the `hide-progress-labels` prop to hide the step names.

<example
name="Multi-Step Introduction"
:file="[
  '/\_content/examples/multi-step/tab-style/tab-style.vue',
  '/\_content/examples/multi-step/tab-style/multi-step-content.vue',
  '/\_content/examples/multi-step/formkit.config.js'
]">
</example>

## Step labels

By default the `multi-step` input will use the `name` attribute of its child `step` inputs to generate labels for steps. If you'd like more control over the display of your step names you can use the `label` prop. You can also customize the labels that appear in the `stepActions` section of your `step` using the `prev-label` and `next-label` props.

- `label`: An override for the step name that should appear in the multi-step tabs.
- `prev-label`: an override for the `stepPrev` button label which defaults to `Back`.
- `next-label`: an override for the `stepNext` button label which defaults to `Next`.

<example
name="Step Labels"
:file="[
  '/\_content/examples/multi-step/step-labels/step-labels.vue',
  '/\_content/examples/multi-step/formkit.config.js'
]">
</example>

## Allow incomplete steps

By default the `multi-step` input will allow advancing to later steps even if the current step or a step between the current step and the target step has blocking validation messages. To prevent a user from jumping ahead set the `allow-incomplete` prop to `false`.

<example
name="Allow Incomplete"
:file="[
  '/\_content/examples/multi-step/allow-incomplete/allow-incomplete.vue',
  '/\_content/examples/multi-step/stepOne.vue',
  '/\_content/examples/multi-step/stepTwo.vue',
  '/\_content/examples/multi-step/stepThree.vue',
  '/\_content/examples/multi-step/formkit.config.js'
]">
</example>

## Valid step icon

When a step has been completed with no validation errors the `multi-step` input will — by default — render a check icon showing that the step is valid and no more action is required. The `valid-step-icon` is a [FormKit Icon](/plugins/icons) and can be changed via a prop like any other FormKit icon.

You can either:

- Change the `valid-step-icon` on the `multi-step` input to change the icon for all steps inside the input.
- Change the `valid-step-icon` on a `step` input to change or override the icon just for that step.

<example
name="Valid Step Icon"
:file="[
  '/\_content/examples/multi-step/valid-step-icon/valid-step-icon.vue',
  '/\_content/examples/multi-step/formkit.config.js'
]">
</example>

## Customizing step actions

Each `step` in a `multi-step` input has default buttons rendered for moving between steps. By default the first `step` in a `multi-step` will only have a `stepNext` action button rendered, and the last `step` will only have a `stepPrev` action button. This allows a multi-step to act as a self-contained group within the context of a larger form.

If you want to add a custom action such as a form submit to a `multi-step` — useful if you're using the `multi-step` as your whole form — you can do so by overriding the `stepNext` slot on the desired step. In this case we'll add a `submit` input to the last step in our `multi-step` input to submit the form.

<example
name="Customizing step actions"
:file="[
  '/\_content/examples/multi-step/step-actions/step-actions.vue',
  '/\_content/examples/multi-step/formkit.config.js'
]">
</example>

## The beforeStepChange event

Sometimes you need to _do_ something with your form data between steps. Maybe you want to submit each step independently to your back-end or you need to log analytics events to determine how far users are making it through your form. In cases such as these you can use the `beforeStepChange` event. `beforeStepChange` accepts a function and is provided a context object with the following keys:

- `currentStep`: The currently active step node context object that the user is navigating away from.
- `targetStep`: The step node context object that the user is navigating to.
- `delta`: The distance between steps. Positive integers represent stepping forward, negative integers represent stepping backward.

Your `beforeStepChange` function should return a `Boolean`. Returning `false` will _prevent_ the step change from ocurring.

`beforeStepChange` can be used on your `multi-step` input in which case it will apply to _all_ steps. Additionally you can use `beforeStepChange` on a specific `step` input to run your function only when navigating away from the step which has the function assigned. `beforeStepChange` applied to a `step` will override any `beforeStepChange` set on a parent `multi-step` if one exists.

<example
name="beforeStepChange"
:file="[
  '/\_content/examples/multi-step/before-step-change/before-step-change.vue',
  '/\_content/examples/multi-step/formkit.config.js'
]">
</example>

## Props & Attributes (multi-step)

<reference-table
  input="multi-step"
  :data="[
    {prop: 'allowIncomplete', type: 'boolean', default: 'true', description: 'When <code>true</code>, allows users to navigate between steps even if current step is invalid.'},
    {prop: 'tabStyle', type: 'string', default: 'tab', description: 'Used to set a data-attribute for creating tab styles. Default theme ships with support for <code>tab</code> and <code>progress</code> tab styles.'},
    {prop: 'hideProgressLabels', type: 'boolean', default: 'false', description: 'When true, hides labels for the <code>progress</code> tab style.'},
    {prop: 'validStepIcon', type: 'string', default: 'check', description: 'Specifies an icon to put in the <code>badge</code> section when a step is valid. When applied to the <code>multi-step</code> the icon will be applied to all child <code>step</code> inputs.'},
    {prop: 'beforeStepChange', type: 'function', default: 'undefined', description: 'A function to run before the active step is changed. The function is supplied with a context object containing <code>currentStep</code> and <code>targetStep</code> which are both FormKit <code>node</code> context objects. Additionally, <code>delta</code> is supplied as an integer which reflects the distance between <code>currentStep</code> and <code>targetStep</code>. When supplied to the <code>multi-step</code> this function will fire on every <code>step</code> change.'}
  ]"
  :without="[
    'help',
    'prefix-icon',
    'suffix-icon',
  ]">
</reference-table>

## Props & Attributes (step)

<reference-table 
  input="step" 
  :data="[
    {prop: 'label', type: 'string', default: '', description: 'Used to change the tab label of the step. If not custom label is supplied the step\'s <code>name</code> will be used.'},
    {prop: 'prevLabel', type: 'string', default: 'Previous', description: 'Used to change the label of the default <code>prevAction</code> button.'},
    {prop: 'nextLabel', type: 'string', default: 'Next', description: 'Used to change the label of the default <code>nextAction</code> button.'},
    {prop: 'prevAttrs', type: 'object', default: {}, description: 'Used to apply attributes to the default <code>prevAction</code> button input.'},
    {prop: 'nextAttrs', type: 'object', default: {}, description: 'Used to apply attributes to the default <code>nextAction</code> button input.'},
    {prop: 'validStepIcon', type: 'string', default: 'check', description: 'Specifies an icon to put in the <code>badge</code> section when the step is valid. When applied to a <code>step</code> the icon will be applied only to the target <code>step</code>.'},
    {prop: 'beforeStepChange', type: 'function', default: 'undefined', description: 'A function to run before the active step is changed. The function is supplied with a context object containing <code>currentStep</code> and <code>targetStep</code> which are both FormKit <code>node</code> context objects. Additionally, <code>delta</code> is supplied as an integer which reflects the distance between <code>currentStep</code> and <code>targetStep</code>. When supplied to a <code>step</code> this function will fire only when navigating away from the specified <code>step</code>.'}
  ]"
  :without="[
    'help',
    'prefix-icon',
    'suffix-icon',
  ]">
</reference-table>

## Sections

<div>
  <formkit-input-diagram
    class="input-diagram--multi-step multi-step"
    :schema="[
        {
          name: 'outer',
          position: 'right',
          children: [
            {
              name: 'wrapper',
              position: 'right',
              children: [
                {
                  name: 'tabs',
                  children: [
                    {
                      name: 'tab',
                      class: 'flex',
                      children: [
                        {
                          name: 'tabLabel',
                          content: 'Step Name'
                        },
                        {
                          name: 'badge',
                          position: 'right',
                          content: '⚠️',
                          class: 'grow-0'
                        }
                      ]
                    },
                  ]
                },
                {
                  name: 'steps',
                  children: [
                    {
                      name: 'step',
                      children: [
                        {
                          name: 'stepInner',
                          position: 'right',
                          class: 'text-center',
                          content: '... Step content ...'
                        },
                        {
                          name: 'stepActions',
                          class: 'flex',
                          children: [
                            {
                              name: 'stepPrev',
                              content: 'Back'
                            },
                            {
                              name: 'stepNext',
                              position: 'right',
                              content: 'Next'
                            }
                          ]
                        }
                      ]
                    },
                  ]
                },
              ]
            }
          ]
        }
      ]"
  >
  </formkit-input-diagram>
</div>

<reference-table type="sectionKeys" primary="section-key" :data="[
  {
    'section-key': 'tabs',
    description: 'A wrapper around all of the tabs.'
  },
  {
    'section-key': 'tab',
    description: 'A button element that contains the tab name and the decorator to reflect validation state.'
  },
  {
    'section-key': 'tabLabel',
    description: 'A span element that contains the name of the tab.'
  },
  {
    'section-key': 'badge',
    description: 'A span element used as a decorator for showing current tab validity state.'
  },
  {
    'section-key': 'steps',
    description: 'A wrapper around all steps.'
  },
  {
    'section-key': 'step',
    description: 'A wrapper around step content from the default slot and the step\'s action buttons. Each step has visibility styling automatically applied depending on if it is the current active step.'
  },
  {
    'section-key': 'stepInner',
    description: 'A wrapper around the default slot content for a step.'
  },
  {
    'section-key': 'stepActions',
    description: 'A wrapper around the action buttons for moving between steps.'
  },
  {
    'section-key': 'stepPrev',
    description: 'A wrapper around the action button for navigating to the previous step.'
  },
  {
    'section-key': 'stepNext',
    description: 'A wrapper around the action button for navigating to the next step.'
  }
]" :without="[
  'label',
  'prefix',
  'prefixIcon',
  'inner',
  'suffix',
  'suffixIcon',
  'input',
  'help',
  'messages',
  'message'
]">
</reference-table>