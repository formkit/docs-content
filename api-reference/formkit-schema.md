---
title: formkit/schema
---

# @formkit/schema

<page-toc></page-toc>

## Functions

### compile()

Compiles a logical string like "a != z || b == c" into a single function. The return value is an object with a "provide" method that iterates over all requirement tokens to use as replacements.

<client-only>

```typescript
let name = {
  value: 'jon'
}
const condition = compile("$name == 'bob'").provide((token) => {
 return () => name.value // must return a function!
})

condition() // false
```

</client-only>

#### Signature

<client-only>

```typescript
compile(expr: string): FormKitConditionCompiler;
```

</client-only>

#### Parameters

- `expr` — A string to compile

#### Returns

### isComponent()

Type narrow that a node is a DOM node.

#### Signature

<client-only>

```typescript
isComponent(node: string | Record<PropertyKey, any>): node is FormKitSchemaComponent;
```

</client-only>

#### Parameters

- `node` — A schema node to check

#### Returns

### isConditional()

Determines if a node is conditionally rendered or not.

#### Signature

<client-only>

```typescript
isConditional(node: FormKitSchemaNode): node is FormKitSchemaCondition;
isConditional(node: FormKitSchemaAttributesCondition | FormKitSchemaAttributes): node is FormKitSchemaAttributesCondition;
```

</client-only>

#### Parameters

- `node` — A schema node to check

#### Returns

### isDOM()

Type narrow that a node is a DOM node.

#### Signature

<client-only>

```typescript
isDOM(node: string | Record<PropertyKey, any>): node is FormKitSchemaDOMNode;
```

</client-only>

#### Parameters

- `node` — A schema node to check

#### Returns

### isNode()

Determines if t a node is a $formkit schema node.

#### Signature

<client-only>

```typescript
isNode(node: string | Record<PropertyKey, any>): node is FormKitSchemaFormKitNode;
```

</client-only>

#### Parameters

- `node` — A schema node to check

#### Returns

## TypeScript

### FormKitExtendableSchemaRoot

Defines a function that allows selectively overriding a given schema.

<client-only>

```typescript
interface FormKitExtendableSchemaRoot {
    (extensions: Record<string, Partial<FormKitSchemaNode> | FormKitSchemaCondition>): FormKitSchemaNode[];
}
```

</client-only>

### FormKitSchemaAttributesCondition

Conditions nested inside attribute declarations

<client-only>

```typescript
interface FormKitSchemaAttributesCondition {
    else?: FormKitAttributeValue;
    if: string;
    then: FormKitAttributeValue;
}
```

</client-only>

### FormKitSchemaComposable

Definition for a function that can extend a given schema node.

<client-only>

```typescript
interface FormKitSchemaComposable {
    (extendWith?: Partial<FormKitSchemaNode>, children?: string | FormKitSchemaNode[] | FormKitSchemaCondition): FormKitSchemaNode;
}
```

</client-only>

### FormKitSchemaContext

The context that is passed from one schema render to the next.

<client-only>

```typescript
interface FormKitSchemaContext {
    __FK_SCP: Map<symbol, Record<string, any>>;
    [index: string]: any;
}
```

</client-only>

### FormKitAttributeValue

The possible value types of attributes (in the schema)

<client-only>

```typescript
type FormKitAttributeValue = string | number | boolean | undefined | FormKitSchemaAttributes | FormKitSchemaAttributesCondition;
```

</client-only>

### FormKitListStatement

A full loop statement in tuple syntax. Can be read like "foreach value, key? in list"

<client-only>

```typescript
type FormKitListStatement = [value: any, key: number | string, list: FormKitListValue] | [value: any, list: FormKitListValue];
```

</client-only>

### FormKitListValue

The value being listed out. Can be an array, an object, or a number.

<client-only>

```typescript
type FormKitListValue = string | Record<string, any> | Array<string | number | Record<string, any>> | number;
```

</client-only>

### FormKitSchemaAttributes

DOM attributes are simple string dictionaries.

<client-only>

```typescript
type FormKitSchemaAttributes = {
    [index: string]: FormKitAttributeValue;
} | null | FormKitSchemaAttributesCondition;
```

</client-only>

### FormKitSchemaComponent

Properties available when defining a generic non-formkit component.

<client-only>

```typescript
type FormKitSchemaComponent = {
    $cmp: string;
    props?: {
        [index: string]: any;
    };
} & FormKitSchemaProps;
```

</client-only>

### FormKitSchemaCondition

A schema node that determines _which_ content to render.

<client-only>

```typescript
type FormKitSchemaCondition = {
    if: string;
    then: FormKitSchemaNode | FormKitSchemaNode[];
    else?: FormKitSchemaNode | FormKitSchemaNode[];
};
```

</client-only>

### FormKitSchemaDOMNode

Properties available when using a DOM node.

<client-only>

```typescript
type FormKitSchemaDOMNode = {
    $el: string | null;
    attrs?: FormKitSchemaAttributes;
} & FormKitSchemaProps;
```

</client-only>

### FormKitSchemaFormKitNode

Properties available when using a formkit input.

<client-only>

```typescript
type FormKitSchemaFormKitNode = {
    $node: string;
    name?: string;
    props: Partial<FormKitProps>;
    type: 'input' | 'list' | 'group';
    value?: any;
} & FormKitSchemaProps;
```

</client-only>

### FormKitSchemaNode

Properties available then defining a schema node.

<client-only>

```typescript
type FormKitSchemaNode = FormKitSchemaFormKitNode | FormKitSchemaDOMNode | FormKitSchemaComponent | FormKitSchemaTextNode | FormKitSchemaCondition;
```

</client-only>

### FormKitSchemaTextNode

A simple text node.

<client-only>

```typescript
type FormKitSchemaTextNode = string;
```

</client-only>