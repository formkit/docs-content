---
title: Date Picker Input
description: A Pro input that allows users to select a date via pop up calendar or typing the date in using their preferred localization.
---

:InputPageHero{title="Date Picker"}

:PageToc

:ProInstallSnippet
## Basic example

The `datepicker` input allows users to select a date from a customizable calendar, and type the date directly into the input with full internationalization support.

::Example
---
  name: 'Datepicker basic'
  file: '/_content/examples/datepicker/datepicker-basic.vue'
  min-height: 500
---
::

## Modes

FormKit uses a unique masking solution to allow users to type dates into the datepicker input (while limiting the available options to only valid values) or select their date via a calendar input.
### Dual entry

By default users can click or tab into any of the "parts" of the displayed date (month, date year etc) in the text input and type their desired value. Matching values will be displayed with automatic completion. In addition to typing the value of each segment of the date, users can hit the up arrow/down arrow keys to cycle through available options for each segment.

By clicking the "calendar" icon to the right of the input, users can also display a calendar popup to select their date visually.

::Example
---
  name: 'Datepicker basic'
  file: '/_content/examples/datepicker/datepicker-dual-mode.vue'
  min-height: 500
---
::

::Callout
---
  type: tip
  label: Overlay mode
---
When using dual entry mode you must enable the `overlay` to show a placeholder. This is not necessary with `picker-only` enabled.
::

### Picker only

At times it may be desirable to disable the text-entry mechanism all together and ensure someone uses the date picker dialog to enter their date. This can be enabled by adding a `picker-only` prop. In `picker-only` mode clicking on the input will open the dialog immediately. Additionally using an `overlay` is not required for placeholder support.

::Example
---
  name: 'Datepicker picker-only'
  file: '/_content/examples/datepicker/datepicker-picker-only.vue'
  min-height: 500
---
::

## Date format

The date picker supports `Intl.DateTimeFormat` "styled dates", as well as token based date formats. To change the format displayed to the user, modify the `format` prop.

### Styled formats

If your audience is international, you should consider sticking with "styled dates" since they are the most natural date formats in each locale. The default format for a date picker is `long`.

The `format` prop can accept a simple string like `long` or `medium` in which case it uses the corresponding `Intl.DateTimeFormat` `dateStyle`. Alternatively you can provide an object with `date` and `time` properties and their respective `Intl.DateTimeFormat` styles (`{ date: 'long', time: 'short' }`).


::Example
---
  name: 'Datepicker style formats'
  file: '/_content/examples/datepicker/datepicker-styles.vue'
  min-height: 500
---
::

#### Date styles

Enable any of the following date styles by assigning the `format` prop

Format Style | Examples
-------|------------
full | `Wednesday, March 1, 2023`, `Mercoledì 1 marzo 2023`
long | `March 1, 2023`, `1 marzo 2023`
medium | `Mar 6, 2023`, `6 mar 2023`
short | `3/1/23`, `1/3/23`

#### Time styles

Format style | Examples
-------|------------
long | `7:05:00 PM`, `19:05:00`
medium | `7:05:00 PM`, `19:05:00`
short | `7:05 PM`, `19:05`

### Token formats

You can use token based
## Sequence

## Disabling dates