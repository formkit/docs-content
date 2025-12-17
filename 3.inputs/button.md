---
title: Button Input
description: A native HTML button element.
navigation:
  title: 'Button'
---

:InputPageHero

The `button` input uses HTML's [native button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button). The `label` prop is used to populate the text of the button — or alternatively you can use the default slot.

## Basic example

The easiest way to set the `label` of a button is with the `label` prop:

::Example
---
name: "Button input"
file: "_examples/button/button-base.vue"
---
::

## Default slot

The default slot can also be used to add text and UI to the button:

::Example
---
name: "Button input"
file: "_examples/button/button-default-slot.vue"
---
::

## Event listeners

You can also bind event listeners:

::Example
---
name: "Button input"
file: "_examples/button/button-events.vue"
---
::

## Ignored input

<ignored-input-docs></ignored-input-docs>

```vue
<FormKit type="button" :ignore="false">
  Add a section
</FormKit>
```

## Props & Attributes

The `button` input is unique in that it does not actively receive input other than a transient click. However, nearly all of the base input props still technically exist on the input.

::ReferenceTable
---
input: "button"
---
::

## Sections

:SectionKeysIntro

:FormKitInputDiagrams

::ReferenceTable
---
type: "sectionKeys"
primary: "section-key"
without: ["inner"]
---
::

## Accessibility

All FormKit inputs are designed with the following accessibility considerations in mind. Help us continually improve accessibility for all by filing accessibility issues [here](https://github.com/formkit/formkit/issues/new?assignees=&labels=%F0%9F%90%9B+bug-report%2C%E2%9B%91+Needs+triage&projects=&template=bug-report.yml): 

:AccessibilityChecks

### Accessibility attributes

::AccessibilityTable
---
without: ["label", "input"]
---
::

### Keyboard Interactions

::KeyboardEventsTable
---
data: [
  {
    event: ["enter"],
    description: "Invokes the button when focused.",
  },
]
---
::
