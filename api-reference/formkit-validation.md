---
title: formkit/validation
---

# @formkit/validation

## createValidationPlugin()

The actual validation plugin function, everything must be bootstrapped here.

#### Signature

```typescript
export declare function createValidationPlugin(baseRules?: FormKitValidationRules): (node: FormKitNode) => void;
```

#### Parameters

* `baseRules` *optional*

## getValidationMessages()

Extracts all validation messages from the given node and all its descendants. This is not reactive and must be re called each time the messages change.

#### Signature

```typescript
export declare function getValidationMessages(node: FormKitNode): Map<FormKitNode, FormKitMessage[]>;
```

#### Parameters

* `node`

The FormKit node to extract validation rules from — as well as its descendants.

## FormKitValidationMessages

The interface for the localized validation message registry.

```typescript
export interface FormKitValidationMessages {
    [index: string]: string | ((...args: FormKitValidationI18NArgs) => string);
}
```

## FormKitValidationRules

FormKit validation rules are structured as on object of key/function pairs where the key of the object is the validation rule name.

```typescript
export interface FormKitValidationRules {
    [index: string]: FormKitValidationRule;
}
```

## FormKitValidation

Defines what fully parsed validation rules look like.

```typescript
export declare type FormKitValidation = {
    rule: FormKitValidationRule;
    args: any[];
    timer: number;
    state: boolean | null;
    queued: boolean;
    deps: FormKitDependencies;
} & FormKitValidationHints;
```

## FormKitValidationIntent

Defines what validation rules look like when they are parsed, but have not necessarily had validation rules substituted in yet.

```typescript
export declare type FormKitValidationIntent = [string | FormKitValidationRule, ...any[]];
```

## FormKitValidationRule

Signature for a generic validation rule. It accepts an input, often a string but validation rules should be able to accept any input type, and returns a boolean indicating whether or not it passed validation.

```typescript
export declare type FormKitValidationRule = {
    (node: FormKitNode, ...args: any[]): boolean | Promise<boolean>;
    ruleName?: string;
} & Partial<FormKitValidationHints>;
```