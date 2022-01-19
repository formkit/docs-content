<InputPageHero
title="Hidden input"
icon="IconInputHidden"
:pro="false"
project-price=""
data-price=""></InputPageHero>

The `hidden` input uses HTML's [native hidden input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/hidden). It is not a visible element, and should only be used to provide data that is not entered by a user.

<example
name="Hidden input"
file="/_content/examples/hidden/hidden.vue"
tabs="html,render"
langs="vue"></example>

<callout type="warning">
Since <code>hidden</code> inputs are not intended for display to end users, FormKit does not render common user-facing features such as the <code>label</code>, <code>help text</code> , or <code>messages</code>.<br><br>Validation rules can still be applied to a hidden input that will prevent a form from submitting, but please note that the errors will not be displayed on this hidden input.
</callout>

## Props & Attributes

The `hidden` input has no unique props but can make use of the following universal
FormKit props.

<reference-table :without="['help', 'label', 'errors']">
</reference-table>

## Composition keys

Hidden inputs do not render all of the surrounding markup typical of other inputs. As such, most composition keys do not apply.

<reference-table type="compositionKeys" primary="composition-key" :without="['outer', 'wrapper', 'label', 'inner', 'help', 'messages', 'message', 'prefix', 'suffix']"></reference-table>
