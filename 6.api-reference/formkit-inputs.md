---
title: formkit/inputs
---

# @formkit/inputs


## Introduction

The official FormKit Inputs plugin. This package contains the source code for all native HTML input types. Read the [inputs documentation](https://formkit.com/essentials/inputs) for usage instructions.

## Helpers

### $attrs()

Applies attributes to a given schema section by applying a higher order function that merges a given set of attributes into the node.

#### Signature


```typescript
$attrs(attrs: FormKitSchemaAttributes | (() => FormKitSchemaAttributes), section: FormKitSchemaExtendableSection): FormKitSchemaExtendableSection;
```

#### Parameters

- `attrs` — Attributes to apply to a [FormKitSchemaExtendableSection](#formkitschemaextendablesection).
- `section` — A section to apply attributes to.

#### Returns

 [FormKitSchemaExtendableSection](#formkitschemaextendablesection)

### $extend()

Extends a schema node with a given set of extensions.

#### Signature


```typescript
$extend(section: FormKitSchemaExtendableSection, extendWith: Partial<FormKitSchemaNode>): FormKitSchemaExtendableSection;
```

#### Parameters

- `section` — A section to apply an extension to.
- `extendWith` — A partial schema snippet to apply to the section.

#### Returns

 [FormKitSchemaExtendableSection](#formkitschemaextendablesection)

### $for()

Applies a condition to a given schema section.

#### Signature


```typescript
$for(varName: string, inName: string, section: FormKitSchemaExtendableSection): (extensions: Record<string, Partial<FormKitSchemaNode>>) => FormKitSchemaNode;
```

#### Parameters

- `varName` — The name of the variable that holds the current instance.
- `inName` — The variable we are iterating over.
- `section` — A section to repeat.

#### Returns

 [FormKitSchemaExtendableSection](#formkitschemaextendablesection)

### $if()

Applies a condition to a given schema section.

#### Signature


```typescript
$if(condition: string, then: FormKitSchemaExtendableSection, otherwise?: FormKitSchemaExtendableSection): FormKitSchemaExtendableSection;
```

#### Parameters

- `condition` — A schema condition to apply to a section.
- `then` — The section that applies if the condition is true.
- `otherwise` *optional* — (else) The section that applies if the condition is false.

#### Returns

 [FormKitSchemaExtendableSection](#formkitschemaextendablesection)

### $root()

Creates a root schema section.

#### Signature


```typescript
$root(section: FormKitSchemaExtendableSection): FormKitExtendableSchemaRoot;
```

#### Parameters

- `section` — A section to make a root from.

#### Returns

 [FormKitSchemaExtendableSection](#formkitschemaextendablesection)

## Features

### checkboxes()

A feature that adds checkbox selection support.

#### Signature


```typescript
checkboxes(node: FormKitNode): void;
```

#### Parameters

* `node` — A [FormKitNode](/api-reference/formkit-core#formkitnode).

### defaultIcon()

Adds icon props definition.

#### Signature


```typescript
defaultIcon(sectionKey: string, defaultIcon: string): (node: FormKitNode) => void;
```

#### Parameters

* `sectionKey` — the location the icon should be loaded.
* `defaultIcon` — the icon that should be loaded if a match is found in the user's CSS.

#### Returns

 A [FormKitPlugin](/api-reference/formkit-core#formkitplugin).

### files()

A feature to add file handling support to an input.

#### Signature


```typescript
files(node: FormKitNode): void;
```

#### Parameters

* `node` — A [FormKitNode](/api-reference/formkit-core#formkitnode).

### initialValue()

A feature that ensures the input has an `initialValue` prop.

#### Signature


```typescript
initialValue(node: FormKitNode): void;
```

#### Parameters

* `node` — A [FormKitNode](/api-reference/formkit-core#formkitnode).

### localize()

Creates a new feature that generates a localization message of type ui for use on a given component.

#### Signature


```typescript
localize(key: string, value?: string): (node: FormKitNode) => void;
```

#### Parameters

* `key` — The key of the message.
* `value` * optional * — The value of the message.

#### Returns

 A [FormKitPlugin](/api-reference/formkit-core#formkitplugin).

### normalizeBoxes()

A feature that normalizes box types (checkboxes, radios).

#### Signature


```typescript
normalizeBoxes(node: FormKitNode): FormKitMiddleware<{
    prop: string | symbol;
    value: any;
}>;
```

#### Parameters

* `node` — A [FormKitNode](/api-reference/formkit-core#formkitnode).

#### Returns

 A [FormKitMiddleware](/api-reference/formkit-node#formkitmiddleware).

### options()

A feature that converts the options prop to usable values, to be used by a feature or a plugin.

#### Signature


```typescript
options(node: FormKitNode): void;
```

#### Parameters

* `node` — A [FormKitNode](/api-reference/formkit-core#formkitnode).

### radios()

A feature to check if the value being checked is the current value.

#### Signature


```typescript
radios(node: FormKitNode): void;
```

#### Parameters

* `node` — A [FormKitNode](/api-reference/formkit-core#formkitnode).

## Functions

### casts()

A feature that allows casting to numbers.

#### Signature


```typescript
casts(node: FormKitNode): void;
```

#### Parameters

* `node` — A [FormKitNode](/api-reference/formkit-core#formkitnode).

### createLibraryPlugin()

Creates a plugin based on a list of [FormKitLibrary](/api-reference/formkit-core#formkitlibrary).

#### Signature


```typescript
createLibraryPlugin(...libraries: FormKitLibrary[]): FormKitPlugin;
```

#### Parameters

* `libraries` — One or many [FormKitLibrary](/api-reference/formkit-core#formkitlibrary).

#### Returns

 [FormKitPlugin](/api-reference/formkit-core#formkitplugin)

### createSection()

Creates a new reusable section.

#### Signature


```typescript
createSection(section: string, el: string | null | (() => FormKitSchemaNode), fragment: true): FormKitSection<FormKitExtendableSchemaRoot>;
createSection(section: string, el: string | null | (() => FormKitSchemaNode)): FormKitSection<FormKitSchemaExtendableSection>;
createSection(section: string, el: string | (() => FormKitSchemaNode), fragment: false): FormKitSection<FormKitSchemaExtendableSection>;
```

#### Parameters

* `section` — A single section of schema
* `el` — The element or a function that returns a schema node.
* `fragment`

#### Returns

 Returns a [FormKitExtendableSchemaRoot](/api-reference/formkit-core#formkitextendableschemaroot) or a [FormKitSchemaExtendableSection](/api-reference/formkit-core#formkitschemaextendablesection).

### disables()

A feature that allows disabling children of this node.

#### Signature


```typescript
disables(node: FormKitNode): void;
```

#### Parameters

* `node` — A [FormKitNode](/api-reference/formkit-core#formkitnode).

### eachSection()

Runs a callback over every section in a schema. if stopOnCallbackReturn is true and the callback returns a value, the loop will stop and return that value.

#### Signature


```typescript
eachSection<T>(schema: FormKitSchemaDefinition, callback: (section: FormKitSchemaComponent | FormKitSchemaDOMNode, schemaParent: FormKitSchemaNode[], schema: FormKitSchemaCondition) => T, stopOnCallbackReturn?: boolean, schemaParent?: FormKitSchemaNode[]): T | void;
```

#### Parameters

* `schema` — A [FormKitSchemaNode](/api-reference/formkit-core#formkitschemanode) array.
* `callback` — A callback to run on every section.
* `stopOnCallbackReturn` * optional * — If true, the loop will stop if the callback returns a value.
* `schemaParent` * optional * — The parent of the current schema node.

#### Returns

### extendSchema()

Extends a single schema node with an extension. The extension can be any partial node including strings.

#### Signature


```typescript
extendSchema(schema: FormKitSchemaNode, extension?: Partial<FormKitSchemaNode>): FormKitSchemaNode;
```

#### Parameters

* `schema` — The base schema node.
* `extension` * optional * — The values to extend on the base schema node.

#### Returns

 [FormKitSchemaNode](/api-reference/formkit-core#formkitschemanode)

### findSection()

Finds a seciton by name in a schema.

#### Signature


```typescript
findSection(schema: FormKitSchemaDefinition, target: string): [false, false] | [FormKitSchemaNode[] | false, FormKitSchemaCondition];
```

#### Parameters

* `schema` — A [FormKitSchemaDefinition](/api-reference/formkit-core#formkitschemadefinition) array.
* `target` — The name of the section to find.

#### Returns

 a tuple of the schema and the section or a tuple of `false` and `false` if not found.

### form()

A feature to add a submit handler and actions section.

#### Signature


```typescript
form(node: FormKitNode): void;
```

#### Parameters

* `node` — A [FormKitNode](/api-reference/formkit-core#formkitnode).

### ignore()

A feature that applies `ignore="true"` by default.

#### Signature


```typescript
ignore(node: FormKitNode): void;
```

#### Parameters

* `node` — A [FormKitNode](/api-reference/formkit-core#formkitnode).

### isGroupOption()

A helper to determine if an option is a group or an option.

#### Signature


```typescript
isGroupOption(option: FormKitOptionsItem | FormKitOptionsGroupItem | FormKitOptionsGroupItemProp): option is FormKitOptionsGroupItem;
```

#### Parameters

* `option` — An option

### isSchemaObject()

Type guard for schema objects.

#### Signature


```typescript
isSchemaObject(schema: Partial<FormKitSchemaNode>): schema is FormKitSchemaDOMNode | FormKitSchemaComponent | FormKitSchemaFormKit;
```

#### Parameters

* `schema` — returns `true` if the node is a schema node but not a string or conditional.

#### Returns

 `boolean`

### isSlotCondition()

Checks if the current schema node is a slot condition.

#### Signature


```typescript
isSlotCondition(node: FormKitSchemaNode): node is {
    if: string;
    then: string;
    else: FormKitSchemaNode | FormKitSchemaNode[];
};
```

#### Parameters

* `node` — A [FormKitSchemaNode](/api-reference/formkit-core#formkitschemanode).

#### Returns

 `boolean`

#### Examples


```js
{
 if: '$slot.name',
 then: '$slot.name',
 else: []
} // this schema node would return true.
```

### normalizeOptions()

A function to normalize an array of objects, array of strings, or object of key-values to use an array of objects with value and label properties.

#### Signature


```typescript
normalizeOptions<T extends FormKitOptionsPropWithGroups>(options: T): T extends FormKitOptionsProp ? FormKitOptionsList : FormKitOptionsListWithGroups;
```

#### Parameters

* `options` — An un
-normalized [FormKitOptionsProp](#formkitoptionsprop).

#### Returns

 A list of [FormKitOptionsList](#formkitoptionslist).

### renamesRadios()

Automatically rename any radio inputs.

#### Signature


```typescript
renamesRadios(node: FormKitNode): void;
```

#### Parameters

* `node` — A formkit node.

#### Returns

### select()

Converts the options prop to usable values.

#### Signature


```typescript
select(node: FormKitNode): void;
```

#### Parameters

* `node` — A formkit node.

### useSchema()

Creates an input schema with all of the wrapping base schema.

#### Signature


```typescript
useSchema(inputSection: FormKitSection): FormKitSchemaExtendableSection;
```

#### Parameters

* `inputSection` — Content to store in the input section key location.

#### Returns

 [FormKitExtendableSchemaRoot](/api-reference/formkit-core#formkitextendableschemaroot)

## TypeScript

### FormKitBaseEvents

General input events available to all FormKit inputs.


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

### FormKitBaseProps

Base props that should be applied to all FormKit inputs. These are not actual runtime props and are pulled from the context.attrs object. Many of these are just html attributes that are passed through to the input element.


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

### FormKitBaseSlots

Nearly all inputs in FormKit have a "base" set of slots. This is the "sandwich" around the input itself, like the wrappers, help text, error messages etc. Several other input’s slots extend this base interface.


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

### FormKitBoxSlots

The slots available to the radio and checkbox inputs when options are provided.


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

### FormKitConditionalProps

These are props that are used as conditionals in one or more inputs, and as such they need to be defined on all input types. These should all be defined explicitly as "undefined" here, and then defined as their specific type in the FormKitInputProps interface only on the inputs that use them.


```typescript
interface FormKitConditionalProps {
    number: undefined;
    offValue: undefined;
    onValue: undefined;
    options: undefined;
}
```

### FormKitEventsAsProps

In a perfect world this interface would not be required at all. However, Vue expects the interfaces to be defined as method overloads. Unfortunately since our events interface uses generics UnionToIntersection is not able to be used meaning that we lose event data if we store the events as a standard interface with property keys. The only way we have found to reliably get Volar (as of June 2023) to properly recognize all defined events is to use a the "standard" method overload approach (see FormKitBaseEvents).

(Basically we cannot use the events in this interface to automatically produce the FormKitBaseEvents without Volar loosing event data)

This means we have no way to get the event names out of the interface so we cannot properly use them in our props. This matters for things like TSX support where the event names need to be available as `onEventName` props.

This interface is used to manually patch that gap in the type system. These types should match up 1-1 with the events defined in FormKitBaseEvents as well as FormKitInputEvents.


```typescript
interface FormKitEventsAsProps {
    'onUpdate: modelValue': (value: unknown, node: FormKitNode) => any;
    onInput: (value: unknown, node: FormKitNode) => any;
    onInputRaw: (value: unknown, node: FormKitNode) => any;
    onNode: (node: FormKitNode) => any;
}
```

### FormKitFile

A single file object in FormKit’s synthetic "FileList".


```typescript
interface FormKitFile {
    file?: File;
    name: string;
}
```

### FormKitFileSlots

The slots available to the file input, these extend the base slots.


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

### FormKitInputEvents

Unique events emitted by each FormKit input. The shape of this interface is:


```ts
interface FormKitInputEvents<Props extends Inputs> {
  typeString: { customEvent: (value: PropType<Props, 'value'>) => any } // <-- All unique events
}
```

All inputs will also inherit all events from FormKitBaseInputEvents.


```typescript
interface FormKitInputEvents<Props extends FormKitInputs<Props>> {
    form:{
        (event:'submit-raw', e: Event, node: FormKitNode): any;
        (event:'submit-invalid', node: FormKitNode): any;
        (event:'submit', data: any, node: FormKitNode): any;
    };
}
```

### FormKitInputEventsAsProps

See the comment tome on  for why this type is necessary.


```typescript
interface FormKitInputEventsAsProps<Props extends FormKitInputs<Props>> {
    form:{
        onSubmitRaw: (e: Event, node: FormKitNode) => any;
        onSubmitInvalid: (node: FormKitNode) => any;
        onSubmit: (data: any, node: FormKitNode) => any;
    };
}
```

### FormKitInputProps

This is the base interface for providing prop definitions to the FormKit component. It is used to define the props that are available to the each component in the FormKit library by using a discriminated union type. The structure of this interface is:


```ts
interface FormKitInputProps {
 typeString: { type: 'string'; value?: string } // <-- All unique props
}
```

All inputs will also inherit all props from FormKitBaseInputProps.

Note: It is important that all inputs provide a type and a value prop.


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
        value?: Props['number']extendsAllReals?number: string;
        number?:'integer' | 'float' | 'true' | true;
    };
    list:{
        type:'list';
        value?: unknown[];
        dynamic?: boolean | 'true' | 'false';
        sync?: boolean | 'true' | 'false';
    };
    meta:{
        type:'meta';
        value?: any;
    };
    month:{
        type:'month';
        value?: string;
    };
    number:{
        type:'number';
        value?: Props['number']extendsAllReals?number: string;
        number?:'integer' | 'float' | 'true' | true;
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
        value?: Props['number']extendsAllReals?number: string;
        number?:'integer' | 'float' | 'true' | true;
    };
    search:{
        type:'search';
        value?: Props['number']extendsAllReals?number | string: string;
        number?:'integer' | 'float' | 'true' | true;
    };
    select:{
        type:'select';
        options?: FormKitOptionsPropWithGroups;
        value?: FormKitOptionsValue<Props['options']>;
    };
    submit:{
        type:'submit';
        value?: string;
    };
    tel:{
        type:'tel';
        value?: Props['number']extendsAllReals?number | string: string;
        number?:'integer' | 'float' | 'true' | true;
    };
    text:{
        type:'text';
        value?: Props['number']extendsAllReals?number | string: string;
        number?:'integer' | 'float' | 'true' | true;
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

### FormKitInputSlots

Slots provided by each FormKit input. The shape of this interface is:


```ts
interface FormKitInputSlots<Props extends Inputs> {
  typeString: { default: (value: PropType<Props, 'value'>) => any } // <-- All unique slots
}
```

There is no automatic inheritance of slots — each slot must be explicitly defined for each input.


```typescript
interface FormKitInputSlots<Props extends FormKitInputs<Props>> {
    'datetime-local': FormKitTextSlots<Props>;
    button: FormKitButtonSlots<Props>;
    checkbox: Props['options']extendsAllReals?FormKitBoxSlots<Props>: FormKitBaseSlots<Props>;
    color: FormKitTextSlots<Props>;
    date: FormKitTextSlots<Props>;
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
    meta:{
        wrapper: FormKitSlotData<Props>;
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

### FormKitOptionsGroupItem

Option groups should always be formatted as an array of objects with group and nested options


```typescript
interface FormKitOptionsGroupItem {
    attrs?: Record<string, any>;
    group: string;
    options: FormKitOptionsList;
}
```

### FormKitOptionsGroupItemProp

Option groups should always be formatted as an array of objects with group and nested options


```typescript
interface FormKitOptionsGroupItemProp {
    attrs?: Record<string, any>;
    group: string;
    options: FormKitOptionsProp;
}
```

### FormKitOptionsItem

Options should always be formatted as an array of objects with label and value properties.


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

### FormKitOptionsPropExtensions

Allows for prop extensions to be defined by using an interface whose keys are ignored, but values are applied to a union type. This allows for any third party code to extend the options prop by using module augmentation to add new values to the union type.


```typescript
interface FormKitOptionsPropExtensions {
    arrayOfNumbers: number[];
    arrayOfStrings: string[];
    optionsList: FormKitOptionsList;
    valueLabelPojo: Record<string | number, string>;
}
```

### FormKitRuntimeProps

Typings for all the built in runtime props.

Warning: As of writing these are only specific to Vue’s runtime prop requirements and should not be used as any kind of external API as they are subject to change.


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

### FormKitSchemaExtendableSection

A function that is called with an extensions argument and returns a valid schema node.


```typescript
interface FormKitSchemaExtendableSection {
    _s?: string;
    (extensions: Record<string, Partial<FormKitSchemaNode>>): FormKitSchemaNode;
}
```

### FormKitSection

A function that when called, returns a function that can in turn be called with an extension parameter.


```typescript
interface FormKitSection<T = FormKitSchemaExtendableSection> {
    (...children: Array<FormKitSchemaExtendableSection | string | FormKitSchemaCondition>): T;
}
```

### FormKitSelectSlots

The slots available to the sekect input, these extend the base slots.


```typescript
interface FormKitSelectSlots<Props extends FormKitInputs<Props>> extends FormKitBaseSlots<Props> {
    default: FormKitSlotData<Props>;
    option: FormKitSlotData<Props, OptionSlotData<Props>>;
    selectIcon: FormKitSlotData<Props>;
}
```

### FormKitSlotData

The shape of the context object that is passed to each slot.


```typescript
interface FormKitSlotData<Props extends FormKitInputs<Props>, E extends Record<string, any> = {}> {
    (context: FormKitFrameworkContext<PropType<Props, 'value'>>&E): any;
}
```

### FormKitTextSlots

The slots available to the FormKitText input, these extend the base slots.


```typescript
interface FormKitTextSlots<Props extends FormKitInputs<Props>> extends FormKitBaseSlots<Props> {
}
```

### OptionSlotData

The data available to slots that have an option in scope.


```typescript
interface OptionSlotData<Props extends FormKitInputs<Props>> {
    option: FormKitOptionsItem<PropType<Props, 'value'>>;
}
```

### AllReals

An attempt to capture all non-undefined values. This is used to define various conditionals where undefined is not a concrete type, but all other values need to take one logical branch.


```typescript
export type AllReals = number | string | boolean | CallableFunction | Array<any> | null | Record<any, any>;
```

### FormKitButtonSlots

The slots available to the button input, these extend the base slots.


```typescript
export type FormKitButtonSlots<Props extends FormKitInputs<Props>> = Omit<FormKitBaseSlots<Props>, 'inner'> & {
    default: FormKitSlotData<Props>;
};
```

### FormKitEvents

All FormKit events should be included for a given set of props.


```typescript
export type FormKitEvents<Props extends FormKitInputs<Props>> = MergedEvents<Props>;
```

### FormKitFileValue

A synthetic array-based "FileList".


```typescript
export type FormKitFileValue = FormKitFile[];
```

### FormKitInputs

All FormKit inputs should be included for this type.


```typescript
export type FormKitInputs<Props extends FormKitInputs<Props>> = MergedProps<Props>[keyof MergedProps<Props>];
```

### FormKitInputSchema

Either a schema node, or a function that returns a schema node.


```typescript
export type FormKitInputSchema = ((children?: FormKitSchemaDefinition) => FormKitSchemaNode) | FormKitSchemaNode;
```

### FormKitOptionsList

An array of option items.


```typescript
export type FormKitOptionsList = FormKitOptionsItem[];
```

### FormKitOptionsListWithGroups

An array of option items with a group.


```typescript
export type FormKitOptionsListWithGroups = Array<FormKitOptionsItem | FormKitOptionsGroupItem>;
```

### FormKitOptionsListWithGroupsProp

An array of option items with a group support — where the `option` of the groups can be any valid FormKitOptionsProp type.


```typescript
export type FormKitOptionsListWithGroupsProp = Array<FormKitOptionsItem | FormKitOptionsGroupItemProp>;
```

### FormKitOptionsProp

The types of options that can be passed to the options prop.


```typescript
export type FormKitOptionsProp = FormKitOptionsPropExtensions[keyof FormKitOptionsPropExtensions];
```

### FormKitOptionsPropWithGroups

The types of options that can be passed to the options prop.


```typescript
export type FormKitOptionsPropWithGroups = FormKitOptionsProp | FormKitOptionsListWithGroupsProp;
```

### FormKitOptionsValue

The proper shape of data to be passed to options prop.


```typescript
export type FormKitOptionsValue<Options> = Options extends FormKitOptionsProp ? Options extends Record<infer T, string> ? T : Options extends FormKitOptionsItem[] ? Options[number]['value'] : Options extends Array<infer T> ? T : unknown : unknown;
```

### InputType

Selects the "type" from the props if it exists, otherwise it defaults to "text".


```typescript
export type InputType<Props extends FormKitInputs<Props>> = Props['type'] extends string ? Props['type'] : 'text';
```

### MergedEvents

Merge all events into a single type. This is then used as the structure for


```typescript
export type MergedEvents<Props extends FormKitInputs<Props>> = InputType<Props> extends keyof FormKitInputEvents<Props> ? FormKitBaseEvents<Props> & FormKitInputEvents<Props>[InputType<Props>] : FormKitBaseEvents<Props>;
```

### MergedProps

A merger of input props, base props, and conditional props. This is then used as the structure for the FormKitInputs type.


```typescript
export type MergedProps<Props extends FormKitInputs<Props>> = {
    [K in keyof FormKitInputProps<Props>]: Omit<Partial<FormKitBaseProps>, keyof FormKitInputProps<Props>[K]> & Omit<Partial<FormKitRuntimeProps<Props>>, keyof FormKitInputProps<Props>[K]> & Omit<Partial<FormKitConditionalProps>, keyof FormKitInputProps<Props>[K]> & Partial<K extends keyof FormKitInputEventsAsProps<Props> ? Omit<FormKitEventsAsProps, keyof FormKitInputEventsAsProps<Props>[K]> & FormKitInputEventsAsProps<Props>[K] : FormKitEventsAsProps> & FormKitInputProps<Props>[K];
};
```

### PropType

Extracts the type from a given prop.


```typescript
export type PropType<Props extends FormKitInputs<Props>, T extends keyof FormKitInputs<Props>> = Extract<FormKitInputs<Props>, {
    type: Props['type'] extends string ? Props['type'] : 'text';
}>[T];
```

</client-only>