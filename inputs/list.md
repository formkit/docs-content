---
title: List Input
description: An invisible FormKit input that allows you to logically structure your form data as an array.
---

<InputPageHero title="List"></InputPageHero>

<page-toc></page-toc>

The `list` input allows you to structure data from child inputs as an array. The list itself outputs no markup (by default) and can be used in conjunction with any other type of input — including nested [groups](/inputs/group) and lists.

The value of a list input is an array where each item is the value of the input at that index. Sub-inputs do not need to be of the same type. In addition to structuring data, lists can determine the validation state, provide initial values, and supply plugins and configuration to all of its children.

## Basic example

<example
name="List input"
file="/_content/examples/list/list.vue"></example>

<callout type="tip" label="Performance">
Vue’s handy <code>v-model</code> is fully supported in FormKit with bi-directional data flow even on lists and groups. However, if your form needs extremely high performance consider using the <a href="/essentials/architecture">core node</a> to read/write instead of v-model.
</callout>

## Validity of children

Lists are always aware of the validation state of their children (including nested children). You can access this data in the [context](/essentials/configuration) object of the input (`context.state.valid`).

<example
name="List input"
file="/_content/examples/list-validity/list-validity.vue"></example>

## Props & Attributes

<reference-table input="list" :data="[{ prop: 'disabled', type: 'Boolean', default: 'false', description: 'Disables all the inputs in the list.'}]" :without="['help', 'label', 'prefix-icon', 'suffix-icon', 'validation', 'validation-visibility', 'validation-label']">
</reference-table>

## Sections

<reference-table type="sectionKeys" primary="section-key" :without="['outer','prefix', 'suffix', 'prefixIcon', 'suffixIcon', 'label','inner','input','help','messages','message']">
</reference-table>
