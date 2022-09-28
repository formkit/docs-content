---
title: Dropdown Input
description: A Pro input that allows users to select from a customizable options list.
---

<InputPageHero title="Dropdown"></InputPageHero>

<ProInstallSnippet></ProInstallSnippet>

The `dropdown` input allows users to select a value from a customizable list of options.

## Basic example

<example
name="Dropdown"
:min-height="550"
file="/_content/examples/dropdown/dropdown-base.vue"></example>

## Defining options
The `options` prop can accept three different formats of values:

- Array of objects with `value` and `label` keys (see example above)
- Array of strings <code>['A', 'B', 'C']</code>
- Object literal <code>{ a: 'A', b: 'B', c: 'C' }</code>

## Slots

Unlike native select elements, the `dropdown` input allows you to customize the options list with your own markup.

### Option slot

The `dropdown` input allows you to customize the look and feel of each option by using the `option` slot. In the example below, we are using the `option` slot to display each option's asset (the logo) and name:

<example
name="Dropdown"
:min-height="550"
file="/_content/examples/dropdown/dropdown-option-slot.vue"></example>

### Selection slot

If you only want to customize the display of the selected option, use the `selection` slot:

<example
name="Dropdown"
:min-height="550"
file="/_content/examples/dropdown/dropdown-selection-slot.vue"></example>

## Loading options

Instead of passing a static list of options to the `options` prop, you can assign it to a function that returns a promise. This is useful when you need to load options from an API or another source.

<!-- Example of loading options via API without pagination. -->

### Single request

Let's say we had an API endpoint that returned all the options we needed for a given `dropdown` input. Below is an example of how we could write the `dropdown` input to load options from a single request:

<example
name="Dropdown"
:min-height="550"
file="/_content/examples/dropdown/dropdown-single-request.vue"></example>

You can see that we are assigning the `options` prop to the `loadHorrorMovies` function. After the request is made, we are iterating over the results and making sure to return array of objects with explicit `value` and `label` properties.
### Loading an option

Continuing off the previous example, let's say we wanted to load additional information about an option when the user selects it (such as its release date). We can do this by setting the `option-loader` prop to a function that will make a request to load more information about the given movie:

<example
name="Dropdown"
:min-height="550"
file="/_content/examples/dropdown/dropdown-option-loader.vue"></example>

Our function, `loadMovie`, is called by the option loader when an option is selected and will be passed the selected option's value as its first argument (in this case, the movie's ID). Our `loadMovie` function is also passed a second argument `cachedOption` which we will discuss in a later section.
### Multiple pages

What if you need to load options from an API, but need to be able to make multiple requests to perform pagination? When a function is set to the `options` prop it is passed FormKit node's `config` object as an argument. In this `config` object is a `page` property which we can use to make our request, as well as a `hasNextPage` function which we can use to tell the `dropdown` input that there are more requests to be made:

<example
name="Dropdown"
:min-height="550"
file="/_content/examples/dropdown/dropdown-pagination.vue"></example>

In the above example, we are calling `hasNextPage` when we determine there are more pages to load. When this is done, FormKit appends a `Load more` option at the end of the rendered options list and automatically increments its `page` property. When the user selects the `Load more` option, the function assigned to the `options` prop (`loadCurrentlyPopularMovies`) is called again, and the process repeats.

### Load on scroll

If you would rather allow the user to load more options without having to click the `Load more` option at the bottom of the options list, you can set the `load-on-scroll` prop to true, and our function, `loadCurrentlyPopularMovies` will be called again:

<example
name="Dropdown"
:min-height="550"
file="/_content/examples/dropdown/dropdown-pagination-load-on-scroll.vue"></example>

## Slots and loading options

Now let's combine what we've learned so far by leveraging the `option` slot for custom markup, and setting the `options` prop to a function that will return pages of movies from an API:

<example
name="Dropdown"
:min-height="550"
file="/_content/examples/dropdown/dropdown-pagination-slots.vue"></example>


## Overscroll

When using the dropdown with static options, FormKit's dropdown also comes with a unique feature called `overscroll`. By setting `overscroll` equal to true, the list behaves more like....

<example
name="Dropdown"
:min-height="550"
file="/_content/examples/dropdown/dropdown-overscroll.vue"></example>

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
