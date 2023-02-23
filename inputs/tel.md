---
title: Tel (Telephone) Input
description: A native HTML tel input.
---

:InputPageHero{title="Telephone"}

:PageToc

The `tel` input uses HTML's [native tel input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel) and allows a user to enter a telephone number. Telephone numbers can also be entered with standard text inputs but some browsers (especially mobile ones) may improve the experience of entering telephone numbers by showing a different keypad.

## An example

::Example
---
name: "Tel input"
file: "/_content/examples/tel/tel.vue"
---
::


<callout type="tip" label="Phone number validation">
Phone number formats vary <em>greatly</em> around the world (some localities even include letters in their phone numbers!) — be cautious validating phone numbers unless you know your audience is exclusively from a given location.
</callout>

## Props & Attributes

The `tel` input has no unique props but can make use of the following universal
FormKit props.

::ReferenceTable
---
input: "tel" 
attrs: ['maxlength', 'minlength', 'placeholder']
---
::


## Sections

:SectionKeysIntro

<div>
  <formkit-input-diagram
    prefix-icon-content="📞"
    suffix-icon-content=""
    label-content="Phone number"
    input-content="444-555-6666"
    help-content="Enter your phone number using the xxx-xxx-xxxx format."
    message-content="Phone number must be of the xxx-xxx-xxxx format."
  >
  </formkit-input-diagram>
</div>

::ReferenceTable
---
type: "sectionKeys"
primary: "section-key"
---
::

