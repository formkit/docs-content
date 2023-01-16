---
title: formkit/i18n
---

# @formkit/i18n

<page-toc></page-toc>

## Introduction

## Functions

### createI18nPlugin()

Create a new internationalization plugin for FormKit.

#### Signature

```typescript
createI18nPlugin(registry: FormKitLocaleRegistry): FormKitPlugin;
```

#### Parameters

* `registry` — The registry of [FormKitLocales](/api-reference/formkit-i18n#formkitlocaleregistry).

#### Returns

[FormKitPlugin](/api-reference/formkit-core#formkitplugin)

### date()

Given a string or a date, return a nice human-readable version.

#### Signature

```typescript
date(date: string | Date): string;
```

#### Parameters

* `date` — A string or a date.

#### Returns

`string`

### list()

Creates an oxford-comma separated list of items.

#### Signature

```typescript
list(items: string[], conjunction?: string): string;
```

#### Parameters

* `items` — the items to list out.
* `conjunction` — in the list "x, y, and z", "and" is the conjunction. Defaults to "or".

#### Returns

`string`

### order()

Orders two variables from smallest to largest.

#### Signature

```typescript
order(first: string | number, second: string | number): [smaller: number | string, larger: number | string];
```

#### Parameters

* `first` — The first number or string.
* `second` — The second number or string.

#### Returns

`[smaller: number | string, larger: number | string]`

### sentence()

Given a string, convert it to sentence case.

#### Signature

```typescript
sentence(str: string): string;
```

#### Parameters

* `str` — The string to sentence case.

#### Returns

`string`

## TypeScript

### FormKitLocale

A locale is just a collection of locale message registries, they are keyed by the type (like a namespace) ex: "validation" or "ui". Plugin authors can declare their own types too.

```typescript
interface FormKitLocale {
    [index: string]: FormKitLocaleMessages;
    ui: FormKitLocaleMessages;
}
```

### FormKitLocaleMessages

A registry of locale messages — this is simply a keyed/value object with string keys (message name) and either string values (for simple returns) or functions that receive a context object.

```typescript
interface FormKitLocaleMessages {
    [index: string]: string | ((...args: any[]) => string);
}
```

### FormKitLocaleRegistry

The locale registry is just a key-value pair of locale indexes ('ar', 'en', 'it', etc.) to their respective locales.

```typescript
interface FormKitLocaleRegistry {
    [index: string]: FormKitLocale;
}
```