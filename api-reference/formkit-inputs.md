---
title: formkit/inputs
---

# @formkit/inputs

<page-toc></page-toc>

## Introduction

The official FormKit Inputs plugin. This package contains the source code for all native HTML input types. Read the [inputs documentation](https://formkit.com/essentials/inputs) for usage instructions.

## Helpers

### $attrs()

Applies attributes to a given schema section by applying a higher order function that merges a given set of attributes into the node.

#### Signature

<client-only>

```typescript
$attrs(attrs: FormKitSchemaAttributes | (() => FormKitSchemaAttributes), section: FormKitSchemaExtendableSection): FormKitSchemaExtendableSection;
```

</client-only>

#### Parameters

- `attrs` — Attributes to apply to a [FormKitSchemaExtendableSection](#formkitschemaextendablesection).
- `section` — A section to apply attributes to.

#### Returns

 [FormKitSchemaExtendableSection](#formkitschemaextendablesection)

### $extend()

Extends a schema node with a given set of extensions.

#### Signature

<client-only>

```typescript
$extend(section: FormKitSchemaExtendableSection, extendWith: Partial<FormKitSchemaNode>): FormKitSchemaExtendableSection;
```

</client-only>

#### Parameters

- `section` — A section to apply an extension to.
- `extendWith` — A partial schema snippet to apply to the section.

#### Returns

 [FormKitSchemaExtendableSection](#formkitschemaextendablesection)

### $for()

Applies a condition to a given schema section.

#### Signature

<client-only>

```typescript
$for(varName: string, inName: string, section: FormKitSchemaExtendableSection): (extensions: Record<string, Partial<FormKitSchemaNode>>) => FormKitSchemaNode;
```

</client-only>

#### Parameters

- `varName` — The name of the variable that holds the current instance.
- `inName` — The variable we are iterating over.
- `section` — A section to repeat.

#### Returns

 [FormKitSchemaExtendableSection](#formkitschemaextendablesection)

### $if()

Applies a condition to a given schema section.

#### Signature

<client-only>

```typescript
$if(condition: string, then: FormKitSchemaExtendableSection, otherwise?: FormKitSchemaExtendableSection): FormKitSchemaExtendableSection;
```

</client-only>

#### Parameters

- `condition` — A schema condition to apply to a section.
- `then` — The section that applies if the condition is true.
- `otherwise` — (else) The section that applies if the condition is false.

#### Returns

 [FormKitSchemaExtendableSection](#formkitschemaextendablesection)

### $root()

Creates a root schema section.

#### Signature

<client-only>

```typescript
$root(section: FormKitSchemaExtendableSection): FormKitExtendableSchemaRoot;
```

</client-only>

#### Parameters

- `section` — A section to make a root from.

#### Returns

 [FormKitSchemaExtendableSection](#formkitschemaextendablesection)

## Features

### checkboxes()

A feature that adds checkbox selection support.

#### Signature

<client-only>

```typescript
checkboxes(node: FormKitNode): void;
```

</client-only>

#### Parameters

* `node` — A [FormKitNode](/api-reference/formkit-core#formkitnode).

### defaultIcon()

Adds icon props definition.

#### Signature

<client-only>

```typescript
defaultIcon(sectionKey: string, defaultIcon: string): (node: FormKitNode) => void;
```

</client-only>

#### Parameters

* `sectionKey` — the location the icon should be loaded.
* `defaultIcon` — the icon that should be loaded if a match is found in the user's CSS.

#### Returns

 A [FormKitPlugin](/api-reference/formkit-core#formkitplugin).

### files()

A feature to add file handling support to an input.

#### Signature

<client-only>

```typescript
files(node: FormKitNode): void;
```

</client-only>

#### Parameters

* `node` — A [FormKitNode](/api-reference/formkit-core#formkitnode).

### initialValue()

A feature that ensures the input has an `initialValue` prop.

#### Signature

<client-only>

```typescript
initialValue(node: FormKitNode): void;
```

</client-only>

#### Parameters

* `node` — A [FormKitNode](/api-reference/formkit-core#formkitnode).

### localize()

Creates a new feature that generates a localization message of type ui for use on a given component.

#### Signature

<client-only>

```typescript
localize(key: string, value?: string): (node: FormKitNode) => void;
```

</client-only>

#### Parameters

* `key` — The key of the message.
* `value` — The value of the message.

#### Returns

 A [FormKitPlugin](/api-reference/formkit-core#formkitplugin).

### normalizeBoxes()

A feature that normalizes box types (checkboxes, radios).

#### Signature

<client-only>

```typescript
normalizeBoxes(node: FormKitNode): FormKitMiddleware<{
    prop: string | symbol;
    value: any;
}>;
```

</client-only>

#### Parameters

* `node` — A [FormKitNode](/api-reference/formkit-core#formkitnode).

#### Returns

 A [FormKitMiddleware](/api-reference/formkit-node#formkitmiddleware).

### options()

A feature that converts the options prop to usable values, to be used by a feature or a plugin.

#### Signature

<client-only>

```typescript
options(node: FormKitNode): void;
```

</client-only>

#### Parameters

* `node` — A [FormKitNode](/api-reference/formkit-core#formkitnode).

### radios()

A feature to check if the value being checked is the current value.

#### Signature

<client-only>

```typescript
radios(node: FormKitNode): void;
```

</client-only>

#### Parameters

* `node` — A [FormKitNode](/api-reference/formkit-core#formkitnode).

## Functions

### composable()

#### Signature

<client-only>

```typescript
composable(key: string, schema: FormKitInputSchema): FormKitSchemaComposable;
```

</client-only>

#### Parameters

* `key` — A new section key name.
* `schema` — The default schema in this composable slot.

#### Returns

 [FormKitSchemaComposable](/api-reference/formkit-core#formkitschemacomposable)

### createLibraryPlugin()

Creates a plugin based on a list of [FormKitLibrary](/api-reference/formkit-core#formkitlibrary).

#### Signature

<client-only>

```typescript
createLibraryPlugin(...libraries: FormKitLibrary[]): FormKitPlugin;
```

</client-only>

#### Parameters

* `libraries` — One or many [FormKitLibrary](/api-reference/formkit-core#formkitlibrary).

#### Returns

 [FormKitPlugin](/api-reference/formkit-core#formkitplugin)

### createSection()

Creates a new reusable section.

#### Signature

<client-only>

```typescript
createSection(section: string, el: string | null | (() => FormKitSchemaNode), root: true): FormKitSection<FormKitExtendableSchemaRoot>;
createSection(section: string, el: string | null | (() => FormKitSchemaNode)): FormKitSection<FormKitSchemaExtendableSection>;
createSection(section: string, el: string | (() => FormKitSchemaNode), root: false): FormKitSection<FormKitSchemaExtendableSection>;
```

</client-only>

#### Parameters

* `section` — A single section of schema
* `el` — The element or a function that returns a schema node.
* `root` — When true, returns a FormKitExtendableSchemaRoot. When false, returns a FormKitSchemaExtendableSection.

#### Returns

 Returns a [FormKitExtendableSchemaRoot](/api-reference/formkit-core#formkitextendableschemaroot) or a [FormKitSchemaExtendableSection](/api-reference/formkit-core#formkitschemaextendablesection).

### disables()

A feature that allows disabling children of this node.

#### Signature

<client-only>

```typescript
disables(node: FormKitNode): void;
```

</client-only>

#### Parameters

* `node` — A [FormKitNode](/api-reference/formkit-core#formkitnode).

### extendSchema()

Extends a single schema node with an extension. The extension can be any partial node including strings.

#### Signature

<client-only>

```typescript
extendSchema(schema: FormKitSchemaNode, extension?: Partial<FormKitSchemaNode>): FormKitSchemaNode;
```

</client-only>

#### Parameters

* `schema` — The base schema node.
* `extension` — The values to extend on the base schema node.

#### Returns

 [FormKitSchemaNode](/api-reference/formkit-core#formkitschemanode)

### findSection()

Finds a seciton by name in a schema.

#### Signature

<client-only>

```typescript
findSection(schema: FormKitSchemaNode[], target: string): [false, false] | [FormKitSchemaNode[], FormKitSchemaCondition];
```

</client-only>

#### Parameters

* `schema` — A [FormKitSchemaNode](/api-reference/formkit-core#formkitschemanode) array.
* `target` — The name of the section to find.

#### Returns

 a tuple of the schema and the section or a tuple of `false` and `false` if not found.

### form()

A feature to add a submit handler and actions section.

#### Signature

<client-only>

```typescript
form(node: FormKitNode): void;
```

</client-only>

#### Parameters

* `node` — A [FormKitNode](/api-reference/formkit-core#formkitnode).

### ignore()

A feature that applies `ignore="true"` by default.

#### Signature

<client-only>

```typescript
ignore(node: FormKitNode): void;
```

</client-only>

#### Parameters

* `node` — A [FormKitNode](/api-reference/formkit-core#formkitnode).

### isSchemaObject()

Type guard for schema objects.

#### Signature

<client-only>

```typescript
isSchemaObject(schema: Partial<FormKitSchemaNode>): schema is FormKitSchemaDOMNode | FormKitSchemaComponent | FormKitSchemaFormKit;
```

</client-only>

#### Parameters

* `schema` — returns `true` if the node is a schema node but not a string or conditional.

#### Returns

 `boolean`

### isSlotCondition()

Checks if the current schema node is a slot condition.

#### Signature

<client-only>

```typescript
isSlotCondition(node: FormKitSchemaNode): node is {
    if: string;
    then: string;
    else: FormKitSchemaNode | FormKitSchemaNode[];
};
```

</client-only>

#### Parameters

* `node` — A [FormKitSchemaNode](/api-reference/formkit-core#formkitschemanode).

#### Returns

 `boolean`

#### Examples

<client-only>

```js
{
 if: '$slot.name',
 then: '$slot.name',
 else: []
} // this schema node would return true.
```

</client-only>

### normalizeOptions()

A function to normalize an array of objects, array of strings, or object of key-values to use an array of objects with value and label properties.

#### Signature

<client-only>

```typescript
normalizeOptions(options: FormKitOptionsProp): FormKitOptionsList;
```

</client-only>

#### Parameters

* `options` — An un
-normalized [FormKitOptionsProp](#formkitoptionsprop).

#### Returns

 A list of [FormKitOptionsList](#formkitoptionslist).

### select()

Converts the options prop to usable values.

#### Signature

<client-only>

```typescript
select(node: FormKitNode): void;
```

</client-only>

#### Parameters

* `node` — A formkit node.

### useSchema()

Creates an input schema with all of the wrapping base schema.

#### Signature

<client-only>

```typescript
useSchema(inputSection: FormKitSection): FormKitExtendableSchemaRoot;
```

</client-only>

#### Parameters

* `inputSection` — Content to store in the input section key location.

#### Returns

 [FormKitExtendableSchemaRoot](/api-reference/formkit-core#formkitextendableschemaroot)

## TypeScript

### FormKitFile

A single file object in FormKit’s synthetic "FileList".

<client-only>

```typescript
interface FormKitFile {
    file?: File;
    name: string;
}
```

</client-only>

### FormKitOptionsItem

Options should always be formatted as an array of objects with label and value properties.

<client-only>

```typescript
interface FormKitOptionsItem {
    __original?: any;
    [index: string]: any;
    attrs?:{
        disabled?: boolean;
    }&Record<string, any>;
    label: string;
    value: unknown;
}
```

</client-only>

### FormKitOptionsPropExtensions

Allows for prop extensions to be defined by using an interface whose keys are ignored, but values are applied to a union type. This allows for any third party code to extend the options prop by using module augmentation to add new values to the union type.

<client-only>

```typescript
interface FormKitOptionsPropExtensions {
    arrayOfNumbers: number[];
    arrayOfStrings: string[];
    optionsList: FormKitOptionsList;
    valueLabelPojo: Record<string | number, string>;
}
```

</client-only>

### FormKitSchemaExtendableSection

A function that is called with an extensions argument and returns a valid schema node.

<client-only>

```typescript
interface FormKitSchemaExtendableSection {
    _s?: string;
    (extensions: Record<string, Partial<FormKitSchemaNode>>): FormKitSchemaNode;
}
```

</client-only>

### FormKitSection

A function that when called, returns a function that can in turn be called with an extension parameter.

<client-only>

```typescript
interface FormKitSection<T = FormKitSchemaExtendableSection> {
    (...children: Array<FormKitSchemaExtendableSection | string>): T;
}
```

</client-only>

### FormKitSyntheticPropsExtensions

Synthetic props are props that are not explicitly declared as props, but should be treated as props to the outside world.

<client-only>

```typescript
interface FormKitSyntheticPropsExtensions {
    accept: string;
    action: string;
    actions: boolean;
    disabled: string | boolean;
    enctype: string;
    help: string;
    ignore: string | boolean;
    label: string;
    max: string | number;
    method: string;
    min: string | number;
    multiple: string | boolean;
    options: FormKitOptionsProp;
    preserve: string | boolean;
    preserveErrors: string | boolean;
    step: string | number;
}
```

</client-only>

### FormKitFileValue

A synthetic array-based "FileList".

<client-only>

```typescript
type FormKitFileValue = FormKitFile[];
```

</client-only>

### FormKitInputSchema

Either a schema node, or a function that returns a schema node.

<client-only>

```typescript
type FormKitInputSchema = ((children?: string | FormKitSchemaNode[] | FormKitSchemaCondition) => FormKitSchemaNode) | FormKitSchemaNode;
```

</client-only>

### FormKitOptionsList

An array of option items.

<client-only>

```typescript
type FormKitOptionsList = FormKitOptionsItem[];
```

</client-only>

### FormKitOptionsProp

The types of options that can be passed to the options prop.

<client-only>

```typescript
type FormKitOptionsProp = FormKitOptionsPropExtensions[keyof FormKitOptionsPropExtensions];
```

</client-only>

### FormKitSyntheticProps

The synthetic prop types.

<client-only>

```typescript
type FormKitSyntheticProps = {
    [Property in keyof FormKitSyntheticPropsExtensions]: FormKitSyntheticPropsExtensions[Property];
};
```

</client-only>