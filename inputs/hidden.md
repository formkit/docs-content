---
title: Hidden Input
description: A native HTML hidden input.
---

<InputPageHero title="Hidden"></InputPageHero>

<page-toc></page-toc>

The `hidden` input uses HTML's [native hidden input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/hidden). It is not a visible element, and should only be used to provide data that is not entered by a user.

## Basic example

<example
name="Hidden input"
file="_content/examples/hidden/hidden-base.vue"
tabs="html,render"></example>

<callout type="warning">
Since <code>hidden</code> inputs are not intended for display to end users, FormKit does not render common user-facing features such as the <code>label</code>, <code>help text</code> , or <code>messages</code>.<br><br>Validation rules can still be applied to a hidden input that will prevent a form from submitting, but please note that the errors will not be displayed on this hidden input.
</callout>

## Schema

Simple hidden schema example:

<example
name="Schema"
file="_content/examples/hidden/hidden-schema.vue"></example>

## Props & Attributes

The `hidden` input has no unique props but can make use of the following universal
FormKit props.

<reference-table :without="['help', 'label', 'errors', 'prefix-icon', 'suffix-icon', ]">
</reference-table>

## Sections

Hidden inputs do not render all of the surrounding markup typical of other inputs. As such, most section keys do not apply.

<reference-table type="sectionKeys" primary="section-key" :without="['outer', 'wrapper', 'label', 'inner', 'help', 'messages', 'message', 'prefix', 'prefixIcon', 'suffix', 'suffixIcon']"></reference-table>
