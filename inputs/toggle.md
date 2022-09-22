---
title: Toggle Input
description: The `toggle` input is used to choose one of two values; it is a good choice when you want the user to make a binary choice such as turning a feature on or off.
---

<InputPageHero title="Toggle"></InputPageHero>

<!-- Installation  -->

The `toggle` input is used to choose one of two values; it is a good choice when you want the user to make a binary choice such as turning a feature on or off.

<!-- Base Example -->

<example
name="Toggle"
file="/_content/examples/toggle/toggle-base.vue"></example>

## Values

The `toggle's` checked and unchecked states will default to `true` and `false` respectively. You can change these values by passing `onValue` and `offValue` props. In this example, we will set the `onValue` to the string `'active'` and the `offValue` to the string `'inactive'`.

<example
name="Toggle"
file="/_content/examples/toggle/toggle-values.vue"></example>

## Labels

The toggle supports two label types, the Primary label and the Value label.

### Primary label

The toggle input supports a default/primary label that is used like the `label` prop on any other FormKit input. The primary label is displayed to the right of the toggle unless `Value labels` are used, in which case it is displayed above the toggle.

### Value labels

Additionally, you may specify a secondary label by setting the `on-value-label` and the `off-value-label` props. These value labels will be displayed depending on whether the toggle is checked or not and will be positioned to the right of the toggle input.

<example
name="Toggle"
file="/_content/examples/toggle/toggle-labels.vue"></example>

### Inner value labels

Additionally, you can set the `value-label-display` prop to `inner` to render the value labels inside the toggle. The `Primary label` will return to being displayed to the right of the toggle.

<example
name="Toggle"
file="/_content/examples/toggle/toggle-labels-inner.vue"></example>

## Icons

Using the `thumb-icon` prop, you can insert an icon into the `thumb` section of the `toggle` input. The `thumb-icon` prop accepts a string that will be passed to FormKit's [icon plugin](/plugins/icons).

<example
name="Toggle"
file="/_content/examples/toggle/toggle-icon.vue"></example>

## Colors

The `toggle` input supports color props for its various sections for easy styling. Each prop contains and `on` and `off` state that will be applied depending on whether the toggle is checked or not. Below is an example using some of the color props. See the [Props & Attributes] section below for a full list of these props.

<example
name="Toggle"
file="/_content/examples/toggle/toggle-icon-colors.vue"></example>

## Accessibility

The `toggle` input is built atop HTML's [native checkbox input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox).

## Props & Attributes

<reference-table :without="['prefix-icon', 'suffix-icon']" input="rating" :data="[
{prop: 'off-value', type: 'any', default: 'false', description: 'The value when the toggle is unchecked.'},
{prop: 'on-value', type: 'any', default: 'true', description: 'The value when the toggle is checked.'},
{prop: 'off-value-label', type: 'String', default: 'undefined', description: 'The text of the Value label when the toggle is unchecked.'},
{prop: 'on-value-label', type: 'String', default: 'undefined', description: 'The text of the Value label when the toggle is checked.'},
{prop: 'value-label-display', type: 'String', default: 'undefined', description: 'The `on` and `off` value labels will always default to being displayed outside and to the right of the toggle. Other accepted values include `inner` to set the value labels inside of the toggle, and `hidden` which hides the value labels.'},
{prop: 'value-label-color-off', type: 'String', default: 'undefined', description: 'Used to set the color of the value label when the toggle is unchecked.'},
{prop: 'value-label-color-on', type: 'String', default: 'undefined', description: 'Used to set the color of the value label when the toggle is checked.'},
{prop: 'thumb-icon', type: 'String', default: 'undefined', description: 'This prop is used to set the icon that will be placed inside the thumb section.'},
{prop: 'thumb-color-off', type: 'String', default: 'undefined', description: 'Sets the background color of the thumb section when the toggle is unchecked.'},
{prop: 'thumb-color-on', type: 'String', default: 'undefined', description: 'Sets the background color of the thumb section when the toggle is checked.'},
{prop: 'icon-color-off', type: 'String', default: 'undefined', description: 'The color the icon should be set to when `toggle-icon` prop is set and the toggle is unchecked.'},
{prop: 'icon-color-on', type: 'String', default: 'undefined', description: 'The color the icon should be set to when `toggle-icon` prop is set and the toggle is checked.'},
{prop: 'track-color-off', type: 'String', default: 'undefined', description: 'Sets the background color of the `track` section when the toggle is unchecked.'},
{prop: 'track-color-on', type: 'String', default: 'undefined', description: 'Sets the background color of the `track` section when toggle is checked.'}]">
</reference-table>

## Section keys

You can target a specific section of an input using that section's "key". Read more about sections [here](/essentials/inputs#sections).

<div>
  <formkit-input-diagram />
</div>

<reference-table type="sectionKeys" primary="section-key" :without="[]">
</reference-table>
