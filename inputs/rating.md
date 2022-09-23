---
title: Rating Input
description: A Pro input that allows users to provide feedback based on a numeric scale represented by icons/images.
---

<InputPageHero title="Rating"></InputPageHero>

<!-- Installation  -->

The `rating` input allows users to provide feedback based on a numeric scale represented by icons/images.

<example
name="Rating"
file="/_content/examples/rating/rating-base.vue"></example>

## Min/max

The `min` prop denotes the minimum value you can select while the `max` prop denotes the maximum value the end-user can select (and subsequently the number of icons rendered).

<example
name="Rating"
file="/_content/examples/rating/rating-min-max.vue"></example>

## Step

By default the `rating` input will increment by one. The `step` prop allows you to set the step size between each value. For example, if you set `step="0.5"` then the end-user can select any values that are a multiple of `0.5`. Steps must be a value between `0.01` and `1`.

<example
name="Rating"
file="/_content/examples/rating/rating-step.vue"></example>


## Icons

By default, the `rating` input uses FormKit's own star icon. You can change which icon is being used by setting the `rating-icon` prop. This prop accepts a string that will use FormKit's [icon plugin](/plugins/icons).

<example
name="Rating"
file="/_content/examples/rating/rating-icon.vue"></example>

## Colors

In addition to supplying your own icon, you can also specify the color via. props. Setting the `off-color` prop will change the color of the icons when they are not selected. The `on-color` prop will change the color of the icons when they are selected.

<example
name="Rating"
file="/_content/examples/rating/rating-colors.vue"></example>

## Slots for icons

### Default slot

Instead of specifying an icon via. the FormKit icon plugin, you can just pass a raw SVG using the `default` slot.

<example
name="Rating"
file="/_content/examples/rating/rating-default-slot.vue"></example>

### Named slots

Lastly, you can use the `offItem` and `onItem` slots to pass whatever assets you want. In this example, we are going to use different images for the `off` and `on` states.

<example
name="Rating"
file="/_content/examples/rating/rating-named-slots.vue"></example>

## Accessibility

 The `rating` input is built utilizing HTML's [native range input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range).

## Props & Attributes

<reference-table input="rating" :data="[
{prop: 'min', type: 'Number', default: '0', description: 'The minimum number of icons that can be selected.'},
{prop: 'max', type: 'Number', default: '5', description: 'The maximum number of icons that are rendered.'},
{prop: 'step', type: 'Number', default: '1', description: 'The step or increment that should be applied to the `rating` icons. Accepted values are between `0.01` and `1`'},
{prop: 'hover-highlight', type: 'Boolean', default: 'true', description: 'Determines whether to show the selected state of the icon/image when hovered over.'},
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
