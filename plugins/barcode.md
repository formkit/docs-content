---
title: Barcode input
description: Scan barcodes and QR codes
---

# Barcode input

:PageToc

## Introduction

The `barcode` input type is a stanadlone input published the FormKit team. It is powered by the [zxing](https://github.com/zxing/zxing) library and allows scanning of a variety of 1D and 2D barcode types using cameras connected to your browsing device.

## Installation

::callout
---
type: warning
---
The `barcode` input has a dependency on `@zxing/library` which is rather heavy (about 100kb minified + gzipped). You shoud only include this input in your project if you need specifially barcode scanning capability via connected cameras. For manual barcode entry please consider using a `mask` or `text` input with custom validation rules.
::

To install the `barcode` input add the `@formkit/barcode` package to your project's dependencies.

```sh
npm install @formkit/barcode
```

Then, in your FormKit configuration file import the input and its styles. Then add the input to your global FormKit configuration.

```js
// formkit.config
...
import barcode from '@formkit/barcode'
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

You can now use the `barcode` input type in your `FormKit` components. By interacting with the barcode icon you can open an overlay with a video feed from a connected camera. You will need to approve access to the camera via your browser.

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

By default the `barcode` input will scan every supported barcode type. The list of target barcode formats can be changed using the `formats` prop. A full list of supported formats can be seen in the [zxing documentation](https://github.com/zxing/zxing#supported-formats). All format names will be uppercased with `_` seperators. So `QR Code` becomes `QR_CODE`, `UPC-A` becomes `UPC_A`, etc.

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