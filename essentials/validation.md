# Validation

FormKit makes front end validation simple by letting you declare your validation rules directly on your inputs. It’s easy to write custom rules too, but with 20+ production-ready rules to choose from it's rare you'll need to.

## Declaring rules

Declaring what validation rules apply to a given input is as simple as providing a `validation` prop. Rules can be declared using one of three syntaxes:

- String syntax
- Array syntax

### String syntax

Validation rules can be declared by specifying each desired rule name separated separated by pipes `|`. Some rules may accept arguments too — which can be supplied after a colon `:`. You can use multiple arguments by comma separating them.

<example
  name="Validation strings"
  file="/_content/examples/validation-strings/validation-strings"
  langs="vue"
  layout="row">
</example>

### Array syntax

Validation rules can also be declared by providing an array. Each element of the array must be itself an array where the first element is the string name of the validation rule, and the remaining `n` elements are arguments for that rule.

This is especially helpful if the arguments being provided need to be actual JavaScript types — for example a regular expression.

<example
  name="Validation arrays"
  file="/_content/examples/validation-arrays/validation-arrays"
  langs="vue"
  layout="row">
</example>

## Showing errors

Validation rules are always computed in realtime — meaning a given field is always be either valid or invalid (it is considered invalid while pending async validation rules run). However — the visibility of the validation errors is determined by the `validation-behavior` prop.

| Behavior | Description                                                            |
| -------- | ---------------------------------------------------------------------- |
| blur     | _(Default)_ Errors are shown after a user removes focus from an input. |
| live     | Errors are always visible.                                             |
| dirty    | Shown after a user modifies the value of an input.                     |

<callout type="note" label="Form submission">
If an input is inside a <a href="/essentials/form">form</a> then <em>all</em> remaining validation messages will be displayed to the end user when a user attempts to submit the form.
</callout>

## Available rules

FormKit ships with over 20 production ready validation rules — covering the vast majority of validation needs. If you don’t find one that meets your exact requirement you can add a [custom rule](#custom-rules) to suit your needs.

- [accepted](#accepted)
- [alpha](#alpha)
- [alphanumeric](#alphanumeric)
- [between](#between)
- [confirm](#confirm)
- [date_after](#date-after)
- [date_before](#date-before)
- [date_between](#date-between)
- [date_format](#date-format)
- [email](#email)
- [ends_with](#ends_with)
- [is](#is)
- [length](#length)
- [matches](#matches)
- [max](#max)
- [min](#min)
- [not](#not)
- [number](#number)
- [required](#required)
- [starts_with](#starts_with)
- [url](#url)

### Accepted

The value must be `yes`, `on`, `1` or `true`. Useful for checkbox inputs, often where you need to validate if someone has accepted terms.

<example
  name="Accepted"
  file="/_content/examples/rule-accepted/rule-accepted"
  langs="vue"
  layout="row">
</example>

### Alpha

Checks if a value is only alphabetical characters. There are two character sets latin and default. Latin characters are strictly `[a-zA-Z]` while the default set includes most accented characters as well like: `ä`, `ù`, or `ś`.

<example
  name="Alpha"
  file="/_content/examples/rule-alpha/rule-alpha"
  langs="vue"
  layout="row">
</example>

### Alphanumeric

Checks if a value is only made of alphabetical characters or numeric digits. For the alphabetical portion you can pass `default` or `latin` - see [alpha](#alpha)) above.

<example
  name="Alphanumeric"
  file="/_content/examples/rule-alphanumeric/rule-alphanumeric"
  langs="vue"
  layout="row">
</example>

### Between

Checks if a number is (inclusively) between two other numbers. The input value must be a number or the validation rule will fail.

<example
  name="Between"
  file="/_content/examples/rule-between/rule-between"
  langs="vue"
  layout="row">
</example>

### Confirm

Checks if the value of one input matches the value of another input — often used for password confirmations. The two inputs must be in the same `group` or `form`, and (by default) one of the two input’s names should end with `_confirm`.

Alternatively the rule accepts an argument of the `name` of the other input to compare against.

<example
  name="Confirm"
  file="/_content/examples/rule-confirm/rule-confirm"
  langs="vue"
  layout="row">
</example>

### Date after

Determines if a date is after the current date or a date supplied by the rule's argument. Dates used can either be JavaScript `Date` objects or strings that can be parsed by `Date.parse()`.

<example
  name="Date after"
  file="/_content/examples/rule-date-after/rule-date-after"
  langs="vue"
  layout="row">
</example>

### Date before

Determines if a date is after the current date or a date supplied by the rule's argument. Dates used can either be JavaScript `Date` objects or strings that can be parsed by `Date.parse()`.

<example
  name="Date before"
  file="/_content/examples/rule-date-before/rule-date-before"
  langs="vue"
  layout="row">
</example>

### Date between

Determines if a date is between the two dates supplied by the rule's arguments. Dates used can either be JavaScript `Date` objects or strings that can be parsed by `Date.parse()`.

<example
  name="Date between"
  file="/_content/examples/rule-date-between/rule-date-between"
  langs="vue"
  layout="row">
</example>

### Date format

Ensures the format of an input’s date matches a specific date format. The format should be specified using the following formatting tokens:

| Token | Valid values                                                  |
| ----- | ------------------------------------------------------------- |
| MM    | Two-digit month representation (01-12)                        |
| M     | Single-digit month representation (1-12) leading zero allowed |
| DD    | Two-digit day of the month (01-31)                            |
| D     | Single-digit day of the month (1-31), leading zero allowed    |
| YY    | Two-digit year                                                |
| YYYY  | Four-digit year                                               |

<callout type="warning" label="">
Native date inputs always output the same format <code>YYYY-MM-DD ...</code> even though they display dates according to the browser’s locale. Using this rule to specify a <em>different</em> format would result in an input that can never be valid.
</callout>

<example
  name="Date format"
  file="/_content/examples/rule-date-format/rule-date-format"
  langs="vue"
  layout="row">
</example>

### Email

Checks if the input contains a valid email address.

<example
  name="Email"
  file="/_content/examples/rule-email/rule-email"
  langs="vue"
  layout="row">
</example>

### Ends with

Checks if the input’s value ends with a given substring.

<example
  name="Ends with"
  file="/_content/examples/rule-ends-with/rule-ends-with"
  langs="vue"
  layout="row">
</example>

### Is

Checks that the input’s value matches at least one of the provided arguments.

<example
  name="Is"
  file="/_content/examples/rule-is/rule-is"
  langs="vue"
  layout="row">
</example>

### Length

Checks that the input’s value is over a given length, or between two length values. It works to validate arrays (like [lists](/inputs/list)), objects (like [groups](/inputs/groups)), or string lengths.

<example
  name="Is"
  file="/_content/examples/rule-length/rule-length"
  langs="vue"
  layout="row">
</example>
