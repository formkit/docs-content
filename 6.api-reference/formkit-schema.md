---
title: formkit/schema
---

# @formkit/schema


## Functions

### compile()

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

#### Returns

### isComponent()

Type narrow that a node is a DOM node.

#### Signature


```typescript
isComponent(node: string | Record<PropertyKey, any>): node is FormKitSchemaComponent;
```

#### Parameters

- `node` — A schema node to check

#### Returns

### isConditional()

Determines if a node is conditionally rendered or not.

#### Signature


```typescript
isConditional(node: FormKitSchemaNode): node is FormKitSchemaCondition;
isConditional(node: FormKitSchemaAttributesCondition | FormKitSchemaAttributes): node is FormKitSchemaAttributesCondition;
```

#### Parameters

- `node` — A schema node to check

#### Returns

### isDOM()

Type narrow that a node is a DOM node.

#### Signature


```typescript
isDOM(node: string | Record<PropertyKey, any>): node is FormKitSchemaDOMNode;
```

#### Parameters

- `node` — A schema node to check

#### Returns

### isNode()

Determines if t a node is a $formkit schema node.

#### Signature


```typescript
isNode(node: string | Record<PropertyKey, any>): node is FormKitSchemaFormKitNode;
```

#### Parameters

- `node` — A schema node to check

#### Returns

## TypeScript

### FormKitExtendableSchemaRoot

Defines a function that allows selectively overriding a given schema.


```typescript
interface FormKitExtendableSchemaRoot {
    (extensions: Record<string, Partial<FormKitSchemaNode> | FormKitSchemaCondition>): FormKitSchemaNode[];
}
```

### FormKitSchemaAttributesCondition

Conditions nested inside attribute declarations


```typescript
interface FormKitSchemaAttributesCondition {
    else?: FormKitAttributeValue;
    if: string;
    then: FormKitAttributeValue;
}
```

### FormKitSchemaComposable

Definition for a function that can extend a given schema node.


```typescript
interface FormKitSchemaComposable {
    (extendWith?: Partial<FormKitSchemaNode>, children?: string | FormKitSchemaNode[] | FormKitSchemaCondition): FormKitSchemaNode;
}
```

### FormKitSchemaContext

The context that is passed from one schema render to the next.


```typescript
interface FormKitSchemaContext {
    __FK_SCP: Map<symbol, Record<string, any>>;
    [index: string]: any;
}
```

### FormKitAttributeValue

The possible value types of attributes (in the schema)


```typescript
type FormKitAttributeValue = string | number | boolean | undefined | FormKitSchemaAttributes | FormKitSchemaAttributesCondition;
```

### FormKitListStatement

A full loop statement in tuple syntax. Can be read like "foreach value, key? in list"


```typescript
type FormKitListStatement = [value: any, key: number | string, list: FormKitListValue] | [value: any, list: FormKitListValue];
```

### FormKitListValue

The value being listed out. Can be an array, an object, or a number.


```typescript
type FormKitListValue = string | Record<string, any> | Array<string | number | Record<string, any>> | number;
```

### FormKitSchemaAttributes

DOM attributes are simple string dictionaries.


```typescript
type FormKitSchemaAttributes = {
    [index: string]: FormKitAttributeValue;
} | null | FormKitSchemaAttributesCondition;
```

### FormKitSchemaComponent

Properties available when defining a generic non-formkit component.


```typescript
type FormKitSchemaComponent = {
    $cmp: string;
    props?: {
        [index: string]: any;
    };
} & FormKitSchemaProps;
```

### FormKitSchemaCondition

A schema node that determines _which_ content to render.


```typescript
type FormKitSchemaCondition = {
    if: string;
    then: FormKitSchemaNode | FormKitSchemaNode[];
    else?: FormKitSchemaNode | FormKitSchemaNode[];
};
```

### FormKitSchemaDOMNode

Properties available when using a DOM node.


```typescript
type FormKitSchemaDOMNode = {
    $el: string | null;
    attrs?: FormKitSchemaAttributes;
} & FormKitSchemaProps;
```

### FormKitSchemaFormKitNode

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

### FormKitSchemaNode

Properties available then defining a schema node.


```typescript
type FormKitSchemaNode = FormKitSchemaFormKitNode | FormKitSchemaDOMNode | FormKitSchemaComponent | FormKitSchemaTextNode | FormKitSchemaCondition;
```

### FormKitSchemaTextNode

A simple text node.


```typescript
type FormKitSchemaTextNode = string;
```
