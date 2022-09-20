---
title: Rating Input
description: A Pro input that allows users to rate something or provide feedback along any desired scale.
---

<InputPageHero title="Rating"></InputPageHero>

<!-- Installation  -->

The `rating` input allows users to provide feedback based on a numeric scale.

<!-- Base Example -->

## Min/Max

By default, the `min` and `max` values are set to `0` and `5` respectively. The `min` prop denotes the minimum value you can select while the `max` prop denotes the number of icons rendered. You can set the `min` prop to any number above `0` and the `max` prop to any integer above the `min` value.

## Icons

By default, the `rating` input uses FormKit's own star icon. You can change these icons by setting the `rating-icon` prop. The `rating-icon` prop accepts a string that will use FormKit's [icon plugin](/plugins/icons).

<!-- Use different icon Example -->

## Colors

You can specify the on and off colors of the rating input by setting the `on-color` and `off-color` props. These props accept any valid CSS color value.

<!-- Show base example using different on and off colors. -->

## Slots

Instead of specifying a FormKit icon via. the `rating-icon` prop, you instead can pass an SVG using `default` slot. In addition, if you wanted to use something like an image tag instead, you can pass individual images by using the `off-item` and `on-item` slots (see the example below).

<!-- Example using slots. -->

## Steps

By default, the `rating` input will use a step of 1. You can change this by setting the `step` prop to any value between (0.1 and 1). This allows you to create a rating input that increments by half stars, or even by 1/3 stars.

<!-- Example using steps (stars by 0.5) -->

## Accessibility

- Native range
- Focus

## Props & Attributes

<reference-table input="rating" :data="[
{prop: 'min', type: 'Number', default: '0', description: 'The minimum number of icons that can be selected.'},
{prop: 'max', type: 'Number', default: '5', description: 'The maximum number of icons that are rendered.'},
{prop: 'step', type: 'Number', default: '1', description: 'The step or increment that should be applied to the `rating` icons. Accepted values are between `0.1` and `1`'},
{prop: 'hover-highlight', type: 'Boolean', default: 'true', description: 'Determines whether to show the onColor applied when the `rating` input is hovered over.'},
{prop: 'off-color', type: 'String', default: 'undefined', description: 'Sets the color to be applied on the given icons when they have not been selected.'},
{prop: 'on-color', type: 'String', default: 'undefined', description: 'Sets the color to be applied on the given icons when they have been selected.'}]">
</reference-table>

## Section keys

You can target a specific section of an input using that section's "key". Read more about sections [here](/essentials/inputs#sections).

<div>
  <formkit-input-diagram />
</div>

<reference-table type="sectionKeys" primary="section-key" :without="[]">
</reference-table>
