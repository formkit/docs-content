<InputPageHero
title="File input"
icon="IconInputFile"
:pro="false"
project-price=""
data-price=""></InputPageHero>

The `file` input uses HTML's [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file). It allows users to select files from their device for upload. In addition to native input features it adds support for:

- Drag and drop
- Clearing the input
- Repopulating from an array

<example
  name="File input"
  file="/_content/examples/file/file.vue">

## Array value

The value of the `file` type should always be an array of objects where each object contains a `name` (string) and optional `file` ([File](https://developer.mozilla.org/en-US/docs/Web/API/File)) property. When selecting new files from a user’s device, FormKit will convert [the native `FileList`](https://developer.mozilla.org/en-US/docs/Web/API/FileList) to the required array-based structure automatically.

This structure can be used to pre-populate a file input with previously uploaded file values.

<example
  name="File input"
  file="/_content/examples/file-populate/file-populate.vue">
</example>>
<callout type="tip" label="Display only">
Pre-populating an input with file names is for display purposes only. It’s an optional feature that provides a consistent interface to convey that a file was <em>previously</em> uploaded — however a <a href="https://developer.mozilla.org/en-US/docs/Web/API/FileList">FileList</a> is not attached to the actual <code>&lt;input&gt;</code> tag for upload.
</callout>

### Uploading files

The file upload process is left to your form’s submission handler. When submitting the form [via full page request](/essentials/form#submitting-via-page-request) no further processing is necessary, however when submitting [via XHR/Fetch request](/essentials/form#submitting-via-xhrfetch-request) you will need to create an [instance of `FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) with the files attached. Here is a working example:

<example
  name="File input"
  file="/_content/examples/file-upload/file-upload.vue">
</example>

> ributes

The `file` input has no unique props but the native input does have a number of unique attributes that alter the behavior of the file uploader.

<reference-table input="file" :attrs="['accept', 'capture', 'multiple', 'webkitdirectory' ]">
</reference-table>

## Composition keys

<reference-table type="compositionKeys" primary="composition-key">
</reference-table>
