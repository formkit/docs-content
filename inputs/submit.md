---
title: Submit Input
description: A native HTML button element used in place of a native HTML submit input.
---

::InputPageHero
---
type: "Submit"
---
::

:PageToc

The `submit` input uses HTML's [native button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button). The `label` prop is used to populate the text of the button — or alternatively you can use the default slot.

::Callout
---
type: "info"
label: "Button Element"
---
Type <code>submit</code> input uses a <code>button</code> element instead of an <code>input=type"submit"</code> because an <code>input</code> is a <a href="https://developer.mozilla.org/en-US/docs/Glossary/Void_element" title="Void element">void element</a>. As a container element, a <code>button</code> can include content and pseudo elements — making them the more flexible option for developers.
::

## Basic Example

The easiest way to set the `label` of a `submit` button is with the `label` prop:

::Example
---
name: "Submit input"
file: "_content/_examples/submit/submit-base.vue"
---
::


## Default slot

The default slot can also be used to add text and UI to the button:

::Example
---
name: "Submit input"
file: "_content/_examples/submit/submit-default-slot.vue"
---
::


## Event listeners

You can also bind event listeners:

::Example
---
name: "Submit input"
file: "_content/_examples/submit/submit-events.vue"
---
::


## Provided submit button

Note that FormKit forms automatically [output a submit button](/inputs/form#provided-submit-button). You can opt out of the built-in submit button and use your own, but will need to re-implement features such as the loading spinner (provided by the Genesis theme) or automatic disabling of the button while the form is submitting.

### Disable your submit while the form is disabled

If you use your own submit button, you can dynamically disable it according to the form's disabled status (`context.disabled`), which you can pull from the `#default` slot prop:

```html
<FormKit
  type="form"
  :actions="false"
  #default="{ disabled }"
  @submit="yourSubmitHandler"
>
  <FormKit type="submit" :disabled="disabled" />
</FormKit>
```

You can also disable your own submit button [via schema](https://formkit.link/6e6d3e9b251a3662af15bd0c1c55e4be).

## Ignored input

<ignored-input-docs></ignored-input-docs>

```html
<FormKit type="button" :ignore="false"> Add a section </FormKit>
```

## Props & Attributes

The `submit` input (along with [`button`](/inputs/button)) is unique in that it does not actively receive input other than a transient click. However, nearly all of the base input props still technically exist on the input.

::ReferenceTable
---
input: button
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
            content: "You were too slow. Try again.",
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
                content: "🧑‍🦰"
              },
              {
                name: "prefix",
              },
              {
                name: "label",
                content: "Create profile",
              },
              {
                name: "suffix",
                position: "right",
              },
              {
                name: "suffixIcon",
                position: "right",
                content: "🚀"
              }
            ]
          },
        ]
      },
      {
        name: "help",
        content: "Quick double tap to submit."
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

