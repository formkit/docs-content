---
title: Button Input
description: A native HTML button element.
---

<InputPageHero title="Button"></InputPageHero>

<page-toc></page-toc>

The `button` input uses HTML's [native button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button). The `label` prop is used to populate the text of the button — or alternatively you can use the default slot.

## Basic example

The easiest way to set the `label` of a button is with the `label` prop:

<example
name="Button input"
file="/_content/examples/button/button-base.vue"></example>

## Default slot

The default slot can also be used to add text and UI to the button:

<example
name="Button input"
file="/_content/examples/button/button-default-slot.vue"></example>

## Event listeners

You can also bind event listeners:

<example
name="Button input"
file="/_content/examples/button/button-events.vue"></example>

## Ignored input

<ignored-input-docs></ignored-input-docs>

<client-only>

```html
<FormKit type="button" :ignore="false">
  Add a section
</FormKit>
```

</client-only>

## Schema

Simple button schema example:

<example
name="Schema"
:min-height="550"
file="_content/examples/button/button-schema.vue"></example>

## Props & Attributes

The `button` input is unique in that it does not actively receive input other than a transient click. However, nearly all of the base input props still technically exist on the input.

<reference-table input="button">
</reference-table>

## Sections

<section-keys-intro></section-keys-intro>

<div>
  <formkit-input-diagram
    class="input-diagram--button"
    :schema="[
      {
        name: 'outer',
        children: [
          {
            name: 'messages',
            position: 'right',
            children: [
              {
                name: 'message',
                content: 'Validation messages about the button.',
                position: 'right'
              }
            ]
          },
          {
            name: 'wrapper',
            position: 'right',
            children: [
              {
                name: 'input',
                position: 'left',
                class: 'flex button button--pro',
                children: [
                  {
                    name: 'prefixIcon',
                    content: '🤟'
                  },
                  {
                    name: 'prefix',
                  },
                  {
                    name: 'label',
                    content: 'Submit application',
                  },
                  {
                    name: 'suffix',
                    position: 'right',
                  },
                  {
                    name: 'suffixIcon',
                    position: 'right',
                    content: '🚀'
                  },
                ]
              },
            ]
          },
          {
            name: 'help',
            position: 'right',
            content: 'Click this button to submit your application. '
          }
        ]
      }
    ]"
  >
  </formkit-input-diagram>
</div>

<reference-table type="sectionKeys" primary="section-key" :without="['inner']">
</reference-table>
