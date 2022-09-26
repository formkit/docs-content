---
title: Autocomplete Input
description: A Pro input that allows users to search and select from a customizable options list. Supports single and multi-value selections.
---

<InputPageHero title="Autocomplete"></InputPageHero>

<ProInstallSnippet></ProInstallSnippet>

The `autocomplete` is used to search through a list of potential options. In this first example, let's set the `options` prop to a list of countries.

<example
name="Dropdown"
:min-height="550"
file="/_content/examples/autocomplete-pro/autocomplete-base.vue"></example>

<callout type="tip" label="Options">
The <code>options</code> prop can accept three different formats of values:

- Array of objects with `value` and `label` keys <code>[{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }, { value: 'c', label: 'C' }]</code>
- Array of strings <code>['A', 'B', 'C']</code>
- Object literal <code>{ a: 'A', b: 'B', c: 'C' }</code>
</callout>

## Selection appearance

The `autocomplete` has a `selectionAppearance` prop that renders a selected option based on its value. By default, the appearance of the `selectionAppearance` is set to `text-input`, which simply sets the input text to the label of the selected option. This selection appearance can be seen in the example above.

The `selectionAppearance` can also be set to `option`, which wraps the selected option label in a div. This is useful when you want to implement custom styling, or say, show a selected option's image as part of the selected option.

<!-- Base Example (using option appearance to show selected option avatar or something.) -->

## Multi-select

The `autocomplete` also supports multi-select and is available for either the `text-input` or `option` selection appearance. To enable multi-select, simply set the `multiple` prop on the `Autocomplete` input.

For the `text-input` selection appearance, the selected options are displayed as a comma-separated list. For the `option` selection appearance, the selected options are displayed as a list of divs that render underneath the text input.

### Single page

Here we can see we are loading options using the search term.

### Multiple pages

What if you need to load options from an API, but need to be able to not only search, but also paginate the list of options? Here is an example of how to do that..

<!-- Example of loading options via API with pagination. -->
<!-- Example of loading options via API with cursor. -->
<!-- Example of loading options via API with offset. -->

### Loading Style

If you would rather allow the user to load more options without having to click the `Load more` button, you can set the `loadOnScroll` prop to true, and the options will paginate as the end-user scrolls to the bottom of the list.

### Loading a selected option

In addition to loading options from a remote source, you can also load a selected option. This is useful when the option values are that of IDs, and you would like to fetch more information about the given option on selection.

<!-- Example of loading option via API. -->

## Accessibility

## Props & Attributes

<!-- <reference-table input="autocomplete">
</reference-table> -->

## Section keys

You can target a specific section of an input using that section's "key". Read more about sections [here](/essentials/inputs#sections).

<div>
  <formkit-input-diagram />
</div>

<reference-table type="sectionKeys" primary="section-key" :without="[]">
</reference-table>
