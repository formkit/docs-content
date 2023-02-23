---
title: formkit/themes
---

# @formkit/themes

:PageToc

## Introduction

This package contains the official themes for FormKit. Read the [installation documentation](https://formkit.com/getting-started/installation) for more information.

## Functions

### createIconHandler()

Returns a function responsible for loading an icon by name.

#### Signature

<client-only>

```typescript
createIconHandler(iconLoader?: FormKitIconLoader, iconLoaderUrl?: FormKitIconLoaderUrl): FormKitIconLoader;
```

</client-only>

#### Parameters

- `iconLoader` — a function for loading an icon when it's not found in the iconRegistry.
- `iconLoaderUrl` — a function that returns a remote URL for retrieving an SVG icon by name.

### createThemePlugin()

Creates the theme plugin based on a given theme name.

#### Signature

<client-only>

```typescript
createThemePlugin(theme?: string, icons?: Record<string, string | undefined>, iconLoaderUrl?: FormKitIconLoaderUrl, iconLoader?: FormKitIconLoader): (node: FormKitNode) => any;
```

</client-only>

#### Parameters

- `theme` — The name or id of the theme to apply.
- `icons` — Icons you want to add to the global icon registry.
- `iconLoaderUrl` — A function that returns a remote url for retrieving an SVG icon by name.
- `iconLoader` — A function that handles loading an icon when it is not found in the registry.

### generateClasses()

A function to generate FormKit class functions from a JavaScript object.

#### Signature

<client-only>

```typescript
generateClasses(classes: Record<string, Record<string, string>>): Record<string, string | FormKitClasses | Record<string, boolean>>;
```

</client-only>

#### Parameters

- `classes` — An object of input types with nested objects of sectionKeys and class lists.

#### Returns

An object of sectionKeys with class functions.

## TypeScript

### FormKitIconLoader

A function that returns an icon SVG string.

<client-only>

```typescript
interface FormKitIconLoader {
  (iconName: string): string | undefined | Promise<string | undefined>
}
```

</client-only>

### FormKitIconLoaderUrl

A function that returns a remote URL for retrieving an SVG icon by name.

<client-only>

```typescript
interface FormKitIconLoaderUrl {
  (iconName: string): string | undefined
}
```

</client-only>
