---
title: Rating Input
description: A Pro input that allows users to provide feedback based on a numeric scale represented by icons/images.
---

<InputPageHero title="Rating"></InputPageHero>

<ProInstallSnippet></ProInstallSnippet>

## Basic example

The `rating` input allows users to provide feedback based on a numeric scale represented by icons/images:

<example
name="Rating"
file="/_content/examples/rating/rating-base.vue"></example>

## Min/max

The `min` and `max` props define the minimum and maximum values an end-user can select. The `max` determines the number of icons rendered:

<example
name="Rating"
file="/_content/examples/rating/rating-min-max.vue"></example>

## Step

By default, the `rating` input will increment by 1. The `step` prop will allow you to set the step size between each value. For example, if you set `step="0.5"`, the end-user can select any value that is a multiple of `0.5`. Steps must be a value between `0.01` and `1`:

<example
name="Rating"
file="/_content/examples/rating/rating-step.vue"></example>


## Icons

By default, the `rating` input uses FormKit's own star icon. You can change which icon is being used by setting the `rating-icon` prop. This prop accepts a string that will use FormKit's [icon plugin](/plugins/icons):

<example
name="Rating"
file="/_content/examples/rating/rating-icon.vue"></example>

### Slots for icons

#### Default slot

Instead of specifying an icon via the FormKit icon plugin, you can pass a raw SVG using the `default` slot:

<example
name="Rating"
file="/_content/examples/rating/rating-default-slot.vue"></example>

#### Named slots

Lastly, you can use the `offItem` and `onItem` slots to pass whatever assets you want.In this example, we'll use different images for the `off` and `on` states:

<example
name="Rating"
file="/_content/examples/rating/rating-named-slots.vue"></example>

## Colors

In addition to supplying an icon, you can also specify the color via props. Setting the `off-color` prop will change the color of the icons when they are not selected. The `on-color` prop will change the color of the icons when they are selected:

<example
name="Rating"
file="/_content/examples/rating/rating-colors.vue"></example>

## Props & Attributes

<reference-table input="rating" :data="[
{prop: 'min', type: 'Number', default: '0', description: 'The minimum number of icons that can be selected.'},
{prop: 'max', type: 'Number', default: '5', description: 'The maximum number of icons that are rendered.'},
{prop: 'step', type: 'Number', default: '1', description: 'The step or increment that should be applied to the `rating` icons. Accepted values are between `0.01` and `1`'},
{prop: 'hover-highlight', type: 'Boolean', default: 'true', description: 'Determines whether to show the selected state of the icon/image when hovered over.'},
{prop: 'off-color', type: 'String', default: 'undefined', description: 'Sets the color to be applied on the given icons when they have not been selected.'},
{prop: 'on-color', type: 'String', default: 'undefined', description: 'Sets the color to be applied on the given icons when they have been selected.'}]">
</reference-table>

## Sections

<section-keys-intro></section-keys-intro>

<div>
  <formkit-input-diagram
    class="input-diagram--rating"
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
                  name: 'label',
                  content: 'Rate your experience at our theater',
                  position: 'right',
                  class: 'center-vert'
                },
                {
                  name: 'inner',
                  children: [
                    {
                      name: 'prefixIcon',
                      content: ''
                    },
                    {
                      name: 'prefix',
                    },
                    {
                      name: 'itemsWrapper',
                      children: [
                        {
                          name: 'onItems',
                          children: [
                            {
                              name: 'onItemWrapper',
                              content: '⭐️',
                              class: 'border-solid'
                            }
                          ]
                        },
                        {
                          name: 'offItems',
                          children: [
                            {
                              name: 'offItemWrapper',
                              content: '✩',
                              class: 'border-solid'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: 'input'
                    },
                    {
                      name: 'suffix',
                      position: 'right',
                    },
                    {
                      name: 'suffixIcon',
                      position: 'right',
                    },
                  ]
                },
              ]
            },
            {
              name: 'help',
              content: 'We will send you a gift card if you give us 5 stars.',
              position: 'right'
            },
            {
              name: 'messages',
              position: 'right',
              children: [
                {
                  name: 'message',
                  content: 'You must provide a rating.',
                  position: 'right'
                }
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
    'section-key': 'itemsWrapper',
    description: 'A wrapper for all of the rating items (both on and off).'
  },
  {
    'section-key': 'offItems',
    description: 'A container around all of the off items.'
  },
  {
    'section-key': 'offItemWrapper',
    description: 'Immediate parent around each off item.'
  },
  {
    'section-key': 'onItems',
    description: 'A container around all of the on items.'
  },
  {
    'section-key': 'onItemWrapper',
    description: 'Immediate parent around each on item.'
  },
  ]">
</reference-table>

