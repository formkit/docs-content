---
title: Button Input
description: A native HTML button element.
---

::InputPageHero
---
type: "Button"
---
::

:PageToc

The `button` input uses HTML's [native button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button). The `label` prop is used to populate the text of the button — or alternatively you can use the default slot.

## Basic example

The easiest way to set the `label` of a button is with the `label` prop:

::Example
---
name: "Button input"
file: "_content/_examples/button/button-base.vue"
---
::

## Default slot

The default slot can also be used to add text and UI to the button:

::Example
---
name: "Button input"
file: "_content/_examples/button/button-default-slot.vue"
---
::

## Event listeners

You can also bind event listeners:

::Example
---
name: "Button input"
file: "_content/_examples/button/button-events.vue"
---
::

## Ignored input

:IgnoredInputDocs


```html
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

::FormKitInputDiagram
---
class: "input-diagram--button"
schema: [
  {
    name: "outer",
    children: [
      {
        name: "messages",
        position: "right",
        children: [
          {
            name: "message",
            content: "Validation messages about the button.",
            position: "right"
          }
        ]
      },
      {
        name: "wrapper",
        position: "right",
        children: [
          {
            name: "input",
            position: "left",
            class: "flex button button--pro",
            children: [
              {
                name: "prefixIcon",
                content: "🤟"
              },
              {
                name: "prefix",
              },
              {
                name: "label",
                content: "Submit application",
              },
              {
                name: "suffix",
                position: "right",
              },
              {
                name: "suffixIcon",
                position: "right",
                content: "🚀"
              },
            ]
          },
        ]
      },
      {
        name: "help",
        position: "right",
        content: "Click this button to submit your application. "
      }
    ]
  }
]
---
::

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

::AccessibilityTable
---
without: ["label", "input"]
---
::

### Keyboard Interactions

:KeyboardEventsTable
