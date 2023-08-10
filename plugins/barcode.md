---
title: Barcode input
description: Scan barcodes and QR codes
---

# Barcode input

:PageToc

## Introduction

The `barcode` input type is a standalone input published by FormKit. It is powered by the [zxing](https://github.com/zxing/zxing) library and allows scanning of a variety of 1D and 2D barcode types using cameras connected to your browsing device.

## Installation

::callout
---
type: warning
---
The `barcode` input has a dependency on `@zxing/library` which is rather heavy (about 100kb minified + gzipped). You should only include this input in your project if you specifically need barcode scanning capability via connected cameras. For manual barcode entry please consider using a `mask` or `text` input with custom validation rules.
::

To install the `barcode` input add the `@formkit/barcode` package to your project's dependencies.

```sh
npm install @formkit/barcode
```

Then, in your FormKit configuration file import the input and its styles. Then add the input to your global FormKit configuration.

```js
// formkit.config
...
import { barcode } from '@formkit/barcode'
import '@formkit/barcode/genesis'

...

const config = defaultConfig({
  inputs: {
    barcode
  }
})

...
```

## Usage

### Basic

You can now use the `barcode` input type in your `<FormKit />` components. By interacting with the barcode icon you can open an overlay with a video feed from a connected camera. You will need to approve access to the camera via your browser.

::Example
---
name: "Barcode basic usage"
file: [
  '/\_content/_examples/barcode/basic.vue',
  '/\_content/_examples/barcode/formkit.config.js',
]
show-import-map: true
import-map: '/\_content/_examples/barcode/importMap.json'
min-height: 500
---
::

### Customizing target barcodes

By default the `barcode` input will scan every supported barcode type. The list of target barcode formats can be changed using the `formats` prop. A full list of supported formats can be seen in the [zxing documentation](https://github.com/zxing/zxing#supported-formats). All format names will be uppercased with `_` separators. So `QR Code` becomes `QR_CODE`, `UPC-A` becomes `UPC_A`, etc.

::Example
---
name: "Barcode formats"
file: [
  '/\_content/_examples/barcode/formats.vue',
  '/\_content/_examples/barcode/formkit.config.js',
]
show-import-map: true
import-map: '/\_content/_examples/barcode/importMap.json'
min-height: 500
---
::

## Props & Attributes

::ReferenceTable
---
input: "barcode" 
data: [
  {
    prop: "formats",
    type: "Array",
    default: "[]",
    description:
      "An array of available formats in uppercase with <code>_</code> separators (eg. <code>QR_CODE</code>) from the available set on the <a href='https://github.com/zxing/zxing#supported-formats'>zxing documentation</a>. If no <code>formats</code> array is provided then all parsable code formats will be considered valid inputs.",
  },
  {
    prop: "barcode-icon",
    type: "String",
    default: inline SVG code,
    description: "Specifies <a href='/essentials/icons'>an icon</a> to put in the <code>barcodeIcon</code> section. The <code>barcodeIcon</code> section is <strong>hidden</strong> while the camera interface is loading."
  },
  {
    prop: "loader-icon",
    type: "String",
    default: "spinner",
    description: "Specifies <a href='/essentials/icons'>an icon</a> to put in the <code>loaderIcon</code> section. The <code>loaderIcon</code> section is <strong>shown</strong> while the camera interface is loading."
  },
  {
    prop: "close-icon",
    type: "String",
    default: "close",
    description: "Specifies <a href='/essentials/icons'>an icon</a> to put in the <code>closeIcon</code> section."
  }
]
---
::


## Sections

:SectionKeysIntro

### Input 

::FormKitInputDiagram
---
schema: [
  {
    name: "outer",
    children: [
      {
        name: "wrapper",
        position: "right",
        children: [
          {
            name: "label",
            content: "Barcode",
          },
          {
            name: "inner",
            position: "right",
            children: [
              {
                name: "prefixIcon",
                content: "",
              },
              {
                name: "prefix",
                content: "",
              },
              {
                name: "input",
                content: "377340003030",
              },
              {
                name: "barcodeIcon",
                content: "⬜️",
                position: "right"
              },
              {
                name: "loaderIcon",
                content: "🔄",
                position: "right"
              },
              {
                name: "suffix",
                position: "right",
                content: "",
              },
              {
                name: "suffixIcon",
                position: "right",
                content: "",
              },
            ],
          },
        ],
      },
      {
        name: "help",
        content: "Scan a code.",
      },
      {
        name: "messages",
        position: "right",
        children: [
          {
            name: "message",
            content: "Barcode is required.",
            position: "right",
          },
        ],
      },
    ],
  },
]
---
::

### Overlay 

::FormKitInputDiagram
---
schema: [
  {
    name: "dialog",
    children: [
      {
        name: "scannerContainer",
        position: "right",
        children: [
          {
            name: "closeIcon",
            content: "✖️",
            position: "right"
          },
          {
            name: "video",
            content: "📺",
          },
          {
            name: "overlay",
            position: "right",
            children: [
              {
                name: "overlayDecorators",
                children: [
                  {
                    name: "overlayDecoratorTopLeft",
                  },
                  {
                    name: "overlayDecoratorTopRight",
                  },
                  {
                    name: "overlayDecoratorBottomLeft",
                  },
                  {
                    name: "overlayDecoratorBottomRight",
                  },
                ]
              },
              {
                name: "laser",
                content: "",
              }
            ],
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
    "section-key": "barcodeIcon",
    description: "An element for outputting a barcode icon that toggles the camera overlay.",
  },
  {
    "section-key": "loaderIcon",
    description: "An element for outputting a loader icon that shows in place of the <code>barcodeIcon</code> while the camera interface is loading.",
  },
  {
    "section-key": "dialog",
    description: "The dialog element (by default a native HTML <code>dialog</code>) that contains the camera interface.",
  },
  {
    "section-key": "scannerContainer",
    description: "A wrapper around the close icon, video stream, and decorative scanning overlay.",
  },
  {
    "section-key": "closeIcon",
    description: "An element for outputting a close icon for the dialog.",
  },
  {
    "section-key": "video",
    description: "A native HTML <code>video</code> element that shows the connected camera feed.",
  },
  {
    "section-key": "overlay",
    description: "A decorative element that overlays a portion of the <code>video</code> to mimic a scanning interface.",
  },
  {
    "section-key": "overlayDecorators",
    description: "A container for the overlay decorators that frame a portion of the video feed.",
  },
  {
    "section-key": "overlayDecoratorTopLeft",
    description: "A decorative element for framing a portion of the video feed.",
  },
  {
    "section-key": "overlayDecoratorTopRight",
    description: "A decorative element for framing a portion of the video feed.",
  },
  {
    "section-key": "overlayDecoratorBottomLeft",
    description: "A decorative element for framing a portion of the video feed.",
  },
  {
    "section-key": "overlayDecoratorBottomRight",
    description: "A decorative element for framing a portion of the video feed.",
  },
  {
    "section-key": "laser",
    description: "A decorative element that imitates a scanning laser.",
  },
]
---
::
