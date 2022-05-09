---
title: Submit
description: A native HTML button element used in place of a native HTML submit input.
---

<InputPageHero
title="Submit input"
icon="IconInputSubmit"
:pro="false"
project-price=""
data-price=""></InputPageHero>

The `submit` input uses HTML's [native button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button). The `label` prop is used to populate the text of the button — or alternatively you can use the default slot.

<callout type="info" label="Button Element">
Type <code>submit</code> input uses a <code>button</code> element instead of an <code>input=type"submit"</code> because as a container element, a <code>button</code> can include content and pseudo elements — making them the more flexible option for developers.
</callout>

<example
name="Submit input"
file="/_content/examples/submit/submit.vue"></example>

## Props & Attributes

The `submit` input (along with [`button`](/inputs/button)) is unique in that it does not actively receive input other than a transient click. However, nearly all of the base input props still technically exist on the input.

Importantly the `ignore` prop is automatically set to `true` — meaning even if a submit is given a value, it will not communicate it with the parent form. However, this default behavior can be changed by setting the prop `:ignore="false"`.

<reference-table input="button">
</reference-table>

## Section keys
You can target a specific section of an input using that section's "key". Read more about sections [here](/essentials/inputs#sections).

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
                content: 'You were too slow. Try again.',
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
                    name: 'prefix',
                    content: '🧑‍🦰'
                  },
                  {
                    name: 'label',
                    content: 'Create profile',
                  },
                  {
                    name: 'suffix',
                    position: 'right',
                    content: '🚀'
                  }
                ]
              },
            ]
          },
          {
            name: 'help',
            content: 'Quick double tap to submit.'
          }
        ]
      }
    ]"
  >
  </formkit-input-diagram>
</div>

<reference-table type="sectionKeys" primary="section-key" :without="['inner']">
</reference-table>
