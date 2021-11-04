# Hidden input

The hidden input uses html's [native hidden input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/hidden). It is not a visible element, and should only be used to provide data that is not enter by a user.

<example
name="Hidden input"
file="/_content/examples/hidden/hidden"
tabs="html,render"
langs="vue"></example>

<callout type="warning">
Since hidden inputs are not intended for display to end users FormKit does not render common user facing features such like the <code>label</code>, <code>help</code> text, or <code>messages</code>.<br><br>Validation rules can still be applied to hidden input that will prevent a form
from submitting, but please not that the errors will not be displayed on this
hidden input.
</callout>

## Props & Attributes

The hidden input has no unique props but can make use of the following universal
FormKit props.

<reference-table :without="['help', 'label']">
</reference-table>

## Composition keys

Hidden inputs do not render all of the surrounding markup typical of other inputs — as such most composition keys do not apply.

<reference-table type="compositionKeys" primary="composition-key" :without="['outer', 'wrapper', 'label', 'inner', 'help', 'messages', 'message']"></reference-table>

## Available utilities

[TK] - Masks

[TK] - Casts
