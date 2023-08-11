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
- `otherwise` *optional* — (else) The section that applies if the condition is false.

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
* `value` * optional * — The value of the message.

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
createSection(section: string, el: string | null | (() => FormKitSchemaNode), fragment: true): FormKitSection<FormKitExtendableSchemaRoot>;
createSection(section: string, el: string | null | (() => FormKitSchemaNode)): FormKitSection<FormKitSchemaExtendableSection>;
createSection(section: string, el: string | (() => FormKitSchemaNode), fragment: false): FormKitSection<FormKitSchemaExtendableSection>;
```

</client-only>

#### Parameters

* `section` — A single section of schema
* `el` — The element or a function that returns a schema node.
* `fragment`

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

### eachSection()

Runs a callback over every section in a schema. if stopOnCallbackReturn is true and the callback returns a value, the loop will stop and return that value.

#### Signature

<client-only>

```typescript
eachSection<T>(schema: FormKitSchemaDefinition, callback: (section: FormKitSchemaComponent | FormKitSchemaDOMNode, schemaParent: FormKitSchemaNode[], schema: FormKitSchemaCondition) => T, stopOnCallbackReturn?: boolean, schemaParent?: FormKitSchemaNode[]): T | void;
```

</client-only>

#### Parameters

* `schema` — A [FormKitSchemaNode](/api-reference/formkit-core#formkitschemanode) array.
* `callback` — A callback to run on every section.
* `stopOnCallbackReturn` * optional * — If true, the loop will stop if the callback returns a value.
* `schemaParent` * optional * — The parent of the current schema node.

#### Returns

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
* `extension` * optional * — The values to extend on the base schema node.

#### Returns

 [FormKitSchemaNode](/api-reference/formkit-core#formkitschemanode)

### findSection()

Finds a seciton by name in a schema.

#### Signature

<client-only>

```typescript
findSection(schema: FormKitSchemaDefinition, target: string): [false, false] | [FormKitSchemaNode[] | false, FormKitSchemaCondition];
```

</client-only>

#### Parameters

* `schema` — A [FormKitSchemaDefinition](/api-reference/formkit-core#formkitschemadefinition) array.
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
useSchema(inputSection: FormKitSection): FormKitSchemaExtendableSection;
```

</client-only>

#### Parameters

* `inputSection` — Content to store in the input section key location.

#### Returns

 [FormKitExtendableSchemaRoot](/api-reference/formkit-core#formkitextendableschemaroot)

## TypeScript

### FormKitBaseEvents

General input events available to all FormKit inputs.

<client-only>

```typescript
interface FormKitBaseEvents<Props extends FormKitInputs<Props>> {
    (event:'input', value: PropType<Props, 'value'>, node: FormKitNode): any;
    (event:'inputRaw', value: PropType<Props, 'value'>, node: FormKitNode): any;
    (event:'input-raw', value: PropType<Props, 'value'>, node: FormKitNode): any;
    (event:'update: modelValue', value: PropType<Props, 'value'>): any;
    (event:'update: model-value', value: PropType<Props, 'value'>): any;
    (event:'node', node: FormKitNode): any;
}
```

</client-only>

### FormKitBaseProps

Base props that should be applied to all FormKit inputs. These are not actual runtime props and are pulled from the context.attrs object. Many of these are just html attributes that are passed through to the input element.

<client-only>

```typescript
interface FormKitBaseProps {
    accept: string;
    action: string;
    actions:'true' | 'false' | boolean;
    dirtyBehavior:'touched' | 'compare';
    disabled:'true' | 'false' | boolean;
    enctype: string;
    help: string;
    ignore:'true' | 'false' | boolean;
    label: string;
    max: string | number;
    method: string;
    min: string | number;
    multiple:'true' | 'false' | boolean;
    placeholder: string;
    preserve:'true' | 'false' | boolean;
    preserveErrors:'true' | 'false' | boolean;
    step: string | number;
}
```

</client-only>

### FormKitBaseSlots

Nearly all inputs in FormKit have a "base" set of slots. This is the "sandwich" around the input itself, like the wrappers, help text, error messages etc. Several other input’s slots extend this base interface.

<client-only>

```typescript
interface FormKitBaseSlots<Props extends FormKitInputs<Props>> {
    help: FormKitSlotData<Props>;
    inner: FormKitSlotData<Props>;
    input: FormKitSlotData<Props>;
    label: FormKitSlotData<Props>;
    message: FormKitSlotData<Props, {
        message: FormKitMessage;
    }>;
    messages: FormKitSlotData<Props>;
    outer: FormKitSlotData<Props>;
    prefix: FormKitSlotData<Props>;
    prefixIcon: FormKitSlotData<Props>;
    suffix: FormKitSlotData<Props>;
    suffixIcon: FormKitSlotData<Props>;
    wrapper: FormKitSlotData<Props>;
}
```

</client-only>

### FormKitBoxSlots

The slots available to the radio and checkbox inputs when options are provided.

<client-only>

```typescript
interface FormKitBoxSlots<Props extends FormKitInputs<Props>> {
    box: FormKitSlotData<Props, OptionSlotData<Props>>;
    decorator: FormKitSlotData<Props, OptionSlotData<Props>>;
    decoratorIcon: FormKitSlotData<Props, OptionSlotData<Props>>;
    fieldset: FormKitSlotData<Props>;
    help: FormKitSlotData<Props>;
    icon: FormKitSlotData<Props, OptionSlotData<Props>>;
    inner: FormKitSlotData<Props, OptionSlotData<Props>>;
    input: FormKitSlotData<Props, OptionSlotData<Props>>;
    label: FormKitSlotData<Props, OptionSlotData<Props>>;
    legend: FormKitSlotData<Props>;
    message: FormKitSlotData<Props, {
        message: FormKitMessage;
    }>;
    messages: FormKitSlotData<Props>;
    option: FormKitSlotData<Props, OptionSlotData<Props>>;
    optionHelp: FormKitSlotData<Props, OptionSlotData<Props>>;
    options: FormKitSlotData<Props>;
    prefix: FormKitSlotData<Props, OptionSlotData<Props>>;
    suffix: FormKitSlotData<Props, OptionSlotData<Props>>;
    wrapper: FormKitSlotData<Props, OptionSlotData<Props>>;
}
```

</client-only>

### FormKitConditionalProps

These are props that are used as conditionals in one or more inputs, and as such they need to be defined on all input types. These should all be defined explicitly as "undefined" here, and then defined as their specific type in the FormKitInputProps interface only on the inputs that use them.

<client-only>

```typescript
interface FormKitConditionalProps {
    offValue: undefined;
    onValue: undefined;
    options: undefined;
}
```

</client-only>

### FormKitEventsAsProps

In a perfect world this interface would not be required at all. However, Vue expects the interfaces to be defined as method overloads. Unfortunately since our events interface uses generics UnionToIntersection is not able to be used meaning that we loose event data if we store the events as a standard interface with property keys. The only way we have found to reliably get Volar (as of June 2023) to properly recognize all defined events is to use a the "standard" method overload approach (see FormKitBaseEvents).

(Basically we cannot use the events in this interface to automatically produce the FormKitBaseEvents without Volar loosing event data)

This means we have no way to get the event names out of the interface so we cannot properly use them in our props. This matters for things like TSX support where the event names need to be available as `onEventName` props.

This interface is used to manually patch that gap in the type system. These types should match up 1-1 with the events defined in FormKitBaseEvents as well as FormKitInputEvents.

<client-only>

```typescript
interface FormKitEventsAsProps {
    'onUpdate: modelValue': (value: unknown, node: FormKitNode) => any;
    onInput: (value: unknown, node: FormKitNode) => any;
    onInputRaw: (value: unknown, node: FormKitNode) => any;
    onNode: (node: FormKitNode) => any;
}
```

</client-only>

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

### FormKitFileSlots

The slots available to the file input, these extend the base slots.

<client-only>

```typescript
interface FormKitFileSlots<Props extends FormKitInputs<Props>> extends FormKitBaseSlots<Props> {
    fileItem: FormKitSlotData<Props>;
    fileItemIcon: FormKitSlotData<Props, {
        file: FormKitFile;
    }>;
    fileList: FormKitSlotData<Props>;
    fileName: FormKitSlotData<Props, {
        file: FormKitFile;
    }>;
    fileRemove: FormKitSlotData<Props, {
        file: FormKitFile;
    }>;
    fileRemoveIcon: FormKitSlotData<Props, {
        file: FormKitFile;
    }>;
    noFiles: FormKitSlotData<Props>;
}
```

</client-only>

### FormKitInputEvents

Unique events emitted by each FormKit input. The shape of this interface is:

<client-only>

```ts
interface FormKitInputEvents<Props extends Inputs> {
  typeString: { customEvent: (value: PropType<Props, 'value'>) => any } // <-- All unique events
}
```

</client-only>

All inputs will also inherit all events from FormKitBaseInputEvents.

<client-only>

```typescript
interface FormKitInputEvents<Props extends FormKitInputs<Props>> {
    form:{
        (event:'submit-raw', e: Event, node: FormKitNode): any;
        (event:'submit-invalid', node: FormKitNode): any;
        (event:'submit', data: any, node: FormKitNode): any;
    };
}
```

</client-only>

### FormKitInputEventsAsProps

See the comment tome on  for why this type is necessary.

<client-only>

```typescript
interface FormKitInputEventsAsProps<Props extends FormKitInputs<Props>> {
    form:{
        onSubmitRaw: (e: Event, node: FormKitNode) => any;
        onSubmitInvalid: (node: FormKitNode) => any;
        onSubmit: (data: any, node: FormKitNode) => any;
    };
}
```

</client-only>

### FormKitInputProps

This is the base interface for providing prop definitions to the FormKit component. It is used to define the props that are available to the each component in the FormKit library by using a discriminated union type. The structure of this interface is:

<client-only>

```ts
interface FormKitInputProps {
 typeString: { type: 'string'; value?: string } // <-- All unique props
}
```

</client-only>

All inputs will also inherit all props from FormKitBaseInputProps.

Note: It is important that all inputs provide a type and a value prop.

<client-only>

```typescript
interface FormKitInputProps<Props extends FormKitInputs<Props>> {
    _:{
        type?: Props['type']extendskeyofFormKitInputProps<Props>?never: Props['type'];
        value?: string;
    };
    button:{
        type:'button';
        value?: undefined;
    };
    checkbox:{
        type:'checkbox';
        options?: FormKitOptionsProp;
        onValue?: any;
        offValue?: any;
        value?: Props['options']extendsRecord<inferT, string>?T[]: Props['options']extendsFormKitOptionsItem[]?Array<Props['options'][number]['value']>: Props['options']extendsArray<inferT>?T[]: (Props['onValue']extendsAllReals?Props['onValue']: true) | (Props['offValue']extendsAllReals?Props['offValue']: false);
    };
    color:{
        type:'color';
        value?: string;
    };
    date:{
        type:'date';
        value?: string;
    };
    datetimeLocal:{
        type:'datetimeLocal';
        value?: string;
    };
    email:{
        type:'email';
        value?: string;
    };
    file:{
        type:'file';
        value?: FormKitFile[];
    };
    form:{
        type:'form';
        value?: FormKitGroupValue;
        actions?: boolean | string;
        submitAttrs?: Record<string, any>;
        submitBehavior?:'disabled' | 'live';
        incompleteMessage?: false | string;
    };
    group:{
        type:'group';
        value?: FormKitGroupValue;
    };
    hidden:{
        type:'hidden';
        value?: string;
    };
    list:{
        type:'list';
        value?: unknown[];
        dynamic?: boolean | 'true' | 'false';
        sync?: boolean | 'true' | 'false';
    };
    month:{
        type:'month';
        value?: string;
    };
    number:{
        type:'number';
        value?: string;
    };
    password:{
        type:'password';
        value?: string;
    };
    radio:{
        type:'radio';
        options: FormKitOptionsProp;
        value?: FormKitOptionsValue<Props['options']>;
    };
    range:{
        type:'range';
        value?: string;
    };
    search:{
        type:'search';
        value?: string;
    };
    select:{
        type:'select';
        options?: FormKitOptionsProp;
        value?: FormKitOptionsValue<Props['options']>;
    };
    submit:{
        type:'submit';
        value?: string;
    };
    tel:{
        type:'tel';
        value?: string;
    };
    text:{
        type:'text';
        value?: string;
    };
    textarea:{
        type:'textarea';
        value?: string;
    };
    time:{
        type:'time';
        value?: string;
    };
    url:{
        type:'url';
        value?: string;
    };
    week:{
        type:'week';
        value?: string;
    };
}
```

</client-only>

### FormKitInputSlots

Slots provided by each FormKit input. The shape of this interface is:

<client-only>

```ts
interface FormKitInputSlots<Props extends Inputs> {
  typeString: { default: (value: PropType<Props, 'value'>) => any } // <-- All unique slots
}
```

</client-only>

There is no automatic inheritance of slots — each slot must be explicitly defined for each input.

<client-only>

```typescript
interface FormKitInputSlots<Props extends FormKitInputs<Props>> {
    button: FormKitButtonSlots<Props>;
    checkbox: Props['options']extendsAllReals?FormKitBoxSlots<Props>: FormKitBaseSlots<Props>;
    color: FormKitTextSlots<Props>;
    date: FormKitTextSlots<Props>;
    datetimeLocal: FormKitTextSlots<Props>;
    email: FormKitTextSlots<Props>;
    file: FormKitFileSlots<Props>;
    form:{
        form: FormKitSlotData<Props>;
        default: FormKitSlotData<Props>;
        message: FormKitSlotData<Props, {
        message: FormKitMessage;
    }>;
        messages: FormKitSlotData<Props>;
        actions: FormKitSlotData<Props>;
        submit: FormKitSlotData<Props>;
    };
    group:{
        default: FormKitSlotData<Props>;
    };
    hidden:{
        input: FormKitSlotData<Props>;
    };
    list:{
        default: FormKitSlotData<Props>;
    };
    month: FormKitTextSlots<Props>;
    number: FormKitTextSlots<Props>;
    password: FormKitTextSlots<Props>;
    radio: Props['options']extendsAllReals?FormKitBoxSlots<Props>: FormKitBaseSlots<Props>;
    range: FormKitTextSlots<Props>;
    search: FormKitTextSlots<Props>;
    select: FormKitSelectSlots<Props>;
    submit: FormKitButtonSlots<Props>;
    tel: FormKitTextSlots<Props>;
    text: FormKitTextSlots<Props>;
    textarea: FormKitTextSlots<Props>;
    time: FormKitTextSlots<Props>;
    url: FormKitTextSlots<Props>;
    week: FormKitTextSlots<Props>;
}
```

</client-only>

### FormKitOptionsItem

Options should always be formatted as an array of objects with label and value properties.

<client-only>

```typescript
interface FormKitOptionsItem<V = unknown> {
    __original?: any;
    [index: string]: any;
    attrs?:{
        disabled?: boolean;
    }&Record<string, any>;
    label: string;
    value: V;
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

### FormKitRuntimeProps

Typings for all the built in runtime props.

Warning: As of writing these are only specific to Vue’s runtime prop requirements and should not be used as any kind of external API as they are subject to change.

<client-only>

```typescript
interface FormKitRuntimeProps<Props extends FormKitInputs<Props>> {
    classes: Record<string, string | Record<string, boolean> | FormKitClasses>;
    config: Record<string, any>;
    delay: number;
    errors: string[];
    id: string;
    index: number;
    inputErrors: Record<string, string[]>;
    modelValue: PropType<Props, 'value'>;
    name: string;
    parent: FormKitNode;
    plugins: FormKitPlugin[];
    sectionsSchema: Record<string, Partial<FormKitSchemaNode> | FormKitSchemaCondition>;
    sync: boolean | undefined;
    type: string | FormKitTypeDefinition;
    validation: string | Array<[rule: string, ...args: any]>;
    validationLabel: string | ((node: FormKitNode) => string);
    validationMessages: Record<string, string | ((ctx:{
        node: FormKitNode;
        name: string;
        args: any[];
    }) => string)>;
    validationRules: Record<string, (node: FormKitNode) => boolean | Promise<boolean>>;
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

### FormKitSelectSlots

The slots available to the sekect input, these extend the base slots.

<client-only>

```typescript
interface FormKitSelectSlots<Props extends FormKitInputs<Props>> extends FormKitBaseSlots<Props> {
    default: FormKitSlotData<Props>;
    option: FormKitSlotData<Props, OptionSlotData<Props>>;
    selectIcon: FormKitSlotData<Props>;
}
```

</client-only>

### FormKitSlotData

The shape of the context object that is passed to each slot.

<client-only>

```typescript
interface FormKitSlotData<Props extends FormKitInputs<Props>, E extends Record<string, any> = {}> {
    (context: FormKitFrameworkContext<PropType<Props, 'value'>>&E): any;
}
```

</client-only>

### FormKitTextSlots

The slots available to the FormKitText input, these extend the base slots.

<client-only>

```typescript
interface FormKitTextSlots<Props extends FormKitInputs<Props>> extends FormKitBaseSlots<Props> {
}
```

</client-only>

### OptionSlotData

The data available to slots that have an option in scope.

<client-only>

```typescript
interface OptionSlotData<Props extends FormKitInputs<Props>> {
    option: FormKitOptionsItem<PropType<Props, 'value'>>;
}
```

</client-only>

### AllReals

An attempt to capture all non-undefined values. This is used to define various conditionals where undefined is not a concrete type, but all other values need to take one logical branch.

<client-only>

```typescript
export type AllReals = number | string | boolean | CallableFunction | Array<any> | null | Record<any, any>;
```

</client-only>

### FormKitButtonSlots

The slots available to the button input, these extend the base slots.

<client-only>

```typescript
export type FormKitButtonSlots<Props extends FormKitInputs<Props>> = Omit<FormKitBaseSlots<Props>, 'input' | 'help'> & {
    default: FormKitSlotData<Props>;
};
```

</client-only>

### FormKitEvents

All FormKit events should be included for a given set of props.

<client-only>

```typescript
export type FormKitEvents<Props extends FormKitInputs<Props>> = MergedEvents<Props>;
```

</client-only>

### FormKitFileValue

A synthetic array-based "FileList".

<client-only>

```typescript
export type FormKitFileValue = FormKitFile[];
```

</client-only>

### FormKitInputs

All FormKit inputs should be included for this type.

<client-only>

```typescript
export type FormKitInputs<Props extends FormKitInputs<Props>> = MergedProps<Props>[keyof MergedProps<Props>];
```

</client-only>

### FormKitInputSchema

Either a schema node, or a function that returns a schema node.

<client-only>

```typescript
export type FormKitInputSchema = ((children?: FormKitSchemaDefinition) => FormKitSchemaNode) | FormKitSchemaNode;
```

</client-only>

### FormKitOptionsList

An array of option items.

<client-only>

```typescript
export type FormKitOptionsList = FormKitOptionsItem[];
```

</client-only>

### FormKitOptionsProp

The types of options that can be passed to the options prop.

<client-only>

```typescript
export type FormKitOptionsProp = FormKitOptionsPropExtensions[keyof FormKitOptionsPropExtensions];
```

</client-only>

### FormKitOptionsValue

<client-only>

```typescript
export type FormKitOptionsValue<Options> = Options extends FormKitOptionsProp ? Options extends Record<infer T, string> ? T : Options extends FormKitOptionsItem[] ? Options[number]['value'] : Options extends Array<infer T> ? T : unknown : unknown;
```

</client-only>

### InputType

Selects the "type" from the props if it exists, otherwise it defaults to "text".

<client-only>

```typescript
export type InputType<Props extends FormKitInputs<Props>> = Props['type'] extends string ? Props['type'] : 'text';
```

</client-only>

### MergedEvents

Merge all events into a single type. This is then used as the structure for

<client-only>

```typescript
export type MergedEvents<Props extends FormKitInputs<Props>> = InputType<Props> extends keyof FormKitInputEvents<Props> ? FormKitBaseEvents<Props> & FormKitInputEvents<Props>[InputType<Props>] : FormKitBaseEvents<Props>;
```

</client-only>

### MergedProps

A merger of input props, base props, and conditional props. This is then used as the structure for the FormKitInputs type.

<client-only>

```typescript
export type MergedProps<Props extends FormKitInputs<Props>> = {
    [K in keyof FormKitInputProps<Props>]: Omit<Partial<FormKitBaseProps>, keyof FormKitInputProps<Props>[K]> & Omit<Partial<FormKitRuntimeProps<Props>>, keyof FormKitInputProps<Props>[K]> & Omit<Partial<FormKitConditionalProps>, keyof FormKitInputProps<Props>[K]> & Partial<K extends keyof FormKitInputEventsAsProps<Props> ? Omit<FormKitEventsAsProps, keyof FormKitInputEventsAsProps<Props>[K]> & FormKitInputEventsAsProps<Props>[K] : FormKitEventsAsProps> & FormKitInputProps<Props>[K];
};
```

</client-only>

### PropType

Extracts the type from a given prop.

<client-only>

```typescript
export type PropType<Props extends FormKitInputs<Props>, T extends keyof FormKitInputs<Props>> = Extract<FormKitInputs<Props>, {
    type: Props['type'] extends string ? Props['type'] : 'text';
}>[T];
```

</client-only>