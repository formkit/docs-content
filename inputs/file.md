---
title: File Input
description: A native HTML file input with support for multiple files, drag and drop, clearing the input, and repopulating from an array.
---

::InputPageHero
---
title: "File"
---
::

:PageToc

The `file` input uses HTML's [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file). It allows users to select files from their device for upload. In addition to native input features, it adds support for:

- Drag and drop
- Clearing the input
- Repopulating from an array

## Basic example

::Example
---
name: "File input"
file: "_content/_examples/file/file.vue"
---
::

## Array value

The value of the `file` type should always be an array of objects where each object contains a `name` (string) and optional `file` ([File](https://developer.mozilla.org/en-US/docs/Web/API/File)) property. When selecting new files from a user’s device, FormKit will convert [the native `FileList`](https://developer.mozilla.org/en-US/docs/Web/API/FileList) to the required array-based structure automatically.

This structure can be used to pre-populate a file input with previously uploaded file values:

::Example
---
name: "File input"
file: "_content/_examples/file-populate/file-populate.vue"
---
::

::Callout
---
type: "tip"
label: "Display only"
---
Pre-populating an input with file names is for display purposes only. It’s an optional feature that provides a consistent interface to convey that a file was <em>previously</em> uploaded — however — a <a href="https://developer.mozilla.org/en-US/docs/Web/API/FileList">FileList</a> is not attached to the actual <code>&lt;input&gt;</code> tag for upload.
::

### Uploading files

The file upload process is left to your form’s submission handler. When submitting the form [via full page request](/inputs/form#submitting-as-a-page-request) no further processing is necessary, however when submitting [via XHR/Fetch request](/inputs/form#submitting-via-xhrfetch-request) you will need to create an [instance of `FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) with the files attached. Here is a working example:

::Example
---
  name: "File input"
  file: "_content/_examples/file-upload/file-upload.vue"
---
::

## Props & Attributes

The `file` input has a few unique props. There are also several commonly used native HTML attributes that assist in controlling file uploads.

::ReferenceTable
---
input: "file" 
attrs: ['accept', 'capture', 'multiple', 'webkitdirectory']
data: [
  {
    "prop": "file-item-icon",
    "type": "String",
    "default": "’’",
    "description": "Specifies <a href=&quot;/essentials/icons&quot;>an icon</a> to put in the <code>fileItemIcon</code> section. Only shows when there is a file selected. Defaults to the <code>fileDoc</code> icon."
  },
  {
    "prop": "file-remove-icon",
    "type": "String",
    "default": "’’",
    "description": "Specifies <a href=&quot;/essentials/icons&quot;>an icon</a> to put in the <code>fileRemoveIcon</code> section. Only shows when a file is selected. Defaults to the <code>close</code> icon."
  },
  {
    "prop": "no-files-icon",
    "type": "String",
    "default": "’’",
    "description": "Specifies <a href=&quot;/essentials/icons&quot;>an icon</a> to put in the <code>noFilesIcon</code> section. Only shows when no file is selected. Defaults to the <code>fileDoc</code> icon."
  }
]
---
::


## Sections

:SectionKeysIntro

### Single file diagram

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--file file-single"
schema: [
  {
    name: 'outer',
    children: [
      {
        name: 'wrapper',
        position: 'right',
        children: [
          {
            name: 'label',
            content: 'Your resumé',
            position: 'right',
          }, 
          {
            name: 'inner',
            children: [
              {
                name: 'prefixIcon',
                content: '🗄'
              },
              {
                name: 'prefix',
              },
              {
                name: 'input',
              },
              {
                name: 'noFiles',
                children: [
                  {
                    name: 'noFilesIcon',
                  }
                ]
              },
              {
                name: 'fileList',
                children: [
                  {
                    name: 'fileItem',
                    children: [
                      {
                        name: 'fileItemIcon',
                        content: '📁'
                      },
                      {
                        name: 'fileName',
                        content: 'my-resume.pdf'
                      },
                      {
                        name: 'fileRemove',
                        position: 'right',
                        children: [
                          {
                            name: 'fileRemoveIcon',
                            content: 'X',
                            position: 'right',
                          }
                        ]
                      },
                    ]
                  }
                ]
              },
              {
                name: 'suffix',
                position: 'right',
              },
              {
                name: 'suffixIcon',
                position: 'right',
              },
            ]
          },
        ]
      },
      {
        name: 'help',
        content: 'Upload your resumé.',
        position: 'right'
      },
      {
        name: 'messages',
        position: 'right',
        children: [
          {
            name: 'message',
            content: 'Only supports .pdf and .docx extensions.',
            position: 'right'
          }
        ]
      }
    ]
  }
]
---
::

### Multiple file diagram

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--file file-multiple"
schema: [
  {
    name: 'outer',
    children: [
      {
        name: 'wrapper',
        position: 'right',
        children: [
          {
            name: 'label',
            content: 'Your resumé',
            position: 'right',
          }, 
          {
            name: 'inner',
            children: [
              {
                name: 'prefixIcon',
                content: '🗄'
              },
              {
                name: 'prefix',
              },
              {
                name: 'input',
              },
              {
                name: 'fileList',
                children: [
                  {
                    name: 'fileItem',
                    children: [
                      {
                        name: 'fileItemIcon',
                        content: '📁'
                      },
                      {
                        name: 'fileName',
                        content: 'my-resume.pdf'
                      },
                    ]
                  }
                ]
              },
              {
                name: 'fileRemove',
                content: 'Remove all',
                position: 'right',
              },
              {
                name: 'noFiles',
                position: 'right',
                children: [
                  {
                    name: 'noFilesIcon',
                    position: 'right',
                  }
                ]
              },
              {
                name: 'suffix',
                position: 'right',
              },
              {
                name: 'suffixIcon',
                position: 'right',
              },
            ]
          },
        ]
      },
      {
        name: 'help',
        content: 'Upload your resumé.',
        position: 'right'
      },
      {
        name: 'messages',
        position: 'right',
        children: [
          {
            name: 'message',
            content: 'Only supports .pdf and .docx extensions.',
            position: 'right'
          }
        ]
      }
    ]
  }
]
---
::

::ReferenceTable
---
type: "sectionKeys"
primary: "section-key"
data: [
  {
    "section-key": "fileList",
    description: "A wrapper for the whole list of files.",
  },
  {
    "section-key": "fileItemIcon",
    description: "An element containing an optional fileItem icon.",
  },
  {
    "section-key": "fileItem",
    description:
      "An element containing the fileName and remove action for each file.",
  },
  {
    "section-key": "fileName",
    description: "The element containing the name of a file.",
  },
  {
    "section-key": "fileRemove",
    description: "The element that removes a file from the list.",
  },
  {
    "section-key": "fileRemoveIcon",
    description: "An element containing the fileRemove icon.",
  },
  {
    "section-key": "noFiles",
    description: "The element shown when there are no files selected.",
  },
  {
    "section-key": "noFilesIcon",
    description: "An element containing an icon within the noFiles section.",
  },
]
---
::

