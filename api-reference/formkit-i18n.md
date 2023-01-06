---
title: formkit/i18n
---

# @formkit/i18n

## createI18nPlugin()

Create a new internationalization plugin for FormKit.

#### Signature

```typescript
export declare function createI18nPlugin(registry: FormKitLocaleRegistry): FormKitPlugin;
```

#### Parameters

* `registry`

#### Returns

[FormKitPlugin](/api-reference/formkit-core#FormKitPlugin)

## date()

Given a string or a date return a nice human-readable version.

#### Signature

```typescript
export declare function date(date: string | Date): string;
```

#### Parameters

* `date`

A string or a date.

#### Returns

`string`

## list()

Creates an oxford-comma separated list of items.

#### Signature

```typescript
export declare function list(items: string[], conjunction?: string): string;
```

#### Parameters

* `items`

* `conjunction` *optional*

in: x, y, and z "and" is the conjunction to use

#### Returns

`string`

## order()

Orders two variables smallest to largest.

#### Signature

```typescript
export declare function order(first: string | number, second: string | number): [smaller: number | string, larger: number | string];
```

#### Parameters

* `first`

first argument

* `second`

Second argument

#### Returns

`[smaller: number | string, larger: number | string]`

## sentence()

Given a string, convert it to sentence case.

#### Signature

```typescript
export declare function sentence(str: string): string;
```

#### Parameters

* `str`

#### Returns

`string`

## FormKitLocale

A locale is just a collection of locale message registries, they are keyed by the type (like a namespace) ex: "validation" or "ui". Plugin authors can declare their own types too.

```typescript
export interface FormKitLocale {
    [index: string]: FormKitLocaleMessages;
    ui: FormKitLocaleMessages;
}
```

## FormKitLocaleMessages

A registry of locale messages — this is simply a keyed/value object with string keys (message name) and either string values (for simple returns) or functions that receive a context object.

```typescript
export interface FormKitLocaleMessages {
    [index: string]: string | ((...args: any[]) => string);
}
```

## FormKitLocaleRegistry

The locale registry is just a key-value pair of locales to their respective registries.

```typescript
export interface FormKitLocaleRegistry {
    [index: string]: FormKitLocale;
}
```