---
title: Dropdown Input
description: A Pro input that allows users to select from customizable options list.
---

<InputPageHero title="Dropdown"></InputPageHero>

<!-- Installation  -->

The `dropdown` input is used to display a list of options to the end-user.

<example
name="Dropdown"
file="/_content/examples/dropdown/dropdown-base.vue"></example>

## Slots

### Option slot

The `dropdown` input allows you to customize the look and feel of each option by using the `option` slot. In the example below, we are using the `option` slot to display each option's asset (the logo) and name.

<example
name="Dropdown"
file="/_content/examples/dropdown/dropdown-option-slot.vue"></example>

### Selection slot

If you only want to customize the display of the selected option, use the `selection` slot.

<example
name="Dropdown"
file="/_content/examples/dropdown/dropdown-selection-slot.vue"></example>


## Loading options

Instead of passing a static list of options to the `options` prop, you can assign it to a function that returns a promise. This is useful when you need to load options from an API or another source.

<!-- Example of loading options via API without pagination. -->

### Single request
Let's say we had an API endpoint that returned all the options we needed for a given `dropdown` input. Below is an example of how we could write the `dropdown` input to load options from a single request.

<example
name="Dropdown"
file="/_content/examples/dropdown/dropdown-single-request.vue"></example>


### Multiple pages

What if you need to load options from an API, but need to make

<!-- Example of loading options via API with pagination. -->

### Loading Style

If you would rather allow the user to load more options without having to click the `Load more` button, you can set the `load-on-scroll` prop to true, and the options will paginate as the end-user scrolls to the bottom of the list.

### Loading a selected option

In addition to loading options from a remote source, you can also load a selected option. This is useful when the option values are that of IDs, and you would like to fetch more information about the given option on selection.

<!-- Example of loading option via API. -->

## Overscroll

When using the dropdown with static options, FormKit's dropdown also comes with a unique feature called `overscroll`. By setting `overscroll` equal to true, the list behaves more like....

## Accessibility

The `dropdown` input utilizes

## Props & Attributes

<reference-table input="dropdown" :data="[
{prop: 'options', type: 'any', default: '[]', description: 'The list of options the user can select from.'},
{prop: 'load-on-scroll', type: 'boolean', default: 'false', description: 'When set to `true`, the dropdown will try loading more options based on the end-user`s scroll position'}]">
</reference-table>

## Section keys

You can target a specific section of an input using that section's "key". Read more about sections [here](/essentials/inputs#sections).

<div>
  <formkit-input-diagram />
</div>

<reference-table type="sectionKeys" primary="section-key" :without="[]">
</reference-table>
