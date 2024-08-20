---
title: Unit
description: The unit input is used to create locale/unit specific parsed content for percentages, temperatures and measurements.
---

::InputPageHero
---
type: "Unit"
---
::

:PageToc

:ProInstallSnippet

## Unit Input

The `unit` input allows for restricted input of values based on the provided unit (distance, weight, temperature, etc.) and locale.

::Example
---
name: "Unit input defaults"
file: "_content/_examples/unit/unit-default.vue"
---
::

## Props

### Unit

The `unit` prop is the type of unit you want to display. A full list of allowed unit types are listed below:

::ColumnList
---
listItems: ['acre', 'bit', 'byte', 'celsius', 'centimeter', 'day', 'degree', 'fahrenheit', 'fluid-ounce', 'foot', 'gallon', 'gigabit', 'gigabyte', 'gram', 'hectare', 'hour', 'inch', 'kilobit', 'kilobyte', 'kilogram', 'kilometer', 'liter', 'megabit', 'megabyte', 'meter', 'microsecond', 'mile', 'mile-scandinavian', 'milliliter', 'millimeter', 'millisecond', 'minute', 'month', 'nanosecond', 'ounce', 'percent', 'petabyte', 'pound', 'second', 'stone', 'terabit', 'terabyte', 'week', 'yard', 'year']
---
::

### Locale

By default the locale will use what you have set in your `formkit.config.ts` as the desired locale. However you can override this with the `displayLocale` prop. For example, `en-US`, `de-DE`, `en-IN`, `zh-CN`, etc, etc.

### Decimals

By default the decimals will display when the value contains the unit/locale decimal separator and will show default formatting decimal places to display for the given unit, however you can override this. By setting `decimals` to `false` or `0`, the value will not allow decimals or setting decimals to a numeric value will limit the maximum decimal places to that value.

You can also choose to set a minimum number of decimals with the `minDecimals` prop. For example, you always want to show 2 decimal places you would set `minDecimals="2"`.

### Minimum and Maximum Values

Similar to a number input, you can set a `min` and `max` value.

### Step

Again, similar to a number input you can use the up/down keys to step the value. By default the step is `1` but you can override that with this prop.

### Value Formatting

Default value output is the value as a string to reduce issues with large number enumertation issues. However you can format the value as a string and include the currency symbol, grouping, decimal, etc as it is shown in the input.

### Value unit

The unit input also allowed for first-party conversion of one unit type to another. In this example, we will use `unit` of type `mile`, but the value
itself will be converted to `kilometers` when setting `value-unit` to `kilometer`.

::Example
---
name: "Unit type examples"
file: "_content/_examples/unit/unit-value-unit.vue"
---
::

::Callout
---
type: "warning"
label: "Mixed unit types"
---
In order to convert one unit to another, they must be in the same taxonomy (so for example, you can not convert kilometers to liters).
::

## Props & Attributes

::ReferenceTable
---
input: "unit" 
data: [
  {
    prop: "unit",
    type: "string",
    default: "percent",
    description: "Set the specified unit to use for this input"
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
    prop: "valueDecimals",
    type: "string | number",
    default: undefined,
    description: "Determines the allowed number of decimals for the valueUnit."
  },
  {
    prop: "valueFormat",
    type: "string",
    default: "number",
    description: "Choose between <code>number</code> and <code>string</code> whether you want a numeric value or a parsed string value"
  },
  {
    prop: "valueUnit",
    type: "string",
    default: "undefined",
    description: "Used to convert the user-inputted value from one unit to another"
  },
  {
    prop: "unitFormatting",
    type: "string | boolean",
    default: true,
    description: "When set to false, no formatting will be applied for the given unit type."
  },
]
---
::


## Sections

:SectionKeysIntro

### Unit input diagram

::FormKitInputDiagram
---
prefix-icon-content: ""
suffix-icon-content: ""
label-content: "Unit Input"
input-content: "1,234.56%"
help-content: "Help text goes here"
message-content: "Any messages would appear here"
---
::
