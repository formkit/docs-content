---
title: formkit/schema
---

# @formkit/schema


## Functions

::api-entry{name="compile()" type="function"}
Compiles a logical string like "a != z || b == c" into a single function. The return value is an object with a "provide" method that iterates over all requirement tokens to use as replacements.


```typescript
let name = {
  value: 'jon'
}
const condition = compile("$name == 'bob'").provide((token) => {
 return () => name.value // must return a function!
})

condition() // false
```

#### Signature


```typescript
compile(expr: string): FormKitConditionCompiler;
```

#### Parameters

- `expr` — A string to compile
::

::api-entry{name="isComponent()" type="function"}
Type narrow that a node is a DOM node.

#### Signature


```typescript
isComponent(node: string | Record<PropertyKey, any>): node is FormKitSchemaComponent;
```

#### Parameters

- `node` — A schema node to check
::

::api-entry{name="isConditional()" type="function"}
Determines if a node is conditionally rendered or not.

#### Signature


```typescript
isConditional(node: FormKitSchemaNode): node is FormKitSchemaCondition;
isConditional(node: FormKitSchemaAttributesCondition | FormKitSchemaAttributes): node is FormKitSchemaAttributesCondition;
```

#### Parameters

- `node` — A schema node to check
::

::api-entry{name="isDOM()" type="function"}
Type narrow that a node is a DOM node.

#### Signature


```typescript
isDOM(node: string | Record<PropertyKey, any>): node is FormKitSchemaDOMNode;
```

#### Parameters

- `node` — A schema node to check
::

::api-entry{name="isNode()" type="function"}
Determines if t a node is a $formkit schema node.

#### Signature


```typescript
isNode(node: string | Record<PropertyKey, any>): node is FormKitSchemaFormKitNode;
```

#### Parameters

- `node` — A schema node to check
::

## TypeScript

::api-entry{name="FormKitExtendableSchemaRoot" type="interface"}
Defines a function that allows selectively overriding a given schema.


```typescript
interface FormKitExtendableSchemaRoot {
    (extensions: Record<string, Partial<FormKitSchemaNode> | FormKitSchemaCondition>): FormKitSchemaNode[];
}
```
::

::api-entry{name="FormKitSchemaAttributesCondition" type="interface"}
Conditions nested inside attribute declarations


```typescript
interface FormKitSchemaAttributesCondition {
    else?: FormKitAttributeValue;
    if: string;
    then: FormKitAttributeValue;
}
```
::

::api-entry{name="FormKitSchemaComposable" type="interface"}
Definition for a function that can extend a given schema node.


```typescript
interface FormKitSchemaComposable {
    (extendWith?: Partial<FormKitSchemaNode>, children?: string | FormKitSchemaNode[] | FormKitSchemaCondition): FormKitSchemaNode;
}
```
::

::api-entry{name="FormKitSchemaContext" type="interface"}
The context that is passed from one schema render to the next.


```typescript
interface FormKitSchemaContext {
    __FK_SCP: Map<symbol, Record<string, any>>;
    [index: string]: any;
}
```
::

::api-entry{name="FormKitAttributeValue" type="type"}
The possible value types of attributes (in the schema)


```typescript
type FormKitAttributeValue = string | number | boolean | undefined | FormKitSchemaAttributes | FormKitSchemaAttributesCondition;
```
::

::api-entry{name="FormKitListStatement" type="type"}
A full loop statement in tuple syntax. Can be read like "foreach value, key? in list"


```typescript
type FormKitListStatement = [value: any, key: number | string, list: FormKitListValue] | [value: any, list: FormKitListValue];
```
::

::api-entry{name="FormKitListValue" type="type"}
The value being listed out. Can be an array, an object, or a number.


```typescript
type FormKitListValue = string | Record<string, any> | Array<string | number | Record<string, any>> | number;
```
::

::api-entry{name="FormKitSchemaAttributes" type="type"}
DOM attributes are simple string dictionaries.


```typescript
type FormKitSchemaAttributes = {
    [index: string]: FormKitAttributeValue;
} | null | FormKitSchemaAttributesCondition;
```
::

::api-entry{name="FormKitSchemaComponent" type="type"}
Properties available when defining a generic non-formkit component.


```typescript
type FormKitSchemaComponent = {
    $cmp: string;
    props?: {
        [index: string]: any;
    };
} & FormKitSchemaProps;
```
::

::api-entry{name="FormKitSchemaCondition" type="type"}
A schema node that determines _which_ content to render.


```typescript
type FormKitSchemaCondition = {
    if: string;
    then: FormKitSchemaNode | FormKitSchemaNode[];
    else?: FormKitSchemaNode | FormKitSchemaNode[];
};
```
::

::api-entry{name="FormKitSchemaDOMNode" type="type"}
Properties available when using a DOM node.


```typescript
type FormKitSchemaDOMNode = {
    $el: string | null;
    attrs?: FormKitSchemaAttributes;
} & FormKitSchemaProps;
```
::

::api-entry{name="FormKitSchemaFormKitNode" type="type"}
Properties available when using a formkit input.


```typescript
type FormKitSchemaFormKitNode = {
    $node: string;
    name?: string;
    props: Partial<FormKitProps>;
    type: 'input' | 'list' | 'group';
    value?: any;
} & FormKitSchemaProps;
```
::

::api-entry{name="FormKitSchemaNode" type="type"}
Properties available then defining a schema node.


```typescript
type FormKitSchemaNode = FormKitSchemaFormKitNode | FormKitSchemaDOMNode | FormKitSchemaComponent | FormKitSchemaTextNode | FormKitSchemaCondition;
```
::

::api-entry{name="FormKitSchemaTextNode" type="type"}
A simple text node.


```typescript
type FormKitSchemaTextNode = string;
```
::
