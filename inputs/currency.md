---
title: Currency
description: The currency input is used to create locale/currency specific parsed content
---

::InputPageHero
---
type: "Currency"
---
::

:PageToc

:ProInstallSnippet

## Currency Input

The currency input is used to create locale/currency specific parsed content

::Example
---
name: "Currency input defaults"
file: "_content/_examples/currency/currency-default.vue"
---
::

## Props

### Currency

The `currency` prop is the three letter currency code and sets the proper formatting for the specified currency. For a full list of supported currency types check: https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes

### Locale

By default the locale will use what you have set in your `formkit.config.ts` as the desired locale. However you can override this with the `displayLocale` prop. For example, `en-US`, `de-DE`, `en-IN`, `zh-CN`, etc, etc.


::Example
---
name: "Currency and Locale settings"
file: "_content/_examples/currency/currency-simple-locale.vue"
---
::

## Currency Additional Props

### Decimals

By default the decimals will display when the value contains the currency/locale decimal separator and will automatically know how many decimal places to display for the given currency. If you would like to prevent decimals from being displayed, set `decimals` to `false` or `0`, the value will not allow decimals.

You can also choose to set a minimum number of decimals with the `minDecimals` prop. For example, setting the prop `minDecimals="2"` to will always show 2 decimal points.

### Minimum and Maximum Values

Similar to a number input, you can set a `min` and `max` value.

### Step

Again, similar to a number input you can use the up/down keys to step the value. By default the step is `1` but you can override that with this prop.

### Value Formatting

Default value output is the value as a string to reduce issues with large number enumertation issues. However you can format the value as a string and include the currency symbol, grouping, decimal, etc as it is shown in the input.

::Example
---
name: "Currecy Prop Exploration"
file: "_content/_examples/currency/currency-props-explore.vue"
---
::

## Props & Attributes

::ReferenceTable
---
input: "currency" 
data: [
  {
    prop: "currency",
    type: "string",
    default: "USD",
    description: "Set the specified currency to use for this input"
  },
  {
    prop: "displayLocale",
    type: "string",
    default: "en-US",
    description: "Set the desired display locale to use for this input"
  },
  {
    prop: "decimals",
    type: "boolean|number",
    default: "null",
    description: "Choose to either completely disallow decimals or override the maximum number of decimals for the input"
  },
  {
    prop: "minDecimals",
    type: "number",
    default: "null",
    description: "Choose to show a minimum number of decimals should your input require this"
  },
  {
    prop: "min",
    type: "number",
    default: "null",
    description: "Minimum numeric value allowed. If zero or above, negatives will not be allowed"
  },
  {
    prop: "max",
    type: "number",
    default: "null",
    description: "Maximum numeric value allowed for this input"
  },
  {
    prop: "step",
    type: "number",
    default: "1",
    description: "When using the up/down keys, how much to modify the current value."
  },
  {
    prop: "valueFormat",
    type: "string",
    default: "number",
    description: "Choose between <code>number</code> and <code>string</code> whether you want a numeric value or a parsed string value"
  },
]
---
::


## Sections

:SectionKeysIntro

### Currency input diagram

::FormKitInputDiagram
---
prefix-icon-content: ""
suffix-icon-content: ""
label-content: "Currency Input"
input-content: "$1,234.56"
help-content: "How much do you want to donate?"
message-content: "That's a lot of money"
---
::
