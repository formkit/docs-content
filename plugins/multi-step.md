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

By default the `multi-step` input will prevent advancing to a step if the current step or a step between the current step and the target step has blocking validation messages (even if they are not being displayed). To allow a user to jump ahead use the `allow-incomplete` prop.

<example
name="Allow Incomplete"
:file="[
  '/\_content/examples/multi-step/allow-incomplete/allow-incomplete.vue',
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

## Props & Attributes

#### Props and Attributes table here

## Sections

#### Sections diagram and table here
