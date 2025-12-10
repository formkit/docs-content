---
title: Slider Input
description: An advanced range input with support for multiple values.
navigation:
  title: 'Slider'
  pro: true
---

:InputPageHero

:ProInstallSnippet

## Introduction

The `slider` input is an advanced and highly configurable version of the native HTML `range` input. Some notable additions compared to the standard `range` input are:

- Support for multi-value inputs.
- Display tooltips to show selected values.
- Show linked inputs for min and max values.
- Render tick marks for value steps.
- Add arbitrary tick marks.
- Force selection to snap to tick marks.
- Render bar chart data linked to selection values.

::VideoCard
---
title: "Slider Overview"
poster: "https://cdn.formk.it/web-assets/slider-thumbnail.png"
watch-time: "7 mins"
youtube-id: "BtY1FcpqRJk"
---
::

## Basic example

::Example
---
name: "Slider Input"
file: "_examples/slider/basic.vue"
---
::

## Native props

if you're familar with using the native HTML `range` input you'll find than many of the existing props you're familiar with work as expected with the `slider` input.

::Example
---
name: "Slider Input"
file: "_examples/slider/native-props.vue"
---
::

### Keyboard modifier keys

Even in its simplest form the `slider` input has a few tricks up its sleeve. Just like the native `range` input you can use your arrow keys to adjust the input value when it is focused — but with the `slider` input you can hold the `shift` key to increment by 10x and your system's modifer key (`command` or `ctrl`) to jump to the min / max values.

### Keyboard number entry

Whenever you have a handle focused on a `slider` input you can type a value on your keyboard and after a slight debounce your `slider` handle will be set to the value you provided — or the closest available match.

## Multi-value

To render two value handles on a `slider` input supply an array as the input's value. Control handles can be dragged through each other and your resulting array value will always be returned sorted in order from smallest to largest.

::Example
---
name: "Slider Input"
file: "_examples/slider/multiple-values.vue"
---
::

## Customizing handles

Using the `maxHandleInner` (default) and `minHandleInner` slots you can customize the appearance of your `slider` handles. The `maxHandleInner` slot is used for single-value `slider` inputs.

::Example
---
name: "Slider Input"
file: "_examples/slider/customizing-handle.vue"
---
::

## Customizing tooltips

### Tooltip visibility

By default `slider` tooltips show on hover and when a selection handle is being dragged. You can force tooltips into an on or off state by using the `tooltip` prop and providing a boolean value.

::Example
---
name: "Slider Input"
file: "_examples/slider/tooltip-visibility.vue"
---
::

### Tooltip formating

By providing a function to the `tooltip-format` prop you can customize the value of your `slider` tooltip. Your `tooltip-format` function will be provided two arguments:

`value`: The current value that would be displayed in the tooltip by default.
`handle`: The current handle being affected by the funciton. Either `min` or `max`.

::Example
---
name: "Slider Input"
file: "_examples/slider/tooltip-formatting.vue"
---
::

By using the `tooltip-format` prop you can introduce variety to your `slider` inputs — especially when combined with [FormKit's section-key class prop system](/essentials/styling#section-key-class-props).

::Example
---
name: "Slider Input"
file: "_examples/slider/fun-formatting.vue"
---
::

## Linked number inputs

Sometimes a range-style input is more useful for users if they're also able to directly enter numeric values in linked fields. You can reveal `number` inputs that are bound to the values of the `slider` range handles by setting the `show-input` prop to `true`.

::Example
---
name: "Linked Inputs"
file: "_examples/slider/linked-inputs.vue"
---
::

### Linked input attributes

The linked `number` inputs are FormKit inputs. You can apply props to them using the provided props:

- `input-attrs`: will bind your provided object to both the `min` and `max` inputs.
- `min-input-attrs`: Object to bind to the linked `min` input.
- `max-input-attrs`: Object to bind to the linked `max` input.

::Example
---
name: "Linked Inputs"
file: "_examples/slider/linked-input-attrs.vue"
---
::

## Marks

### Basic usage

The `slider` input supports the rendering of marks on the input's track. By setting the `marks` property to `true` marks will be rendered at every `steps` interval. 

::Example
---
name: "Marks"
file: "_examples/slider/marks.vue"
---
::

### With labels

You can enable labels for your marks by setting the `mark-labels` prop to `true`.

::Example
---
name: "Marks with Labels"
file: "_examples/slider/mark-labels.vue"
---
::

### Custom marks

By supplying an array of objects to the `marks` prop instead of a boolean you can place arbirtary marks on the slider's track. Mark objects shold have the folloing properties: 

- `at`: The position (value) on the track where the mark should render.
- `label`: The label to render for the mark if the `mark-labels` prop is enabled.
- `class`: A string of classes to apply to the mark element.
- `labelClasses`: A string of classes to apply to the mark label element.

::Example
---
name: "Custom Marks"
file: "_examples/slider/custom-marks.vue"
---
::

### Snap to marks

When supplying custom marks you may want to force the selection to snap to the provided marks. This can be achieved with the `snap-to-marks` prop. When `snap-to-marks` is `true` keyboard events will jump to the next closest mark and entered values through keyboard or linked inputs will snap to the nearest available mark.

::Example
---
name: "Snap to Marks"
file: "_examples/slider/snap-to-marks.vue"
---
::

### Styling marks

You can apply custom classes to your marks and mark labels by using the `class` and `labelClasses` properties on your mark objects.

::Example
---
name: "Custom Marks"
file: "_examples/slider/styling-marks.vue"
---
::

## Scaling slider values

By default the `slider` input scales values linearly across its entire range. However, you can use the provided `scaling-function` or `intervals` props to change this behavior.

### Using functions

The `scaling-function` prop accepts 3 values:

- The string `linear` — this is the default behavior
- The string `log` which will apply a logarithmic scaling function to your `slider`
- An object which consits of two functions named `forward` and `reverse` which will apply your own scaling logic.

::Example
---
name: "Scaling functions"
file: [
  "_examples/slider/scaling-functions.vue",
  "_examples/slider/scaling-functions.js"
]
---
::

### Using Intervals

The `intervals` prop accepts an array of object where each object defines an interval range on the `slider`. Each obect contains:

- `value`: The point on the `slider` at which the interval begins
- `step`: The step size that should be used within the interval

Your last interval will cover the range extending from your specified `value` to the `max` prop value on your `slider`. If your lowest interval does not begin at the minimum possible value of your `slider` then an interval covering the range from your `min` slider prop to your first interval will be created for you. Its `step` value will be the value of the `step` prop on your `slider` input.

It's important to note that the visual representation of intervals on a `slider` track is based on the total number of possible steps within a given interval and not the interval's raw numeric value.

::Example
---
name: "Intervals"
file: "_examples/slider/intervals.vue"
---
::

## Chart

You can render a bar chart above the slider with arbitrary values by suppling an array to the `chart` prop. The `chart` array has a similar structure to the `marks` array. Each nested object should contain:

- `at`: The position (value) on the track where the bar for the chart should render.
- `value`: A numeric value that will be used to calculate the relative height of the bar in the chart.

The `slider` input will iterate over you `chart` array and determine the largest `value` contained in the array, and then divide all other values by that largest value to determine the relative heights for rendering the bars of the chart.

::Example
---
name: "Chart"
file: "_examples/slider/chart.vue"
---
::

## Full-featured example

By combining the provided props for the `slider` component you can create a robust input to cover a variety of usecases. Here is an example for a price-range slider.

::Example
---
name: "Kitchen Sink"
file: [
  "_examples/slider/kitchen-sink.vue",
]
---
::

## Props & Attributes

::ReferenceTable
---
input: "Slider" 
data: [
  {
    prop: "chart",
    type: "array",
    default: "none",
    description: "An array of objects containing <code>at</code> and <code>value</code> keys. Renders a relative-height bar-chart above the slider track."
  },
  {
    prop: "input-attrs",
    type: "object",
    default: "{}",
    description: "Applies custom attributes to the nested linked FormKit inputs for both min and max values.",
  },
  {
    prop: "intervals",
    type: "array",
    default: "none",
    description: "An array of interval values consisting of <code>value</code> and <code>step</code> used to define differing scaling for different sections of a slider track.",
  },
  {
    prop: "marks",
    type: "boolean || array",
    default: "false",
    description: "When <code>true</code>, renders marks on the track at every <code>step</code> value. When an Array of objects with <code>at</code> and <code>label</code> keys, renders a mark on the track at every object's <code>at</code> value."
  },
  {
    prop: "mark-labels",
    type: "boolean",
    default: "false",
    description: "Enables rendering of labels belowe marks on track"
  },
  {
    prop: "max",
    type: "number",
    default: "100",
    description:
      "The maximum possible value of the slider range.",
  },
  {
    prop: "max-input-attrs",
    type: "object",
    default: "{}",
    description:
      "Applies custom attributes to the nested linked FormKit input for the max value.",
  },
  {
    prop: "min",
    type: "number",
    default: "0",
    description: "The minimum possible value of the slider range."
  },
  {
    prop: "min-input-attrs",
    type: "object",
    default: "{}",
    description:
      "Applies custom attributes to the nested linked FormKit input for the min value.",
  },
  {
    prop: "prefix",
    type: "string",
    default: "none",
    description:
      "Characters that will always appear at the beginning of the input.",
  },
  {
    prop: "scaling-function",
    type: "string || object",
    default: "linear",
    description:
      "Defines scaling behavior for values on the rendered slider track using either a preset value string or a set of custom functions.",
  },
  {
    prop: "show-input",
    type: "boolean",
    default: "false",
    description:
      "Renders FormKit <code>type=\"number\"</code> input(s) that are linked to the slider's value(s)",
  },
  {
    prop: "snap-to-marks",
    type: "boolean",
    default: "false",
    description: "When enabled, forces user selection to snap to marks"
  },
  {
    prop: "step",
    type: "number",
    default: "1",
    description:
      "The minimum value at which the slider value can increment / decrement.",
  },
  {
    prop: "suffix",
    type: "string",
    default: "none",
    description: "Characters that will always appear at the end of the input.",
  },
  {
    prop: "tooltip",
    type: "boolean",
    default: "none",
    description: "When set with a boolean value, forces the display of the slider's handle tooltip(s).",
  },
  {
    prop: "tooltip-format",
    type: "function",
    default: "none",
    description:
      "A function that is provided the <code>value</code> and <code>handle</code> for each slider handle which should return a <code>string</code>.",
  }
]
---
::


## Sections & slot data

:SectionKeysIntro

:FormKitInputDiagrams


::ReferenceTable
---
type: "sectionKeys"
primary: "section-key"
without: ["inner"]
data: [
  {
    "section-key": "chart",
    description: "A container for the chart bar elements."
  },
  {
    "section-key": "chartBar",
    description: "An individual bar for the chart element."
  },
  {
    "section-key": "fill",
    description: "The fill for the selected range on the slider input."
  },
  {
    "section-key": "handleMax",
    description: "The maximum value selection handle. This is the default handle for single-value slider inputs."
  },
  {
    "section-key": "handleMin",
    description: "The minimum value selection handle."
  },
  {
    "section-key": "handles",
    description: "A container for the track selection handles"
  },
  {
    "section-key": "linkedValues",
    description: "A wrapper for the linked inputs for the slider’s minimum and maximum values."
  },
  {
    "section-key": "mark",
    description: "An individual mark on the track."
  },
  {
    "section-key": "markLabel",
    description: "The label for an individual mark on the track."
  },
  {
    "section-key": "marks",
    description: "A container for all of the marks on the track"
  },
  {
    "section-key": "maxValue",
    description: "The linked FormKit number input for the slider’s maximum value. If the slider only has a single value this is rendered as a direct descendant of the <code>sliderInner</div> section."
  },
  {
    "section-key": "minValue",
    description: "The linked FormKit number input for the slider’s minimum value."
  },
  {
    "section-key": "sliderInner",
    description: "The interior div that contains the slider input content."
  },
  {
    "section-key": "track",
    description: "A wrapper that contains all of the track markup for the slider input."
  },
  {
    "section-key": "trackInner",
    description: "An interior wrapper for styling purposes that contains all of the track markup excluding the chart."
  },
  {
    "section-key": "trackWrapper",
    description: "A wrapper that contains all of the track markup excluding the chart."
  },
  {
    "section-key": "tooltipMin",
    description: "The tooltip for the minimum value selection handle"
  },
  {
    "section-key": "tooltipMax",
    description: "The tooltip for the maximum value selection handle"
  },
]
---
::

## Accessibility

All FormKit inputs are designed with the following accessibility considerations in mind. Help us continually improve accessibility for all by filing accessibility issues [here](https://github.com/formkit/formkit/issues/new?assignees=&labels=%F0%9F%90%9B+bug-report%2C%E2%9B%91+Needs+triage&projects=&template=bug-report.yml): 

:AccessibilityChecks

### Accessibility attributes

::AccessibilityTable
---
data: [
  {
    sectionKey: "maxValue",
    attributes: [
      { attribute: "tabindex", value: "-1", description: "Prioritizes keyboard focus order by setting it to <code>-1</code> when input is disabled." },
    ]
  },
  {
    sectionKey: "minValue",
    attributes: [
      { attribute: "tabindex", value: "-1", description: "Prioritizes keyboard focus order by setting it to <code>-1</code> when input is disabled." },
    ]
  },
  {
    sectionKey: "handleMax",
    attributes: [
      { attribute: "tabindex", value: "-1 or 0", description: "Prioritizes keyboard focus order by setting it to <code>-1</code> when input is disabled and <code>0</code> when its not." },
    ]
  },
  {
    sectionKey: "handleMin",
    attributes: [
      { attribute: "tabindex", value: "-1 or 0", description: "Prioritizes keyboard focus order by setting it to <code>-1</code> when input is disabled and <code>0</code> when its not." },
    ]
  },
]
---
::

### Keyboard Interactions

::KeyboardEventsTable
---
data: [
  {
    event: ["up"],
    description: "Adjust the input value of the active handle up by the current <code>step</step>.",
  },
  {
    event: ["right"],
    description: "Adjust the input value of the active handle up by the current <code>step</step>.",
  },
  {
    event: ["left"],
    description: "Adjust the input value of the active handle down by the current <code>step</step>.",
  },
  {
    event: ["down"],
    description: "Adjust the input value of the active handle down by the current <code>step</step>.",
  },
  {
    event: ["shift", "up"],
    description: "Adjust the input value of the active handle up by 10x the current <code>step</step>.",
  },
  {
    event: ["shift", "right"],
    description: "Adjust the input value of the active handle up by 10x the current <code>step</step>.",
  },
  {
    event: ["shift", "left"],
    description: "Adjust the input value of the active handle down by 10x the current <code>step</step>.",
  },
  {
    event: ["shift", "down"],
    description: "Adjust the input value of the active handle down by 10x the current <code>step</step>.",
  },
  {
    event: ["PageUp"],
    description: "Adjust the input value of the active handle up by 10x the current <code>step</step>.",
  },
  {
    event: ["PageDown"],
    description: "Adjust the input value of the active handle down by 10x the current <code>step</step>.",
  },
  {
    event: ["Home"],
    description: "Set the input value of the active handle to the <code>min</code> value.",
  },
  {
    event: ["End"],
    description: "Set the input value of the active handle to the <code>max</code> value.",
  },
]
---
::
