---
title: Validation
description: Provide instant feedback to users on the validity of their form data.
---

# Validation

:PageToc

FormKit makes front end validation simple by letting you declare your validation rules directly on your inputs. It's easy to write custom rules too, but you'll rarely need to with 20+ production-ready rules.

## Declaring rules

::VideoCard
---
title: "How to Validate an Input - Vue School Course"
poster: "https://cdn.formk.it/web-assets/robust-vue-js-forms-with-formkit-2.jpg"
watch-time: "8 mins"
external-vid: "https://vueschool.io/lessons/how-to-validate-a-form-input?friend=formkit"
---
::

Declaring which validation rules apply to a given input is as simple as providing a `validation` prop. Rules can be declared using two syntaxes:

- [String syntax](#string-syntax)
- [Array syntax](#array-syntax)

### String syntax

Validation rules can be declared by specifying each desired rule name separated by pipes `|`. Some rules may also accept arguments, which can be supplied after a colon `:`. You can use multiple arguments by comma separating them:

::Example
---
name: "Validation strings"
file: "_content/_examples/validation-strings/validation-strings.vue"
layout: "auto"
---
::

### Array syntax

Validation rules can also be declared by providing an array. Each element of the array must be itself an array where the first element is the string name of the validation rule, and the remaining `n` elements are arguments for that rule.

This is especially helpful if the arguments being provided need to be actual JavaScript types — for example, a regular expression (regex):

::Example
---
name: "Validation arrays"
file: "_content/_examples/validation-arrays/validation-arrays.vue"
layout: "auto"
---
::

## Showing errors

Validation rules are always computed in realtime — meaning a given field will always be either valid or invalid (it is considered invalid while pending async validation rules run). However — the _visibility_ of the validation errors is determined by the `validation-visibility` prop.

| Visibility | Description                                                            |
| ---------- | ---------------------------------------------------------------------- |
| blur       | _(Default)_ Errors are shown after a user removes focus from an input. |
| live       | Errors are always visible.                                             |
| dirty      | Errors are shown after a user modifies the value of an input.           |
| submit     | Errors are shown only after a user attempts to submit a form.          |

::Callout
---
type: "info"
label: "Form submission"
---
If an input is inside a <a href="/inputs/form">form</a>, then <em>any</em> remaining validation messages will be displayed to the end user when a user attempts to submit the form.
::

### Setting validation visibility for an entire group

Due to FormKit's config inheritance, you can set `validation-visibility` at a `form`, `group`, or `list` level by using the `config` prop, which you can still override on an input-by-input basis:

::Example
---
name: "Validation Visibility"
file: "_content/_examples/validation-visibility/validation-visibility.vue"
layout: "auto"
---
::

## Rule hints

::VideoCard
---
title: "Validation rule hints overview"
poster: "https://cdn.formk.it/web-assets/validation-hint-example.png"
watch-time: "2 mins"
youtube-id: "4mbLuF8fnAc"
---
::

Validation rules operate according to a few default features, which you can change on a case-by-case basis with "rule hints":

- **Run in sequence** - rules are run in the order they are declared. When a rule fails, any remaining rules are not run. For example, if you declare the validation rules as `required|length:5` then the `length` rule will not run until the `required` rule is passing.
- **Skipped when empty** - Validation rules are not run when the input is empty (within the [available rules](#available-rules), the `required` rule is the only exception).
- **Synchronous** - all [available rules](#available-rules) are synchronous and not debounced.
- **Blocking** - all validation rules produce [blocking messages](/essentials/architecture#message-store) which prevent form submission.

The above features can be modified when declaring your rules by using "hinting". Rule hints are small modifier characters you append to the beginning of a rule declaration to change its default behavior:

| Hint    | Name                        | Description                                                                              |
| ------- | --------------------------- | ---------------------------------------------------------------------------------------- |
| `(200)` | [Debounce](#debounce-milli) | Debounces the validation rule by the given number of milliseconds.                       |
| `+`     | [Empty](#empty-)            | Runs the validation rule even if the input is empty (but not [force](#force-) the rule). |
| `*`     | [Force](#force-)            | Runs the validation rule even if a previous rule was failing.                            |
| `?`     | [Optional](#optional-)      | Makes a validation rule optional (it is non-blocking meaning the form can still submit). |

### Debounce `(milli)`

At times it makes sense to debounce your validation rules. To do this use the debounce hint — a parenthesis containing a duration in milliseconds — before your rule:

::Example
---
name: "Debounce hint"
file: "_content/_examples/debounce-hint/debounce-hint.vue"
layout: "auto"
---
::

### Empty `+`

Sometimes you want a validation rule to run even when an input is empty. You can use the empty `+` hint to do so:

::Example
---
name: "Empty hint"
file: "_content/_examples/empty-hint/empty-hint.vue"
layout: "auto"
---
::

### Force `*`

The force hint ensures a validation rule will run even if a rule that is defined before it is failing (note: this does not mean it will run when an input is empty). Notice how this example will display _both_ the `length` and `email` messages:

::Example
---
name: "Force hint"
file: "_content/_examples/force-hint/force-hint.vue"
layout: "auto"
---
::

### Optional `?`

The optional hint allows a failing validation rule to not prevent form submission. In this example, notice how the form will not submit if the `required` or `confirm` rules are failing, but it will submit if the optional-hinted `length` rule is failing:

::Example
---
name: "Optional hint"
file: "_content/_examples/optional-hint/optional-hint.vue"
layout: "auto"
---
::

::Callout
---
type: "tip"
label: "Combining hints"
---
You can use rule hints together. To do so, just place multiple hints before the rule declaration: <code>required|*+(200)min:10</code>.
::

## Available rules

FormKit ships with over 20 production-ready validation rules, covering most validation needs. If you don’t find one that meets your exact requirement, you can add a [custom rule](#custom-rules) to suit your needs.

- [accepted](#accepted)
- [alpha](#alpha)
- [alphanumeric](#alphanumeric)
- [alpha_spaces](#alpha-spaces)
- [between](#between)
- [confirm](#confirm)
- [contains_alpha](#contains-alpha)
- [contains_alphanumeric](#contains-alphanumeric)
- [contains_alpha_spaces](#contains-alpha-spaces)
- [contains_lowercase](#contains-lowercase)
- [contains_numeric](#contains-numeric)
- [contains_symbol](#contains-symbol)
- [contains_uppercase](#contains-uppercase)
- [date_after](#date-after)
- [date_before](#date-before)
- [date_between](#date-between)
- [date_format](#date-format)
- [email](#email)
- [ends_with](#ends-with)
- [is](#is)
- [length](#length)
- [lowercase](#lowercase)
- [matches](#matches)
- [max](#max)
- [min](#min)
- [not](#not)
- [number](#number)
- [required](#required)
- [require_one](#require-one)
- [starts_with](#starts-with)
- [symbol](#symbol)
- [uppercase](#uppercase)
- [url](#url)

### Accepted

The value must be `yes`, `on`, `1` or `true`. Useful for checkbox inputs — often where you need to validate if someone has accepted terms.

::Example
---
name: "Accepted"
file: "_content/_examples/rule-accepted/rule-accepted.vue"
layout: "auto"
---
::

### Alpha

Checks if a value is only alphabetical characters. There are two character sets: latin and default. Latin characters are strictly `[a-zA-Z]`, while the default set includes most accented characters, such as `ä`, `ù`, or `ś`.

::Example
---
name: "Alpha"
file: "_content/_examples/rule-alpha/rule-alpha.vue"
layout: "auto"
---
::

### Alphanumeric

Checks if a value is only made of alphabetical characters or numeric digits. For the alphabetical portion you can pass `default` or `latin` - see [alpha](#alpha)) above.

::Example
---
name: "Alphanumeric"
file: "_content/_examples/rule-alphanumeric/rule-alphanumeric.vue"
layout: "auto"
---
::

### Alpha-spaces

Checks if a value is only made of alphabetical characters or spaces. For the alphabetical portion you can pass `default` or `latin` - see [alpha](#alpha)) above.

::Example
---
name: "Alphanumeric"
file: "_content/_examples/rule-alpha-spaces/rule-alpha-spaces.vue"
layout: "auto"
---
::

### Between

Checks if a number is (inclusively) between two other numbers. The input value must be a number, or the validation rule will fail.

::Example
---
name: "Between"
file: "_content/_examples/rule-between/rule-between.vue"
layout: "auto"
---
::

### Confirm

Checks if the value of one input matches the value of another input — often used for password confirmations. There are two ways to specify which input to match:

- Append `_confirm` to the `name` attribute of the second input.
- Pass the `name` of the first input as an argument to the confirm rule in the second input `confirm:name_of_input_1` (more specific).

Note: the two inputs must be in the same `group` or `form`.

::Example
---
name: "Confirm"
file: "_content/_examples/rule-confirm/rule-confirm.vue"
layout: "auto"
---
::

### Contains Alpha

Checks if a value contains alphabetical characters. There are two character sets: latin and default. Latin characters are strictly `[a-zA-Z]`, while the default set includes most accented characters, such as `ä`, `ù`, or `ś`.

::Example
---
name: "Contains Alpha"
file: "_content/_examples/rule-contains-alpha/rule-contains-alpha.vue"
layout: "auto"
---
::

### Contains Alphanumeric

Checks if a value contains either alphabetical characters or numeric digits. For the alphabetical portion you can pass `default` or `latin` - see [contains alpha](#contains-alpha)) above.

::Example
---
name: "Contains Alphanumeric"
file: "_content/_examples/rule-contains-alphanumeric/rule-contains-alphanumeric.vue"
layout: "auto"
---
::

### Contains Alpha-spaces

Checks if a value contains alphabetical characters or spaces. For the alphabetical portion you can pass `default` or `latin` - see [contains alpha](#contains-alpha)) above.

::Example
---
name: "Alphanumeric"
file: "_content/_examples/rule-contains-alpha-spaces/rule-contains-alpha-spaces.vue"
layout: "auto"
---
::

### Contains Lowercase

Checks if a value contains a lowercase character. There are two character sets: latin and default. Latin characters are strictly `[a-zA-Z]`, while the default set includes most accented characters, such as `ä`, `ù`, or `ś`.

::Example
---
name: "Lowercase"
file: "_content/_examples/rule-contains-lowercase/rule-contains-lowercase.vue"
layout: "auto"
---
::

### Contains Numeric

Checks if a value contains a number.

::Example
---
name: "Contains Numeric"
file: "_content/_examples/rule-contains-numeric/rule-contains-numeric.vue"
layout: "auto"
---
::

### Contains Symbol

Checks if a value contains a symbol.

::Example
---
name: "Contains Numeric"
file: "_content/_examples/rule-contains-symbol/rule-contains-symbol.vue"
layout: "auto"
---
::

### Contains Uppercase

Checks if a value contains a uppercase character. There are two character sets: latin and default. Latin characters are strictly `[a-zA-Z]`, while the default set includes most accented characters, such as `ä`, `ù`, or `ś`.

::Example
---
name: "Contains Uppercase"
file: "_content/_examples/rule-contains-uppercase/rule-contains-uppercase.vue"
layout: "auto"
---
::

### Date after

Determines if a date is after the current date or a date supplied as the rule's argument. Dates used can either be JavaScript `Date` objects or strings that can be parsed by [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).

::Example
---
name: "Date after"
file: "_content/_examples/rule-date-after/rule-date-after.vue"
layout: "auto"
---
::

### Date before

Determines if a date is before the current date or a date supplied as the rule's argument. Dates used can either be JavaScript `Date` objects or strings that can be parsed by [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).

::Example
---
name: "Date before"
file: "_content/_examples/rule-date-before/rule-date-before.vue"
layout: "auto"
---
::

### Date between

Determines if a date is between (and including) the two dates supplied as the rule's arguments. Dates used can either be JavaScript `Date` objects or strings that can be parsed by [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).

::Example
---
name: "Date between"
file: "_content/_examples/rule-date-between/rule-date-between.vue"
layout: "auto"
---
::

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

::Callout
---
type: "warning"
label: ""
---
Native date inputs always output the same format <code>YYYY-MM-DD ...</code> even though they display dates according to the browser’s locale. Using this rule to specify a <em>different</em> format would result in an input that can never be valid.
::

::Example
---
name: "Date format"
file: "_content/_examples/rule-date-format/rule-date-format.vue"
layout: "auto"
---
::

### Email

Checks if the input contains a valid email address.

::Example
---
name: "Email"
file: "_content/_examples/rule-email/rule-email.vue"
layout: "auto"
---
::

### Ends with

Checks if the input's value ends with a given substring.

::Example
---
name: "Ends with"
file: "_content/_examples/rule-ends-with/rule-ends-with.vue"
layout: "auto"
---
::

### Is

Checks that the input's value matches at least one of the provided arguments.

::Example
---
name: "Is"
file: "_content/_examples/rule-is/rule-is.vue"
layout: "auto"
---
::

### Length

Checks that the input’s value is over a given length, or between two length values. It works to validate arrays (like [lists](/inputs/list)), objects (like [groups](/inputs/group)), or string lengths. Can be used to simulate the native `maxlength` and `minlength` as well.

::Example
---
name: "Is"
file: "_content/_examples/rule-length/rule-length.vue"
layout: "auto"
---
::

### Lowercase

Checks if a value consists of only lowercase characters. There are two character sets: latin and default. Latin characters are strictly `[a-zA-Z]`, while the default set includes most accented characters, such as `ä`, `ù`, or `ś`.

::Example
---
name: "Lowercase"
file: "_content/_examples/rule-lowercase/rule-lowercase.vue"
layout: "auto"
---
::

### Matches

Checks if the input matches a particular value or pattern. If you pass multiple arguments, it checks each until a match is found.

::Example
---
name: "Is"
file: "_content/_examples/rule-matches/rule-matches.vue"
layout: "auto"
---
::

Instead of passing in strings within the validation prop for simple matching, you can template your argument with slashes <code>/</code> to pass in your own regular expression.

::Example
---
name: "Matches"
file: "_content/_examples/rule-matches/rule-matches-inline-regex.vue"
layout: "auto"
---
::

When using the string [String Syntax](#string-syntax) you cannot escape characters used to define the validation rules themselves <code>(|,:)</code>. To use these characters in your regular expressions you must use the alternative [Array Syntax](#array-syntax).

::Example
---
name: "Matches"
file: "_content/_examples/rule-matches/rule-matches-array-syntax.vue"
layout: "auto"
---
::

### Max

Checks that a <code>Number</code> is less than or equal to a maximum value. The maximum value defaults to <code>10</code>.

::Example
---
name: "Max"
file: "_content/_examples/rule-max/rule-max.vue"
layout: "auto"
---
::

You can also use this rule to validate that the length of an <code>Array</code> is less than or equal to a maximum value.

::Example
---
name: "Max"
file: "_content/_examples/rule-max/rule-max-array.vue"
layout: "auto"
---
::

### Min

Checks that a <code>Number</code> is greater than or equal to a minimum value. The minimum value defaults to <code>1</code>.

::Example
---
name: "Max"
file: "_content/_examples/rule-min/rule-min.vue"
layout: "auto"
---
::

You can also use this rule to validate that the length of an <code>Array</code> is more than or equal to a minimum value.

::Example
---
name: "Max"
file: "_content/_examples/rule-min/rule-min-array.vue"
layout: "auto"
---
::

### Not

Checks to ensure the input data does not match a set of predefined values.

::Example
---
name: "Not"
file: "_content/_examples/rule-not/rule-not.vue"
layout: "auto"
---
::

### Number

Checks if the input is a valid number as evaluated by <code>isNaN()</code>.

::Example
---
name: "Number"
file: "_content/_examples/rule-number/rule-number.vue"
layout: "auto"
---
::

### Required

Checks if the input is empty.

::Example
---
name: "Required"
file: "_content/_examples/rule-required/rule-required.vue"
layout: "auto"
---
::

If you don't want whitespace to cause the `required` rule to pass, you can pass `trim` as an argument to the rule:

::Example
---
name: "Required"
file: "_content/_examples/rule-required/rule-required-trim.vue"
layout: "auto"
---
::

### Require One

Checks multiple inputs and passes if any of them have a value.

::Example
---
name: "Required One"
file: "_content/_examples/rule-require-one/rule-require-one.vue"
layout: "auto"
---
::

### Starts With

Checks if the input starts with one of the provided options.

::Example
---
name: "starts_with"
file: "_content/_examples/rule-starts-with/rule-starts-with.vue"
layout: "auto"
---
::

### Symbol

Checks if a value consists of only symbols.

::Example
---
name: "Symbol"
file: "_content/_examples/rule-symbol/rule-symbol.vue"
layout: "auto"
---
::

### Uppercase

Checks if a value consists of only uppercase characters. There are two character sets: latin and default. Latin characters are strictly `[a-zA-Z]`, while the default set includes most accented characters, such as `ä`, `ù`, or `ś`.

::Example
---
name: "Uppercase"
file: "_content/_examples/rule-uppercase/rule-uppercase.vue"
layout: "auto"
---
::

### URL

Checks if the input value appears to be a properly formatted URL including the protocol. This does not check if the URL actually resolves.

::Example
---
name: "url"
file: "_content/_examples/rule-url/rule-url.vue"
layout: "auto"
---
::

## Custom rules

Validation rules are functions that accept a [core node](/essentials/architecture#node) and return a boolean value — `true` for passing and `false` for failing. Additionally, any arguments passed to the validation rule are available as arguments `1-n`. Writing your own is straight forward — for example:

```js
/**
 * File: my-custom-rules/monday.js
 *
 * A contrived validation rule that ensures the input’s value is monday or mon.
 */
const monday = function (node) {
  return node.value === 'monday' || node.value === 'mon'
}

export default monday
```

### Defining custom rule behaviors

As mentioned in the [validation rule hints](#rule-hints) section, validation rules — including your custom rules — operate according to default behaviors: they run in sequence, are skipped when the input's value is empty, are synchronous, and are blocking. If you want your rule's defaults to operate differently, you can override these on your custom validation rule:

```js
/**
 * A contrived validation rule that ensures the input’s value is monday or mon.
 */
const monday = function (node) {
  return node.value === 'monday' || node.value === 'mon'
}

// override default rule behaviors for your custom rule
monday.blocking = false
monday.skipEmpty = false
monday.debounce = 20 // milliseconds
monday.force = true

export default monday
```

You can also override these behaviors on a case-by-case basis with [rule hints](#rule-hints).

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

To customize the error message which shows up when your custom validation fails, follow the instructions [here](#global-validation-message).

### Adding a rule via prop

To add a validation to a specific input use the `validation-rules` prop.

::Example
---
name: "Custom validation rules"
file: "_content/_examples/validation-custom/validation-custom.vue"
layout: "auto"
---
::

::Callout
---
type: "tip"
label: "Custom message"
---
Your custom rules probably need a custom message — the next section of the docs will cover that.
::

## Custom messages

There are several ways to customize your validation message. The most basic of which is to use the <code>validation-label</code> prop — allowing you to change the name of the field as used in the pre-defined validation messages.

::Example
---
name: "Custom validation rules"
file: "_content/_examples/validation-label/validation-label.vue"
layout: "auto"
---
::

If you need to be more specific you have two options:

- Override a rule’s message using a prop.
- Override a validation rule’s message globally.

### Validation message prop

You can easily override validation messages directly on your `FormKit` input by providing an object of strings or functions.

#### Using strings

To override a validation message on a single FormKit input, add the `validation-messages` prop with an object of rule names and a corresponding message.

::Example
---
name: "Custom validation rules"
file: "_content/_examples/validation-custom-messages/validation-custom-messages.vue"
layout: "auto"
---
::

#### Using functions

If you need more power for your validation rules, you can use a function instead of a string. The function is passed a context object.

##### Validation message context object:

| Behavior | Description                                                                                                                                     |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| args     | An array of arguments passed to the rule. For example <code>['Vue', 'React', 'Angular']</code> from the rule <code>is:Vue,React,Angular</code>. |
| name     | The name of the field (first available from: <code>validation-label</code>, <code>label</code>, then <code>name</code>).                        |
| node     | The [FormKit core <code>node</code>](/essentials/architecture).                                                                                 |

Let’s re-write the above example using a function instead of a string for even more control of the <code>validation-messages</code> prop:

::Example
---
name: "Custom validation rules"
file: "_content/_examples/validation-custom-messages/validation-custom-messages-function.vue"
layout: "auto"
---
::

### Global validation message

If there are validation rule messages you'd like to override (or add) across your entire project, you can define those message rules when registering FormKit under the language key you'd like to override:

```js
import { createApp } from 'vue'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import monday from './my-custom-rules/monday'

// prettier-ignore
createApp(App).use(plugin, defaultConfig({
  messages: {
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

## Moving validation messages

If you would like to render an input’s validation messages outside of the `<FormKit />` component, you can leverage the `<FormKitMessages />` component by passing the input’s node as a prop. Using this component disables the default display of messages (located beneath the input) and moves them to wherever the `<FormKitMessages />` component is located:

::Example
---
name: "Submit invalid"
file: "_content/_examples/formkit-messages/normal-input.vue"
---
::

## Extracting messages

::Callout
---
type: "tip"
label: "The <FormKitSummary> component"
---
FormKit 1.0.0 introduced the [FormKitSummary](/inputs/form#validation-and-error-summary) component which provides an "out of the box" solution to for displaying all the validation messages in a given form or subtree.
::

To get all the validation messages from an [input’s core node](/essentials/architecture), you can use the `getValidationMessages` function exported from `@formkit/validation`. This function will recursively check the given node and all children for validation messages and return a Map of core nodes to validation messages, making it ideal for use with forms:

::Example
---
name: "Submit invalid"
file: "_content/_examples/submit-invalid/submit-invalid.vue"
---
::
