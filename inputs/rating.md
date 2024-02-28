---
title: Rating Input
description: A Pro input that allows users to provide feedback based on a numeric scale represented by icons/images.
---

::InputPageHero
---
type: "Rating"
---
::

:PageToc

:ProInstallSnippet

## Basic example

The `rating` input allows users to provide feedback based on a numeric scale represented by icons/images:

::Example
---
name: "Rating"
file: "_content/_examples/rating/rating-base.vue"
---
::


## Min/max

The `min` and `max` props define the minimum and maximum values an end-user can select. The `max` determines the number of icons rendered:

::Example
---
name: "Rating"
file: "_content/_examples/rating/rating-min-max.vue"
---
::


## Step

By default, the `rating` input will increment by 1. The `step` prop will allow you to set the step size between each value. For example, if you set `step="0.5"`, the end-user can select any value that is a multiple of `0.5`. Steps must be a value between `0.01` and `1`:

::Example
---
name: "Rating"
file: "_content/_examples/rating/rating-step.vue"
---
::


## Icons

By default, the `rating` input uses FormKit's own star icon. You can change which icon is being used by setting the `rating-icon` prop. This prop accepts a string that will use FormKit's [icon plugin](/essentials/icons):

::Example
---
name: "Rating"
file: "_content/_examples/rating/rating-icon.vue"
---
::


### Slots for icons

#### Default slot

Instead of specifying an icon via the FormKit icon plugin, you can pass a raw SVG using the `default` slot:

::Example
---
name: "Rating"
file: "_content/_examples/rating/rating-default-slot.vue"
---
::


#### Named slots

Lastly, you can use the `offItem` and `onItem` slots to pass whatever assets you want.In this example, we'll use different images for the `off` and `on` states:

::Example
---
name: "Rating"
file: "_content/_examples/rating/rating-named-slots.vue"
---
::


## Colors

In addition to supplying an icon, you can also specify the color via props. Setting the `off-color` prop will change the color of the icons when they are not selected. The `on-color` prop will change the color of the icons when they are selected:

::Example
---
name: "Rating"
file: "_content/_examples/rating/rating-colors.vue"
---
::

## Props & Attributes

::ReferenceTable
---
input: "rating" 
data: [
  {
    prop: "min",
    type: "Number",
    default: "0",
    description: "The minimum number of icons that can be selected.",
  },
  {
    prop: "max",
    type: "Number",
    default: "5",
    description: "The maximum number of icons that are rendered.",
  },
  {
    prop: "step",
    type: "Number",
    default: "1",
    description:
      "The step or increment that should be applied to the `rating` icons. Accepted values are between `0.01` and `1`",
  },
  {
    prop: "hover-highlight",
    type: "Boolean",
    default: "true",
    description:
      "Determines whether to show the selected state of the icon/image when hovered over.",
  },
  {
    prop: "off-color",
    type: "String",
    default: "undefined",
    description:
      "Sets the color to be applied on the given icons when they have not been selected.",
  },
  {
    prop: "on-color",
    type: "String",
    default: "undefined",
    description:
      "Sets the color to be applied on the given icons when they have been selected.",
  },
]
---
::


## Sections

:SectionKeysIntro

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--rating"
schema: [
  {
    name: "outer",
    position: "right",
    children: [
      {
        name: "wrapper",
        position: "right",
        children: [
          {
            name: "label",
            content: "Rate your experience at our theater",
            position: "right",
            class: "center-vert"
          },
          {
            name: "inner",
            children: [
              {
                name: "prefixIcon",
                class: "tiny-section"
              },
              {
                name: "prefix",
                class: "tiny-section"
              },
              {
                name: "itemsWrapper",
                children: [
                  {
                    name: "onItems",
                    children: [
                      {
                        name: "onItemWrapper",
                        content: "⭐️",
                        class: "border-solid"
                      }
                    ]
                  },
                  {
                    name: "offItems",
                    children: [
                      {
                        name: "offItemWrapper",
                        content: "✩",
                        class: "border-solid"
                      }
                    ]
                  }
                ]
              },
              {
                name: "input"
              },
              {
                name: "suffix",
                position: "right",
                class: "tiny-section"
              },
              {
                name: "suffixIcon",
                position: "right",
                class: "tiny-section"
              },
            ]
          },
        ]
      },
      {
        name: "help",
        content: "We will send you a gift card if you give us 5 stars.",
        position: "right"
      },
      {
        name: "messages",
        position: "right",
        children: [
          {
            name: "message",
            content: "You must provide a rating.",
            position: "right"
          }
        ]
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
data: [
  {
    "section-key": "itemsWrapper",
    description: "A wrapper for all of the rating items (both on and off)."
  },
  {
    "section-key": "offItems",
    description: "A container around all of the off items."
  },
  {
    "section-key": "offItemWrapper",
    description: "Immediate parent around each off item."
  },
  {
    "section-key": "onItems",
    description: "A container around all of the on items."
  },
  {
    "section-key": "onItemWrapper",
    description: "Immediate parent around each on item."
  },
]
---
::

## Accessibility

All FormKit inputs are designed with the following accessibility considerations in mind. Help us continually improve accessibility for all by filing accessibility issues [here](https://github.com/formkit/formkit/issues/new?assignees=&labels=%F0%9F%90%9B+bug-report%2C%E2%9B%91+Needs+triage&projects=&template=bug-report.yml): 

:AccessibilityChecks

::AccessibilityTable
---
without: ["input"]
---
::

### Keyboard Interactions

:KeyboardEventsTable
