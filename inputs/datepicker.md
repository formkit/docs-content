---
title: Datepicker Input
description: A Pro input that allows users to select a date via pop up calendar or typing the date in using their preferred localization.
---

::InputPageHero
---
type: "Datepicker"
---
::

:PageToc

:ProInstallSnippet

## Basic example

The `datepicker` input allows users to select a date from a customizable calendar, and type the date directly into the input with full internationalization support.

::VideoCard
---
title: "Datepicker Overview"
poster: "https://cdn.formk.it/web-assets/Datepicker_thumbnail.jpg"
watch-time: "5 mins"
youtube-id: "c-P-DUZeU1U"
---
::

::Example
---
  name: "Datepicker basic"
  file: "_content/_examples/datepicker/datepicker-basic.vue"
  min-height: 500
---
::

## Modes

FormKit uses a unique masking solution to allow users to type dates into the datepicker input (while limiting the available options to only valid values) or select their date via a calendar input.
### Dual entry

- **Text entry** - By default, users can click or tab into any of the "parts" of the displayed date (month, date, year, etc.) in the text input and type their desired value. Matching values will be displayed with automatic completion. In addition to typing, users can hit the up/down arrow keys to cycle through available options for each segment.
- **Picker entry** - By clicking the "calendar" icon to the right of the input, users can also display a calendar popup to select their date visually:

::Example
---
  name: "Datepicker basic"
  file: "_content/_examples/datepicker/datepicker-dual-mode.vue"
  min-height: 500
---
::

::Callout
---
  type: tip
  label: Placeholder & Overlay
---
To show a placeholder when in dual entry mode, you must enable the mask `overlay`. This is not necessary with `picker-only` enabled. Learn more about [masks and overlays here](/inputs/mask#overlay-colorizing-a-mask).
::

### Picker only

You can disable the text-entry mechanism and ensure someone uses the datepicker dialog to enter their date by adding the `picker-only` prop. In `picker-only` mode, clicking on the input will open the dialog immediately. Additionally, using an `overlay` is not required for placeholder support:

::Example
---
  name: "Datepicker picker-only"
  file: "_content/_examples/datepicker/datepicker-picker-only.vue"
  min-height: 500
---
::

## Date format

The datepicker supports [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) "styled dates", as well as token-based date formats. To change the format displayed to the user, modify the `format` prop.

### Styled formats

If your audience is international, you should consider sticking with "[styled dates](#date-styles)" since they are the most natural date formats in each locale. The default format for a datepicker is `long`.

The `format` prop can accept a simple string like `long` or `medium`, in which case it uses the corresponding `Intl.DateTimeFormat` `dateStyle`. Alternatively, you can provide an object with `date` and `time` properties and their respective `Intl.DateTimeFormat` styles (`{ date: 'long', time: 'short' }`).


::Example
---
  name: "Datepicker style formats"
  file: "_content/_examples/datepicker/datepicker-styles.vue"
  min-height: 500
---
::

#### Date styles

Enable any of the following date styles with the `format` prop:

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

FormKit interfaces with the [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) to automatically internationalize tokens based on the current `locale`. For example, the token `MMMM` for `2000-01-01` would produce `January` for the `en` locale but would produce `一月` for the `zh` locale.

::Callout
---
  type: "warning"
  label: "Dates required"
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
`ddd`    | `Thu`, `Sat`            | Short day name "Thu"
`dddd`   | `Monday`, `Tuesday`     | Full day name "Wednesday"
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
  type: "tip"
  label: "Internationalization"
---
Although FormKit will internationalize your tokens automatically — if your form is intended for a broadly international audience consider using date styles instead of tokens as this leads to a more readable date in many locales.
::

::Example
---
  name: "Datepicker tokens"
  file: "_content/_examples/datepicker/datepicker-tokens.vue"
  min-height: 500
---
::

#### Escaping tokens

To include letters in the your format that are themselves tokens (like `a`), you can escape those tokens with a backslash `\` before the character:

::Example
---
  name: "Datepicker escape tokens"
  file: "_content/_examples/datepicker/datepicker-escape-tokens.vue"
  min-height: 500
---
::

## Panel sequence

The datepicker’s calendar popup has four "panels":

- `day` — Shows a traditional calendar view of a month with each day selectable.
- `month` — Shows the 12 months of the year.
- `year` — Shows a decade of years at a time.
- `time` — Shows the time of day.

When a user opens the datepicker’s popup, they will be shown one or more of these panels. You can modify which panels are displayed to the user and the sequence those panels should be displayed in by providing a `sequence` prop. The default `sequence` value is `['day']` (which allows you to navigate to the `month` and `year` panels).

For example, when selecting a birthday, it is natural to first select the birth year, then the month, then the day. The `sequence` prop allows this behavior:

::Example
---
  name: "Datepicker sequence"
  file: "_content/_examples/datepicker/datepicker-sequence.vue"
  min-height: 500
---
::

### Selecting time

The `time` panel can be used to allow a user to select a specific time of day. If you choose a `format` that includes time (like `YYYY-MM-DD HH:mm`), you’ll likely want to include `time` panel to your sequence:

::Example
---
  name: "Datepicker time"
  file: "_content/_examples/datepicker/datepicker-time.vue"
  min-height: 500
---
::

## Values

Like all inputs, the `value` of the datepicker is both what is produced by the datepicker, and what is read back into the datepicker for hydration. By default, the format of the value is a UTC-normalized [ISO8601](https://www.w3.org/TR/NOTE-datetime) string (example: `2014-11-27T03:59:00.000Z`). However, this format can be changed to any of the supported date style or a token formats [listed above](#date-format) by using the `value-format` prop.

A valid question is why not always use `ISO8601`? Although it’s the most popular way to work with dates — it’s machine *and* human readable — it’s not *very* human readable. For example, if your form sends a contact request email to a catering business, then `ISO8601` would likely not be the best choice.

::Callout
---
  type: tip
  label: Complete dates
---
The value format must contain all the necessary data to re-constitute a date object, at a minimum this includes month, day, year. If your input requests information from the user that is not represented in your value format, those details will be lost.
::

### Date styles

To use a date style as the value, simply pass the style you’d like to use to the `value-format` prop:

::Example
---
  name: "Datepicker style value"
  file: "_content/_examples/datepicker/datepicker-style-value.vue"
  min-height: 500
---
::

### Token formats

Values can also be represented in any arbitrary format by using formatting tokens:

::Example
---
  name: "Datepicker token value"
  file: "_content/_examples/datepicker/datepicker-token-value.vue"
  min-height: 500
---
::

### Setting values (hydrating)

Values passed to a datepicker must:

1. Match the `value-format` in the current `value-locale` OR,
2. Be a native JavaScript `Date` object.

Although native `Date` objects are always accepted as valid *inputs* for a datepicker, they will be immediately transformed into the `value-format` specified.

#### Matching the `value-format`


::Example
---
  name: "Datepicker value locale"
  file: "_content/_examples/datepicker/datepicker-matching-value.vue"
  min-height: 500
---
::

#### Using a native `Date`

::Example
---
  name: "Datepicker value locale"
  file: "_content/_examples/datepicker/datepicker-native-date.vue"
  min-height: 500
---
::


### Value locale

Since the format of the value needs to be parsed using the same locale it was created with, it is recommended to always specify the `value-locale` when defining a custom `value-format`. This ensures that no matter what the locale of the user entering the date is, the value will stay consistent:

::Callout
---
  type: "note"
  label: "Timezone vs Locale"
---
Changing the `value-locale` has no effect on the `timezone` of the date being picked. See the [timezone documentation](#timezone) below for further explanation.
::

::Example
---
  name: "Datepicker value locale"
  file: "_content/_examples/datepicker/datepicker-value-locale.vue"
  min-height: 500
---
::

## Timezones

Time is a notoriously hard thing to work with in any software environment, but especially browser-based JavaScript. The `datepicker` provides some options to help work around these challenges.


::CollapsedDetails
---
  label: "Timezones, dates, and formats case study"
---
In order to work with dates and times in JavaScript, it is useful to have a basic understanding of the `Date` object. The date object in JavaScript is fundamentally a Unix timestamp (number of milliseconds since `Jan 1 1970 at 00:00:00Z`). However, it is *always* localized to the client’s time. This localization is expressed in an an offset from `UTC`. Your browser’s current time is:

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

Use an "indeterminate" time (sometimes referred to as "wall time"). An indeterminate time is a time without a specific correlation the an underlying Unix Timestamp. For example, `2pm on March 13th` is not UTC and has no explicit offset. `2pm on March 13th` describes a specific time at an indeterminate location/timezone. You can do this with format tokens like (`YYYY-MM-DD HH:mm`) as long as you do not use the offset in your value (`Z`).

This would work for our restaurant app as long as a backend is able to attach an appropriate timezone or offset to this indeterminate time `2023-03-13 14:00 GMT+0100` to arrive at the appropriate UTC time (what this fictitious app requires in its database). The remaining challenge, for a backend developer, is knowing what offset to apply to the date to ensure it becomes "Amsterdam time" (this offset varies based on the time of year due to daylight savings in `Europe/Amsterdam`).

#### Options 2: Using the datepicker’s `timezone` prop

Alternatively, the `timezone` prop of the datepicker will perform the offset correction for you automatically. Simply state "where" the datepicker is picking time for — in our example `timezone="Europe/Amsterdam"`. The user’s experience will not change at all, but the time they select will be in the target timezone. A user in `America/New_York` (`+0400`) who selects `2pm on March 13th` in their datepicker, will yield a UTC value of `2023-03-13T13:00:00Z` which is `2pm` in Amsterdam. This allows for simple storage and hydration of your date using a `UTC` format.
::

### Indeterminate timezone

By default, the datepicker uses the client’s local timezone when a selection is made. The value of the output is determined by the `value-format` ([see above](#values)) — by default this is a `UTC` normalized `ISO8601` string. However, by specifying a custom format, you can achieve an "indeterminate" time (also called "wall time"). This is a date and/or time with no specific correlation to a given timezone.

For example, when you set an alarm on your phone for `8:00 AM` — that time is "indeterminate" — it has no correlation to timezone. If you live in Rome, and travel to Tokyo, your alarm will ring at `8:00 AM` in Tokyo the same as it would ring at `8:00 AM` in Rome. It’s impossible to represent a this as UTC.

You can achieve indeterminate time with the datepicker by providing no timezone or offset information in your `value-format` — it is up to the interpreter of the date to add that information. The tokens in a `value-format` always output local client values — so by leaving any timezone or offset (`Z`) data out of the value, it is inherently "indeterminate":

::Example
---
  name: "Datepicker indeterminate"
  file: "_content/_examples/datepicker/datepicker-indeterminate.vue"
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

In the example below, a user needs to pickup a rental car in Kolkata, India after an international flight. The user looks at their ticket — the flight arrives in Kolkata at `1:45 PM`. They’d like to pick the car up 45 minutes later at `2:30 PM`. These facts are true no matter where in the world the user is booking the trip from. In this case, we should set the timezone to `Asia/Kolkata`. The offset in Kolkata is `+5:30` — so selecting `2:30 PM` in `Kolkata` is equivalent to `09:00 AM` UTC:

::Example
---
  name: "Datepicker timezone"
  file: "_content/_examples/datepicker/datepicker-timezone.vue"
  min-height: 600
---
::

::Callout
---
  type: "tip"
  label: "Polyfilling Timezones"
---
Most browsers ship with a comprehensive IANA database built into `Intl.DateTimeFormat`. This is excellent since FormKit does not need to ship the (quite extensive) timezone database to the client’s browser. However, some older browser may not have the IANA database. This data can be polyfilled easily by using [polyfill.io](https://polyfill.io/v3/url-builder) with `Intl.DateTimeFormat.~timeZone.all`.
::

## Disabling dates

It is often necessary to disable specific dates in the datepicker. There are three ways to disable dates in the datepicker:

- `min-date` - a prop to control what the first available date is.
- `max-date` - a prop to control what the last available date is.
- `disabled-dates` - a prop to control whether or not any arbitrary date should be disabled.

Any date that is disabled cannot be selected in the datepicker’s pop up, however an unavailable date can still be set as the initial value or by typing it into the input (when it isn’t in `picker-only` mode). To handle these edge cases the datepicker has a built-in validation rule (that cannot be disabled) that ensures only valid dates can be submitted. The validation rule’s key is `invalidDate`.

### Min date

Often it is necessary to disable dates that are prior to a particular date. For example, booking a hotel room should only happen for dates in the future. To do this, use the `min-date` prop with either an `ISO8601` compatible string or a native `Date` object:

::Example
---
  name: "Datepicker min-date"
  file: "_content/_examples/datepicker/datepicker-min-date.vue"
  min-height: 500
---
::

### Max date

To disable all dates after a given date, use the `max-date` prop. For example, a birthday selector should only allow past dates. To do this, use the `max-date` prop with either an `ISO8601` compatible string or a native `Date` object:

::Example
---
  name: "Datepicker min-date"
  file: "_content/_examples/datepicker/datepicker-max-date.vue"
  min-height: 500
---
::

::Callout
---
  type: "tip"
  label: "Min & max dates together"
---
You can use `min-date` and `max-date` at the same time. Not only will this limit the range of dates, but additionally it will limit the available *years* to only valid years when using text entry. 
::

### Disabled days

Often our applications require substantially more granularity when disabling dates than `min-date` and `max-date` allows. The datepicker allows fine-grained control by leveraging the `disabled-days` prop.

The `disabled-days` prop expects a function that is passed 2 arguments: the [core node](http://localhost:3000/essentials/architecture#node) and a `Date` object. The responsibility of the function is to return a boolean indicating if the date is disabled (`true` is disabled).

The `disabled-days` prop supersedes `min-date` and `max-date` — you can choose to re-implement the base functionality by accessing `node.props.minDate` or `node.props.maxDate`.

::Callout
---
  type: warning
  label: Fast and synchronous
---
It’s important that the provided function is fast and synchronous — it will be called frequently and repeatedly. For example, if you need to fetch information from a database, do it outside of this function and use this function to access memoized results.
::

#### Example: disabled weekends
::Example
---
  name: "Datepicker disabled weekends"
  file: "_content/_examples/datepicker/datepicker-disabled-days-weekend.vue"
  min-height: 500
---
::

#### Example: fetch from API
::Example
---
  name: "Datepicker random disabled"
  file: "_content/_examples/datepicker/datepicker-random-disabled.vue"
  min-height: 500
---
::

### Scan for availability

When navigating the calendar pop up via keyboard, the datepicker will not allow you to select a disabled date. However this can be annoying as it can create areas of inaccessibility if some available dates are "sandwiched" between unavailable dates.

To make the user experience better, the datepicker will automatically scan forward or backward (depending on the direction desired) for the next available date to select. The maximum number of days to scan for an available day is controlled by the `maxScan` prop (7 days by default):

#### Example: max-scan
::Example
---
  name: "Datepicker max-scan"
  file: "_content/_examples/datepicker/datepicker-max-scan.vue"
  min-height: 500
---
::

## Clearable

The datepicker input can be cleared by clicking the "clear" button that appears when the input has a value — this clear button only appears when the `clearable` prop is added:

::Example
---
  name: "Datepicker clearable"
  file: "_content/_examples/datepicker/datepicker-clearable.vue"
  min-height: 500
---
::


## Props & Attributes

::ReferenceTable
---
input: "datepicker"
data: [
  {
    prop: "clearable",
    type: "string",
    default: "false",
    description: "Adds a clear button to the right of the value. This button only appears when the input has a completed value."
  },
  {
    prop: "date-format",
    type: "string",
    default: "D",
    description: "The token format to use in the calendar for dates in the month."
  },
  {
    prop: "disabled-days",
    type: "function",
    default: "min/max date logic",
    description: "A function that is passed the core node and a `Date` object and must return if the date is disabled (`true` is disabled)."
  },
  {
    prop: "format",
    type: "string/object",
    default: "date: 'long'",
    description: "The format to display to the user in the select input."
  },
  {
    prop: "max-date",
    type: "Date | ISO8601",
    default: "none",
    description: "The maximum date the user is allowed to select."
  },
  {
    prop: "max-scan",
    type: "number",
    default: "7",
    description: "The maximum number of days to scan forward or backward when looking for an available date to jump to via keyboard navigation."
  },
  {
    prop: "min-date",
    type: "Date | ISO8601",
    default: "none",
    description: "The earliest date the user is allowed to select."
  },
  {
    prop: "month-button-format",
    type: "string",
    default: "MMMM",
    description: "The date format token to use for the month panel button in the calendar popup."
  },
  {
    prop: "month-format",
    type: "string",
    default: "MMMM",
    description: "The date format token to use for each of the 12 months on the month panel."
  },
  {
    prop: "overlay",
    type: "boolean",
    default: "false",
    description: "Whether or not to display a mask overlay. Read more about overlays in the mask input documentation (has no effect in pickerOnly` mode)."
  },
  {
    prop: "picker-only",
    type: "boolean",
    default: "false",
    description: "Whether or not to allow the date to be entered via text input. When picker-only is enabled, only the picker can be used to select a date."
  },
  {
    prop: "show-months",
    type: "number",
    default: "1",
    description: "The number of months to render in the popup when on the day panel."
  },
  {
    prop: "sequence",
    type: "array",
    default: "['day']",
    description: "The sequence of panels to walk a user through when they open the datepicker calendar view. Options are `year`, `month`, `day`, `time`."
  },
  {
    prop: "value-format",
    type: "string/object",
    default: "ISO8601",
    description: "The format to record as the value of the input. This can be composed with any token format, date style, or `ISO8601`."
  },
  {
    prop: "value-locale",
    type: "string",
    default: "`node.props.locale`",
    description: "The locale to use for the `valueFormat`. When using format tokens in the `valueFormat` prop it is highly recommend to set an explicit `valueFormat`."
  },
  {
    prop: "week-start",
    type: "number",
    default: "0",
    description: "The day of the week to start the `day` panel’s calendar on. 0-6 where 0 = Sunday and 6 = Saturday."
  },
  {
    prop: "week-day-format",
    type: "string",
    default: "d",
    description: "The date format token used to render the day of the week column headers."
  },
  {
    prop: "year-format",
    type: "string",
    default: "YYYY",
    description: "The date format token used to render the years in the `year` panel."
  }
]
---
::


## Sections

You can target a specific section of an input using that section's "key", allowing you to modify that section's classes, HTML (via `:sections-schema`), or content (via slots). Read more about sections here.




::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--datepicker"
schema: [
  {
    name: "outer",
    position: "right",
    children: [
      {
        name: "wrapper",
        children: [
          {
            name: "label",
            content: "Select a date",
            class: "center-vert",
          },
          {
            name: "inner",
            children: [
              {
                name: "prefixIcon",
                class: "tiny-section",
              },
              {
                name: "prefix",
                class: "tiny-section",
              },
              {
                name: "input",
                content: "November 26, 2014",
              },
              {
                name: "openButton",
                position: "right",
                class: "small-pad center-vert",
                children: [
                  {
                    name: "calendarIcon",
                    content: "📅",
                    position: "right",
                  },
                ],
              },
              {
                name: "suffix",
                position: "right",
                class: "tiny-section",
              },
              {
                name: "suffixIcon",
                position: "right",
                class: "tiny-section",
              },
            ],
          },
        ],
      },
      {
        name: "help",
        content: "Pick your arrival date.",
        position: "right",
      },
      {
        name: "messages",
        children: [
          {
            name: "message",
            content: "Sorry, that date is not available.",
          },
        ],
      },
    ],
  },
]
---
::


### Overlay

This section is located inside the `inner` section when the `overlay` prop is added.

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--overlay"
schema: [
  {
    name: "overlay",
    children: [
      {
        name: "overlay-parts",
        class: "overlay-parts",
        children: [
          { name: "overlayPlaceholder",  },
          { name: "overlayLiteral" },
          { name: "overlayChar", position: "right" },
          { name: "overlayEnum", position: "right" },
        ]
      }
    ]
  },
]
---
::

### Years panel

The panel appears below the input element inside the `inner` section when the datepicker popup is open.

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--datepicker-panel"
schema: [
  {
    name: "panel-wrapper",
    position: "right",
    children: [
      {
        name: "panel-header",
        class: "panel-header",
        children: [
          {
            name: "prev",
            class: "icon-button",
            children: [
              {
                name: "prev-label",
                content: "Prev",
              },
              {
                name: "prev-icon",
                content: "👈",
              },
            ],
          },
          {
            name: "years-header",
            class: "header-main",
            content: "2010 - 2020",
          },
          {
            name: "next",
            position: "right",
            class: "icon-button",
            children: [
              {
                name: "next-label",
                position: "right",
                content: "Next",
              },
              {
                name: "next-icon",
                position: "right",
                content: "👉",
              },
            ],
          },
        ],
      },
      {
        name: "panel",
        position: "right",
        children: [
          {
            name: "years",
            class: "years",
            children: [
              {
                name: "year",
                content: "2010",
              },
              {
                name: "year",
                content: "2011",
              },
              {
                name: "year",
                content: "2012",
              },
              {
                name: "year",
                content: "2013",
              },
              {
                name: "year",
                content: "2014",
              },
              {
                name: "year",
                content: "2015",
              },
              {
                name: "year",
                content: "2016",
              },
              {
                name: "year",
                content: "2017",
              },
              {
                name: "year",
                content: "2018",
              },
              {
                name: "year",
                content: "2019",
              }
            ],
          }
        ]
      }
    ],
  },
]
---
::


### Months panel

The panel appears below the input element inside the `inner` section when the datepicker popup is open.

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--datepicker-panel"
schema: [
  {
    name: "panel-wrapper",
    position: "right",
    children: [
      {
        name: "panel-header",
        class: "panel-header",
        position: "right",
        children: [
          {
            name: "months-header",
            class: "header-main",
            children: [
              {
                name: "year-button",
                position: "right",
                content: "2027",
              }
            ]
          },
          {
            name: "panel-close",
            position: "right",
            class: "icon-button",
            children: [
              {
                name: "close-icon",
                position: "right",
                content: "X",
              },
            ],
          },
        ],
      },
      {
        name: "panel",
        position: "right",
        children: [
          {
            name: "months",
            class: "months",
            children: [
              {
                name: "month",
                content: "Jan",
              },
              {
                name: "month",
                content: "Feb",
              },
              {
                name: "month",
                content: "Mar",
              },
              {
                name: "month",
                content: "Apr",
              },
              {
                name: "month",
                content: "May",
              },
              {
                name: "month",
                content: "Jun",
              },
              {
                name: "month",
                content: "Jul",
              },
              {
                name: "month",
                content: "Aug",
              },
              {
                name: "month",
                content: "Sep",
              },
              {
                name: "month",
                content: "Oct",
              },
              {
                name: "month",
                content: "Nov",
              },
              {
                name: "month",
                content: "Dec",
              }
            ],
          }
        ]
      }
    ],
  },
]
---
::

### Day panel

The panel appears below the input element inside the `inner` section when the datepicker popup is open.


::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--datepicker-panel"
schema: [
  {
    name: "panel-wrapper",
    position: "right",
    children: [
      {
        name: "panel-header",
        class: "panel-header",
        children: [
          {
            name: "prev",
            class: "icon-button",
            children: [
              {
                name: "prev-label",
                content: "Prev",
              },
              {
                name: "prev-icon",
                content: "👈",
              },
            ],
          },
          {
            name: "days-header",
            class: "header-main",
            children: [
              {
                name: "month-button",
                content: "Feb",
                position: "right",
              },
              {
                name: "year-button",
                content: "2026",
                position: "right",
              }
            ]
          },
          {
            name: "next",
            position: "right",
            class: "icon-button",
            children: [
              {
                name: "next-label",
                position: "right",
                content: "Next",
              },
              {
                name: "next-icon",
                position: "right",
                content: "👉",
              },
            ],
          },
          {
            name: "panel-close",
            position: "right",
            class: "icon-button",
            children: [
              {
                name: "close-icon",
                position: "right",
                content: "X",
              },
            ],
          },
        ],
      },
      {
        name: "panel",
        position: "right",
        children: [
          {
            name: "calendar",
            class: "calendar",
            position: "right",
            children: [
              {
                name: "calendar-header",
                class: "calendar-header",
                children: [
                  {
                    name: "week-days",
                    class: "week",
                    position: "right",
                    children: [
                      {
                        name: "week-day",
                        content: "S",
                      },
                      {
                        name: "week-day",
                        content: "M",
                      },
                      {
                        name: "week-day",
                        content: "T",
                      },
                      {
                        name: "week-day",
                        content: "W",
                      },
                      {
                        name: "week-day",
                        content: "T",
                      },
                      {
                        name: "week-day",
                        content: "F",
                      },
                      {
                        name: "week-day",
                        content: "S",
                      },
                    ]
                  }
                ]
              },
              {
                name: "calendar-weeks",
                class: "calendar-weeks",
                position: "right",
                children: [
                  {
                    name: "week",
                    class: "week",
                    children: [
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "1",
                          }
                        ]
                      },
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "2",
                          }
                        ]
                      },
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "3",
                          }
                        ]
                      },
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "4",
                          }
                        ]
                      },
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "5",
                          }
                        ]
                      },
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "6",
                          }
                        ]
                      },
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "7",
                          }
                        ]
                      },
                    ]
                  },
                  {
                    name: "week",
                    class: "week",
                    children: [
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "8",
                          }
                        ]
                      },
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "9",
                          }
                        ]
                      },
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "10",
                          }
                        ]
                      },
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "11",
                          }
                        ]
                      },
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "12",
                          }
                        ]
                      },
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "13",
                          }
                        ]
                      },
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "14",
                          }
                        ]
                      },
                    ]
                  },
                  {
                    name: "week",
                    class: "week",
                    children: [
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "15",
                          }
                        ]
                      },
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "16",
                          }
                        ]
                      },
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "17",
                          }
                        ]
                      },
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "18",
                          }
                        ]
                      },
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "19",
                          }
                        ]
                      },
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "20",
                          }
                        ]
                      },
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "21",
                          }
                        ]
                      },
                    ]
                  },
                  {
                    name: "week",
                    class: "week",
                    children: [
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "22",
                          }
                        ]
                      },
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "23",
                          }
                        ]
                      },
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "24",
                          }
                        ]
                      },
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "25",
                          }
                        ]
                      },
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "26",
                          }
                        ]
                      },
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "27",
                          }
                        ]
                      },
                      {
                        name: "day-cell",
                        class: "day-cell",
                        children: [
                          {
                            name: "day",
                            content: "28",
                          }
                        ]
                      },
                    ]
                  }
                ]
              }
            ],
          }
        ]
      }
    ],
  },
]
---
:: 


### Time panel

The panel appears below the input element inside the `inner` section when the datepicker popup is open.

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--datepicker-panel"
schema: [
  {
    name: "panel-wrapper",
    position: "right",
    children: [
      {
        name: "panel-header",
        class: "panel-header",
        children: [
          {
            name: "time-header",
            class: "header-main time-header",
            position: "right",
            children: [
              {
                name: "month-button",
                content: "February",
              },
              {
                name: "day-button",
                content: "17",
              },
              {
                name: "year-button",
                position: "right",
                content: "2027",
              },
            ]
          },
          {
            name: "panel-close",
            position: "right",
            class: "icon-button",
            children: [
              {
                name: "close-icon",
                position: "right",
                content: "X",
              },
            ],
          },
        ],
      },
      {
        name: "panel",
        position: "right",
        children: [
          {
            name: "time",
            class: "time",
            children: [
              {
                name: "time-input",
                position: "right",
                content: "12:00 AM",
              }
            ]
          }
        ]
      }
    ],
  },
]
---
::



### Section keys

::ReferenceTable
---
type: "sectionKeys"
primary: "section-key"
data: [
  {
    "section-key": "calendar",
    description: "The wrapper immediately around the calendar on the day panel.",
  },
  {
    "section-key": "calendarHeader",
    description: "The wrapper around the header columns on the day panel.",
  },
  {
    "section-key": "calendarWeeks",
    description: "The wrapper immediately around each row of weeks on the day panel.",
  },
  {
    "section-key": "day",
    description: "The content of the day — by default contains the numeric day. In this slot/section you can use <code>context.day</code> (<code>$day</code> in schema) to get the date object for the given day.",
  },
  {
    "section-key": "dayButton",
    description: "The button displayed in the header of the time panel which navigates to the day panel.",
  },
  {
    "section-key": "dayCell",
    description: "The wrapper immediately around the date section. In this slot/section you can use <code>context.day</code> (<code>$day</code> in schema) to get the date object for the given day.",
  },
  {
    "section-key": "daysHeader",
    description: "The wrapper around the header columns on the date panel.",
  },
  {
    "section-key": "month",
    description: "The section that renders the actual month names on the month panel. In this slot/section you can use <code>context.month</code> (<code>$month</code> in schema) to get the date object for the given month.",
  },
  {
    "section-key": "monthButton",
    description: "The button in the header of the day and time panels that navigates to the month panel.",
  },
  {
    "section-key": "months",
    description: "The wrapper immediately around the month sections on the month panel.",
  },
  {
    "section-key": "monthsHeader",
    description: "The wrapper immediately around the header buttons (yearButton) on the month panel.",
  },
  {
    "section-key": "next",
    description: "In the panel header the button responsible for navigating to the next month or decade.",
  },
  {
    "section-key": "nextLabel",
    description: "The section responsible for rendering the text content of the next button in the panel header.",
  },
  {
    "section-key": "panelClose",
    description: "The section responsible for rendering the close button of the datepicker, shown on small touch devices.",
  },
  {
    "section-key": "closeIcon",
    description: "The icon rendered inside the panelClose section.",
  },
  {
    "section-key": "openButton",
    description: "The button responsible for opening the picker dialog.",
  },
  {
    "section-key": "overlay",
    description: "The outer wrapper of the overlay. The overlay is used to mimc the text that is in the text input during text-entry mode to allow for styling.",
  },
  {
    "section-key": "overlayChar",
    description: "A section containing overlay characters of type char",
  },
  {
    "section-key": "overlayEnum",
    description: "A section containing overlay characters of type enum",
  },
  {
    "section-key": "overlayInner",
    description: "An inner wrapper immediately inside the overlay section.",
  },
  {
    "section-key": "overlayLiteral",
    description: "A section containing overlay characters of type literal",
  },
  {
    "section-key": "overlayParts",
    description: "A section containing all the overlay parts as immediate children.",
  },
  {
    "section-key": "overlayPlaceholder",
    description: "A section containing overlay characters of type placeholder.",
  },
  {
    "section-key": "panel",
    description: "A wrapper around the currently active panel. This is rendered below the panelHeader as a sibling.",
  },
  {
    "section-key": "panelHeader",
    description: "A wrapper around the header of each panel where the panel’s navigation buttons are located. This is a sibling of the panel section.",
  },
  {
    "section-key": "panelWrapper",
    description: "A wrapper around the panel and panelHeader sections, this section is responsible for showing or hiding the picker dialog.",
  },
  {
    "section-key": "prev",
    description: "In the panel header the button responsible for navigating to the previous month or decade.",
  },
  {
    "section-key": "prevLabel",
    description: "The section responsible for rendering the text content of the prev button in the panel header.",
  },
  {
    "section-key": "time",
    description: "The time panel that contains the timeInput.",
  },
  {
    "section-key": "timeHeader",
    description: "The panel header of the time panel with navigation buttons to the year, month, and day panels.",
  },
  {
    "section-key": "timeInput",
    description: "A native HTML <code>time</code> input responsible for setting the time of the selected date.",
  },
  {
    "section-key": "week",
    description: "A wrapper around a row of 7 days on the day panel.",
  },
  {
    "section-key": "weekDay",
    description: "The cell responsible for rendering the day of the week in the calendar header of the day panel (M, T, W etc...).",
  },
  {
    "section-key": "weekDays",
    description: "The wrapper element around the days of the week on the calendar’s header on the day panel.",
  },
  {
    "section-key": "year",
    description: "The element responsible for rendering each of the years available on the year panel.",
  },
  {
    "section-key": "yearButton",
    description: "The button in the header of the month, day, and time panels that navigates to the year panel.",
  },
  {
    "section-key": "years",
    description: "The years panel, responsible for rendering a decade of years at a time.",
  },
  {
    "section-key": "yearsHeader",
    description: "The panel header when on the years panel, shows the current decade year range.",
  },
]
---
::