---
title: Mask Input
description: An input that formats text to a given pattern as a user types.
---

<InputPageHero title="Mask"></InputPageHero>

<page-toc></page-toc>

## Introduction

The `mask` input automatically transforms user input to match a provided format. Used appropriately, mask inputs can provide an improved user experience by removing any ambiguity for the desired value (for example a phone number or social security number).

## Basic example

<example
  name="Mask input"
  file="/_content/examples/mask/basic.vue">
</example>

## Masks

The mask is the desired format of the input. It is passed to the `mask` prop where it is parsed for tokens. The mask is comprised of:

- **Tokens** - A string representation of a user-editable region. Shown in white below.
- **String literals** -  Any character that is not a token. Not user-editable. Shown in orange below.

<img class="max-w-full rounded-card" src="https://cdn.formk.it/web-assets/mask-format-2.png" alt="Image of mask string with tokens and string literals in different colors.">

### Built-in tokens

The mask input comes with 2 built-in tokens:

- `#` Accepts a digit character.
- `a` Accepts an alphabetical character.

<example
  name="Mask input"
  file="/_content/examples/mask/simple.vue">
</example>

## Modes

The mask input supports 3 entry modes:

- Shift (default)
- Replace
- Select

### Shift & replace mode

By default, the characters of a mask are automatically shifted forward when typing. This is notable when a mask is already populated and you place the cursor at or near the beginning of the input and begin typing. The characters following your cursor are "shifted" forward as you type. In replace mode, however, subsequent characters are overwritten with a new value:

<example
  name="Mask input - shift vs replace"
  file="/_content/examples/mask/shift-replace.vue">
</example>

### Select mode

In select mode, equivalent `char` type tokens are grouped into selectable text ranges. FormKit automatically selects these text ranges when clicking or focusing the input. These selection ranges are maintained as the user is typing. When used tastefully, this produces a clear UX as the user is aware of what value they are expected to enter.

Additionally, when an input is in select mode, the user can use the arrow or tab keys to shift their focus from one selection range to another:

<example
  name="Mask input - select"
  file="/_content/examples/mask/select.vue">
</example>

<callout type="tip" label="Select options">
The <code>selectDirection</code> token property controls which direction new
characters flow into the selected range. You can fill "empty" selection characters with a predetermined value (like leading zeros "0") by using the <code>selectFill</code> property. See <a href="#creating-new-tokens">token properties</a>.
</callout>

## Tokens

### Creating new tokens

What if a pattern can accept letters _or_ numbers in the same position? It’s relatively simple to create new tokens. There are 2 types of tokens:

- `char` accepts a single character.
- `enum` accepts any strings from an array of possible values.

The following properties must be defined to create a new token:

```js
{
  /**
   * The type of token. Can be a `char` or `enum`.
   */
  type: 'char',
  /**
   * The token to parse out of the mask.
   */
  token: 'z',
  /**
   * A placeholder character to display in the input when `show-mask` is
   * enabled.
   */
  placeholder: '_',
  /**
   * When using `select` mode, determines which direction do new characters flow
   * in.
   */
  selectDirection: 'left',
  /**
   * (Only for `char` type). A regular expression that describes the types of
   * characters that can appear in this slot. This pattern will be evaluated
   * against individual characters — not in the context of the entire string.
   */
  pattern: /[A-Za-z0-9]/,
  /**
   * (Only for `char` type, optional). An optional character to "fill" the
   * selection range with when in select mode. For example, a selectFill set to
   * "0" can be helpful with numbers to produce leading zeros like "001".
   */
  selectFill: "0",
  /**
   * (Only for `enum` type). An array of possible values.
   */
  values: [
    'March',
    'April',
    'May'
  ],
}
```

For example, a new token that accepts letters and numbers, and is represented by the letter `z` in the mask string would look like this:

```js
{
  type: 'char',
  token: 'z',
  pattern: /[A-Za-z0-9]/,
  placeholder: '_',
  selectDirection: 'left',
}
```

#### Add tokens via prop

To pass a new token to the mask input, you can use the `tokens` prop which
expects an object with keys that match the `token` property. For example, our new token in the above example can be applied directly:

<example
  name="Mask input"
  file="/_content/examples/mask/tokens-prop.vue">
</example>

#### Add tokens globally

To register your mask tokens globally, extend the `config` property of your global FormKit configuration:

<example
  name="Mask input global"
  :file="['/_content/examples/mask/tokens-global.vue', '/_content/examples/mask/formkit.config.js']"
  init-file-tab="formkit.config.js">
</example>

### Modify tokens

In addition to creating new tokens, the `tokens` prop can also modify existing tokens. Any value provided to the `tokens` prop will be merged into the existing tokens for that input. For example, the digit token’s (`#`) has no `selectFill` by default. To add one, simply extend it:

<example
  name="Mask input - select fill"
  file="/_content/examples/mask/select-fill.vue">
</example>

### Char tokens

`char` tokens accept a single character. In order for a character to be accepted, it must match the `token.pattern` regular expression. The two built in tokens (`#` and `a`) are both `char` type tokens.

In `select` mode, `char` tokens are grouped together into a selection range.

<callout type="tip" label="Placeholders">
A <code>char</code> token should only ever represent 1 character, and its placeholder should also only be a single character in length.
</callout>

### Enum Tokens

Enum tokens allow for variable length masks within a predefined set of options. As a user begins to type, the enum token’s value will change to the first matching value, and the selection range will reflect the currently unmatched characters. In practice, this operates much like an autocomplete for that specific token. Additionally, users can cycle through available options for a given token by hitting the up/down arrow keys.

A date with auto-completing month names could be well represented with enums:

<example
  name="Mask input – enum"
  file="/_content/examples/mask/enum.vue">
</example>

<callout type="warning" label="Select mode requirement">
Enums are only supported in <code>select</code> mode. When any <code>enum</code> token is found in a mask string, the <code>mode</code> of the input is forcibly set to <code>select</code>.
</callout>

## Mask values

### Incomplete values

A mask’s value is not considered "complete" until the user has filled the entire pattern. Until that point, FormKit will consider the value of the input "empty". This makes it convenient to use with validation rules like `required`. However, if you’d like to accept incomplete values, you can via the `allow-incomplete` prop:

<example
  name="Mask input - allow incomplete"
  file="/_content/examples/mask/allow-incomplete.vue">
</example>

### Unmasked values

By default, the value of a mask input includes the formatting provided via the `mask` prop. However, if you'd like the raw unmasked value with the string literals removed, you can use the `unmask-value` prop:

<example
  name="Mask input - unmask value"
  file="/_content/examples/mask/unmask-value.vue">
</example>

## Hiding the mask

By default, the `mask` input displays each token’s placeholder character. You can disable this behavior (except in select mode) while still applying formatting automatically via the `show-mask` prop:

<example
  name="Mask input - show mask"
  file="/_content/examples/mask/show-mask.vue">
</example>

## Props & Attributes

<reference-table input="mask" :data="[
  {prop: 'allow-incomplete', type: 'boolean', default: 'false', description: 'By default, the value of a mask input is empty until the pattern is complete. This prop allows the input to use incomplete values.'},
  {prop: 'mask', type: 'string', default: 'none', description: 'The mask to apply. This is a string composed of tokens (like “#”) and literal string values.'},
  {prop: 'mode', type: 'string', default: 'shift', description: 'Determines how the mask input operates. Options are <code>shift</code>, <code>replace</code> and <code>select</code>.'},
  {prop: 'show-mask', type: 'boolean', default: 'true', description: 'Displays a live representation of the pattern’s placeholder as the internal value of the input.'},
  {prop: 'tokens', type: 'Object', default: '{}', description: 'Add new tokens or modify existing ones.'},
  {prop: 'unmask-value', type: 'boolean', default: 'false', description: 'By default, the value of the input is the same as what is displayed (with formatting). The string literals will removed from the value if this prop is set to true.'}]">
</reference-table>

## Sections

<section-keys-intro></section-keys-intro>

<div>
  <formkit-input-diagram
    label-content="Enter a phone number"
    prefix-icon-content="📞"
    input-icon-content="+1 (434) 221-7541"
    suffix-content="❤️"
    help-content="Please enter your phone number."
    message-content="Phone number is required."
  >
  </formkit-input-diagram>
</div>

<reference-table type="sectionKeys" primary="section-key">
</reference-table>
