---
title: Currency Input
description: The currency input is used to create locale/currency specific parsed content
navigation:
  title: 'Currency'
  pro: true
---

:InputPageHero

:ProInstallSnippet

## Basic example

The `currency` input allows for restricted input of values based on the provided currency and locale.

::Example
---
name: "Currency input defaults"
file: "_examples/currency/currency-default.vue"
---
::

## Props

### Currency

The `currency` prop is the three letter currency code and sets the proper formatting for the specified currency. For a full list of supported currency types check: https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes

### Locale

By default, the locale used will be that of what is set in your `formkit.config.ts`. This can be overriden with the `display-locale` prop. For example, `en`, `de`, `en-IN`, `zh-CN`, etc, etc.

::Example
---
name: "Currency and Locale settings"
file: "_examples/currency/currency-simple-locale.vue"
---
::

## Currency Additional Props

### Decimals

If you would like to prevent decimals from being displayed, set `decimals` to `false` or `0`.

You can also choose to set a minimum number of decimals with the `min-decimals` prop. For example, setting the prop `min-decimals="2"` will always show 2 decimal points.

### Minimum and Maximum Values

Setting the props `min` or `max` will prevent entry of a higher or lower value.

### Step

Values can be incremented and decremented by use of the up/down keys. The degree by which the value changes is determined by the `step` prop.

::Example
---
name: "Currency Prop Exploration"
file: "_examples/currency/currency-props-explore.vue"
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

:FormKitInputDiagrams

## Accessibility

All FormKit inputs are designed with the following accessibility considerations in mind. Help us continually improve accessibility for all by filing accessibility issues [here](https://github.com/formkit/formkit/issues/new?assignees=&labels=%F0%9F%90%9B+bug-report%2C%E2%9B%91+Needs+triage&projects=&template=bug-report.yml):

:AccessibilityChecks

### Accessibility attributes

:AccessibilityTable

### Keyboard Interactions

::KeyboardEventsTable
---
data: [
  {
    event: ["up", "down"],
    separator: '',
    description: "Increments through input value by current step amount.",
  },
]
---
::
