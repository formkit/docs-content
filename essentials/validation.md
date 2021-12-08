# Validation

FormKit makes front end validation simple by letting you declare your validation rules directly on your inputs. It’s easy to write custom rules too, but with 20+ production-ready rules to choose from, it's rare you'll need to.

## Declaring rules

Declaring which validation rules apply to a given input is as simple as providing a `validation` prop. Rules can be declared using two syntaxes:

- [String syntax](#string-syntax)
- [Array syntax](#array-syntax)

### String syntax

Validation rules can be declared by specifying each desired rule name separated separated by pipes `|`. Some rules may accept arguments too — which can be supplied after a colon `:`. You can use multiple arguments by comma separating them.

<example
  name="Validation strings"
  file="/_content/examples/validation-strings/validation-strings"
  langs="vue"
  layout="auto">
</example>

### Array syntax

Validation rules can also be declared by providing an array. Each element of the array must be itself an array where the first element is the string name of the validation rule, and the remaining `n` elements are arguments for that rule.

This is especially helpful if the arguments being provided need to be actual JavaScript types — for example a regular expression.

<example
  name="Validation arrays"
  file="/_content/examples/validation-arrays/validation-arrays"
  langs="vue"
  layout="auto">
</example>

## Showing errors

Validation rules are always computed in realtime — meaning a given field will always be either valid or invalid (it is considered invalid while pending async validation rules run). However — the visibility of the validation errors is determined by the `validation-behavior` prop.

| Behavior | Description                                                            |
| -------- | ---------------------------------------------------------------------- |
| blur     | _(Default)_ Errors are shown after a user removes focus from an input. |
| live     | Errors are always visible.                                             |
| dirty    | Shown after a user modifies the value of an input.                     |

<callout type="info" label="Form submission">
If an input is inside a <a href="/essentials/forms">form</a>, then <em>all</em> remaining validation messages will be displayed to the end user when a user attempts to submit the form.
</callout>

## Available rules

FormKit ships with over 20 production-ready validation rules — covering the vast majority of validation needs. If you don’t find one that meets your exact requirement, you can add a [custom rule](#custom-rules) to suit your needs.

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
- [ends_with](#ends-with)
- [is](#is)
- [length](#length)
- [matches](#matches)
- [max](#max)
- [min](#min)
- [not](#not)
- [number](#number)
- [required](#required)
- [starts_with](#starts-with)
- [url](#url)

### Accepted

The value must be `yes`, `on`, `1` or `true`. Useful for checkbox inputs — often where you need to validate if someone has accepted terms.

<example
  name="Accepted"
  file="/_content/examples/rule-accepted/rule-accepted"
  langs="vue"
  layout="auto">
</example>

### Alpha

Checks if a value is only alphabetical characters. There are two character sets: latin and default. Latin characters are strictly `[a-zA-Z]` while the default set includes most accented characters as well, such as `ä`, `ù`, or `ś`.

<example
  name="Alpha"
  file="/_content/examples/rule-alpha/rule-alpha"
  langs="vue"
  layout="auto">
</example>

### Alphanumeric

Checks if a value is only made of alphabetical characters or numeric digits. For the alphabetical portion you can pass `default` or `latin` - see [alpha](#alpha)) above.

<example
  name="Alphanumeric"
  file="/_content/examples/rule-alphanumeric/rule-alphanumeric"
  langs="vue"
  layout="auto">
</example>

### Between

Checks if a number is (inclusively) between two other numbers. The input value must be a number or the validation rule will fail.

<example
  name="Between"
  file="/_content/examples/rule-between/rule-between"
  langs="vue"
  layout="auto">
</example>

### Confirm

Checks if the value of one input matches the value of another input — often used for password confirmations. There are two ways to specify which input to match:

- Append `_confirm` to the `name` attribute of the second input.
- Pass the `name` of the first input as an argument to the confirm rule in the second input `confirm:name_of_input_1` (more specific).

Note: the two inputs must be in the same `group` or `form`.

<example
  name="Confirm"
  file="/_content/examples/rule-confirm/rule-confirm"
  langs="vue"
  layout="auto">
</example>

### Date after

Determines if a date is after the current date or a date supplied as the rule's argument. Dates used can either be JavaScript `Date` objects or strings that can be parsed by [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).

<example
  name="Date after"
  file="/_content/examples/rule-date-after/rule-date-after"
  langs="vue"
  layout="auto">
</example>

### Date before

Determines if a date is before the current date or a date supplied as the rule's argument. Dates used can either be JavaScript `Date` objects or strings that can be parsed by [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).

<example
  name="Date before"
  file="/_content/examples/rule-date-before/rule-date-before"
  langs="vue"
  layout="auto">
</example>

### Date between

Determines if a date is between (and including) the two dates supplied as the rule's arguments. Dates used can either be JavaScript `Date` objects or strings that can be parsed by [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).

<example
  name="Date between"
  file="/_content/examples/rule-date-between/rule-date-between"
  langs="vue"
  layout="auto">
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
  layout="auto">
</example>

### Email

Checks if the input contains a valid email address.

<example
  name="Email"
  file="/_content/examples/rule-email/rule-email"
  langs="vue"
  layout="auto">
</example>

### Ends with

Checks if the input’s value ends with a given substring.

<example
  name="Ends with"
  file="/_content/examples/rule-ends-with/rule-ends-with"
  langs="vue"
  layout="auto">
</example>

### Is

Checks that the input’s value matches at least one of the provided arguments.

<example
  name="Is"
  file="/_content/examples/rule-is/rule-is"
  langs="vue"
  layout="auto">
</example>

### Length

Checks that the input’s value is over a given length, or between two length values. It works to validate arrays (like [lists](/inputs/list)), objects (like [groups](/inputs/groups)), or string lengths.

<example
  name="Is"
  file="/_content/examples/rule-length/rule-length"
  langs="vue"
  layout="auto">
</example>

### Matches

Checks if the input matches a particular value or pattern. If you pass multiple arguments, it checks each until a match is found.

<example
  name="Is"
  file="/_content/examples/rule-matches/rule-matches"
  langs="vue"
  layout="auto">
</example>

Instead of passing in strings within the validation prop for simple matching, you can template your argument with slashes <code>/</code> to pass in your own regular expression.

<example
  name="Matches"
  file="/_content/examples/rule-matches/rule-matches-inline-regex"
  langs="vue"
  layout="auto">
</example>

When using the string [String Syntax](#string-syntax) you cannot escape characters used to define the validation rules themselves <code>(|,:)</code>. To use these characters in your regular expressions you must use the alternative [Array Syntax](#array-syntax).

<example
  name="Matches"
  file="/_content/examples/rule-matches/rule-matches-array-syntax"
  langs="vue"
  layout="auto">
</example>

### Max

Checks that a <code>Number</code> is less than a maximum value. The maximum value defaults to <code>10</code>.

<example
  name="Max"
  file="/_content/examples/rule-max/rule-max"
  langs="vue"
  layout="auto">
</example>

You can also use this rule to validate that the length of an <code>Array</code> is less than a maximum value.

<example
  name="Max"
  file="/_content/examples/rule-max/rule-max-array"
  langs="vue"
  layout="auto">
</example>

### Min

Checks that a <code>Number</code> is more than a minimum value. The minimum value defaults to <code>1</code>.

<example
  name="Max"
  file="/_content/examples/rule-min/rule-min"
  langs="vue"
  layout="auto">
</example>

You can also use this rule to validate that the length of an <code>Array</code> is more than a minimum value.

<example
  name="Max"
  file="/_content/examples/rule-min/rule-min-array"
  langs="vue"
  layout="auto">
</example>

### Not

Checks to ensure the input data does not match a set of predefined values.

<example
  name="Not"
  file="/_content/examples/rule-not/rule-not"
  langs="vue"
  layout="auto">
</example>

### Number

Checks if the input is a valid number as evaluated by <code>isNaN()</code>.

<example
  name="Number"
  file="/_content/examples/rule-number/rule-number"
  langs="vue"
  layout="auto">
</example>

### Required

Checks if the input is empty.

<example
  name="Required"
  file="/_content/examples/rule-required/rule-required"
  langs="vue"
  layout="auto">
</example>

### Starts With

Checks if the input starts with one of the provided options.

<example
  name="starts_with"
  file="/_content/examples/rule-starts-with/rule-starts-with"
  langs="vue"
  layout="auto">
</example>

### URL

Checks if the input value appears to be a properly formatted URL including the protocol. This does not check if the URL actually resolves.

<example
  name="url"
  file="/_content/examples/rule-url/rule-url"
  langs="vue"
  layout="auto">
</example>

## Custom rules

Validation rules are functions that accept a [core node](/advanced/core#node) and return a boolean value — `true` for passing and `false` for failing. Additionally, any arguments passed to the validation rule are available as arguments `1-n`. Writing your own is straight forward — for example:

```js
/**
 * File: my-custom-rules/monday.js
 *
 * A contrived validation rule that ensures the input’s value is monday or mon.
 */
export default function monday(node) {
  return node.value === 'monday' || node.value === 'mon'
}
```

Once you have a validation function written — you need to register the validation rule with FormKit — either globally or specifically on an input.

### Adding a rule globally

To use a validation rule anywhere in your project, you can specify it wherever your FormKit plugin is registered with Vue.

```js
import { createApp } from 'vue'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import monday from './my-custom-rules/monday'

// prettier-ignore
createApp(App).use(plugin, defaultConfig({
  rules: { monday },
})).mount('#app')
```

Once installed you can use your validation rule in anywhere in your project.

```html
<FormKit validation="required|monday" />
```

### Adding a rule via prop

To add a validation to a specific input use the `validation-rules` prop.

<example
  name="Custom validation rules"
  file="/_content/examples/validation-custom/validation-custom"
  langs="vue"
  layout="auto">
</example>

<callout type="tip" label="Custom message">
Your custom rules probably need a custom message — the next section of the docs will cover that.
</callout>

## Custom messages

There are several ways to customize your validation message. The most basic of which is to use the <code>validation-label</code> prop — allowing you to change the name of the field as used in the pre-defined validation messages.
<example
  name="Custom validation rules"
  file="/_content/examples/validation-label/validation-label"
  langs="vue"
  layout="auto">
</example>

If you need to be more specific you have two options:

- Override a rule’s message using a prop.
- Override a validation rule’s message globally.

### Validation message prop

You can easily override validation messages directly on your `FormKit` input by providing an object of strings or functions.

#### Using strings

To override a validation message on a single FormKit input, add the `validation-messages` prop with an object of rule names and a corresponding message.

<example
  name="Custom validation rules"
  file="/_content/examples/validation-custom-messages/validation-custom-messages"
  langs="vue"
  layout="auto">
</example>

#### Using functions

If you need more power for your validation rules, you can use a function instead of a string. The function is passed a context object.

##### Validation message context object:

| Behavior | Description                                                                                                                                    |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| args     | An array of arguments passed to the rule. For example <code>['Vue', 'React', 'Angular']</code> from the rule <code>is:Vue,React,Angular</code> |
| name     | The name of the field (first available from: <code>validation-label</code>, <code>label</code>, then <code>name</code>)                        |
| node     | The [FormKit core <code>node</code> ](/advanced/core)                                                                                        |

Let’s re-write the above example using a function instead of a string for even more control of the <code>validation-messages</code> prop.

<example
  name="Custom validation rules"
  file="/_content/examples/validation-custom-messages/validation-custom-messages-function"
  langs="vue"
  layout="auto">
</example>

### Global validation message

If there are validation rule messages you'd like to override (or add) across your entire project, you can define those message rules when registering FormKit under the language key you'd like to override.

```js
import { createApp } from 'vue'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import monday from './my-custom-rules/monday'

// prettier-ignore
createApp(App).use(plugin, defaultConfig({
  locales: {
    en: {
      validation: {
        required({ name }) {
          return `Please fill out the ${name} field.`
        }
      }
    }
  }
})).mount('#app')
```
