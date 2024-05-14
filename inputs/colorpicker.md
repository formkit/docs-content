---
title: Colorpicker Input
description: A colorpicker with support for alpha transparency, pre-loaded swatches, and multiple color output formats.
---

::InputPageHero
---
type: "Color"
---
::

:PageToc

The `colorpicker` input allows for advanced color selection — including alpha channel support. It supports colors in `Hex`, `HSLA` and `RGBA` formats and can be configured to provide a preset list of colors.

Most importantly, unlike the native `color` input, the `colorpicker` provides a consistent, predictable, and accessible user experience across browsers and operating systems.

The `colorpicker` input is fully keyboard navigable and ships with accessible markup.

## Basic example

::Example
---
  name: "Color input"
  file: "_content/_examples/colorpicker/intro.vue"
---
::

## Color formats
### Supported formats

The `colorpicker` supports formats in `Hex`, `HSLA` and `RGBA` formats. You can set your desired format with the `format` prop and color values from the `colorpicker` will be returned in that format. Your chosen format will also be the default setting for the input field(s) which show up in the `colorpicker` panel.

::Example
---
  name: "Color input"
  file: "_content/_examples/colorpicker/format.vue"
  minHeight: 500
---
::

### Value format

There may be times where you wish to show one format to users as a default but return a different format. You can use the `value-format` prop to specify a return value format independent of the `format` prop.

::Example
---
  name: "Color input"
  file: "_content/_examples/colorpicker/value-format.vue"
  minHeight: 400
---
::

### Disabling the alpha channel

You can disable the alpha channel in the `colorpicker` by setting the `alpha` prop to `false`. This will enforce full opacity on values. Any values with an alpha channel will be converted to full opacity.

::Example
---
  name: "Color input"
  file: "_content/_examples/colorpicker/alpha.vue"
  minHeight: 400
---
::

## Swatches

Swatches are provided using the `options` prop and use the same `options` API as the `select`, `dropdown`, `autocomplete` and `taglist` inputs from FormKit.

### Simple swatches

Here is a simple set of swatches using the `options` prop and providing it with a flat array of color values. Your provided values can be in any supported color format (`Hex`, `HSLA`, and `RGBA`) and will be automatically converted to the `colorpicker`s speficied `format` which defaults to `Hex`.

::Example
---
  name: "Color input"
  file: "_content/_examples/colorpicker/simple-swatches.vue"
---
::

### Grouped swatches

The `colorpicker` also supports grouped `options`. This allows you to create sets of swatches within the color picker grouped under a common heading.

::Example
---
  name: "Color input"
  file: "_content/_examples/colorpicker/grouped-swatches.vue"
---
::

### Swatch-only 

You can create a "swatch-only" `color-picker` by using the `panel-controls` and `panel-format` props and setting them to `false`. 

When showing only swatches in pop-over mode (the default) adding the `close-on-select` prop will close the pop-over when a swatch is selected.

::Example
---
  name: "Color input"
  file: "_content/_examples/colorpicker/swatch-only.vue"
---
::

### Inputting by swatch name

If your provided swatches via the `options` prop have `label`s then you can call `node.input()` with a swatch name and the associated color will be set for you.

::Example
---
  name: "Color input"
  file: "_content/_examples/colorpicker/input-swatch-name.vue"
---
::

## Eyedropper

The `colorpicker` input supports the browser-native [EyeDropper API](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API). If the EyeDropper is supported in your browser and you have not disabled the EyeDropper by setting the `eye-dropper` prop to `false` then you will see an eyedropper button to the right of the hue and alpha sliders.

::Example
---
  name: "Color input"
  file: "_content/_examples/colorpicker/eye-dropper.vue"
---
::

## Pasting values

By default a `colorpicker` input will allow the pasting of any valid color values while user focus is anywhere in the input. Values will be converted immediately to your desired `format`.

You can disable the ability to paste a value by setting the `allow-paste` prop to `false`.

::Example
---
  name: "Color input"
  file: "_content/_examples/colorpicker/paste.vue"
  min-height: 650
---
::

## Props & Attributes

::ReferenceTable
---
input: "autocomplete"
data: [
  {
    prop: "format",
    type: "string",
    default: "hex",
    description: "The format that the <code>colorpicker</code> input should show in the input preview and be the default setting for the picker panel input. Can be set to <code>hex</code>, <code>hsla</code> or <code>rgba</code>.",
  },
  {
    prop: "alpha",
    type: "boolean",
    default: "true",
    description: "When set to <code>false</code> the alpha channel will be disabled in the color picker.",
  },
  {
    prop: "value-format",
    type: "string",
    default: "undefined",
    description: "The format that should be returned from the <code>colorpicker</code> input regardless of the displayed format. If not specified the value of the <code>format</code> prop will be used.",
  },
  {
    prop: "panel-controls",
    type: "boolean",
    default: "true",
    description: "Used to control the display of the Lightness/Saturation gradient and the Hue and Alpha sliders.",
  },
  {
    prop: "panel-format",
    type: "boolean",
    default: "true",
    description: "Used to control whether the display of the color input fields and format switcher button.",
  },
  {
    prop: "eye-dropper",
    type: "boolean",
    default: "true",
    description: "Used to control the display of the eye-dropper control. Requires a browser that supports the EyeDropper API. If enabled in an unsupported browser the control will behave as if set to <code>false</code>.",
  },
  {
    prop: "inline",
    type: "boolean",
    default: "false",
    description: "When set to <code>true</code> the `colorpicker` will render its panel as an inline element rather than as a pop-over.",
  },
  {
    prop: "options",
    type: "Array/Object",
    default: "[]",
    description:
      "An object of value/label pairs or an array of strings, or an array of objects that <em>must</em> contain a <code>label</code> and <code>value</code> property. Supports grouped options via an array of objects that contain <code>group</code> and <code>options</code> keys where <code>options</code> is a nested <code>options</code> definition. Grouping is only supported at one level of depth.",
  },
  {
    prop: "show-value",
    type: "boolean",
    default: "true",
    description: "Used to control the display of the current color value in the input preview. Uses the <code>format</code> prop to determine which value to display.",
  },
  {
    prop: "close-on-select",
    type: "boolean",
    default: "false",
    description: "When set to <code>true</code> the <code>colorpicker</code> panel will close when a preset swatch option is chosen.",
  },
  {
    prop: "allow-paste",
    type: "boolean",
    default: "true",
    description: "Allows pasting any valid color string of <code>Hex</code>, <code>HSLA</code>, or <code>RGBA</code> format into a <code>colorpicker</code> that contains the user's focus. The pasted string will immediately be set as the value of the <code>colorpicker</code> and converted to the desired format.",
  },
  {
    prop: "popover",
    type: "boolean",
    default: "false",
    description: "Renders the input's UI panel using the browser Popover API."
  }
]
---
::

## Sections

:SectionKeysIntro

The `colorpicker` input's structure changes depending on the existence of the `inline` prop:

### Pop-over structure (default)

#### Input Preview

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--colorpicker"
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
            content: "Choose a color",
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
                name: "swatchPreview",
                children: [
                  {
                    name: "canvasSwatchPreview",
                    content: "⬛️"
                  },
                  {
                    name: "valueString",
                    content: "#000000"
                  }
                ]
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
        content: "Pick your favorite color.",
        position: "right",
      },
      {
        name: "messages",
        position: "right",
        children: [
          {
            name: "message",
            position: "right",
            content: "Color is required",
          },
        ],
      },
    ],
  },
]
---
::

#### Pop-over panel

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--colorpicker"
schema: [
  {
    name: "panel",
    children: [
      {
        name: "panelClose",
        position: "right",
        content: "(panelClose is only shown on small touchscreens when in pop-over mode)",
        children: [
          {
            name: "iconClose",
            position: "right",
            content: "ⓧ",
            class: "center-vert",
          },
        ]
      },
      {
        name: "controlGroup",
        children: [
          {
            name: "LS",
            position: "right",
            children: [
              {
                name: "canvasLS",
                position: "right",
                content: "🖼️"
              },
              {
                name: "controlLS",
                position: "right",
                content: "⊙",
                class: "tiny-section"
              }
            ]
          },
          {
            name: "preview",
            children: [
              {
                name: "canvasPreview",
                content: "⬛️",
              }
            ]
          },
          {
            name: "hue",
            position: "right",
            children: [
              {
                name: "canvasHue",
                position: "right",
                content: "🌈"
              },
              {
                name: "controlHue",
                position: "right",
                content: "⊙",
                class: "tiny-section"
              }
            ]
          },
          {
            name: "alpha",
            children: [
              {
                name: "canvasAlpha",
                content: "👻"
              },
              {
                name: "controlAlpha",
                content: "⊙",
                class: "tiny-section"
              }
            ]
          },
          {
            name: "eyeDropper",
            position: "right",
            children: [
              {
                name: "iconEyeDropper",
                position: "right",
                content: "👁️"
              },
            ]
          },
        ],
      },
      {
        name: "formatField",
        children: [
          {
            name: "colorInputGroup",
            children: [
              {
                name: "hexField",
                content: "#️⃣"
              },
              {
                name: "rField",
                content: "0️⃣"
              },
              {
                name: "gField",
                content: "0️⃣"
              },
              {
                name: "bField",
                content: "0️⃣"
              },
              {
                name: "hField",
                position: "right",
                content: "0️⃣"
              },
              {
                name: "sField",
                position: "right",
                content: "0️⃣"
              },
              {
                name: "lField",
                position: "right",
                content: "0️⃣",
              },
              {
                name: "aField",
                position: "right",
                content: "1️⃣"
              },
            ]
          },
          {
            name: "formatSwitcher",
            position: "right",
            children: [
              {
                name: "iconSwitch",
                position: "right",
                content: "↕"
              }
            ]
          }
        ]
      },
      {
        name: "swatches",
        children: [
          {
            name: "swatch",
            content: "🟦"
          },
          {
            name: "swatch",
            content: "🟥"
          },
          {
            name: "swatch",
            content: "🟨"
          }
        ]
      }
    ],
  },
]
---
::

### Inline structure

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--colorpicker"
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
            content: "Choose a color",
            class: "center-vert",
          },
          {
            name: "help",
            content: "Pick your favorite color.",
            position: "right",
          },
          {
            name: "inner",
            children: [
              {
                name: "panel",
                children: [
                  {
                    name: "controlGroup",
                    children: [
                      {
                        name: "LS",
                        position: "right",
                        children: [
                          {
                            name: "canvasLS",
                            position: "right",
                            content: "🖼️"
                          },
                          {
                            name: "controlLS",
                            position: "right",
                            content: "⊙",
                            class: "tiny-section"
                          }
                        ]
                      },
                      {
                        name: "preview",
                        children: [
                          {
                            name: "canvasPreview",
                            content: "⬛️",
                          }
                        ]
                      },
                      {
                        name: "hue",
                        position: "right",
                        children: [
                          {
                            name: "canvasHue",
                            position: "right",
                            content: "🌈"
                          },
                          {
                            name: "controlHue",
                            position: "right",
                            content: "⊙",
                            class: "tiny-section"
                          }
                        ]
                      },
                      {
                        name: "alpha",
                        children: [
                          {
                            name: "canvasAlpha",
                            content: "👻"
                          },
                          {
                            name: "controlAlpha",
                            content: "⊙",
                            class: "tiny-section"
                          }
                        ]
                      },
                      {
                        name: "eyeDropper",
                        position: "right",
                        children: [
                          {
                            name: "iconEyeDropper",
                            position: "right",
                            content: "👁️"
                          },
                        ]
                      },
                    ],
                  },
                  {
                    name: "formatField",
                    children: [
                      {
                        name: "colorInputGroup",
                        children: [
                          {
                            name: "hexField",
                            content: "#️⃣"
                          },
                          {
                            name: "rField",
                            content: "0️⃣"
                          },
                          {
                            name: "gField",
                            content: "0️⃣"
                          },
                          {
                            name: "bField",
                            content: "0️⃣"
                          },
                          {
                            name: "hField",
                            position: "right",
                            content: "0️⃣"
                          },
                          {
                            name: "sField",
                            position: "right",
                            content: "0️⃣"
                          },
                          {
                            name: "lField",
                            position: "right",
                            content: "0️⃣",
                          },
                          {
                            name: "aField",
                            position: "right",
                            content: "1️⃣"
                          },
                        ]
                      },
                      {
                        name: "formatSwitcher",
                        position: "right",
                        children: [
                          {
                            name: "iconSwitch",
                            position: "right",
                            content: "↕"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    name: "swatches",
                    children: [
                      {
                        name: "swatch",
                        content: "🟦"
                      },
                      {
                        name: "swatch",
                        content: "🟥"
                      },
                      {
                        name: "swatch",
                        content: "🟨"
                      }
                    ]
                  }
                ],
              },
            ],
          },
        ],
      },
      {
        name: "messages",
        position: "right",
        children: [
          {
            name: "message",
            position: "right",
            content: "Color is required",
          },
        ],
      },
    ],
  },
]
---
::


::ReferenceTable
---
type: "sectionKeys"
primary: "section-key"
data: [
  {
    "section-key": "swatchPreview",
    description:
      "A wrapping <code>div</code> around the swatch preview canvas element and the displayed color value string.",
  },
  {
    "section-key": "canvasSwatchPreview",
    description:
      "A <code>canvas</code> element that renders the current color selection.",
  },
  {
    "section-key": "valueString",
    description:
      "A <code>span</code> element that contains the current color value string in the format set via the <code>format</code> prop.",
  },
  {
    "section-key": "panel",
    description:
      "The wrapping element for all of the colorpicker controls",
  },
  {
    "section-key": "panelClose",
    description:
      "A prefix seciton of the panel that contains a close button. Only shown on small touchscreen devices where a 'fixed position' treatment is applied.",
  },
  {
    "section-key": "iconClose",
    description:
      "An element for outputting an icon within the panelClose section.",
  },
  {
    "section-key": "controlGroup",
    description:
      "A wrapping element for all of the color control elements within the panel",
  },
  {
    "section-key": "preview",
    description:
      "A wrapping element for the current color preview.",
  },
  {
    "section-key": "canvasPreview",
    description:
      "A <code>canvas</code> element that renders the current color selection.",
  },
  {
    "section-key": "LS",
    description:
      "A wrapping element for the Lightness/Saturation controls",
  },
  {
    "section-key": "canvasLS",
    description:
      "A <code>canvas</code> element that renders the currently avilable colors given the current <code>hue</code>.",
  },
  {
    "section-key": "controlLS",
    description:
      "An element styled as the control for the LS canvas.",
  },
  {
    "section-key": "hue",
    description:
      "A wrapping element for the hue controls",
  },
  {
    "section-key": "canvasHue",
    description:
      "A <code>canvas</code> element that renders every available <code>hue</code> at 50% lightness.",
  },
  {
    "section-key": "controlHue",
    description:
      "An element styled as the control for the hue canvas.",
  },
  {
    "section-key": "alpha",
    description:
      "A wrapping element for the alpha controls",
  },
  {
    "section-key": "canvasAlpha",
    description:
      "A <code>canvas</code> element that renders the currently selected color from 0% to 100% opacity.",
  },
  {
    "section-key": "controlAlpha",
    description:
      "An element styled as the control for the alpha canvas.",
  },
  {
    "section-key": "eyeDropper",
    description:
      "An element that acts as a trigger for enabling the browser's EyeDropper API. Only displays in supported browsers.",
  },
  {
    "section-key": "iconEyeDropper",
    description:
      "An element for outputting an icon within the eyeDropper section.",
  },
  {
    "section-key": "formatField",
    description:
      "A wrapping element that contains all of the color format input fields and the format toggle control. Only the field(s) relevant to the currently selected panel format will be displayed.",
  },
  {
    "section-key": "colorInputGroup",
    description:
      "A wrapping element that wraps one or more input fields associated with a given color format.",
  },
  {
    "section-key": "hexField",
    description:
      "The input for a hex color format. Supports #RRGGBBAA format although alpha hex values are not required.",
  },
  {
    "section-key": "rField",
    description:
      "The input for the R value of an RGBA color format.",
  },
  {
    "section-key": "gField",
    description:
      "The input for the G value of an RGBA color format.",
  },
  {
    "section-key": "bField",
    description:
      "The input for the B value of an RGBA color format.",
  },
  {
    "section-key": "hField",
    description:
      "The input for the H value of an HSLA color format.",
  },
  {
    "section-key": "sField",
    description:
      "The input for the S value of an HSLA color format.",
  },
  {
    "section-key": "lField",
    description:
      "The input for the L value of an HSLA color format.",
  },
  {
    "section-key": "aField",
    description:
      "The input for the A value of an RGBA or HSLA color format.",
  },
  {
    "section-key": "formatSwitcher",
    description:
      "An element that acts as a trigger for changing the currently displayed color format within the colorpicker panel. Has no effect on the <code>format</code> and <code>value-format</code> settings of the input.",
  },
  {
    "section-key": "iconSwitch",
    description:
      "An element for outputting an icon within the formatSwitcher section.",
  },
  {
    "section-key": "swatches",
    description:
      "A wrapping element that contains all available swatches made available via the <code>options</code> prop.",
  },
  {
    "section-key": "swatch",
    description:
      "An element that handles the rendering of each option (or option group) provided by the <code>options</code> prop.",
  },
]
---
::

## Accessibility

All FormKit inputs are designed with the following accessibility considerations in mind. Help us continually improve accessibility for all by filing accessibility issues [here](https://github.com/formkit/formkit/issues/new?assignees=&labels=%F0%9F%90%9B+bug-report%2C%E2%9B%91+Needs+triage&projects=&template=bug-report.yml): 

:AccessibilityChecks

::AccessibilityTable
---
data: [
  {
    sectionKey: "swatchPreview",
    attributes: [
      { attribute: "tabindex", value: "-1 or 0", description: "Prioritizes keyboard focus order by setting it to -1 when disabled and 0 when enabled." },
      { attribute: "role", value: "button", description: "Indicates to assistive technologies that this element functions as a button." },
      { attribute: "aria-valuetext", description: "Defines the human-readable text of the value." },
    ]
  },
  {
    sectionKey: "panel",
    attributes: [
      { attribute: "aria-role", value: "dialog", description: "When layout is set to popover it adds this attribute." },
      { attribute: "aria-modal", value: "true", description: "When layout is set to popover it adds this attribute." },
      { attribute: "aria-label", description: "Provides an accessible name." },
    ]
  },
  {
    sectionKey: "panelClose",
    attributes: [
      { attribute: "tabindex", value: "-1 or 0", description: "Prioritizes keyboard focus order by setting it to -1 when panel is closed and 0 when openned." },
      { attribute: "aria-label", description: "Provides an accessible name." },
    ]
  },
  {
    sectionKey: "controlGroup",
    attributes: [
      { attribute: "role", value: "group", description: "Indicates to assistive technologies that this element functions as a group." },
    ]
  },
  {
    sectionKey: "canvasLS",
    attributes: [
      { attribute: "aria-hidden", value: "true", description: "Makes this element not exposed to the accessibility API." },
    ]
  },
  {
    sectionKey: "controlLS",
    attributes: [
      { attribute: "tabindex", value: "-1 or 0", description: "Prioritizes keyboard focus order by setting it to -1 when disabled and 0 when enabled." },
      { attribute: "role", value: "slider", description: "Indicates to assistive technologies that this element functions as a slider." },
      { attribute: "aria-valuemin", description: "Defines the minimum allowed value." },
      { attribute: "aria-valuemax", description: "Defines the maximum allowed value." },
      { attribute: "aria-valuetext", description: "Defines the human-readable text of the value." },
    ]
  },
  {
    sectionKey: "canvasHue",
    attributes: [
      { attribute: "aria-hidden", value: "true", description: "Makes this element not exposed to the accessibility API." },
    ]
  },
  {
    sectionKey: "controlHue",
    attributes: [
      { attribute: "tabindex", value: "-1 or 0", description: "Prioritizes keyboard focus order by setting it to -1 when disabled and 0 when enabled." },
      { attribute: "role", value: "slider", description: "Indicates to assistive technologies that this element functions as a slider." },
      { attribute: "aria-valuemin", description: "Defines the minimum allowed value." },
      { attribute: "aria-valuemax", description: "Defines the maximum allowed value." },
      { attribute: "aria-valuenow", description: "Defines the human-readable text of the value." },
    ]
  },
  {
    sectionKey: "canvasAlpha",
    attributes: [
      { attribute: "aria-hidden", value: "true", description: "Makes this element not exposed to the accessibility API." },
    ]
  },
  {
    sectionKey: "controlAlpha",
    attributes: [
      { attribute: "tabindex", value: "-1 or 0", description: "Prioritizes keyboard focus order by setting it to -1 when disabled and 0 when enabled." },
      { attribute: "role", value: "slider", description: "Indicates to assistive technologies that this element functions as a slider." },
      { attribute: "aria-valuemin", description: "Defines the minimum allowed value." },
      { attribute: "aria-valuemax", description: "Defines the maximum allowed value." },
      { attribute: "aria-valuenow", description: "Defines the human-readable text of the value." },
    ]
  },
  {
    sectionKey: "canvasPreview",
    attributes: [
      { attribute: "aria-hidden", value: "true", description: "Makes this element not exposed to the accessibility API." },
    ]
  },
  {
    sectionKey: "canvasSwatchPreview",
    attributes: [
      { attribute: "aria-hidden", value: "true", description: "Makes this element not exposed to the accessibility API." },
    ]
  },
  {
    sectionKey: "eyeDropper",
    attributes: [
      { attribute: "tabindex", value: "-1 or 0", description: "Prioritizes keyboard focus order by setting it to -1 when disabled and 0 when enabled." },
      { attribute: "role", value: "button", description: "Indicates to assistive technologies that this element functions as a button." },
    ]
  },
  {
    sectionKey: "colorInputGroup",
    attributes: [
      { attribute: "aria-role", value: "group", description: "Indicates to assistive technologies that this element functions as a group." },
    ]
  },
  {
    sectionKey: "hexField",
    attributes: [
      { attribute: "tabindex", value: "-1 or 0", description: "Prioritizes keyboard focus order by setting it to -1 when disabled and 0 when enabled." },
      { attribute: "for", description: "Associates the label to an input element. Users can click on the label to focus the input or to toggle between states." },
    ]
  },
  {
    sectionKey: "rField",
    attributes: [
      { attribute: "tabindex", value: "-1 or 0", description: "Prioritizes keyboard focus order by setting it to -1 when disabled and 0 when enabled." },
      { attribute: "for", description: "Associates the label to an input element. Users can click on the label to focus the input or to toggle between states." },
    ]
  },
  {
    sectionKey: "gField",
    attributes: [
      { attribute: "tabindex", value: "-1 or 0", description: "Prioritizes keyboard focus order by setting it to -1 when disabled and 0 when enabled." },
      { attribute: "for", description: "Associates the label to an input element. Users can click on the label to focus the input or to toggle between states." },
    ]
  },
  {
    sectionKey: "bField",
    attributes: [
      { attribute: "tabindex", value: "-1 or 0", description: "Prioritizes keyboard focus order by setting it to -1 when disabled and 0 when enabled." },
      { attribute: "for", description: "Associates the label to an input element. Users can click on the label to focus the input or to toggle between states." },
    ]
  },
  {
    sectionKey: "aField",
    attributes: [
      { attribute: "tabindex", value: "-1 or 0", description: "Prioritizes keyboard focus order by setting it to -1 when disabled and 0 when enabled." },
      { attribute: "for", description: "Associates the label to an input element. Users can click on the label to focus the input or to toggle between states." },
    ]
  },
  {
    sectionKey: "hField",
    attributes: [
      { attribute: "tabindex", value: "-1 or 0", description: "Prioritizes keyboard focus order by setting it to -1 when disabled and 0 when enabled." },
      { attribute: "for", description: "Associates the label to an input element. Users can click on the label to focus the input or to toggle between states." },
    ]
  },
  {
    sectionKey: "sField",
    attributes: [
      { attribute: "tabindex", value: "-1 or 0", description: "Prioritizes keyboard focus order by setting it to -1 when disabled and 0 when enabled." },
      { attribute: "for", description: "Associates the label to an input element. Users can click on the label to focus the input or to toggle between states." },
    ]
  },
  {
    sectionKey: "lField",
    attributes: [
      { attribute: "tabindex", value: "-1 or 0", description: "Prioritizes keyboard focus order by setting it to -1 when disabled and 0 when enabled." },
      { attribute: "for", description: "Associates the label to an input element. Users can click on the label to focus the input or to toggle between states." },
    ]
  },
  {
    sectionKey: "formatSwitcher",
    attributes: [
      { attribute: "tabindex", value: "-1 or 0", description: "Prioritizes keyboard focus order by setting it to -1 when disabled and 0 when enabled." },
      { attribute: "role", value: "button", description: "Indicates to assistive technologies that this element functions as a button." },
      { attribute: "aria-label", description: "Provides an accessible name." },
    ]
  },
  {
    sectionKey: "swatch",
    attributes: [
      { attribute: "tabindex", value: "-1 or 0", description: "Prioritizes keyboard focus order by setting it to -1 when disabled and 0 when enabled." },
      { attribute: "role", value: "button", description: "Indicates to assistive technologies that this element functions as a button." },
      { attribute: "aria-label", description: "Provides an accessible name." },
    ]
  },
]
---
::

### Keyboard Interactions

:KeyboardEventsTable