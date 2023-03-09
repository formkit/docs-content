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

You can use the `format` prop to explicitly set a tokenized date format. A token format is represented by a string with any arbitrary characters and one or more of the strings in the table below.

FormKit interfaces with the `Intl.DateTimeFormat` to automatically internationalize tokens based on the current `locale`. For example, the token `MMMM` for `2000-01-01` would produce `January` for the `en` locale but would produce `一月` for the `zh` locale.

::Callout
---
  type: 'warning'
  label: 'Dates required'
---
It is possible, when using tokens, to create non-parsable dates. For example, if your input only displays the day of the week (`dddd`). You can use non-parsable date formats only in `picker-only` mode. If you’d like to allow your users to type in their date, your format must include at least a month, day, and year token.
::

Token    | Examples                | Description
---------|-------------------------|-------------------------------------
`YY`     | `99`, `23`, `00`        | 2 digit year
`YYYY`   | `1999`, `2023`, `2100`  | 4 digit year
`M`      | `1`, `12`               | The month 1-12
`MM`     |  `01`, `12`             | The month 01-12
`MMM`    | `Jan`, `Feb`            | Short name Jan-Dec
`MMMM`   | `January`, `February`   | Full name January - December
`D`      | `1`, `9`, `22`          | The day of the month 1-31
`DD`     | `01`, `09`, `22`        | The day of the month 01-31
`d`      | `M`, `T`, `W`, `T`, `F`, `S`, `S` | Single digit day "T"
`ddd`    | `Thu`, `Sat`            | Short day name Thu
`dddd`   | `Monday`, `Tuesday`     | Full day name Wednesday
`H`      | `0`, `13`, `23`         | Minimum hour digits, 24 hour, 0-23
`HH`     | `00`, `13`, `23`        | 2 hour digits, 24 hour, 00-23
`h`      | `12`, `1`, `11`         | Minimum hour digits, 12 hour clock, 1-12
`hh`     | `12`, `01`, `11`        | 2 hour digits, 12 hour clock, 01-12
`m`      | `1`, `59`               | The minute 0-59
`mm`     |  `01`, `59`             | The minute 00-59
`s`      | `1`, `59`               | The second 0-59
`ss`     | `01`, `59`              | The second 00-59
`a`      | `am`, `pm`              | am/pm
`A`      | `AM`, `PM`              | AM/PM


::Callout
---
  type: 'tip'
  label: 'Internationalization'
---
Although FormKit will internationalize your tokens automatically — if your form is intended for a broadly international audience consider using date styles instead of tokens as this leads to a more readable date in many locales.
::

::Example
---
  name: 'Datepicker tokens'
  file: '/_content/examples/datepicker/datepicker-tokens.vue'
  min-height: 500
---
::

To include letters in the your format that are themselves tokens (like `a`) you can escape those tokens with a backslash `\` before the character.

::Example
---
  name: 'Datepicker escape tokens'
  file: '/_content/examples/datepicker/datepicker-escape-tokens.vue'
  min-height: 500
---
::

## Panel sequence

The datepicker’s calendar popup has four "panels":

- `day` — Shows a traditional calendar view of a month which each day selectable.
- `month` — Shows the 12 months of the year.
- `year` — Shows a decade or years at a time.
- `time` — Shows the time of day.

When a user opens the datepicker’s popup, they will be shown one or more of these panels. You can modify which panels are displayed to the user and the sequence those panels should be displayed in by providing a `sequence` prop. The default `sequence` value is `['day']` (which allows you to navigate to the `month` and `year` panels).

For example, when selecting a birthday it is natural to first select the birth year, then the month, then the day. The `sequence` prop allows this behavior.

::Example
---
  name: 'Datepicker sequence'
  file: '/_content/examples/datepicker/datepicker-sequence.vue'
  min-height: 500
---
::

### Selecting time

The `time` panel can be used to allow a user to select a specific time of day. If you choose a `format` that includes time (like `YYYY-MM-DD HH:mm`) — you’ll likely want to include `time` panel to your sequence.

::Example
---
  name: 'Datepicker time'
  file: '/_content/examples/datepicker/datepicker-time.vue'
  min-height: 500
---
::

## Values

Like all inputs, the `value` of the datepicker is both what is produced by the datepicker, and what is read back into the datepicker for hydration. By default the format of the value is a UTC normalized [ISO8601](https://www.w3.org/TR/NOTE-datetime) string (example: `2014-11-27T03:59:00.000Z`). However, this format can be changed to any of the supported date style or a token formats [listed above](#date-format) by using the `value-format` prop.

A valid question is why not always use `ISO8601`? Although it’s the most popular way to work with dates — it’s machine readable and human readable — it’s not *very* human readable. For example, if your form sends a contact request email to an catering business then `ISO8601` would likely not be the best choice.

::Callout
---
  type: tip
  label: Complete dates
---
The value format must contain all the necessary data to re-constitute a date object, at a minimum this includes month, day, year. If your input requests information from the user that is not represented in your value format, those details will be lost.
::

### Date styles

To use a date style as the value, simply pass the style you’d like to use to the `value-format` prop.

::Example
---
  name: 'Datepicker style value'
  file: '/_content/examples/datepicker/datepicker-style-value.vue'
  min-height: 500
---
::

### Token formats

Values can also be represented in any arbitrary format by using formatting tokens.

::Example
---
  name: 'Datepicker token value'
  file: '/_content/examples/datepicker/datepicker-token-value.vue'
  min-height: 500
---
::

### Setting values (hydrating)

Values passed to a datepicker must:

1. Match the `value-format` in the current `value-locale` OR.
2. Be a native JavaScript `Date` object.

Although native `Date` objects are always accepted as valid *inputs* for a datepicker, they will be immediately transformed into the `value-format` specified.

#### Matching the `value-format`


::Example
---
  name: 'Datepicker value locale'
  file: '/_content/examples/datepicker/datepicker-matching-value.vue'
  min-height: 500
---
::

#### Using a native `Date`

::Example
---
  name: 'Datepicker value locale'
  file: '/_content/examples/datepicker/datepicker-native-date.vue'
  min-height: 500
---
::


### Value locale

Since the format of the value needs to be parsed using the same locale it was created with, it is recommended to always specify the `value-locale` when defining a custom `value-format`. This ensures that no matter what the locale of the user entering the date is the value will stay consistent.

::Callout
---
  type: 'note'
  label: 'Timezone vs Locale'
---
Changing the `value-locale` has no effect on the `timezone` of the date being picked. See the [timezone documentation](#timezone) below for further explanation.
::

::Example
---
  name: 'Datepicker value locale'
  file: '/_content/examples/datepicker/datepicker-value-locale.vue'
  min-height: 500
---
::

## Timezones

Time is a notoriously hard thing to work with in any software environment, but especially browser-based JavaScript. The `datepicker` provides some options to help work around these challenges.


::CollapsedDetails
---
  label: 'Timezones, dates, and formats case study'
---
In order to work with dates and times in JavaScript it is useful to have an initial understand of the `Date` object. The date object in JavaScript is fundamentally a a Unix timestamp (number of milliseconds since `Jan 1 1970 at 00:00:00Z`). However, it is *always* localized to the client’s time. This localization is expressed in an an offset from `UTC`. Your browser’s current time is:

:CurrentTime{label="Client (browser) time"}

When the offset is applied to the "clock time" you arrive at the current time in UTC:

:CurrentTime{methodName="toISOString" label="UTC"}

When using `value-format` tokens in the datepicker, those tokens will operate using the client’s timezone. For example, if your format requests the `HH` token it would return:

:CurrentTime{methodName="getHours" label="HH format token"}

Compare that to the above dates, and you’ll see it is the same as the `hours` portion of the local time. Why does this matter? Read on.

### A case study

Let’s consider a reservation app for a restaurant located in Amsterdam (`UTC +100/+200`). It’s a popular destination for tourists and they often make reservations several weeks before they travel (while in their home country).

The datepicker, by default, will ask the tourist for the date and time of their desired reservation — but (by default) the selection will be their *local* time, not the time in Amsterdam. Even though the `value-format` is outputting UTC, the time will not be the intended reservation time in Amsterdam (unless they happen to be in the same timezone).

Generally speaking, there are 2 solutions to this problem:

#### Option 1: Indeterminate time

Use an "indeterminate" time (sometimes referred to as "wall time"). An indeterminate time is a time without a specific correlation the underlying Unix Timestamp. For example, `2pm on March 13th` is not UTC and has no explicit offset. `2pm on March 13th` describes an specific time at an indeterminate location/timezone. You can do this with format tokens like (`YYYY-MM-DD HH:mm`) as long as you do not use the offset in your value (`Z`).

This would work for our restaurant app as long as a backend is able to attach an appropriate timezone or offset to this indeterminate time `2023-03-13 14:00 GMT+0100` to arrive at the appropriate UTC time (what this fictitious app requires in it’s database). The remaining challenge, for a backend developer, is knowing what offset to apply to the date to ensure it becomes "Amsterdam time" (this offset varies based on the time of year due to daylight savings in `Europe/Amsterdam`).

#### Options 2: Using the datepicker’s `timezone` prop

Alternatively, the `timezone` prop of the datepicker will perform the offset correction for you automatically. Simply state "where" the datepicker is picking time for — in our example `timezone="Europe/Amsterdam"`. The user’s experience will not change at all, but the time they select will be in the target timezone. A user in `America/New_York` (`+0400`) who selects `2pm on March 13th` in their datepicker, will yield a UTC value of `2023-03-13T13:00:00Z` which is `2pm` in Amsterdam. This allows for simple storage and hydration of your for using a `UTC` format.
::

### Indeterminate

By default the datepicker uses the client’s local timezone when a selection is made. The value of the output is determined by the `value-format` ([see above](#values)) — by default this is a `UTC` normalized `ISO8601` string. However, by specifying a custom format you can achieve an "indeterminate" time (also called "wall time"). This is a date and/or time with no specific correlation to a given timezone.

For example, when you set an alarm on your phone for `8:00 AM` — that time is "indeterminate" — it has no correlation to timezone. If you live in Rome, and travel to Tokyo, your alarm will ring at `8:00 AM` in Tokyo the same as it would ring at `8:00 AM` in Rome. It’s impossible to represent a this as UTC.

You can achieve indeterminate time with the datepicker by providing no timezone or offset information in your `value-format` — it is up to the interpreter of the date to add that information. The tokens in a `value-format` always output local client values — so by leaving any timezone or offset (`Z`) data out of the value it is inherently "indeterminate".

::Example
---
  name: 'Datepicker indeterminate'
  file: '/_content/examples/datepicker/datepicker-indeterminate.vue'
  min-height: 600
---
::

### Specifying a timezone

For some applications, it is necessary to select the time in a given location — this can be quite challenging. To help ease this pain, the datepicker supports the ability to explicitly specify the `timezone` of the input.

The `timezone` prop lets you specify the "location" of the datepicker based on browser supported [IANA timezones](https://www.iana.org/time-zones). This is important when you’d like to allow users to select a date and time in a given geographic location, no matter what the client’s location is. Some example use cases are:

- Restaurant reservations
- Car rental pickup time
- Hotel check in time

There are plenty of times where the `timezone` should *not* be used (default’s to client time):

- Scheduling a Zoom meeting
- Setting a reminder notification
- Creating a calendar event

In the example below, a user needs to pickup a rental car in Kolkata, India after an international flight. The user looks at their ticket — the flight arrives in Kolkata at `1:45 PM`. They’d like to pick the car up at `2:30 PM`. These facts are true no matter where in the world the user is booking the trip from. In this case we should set the timezone to `Asia/Kolkata`. The offset in Kolkata is `+5:30` — so selecting `2:30 PM` in `Kolkata` is equivalent to `09:00 AM` UTC.

::Example
---
  name: 'Datepicker timezone'
  file: '/_content/examples/datepicker/datepicker-timezone.vue'
  min-height: 600
---
::

## Disabling dates