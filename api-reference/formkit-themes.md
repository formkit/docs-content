---
title: formkit/themes
---

# @formkit/themes

<page-toc></page-toc>

## Functions

### createIconHandler()

Returns a function responsible for loading an icon by name

#### Signature

```typescript
createIconHandler(iconLoader?: FormKitIconLoader, iconLoaderUrl?: FormKitIconLoaderUrl): FormKitIconLoader;
```

#### Parameters

* `iconLoader` — a function for loading an icon when it's not found in the iconRegistry
* `iconLoaderUrl`

### createThemePlugin()

Creates the theme plugin based on a given theme name

#### Signature

```typescript
createThemePlugin(theme?: string, icons?: Record<string, string | undefined>, iconLoaderUrl?: FormKitIconLoaderUrl, iconLoader?: FormKitIconLoader): (node: FormKitNode) => any;
```

#### Parameters

* `theme` — The name or id of the theme to apply
* `icons` — Icons you want to add to the global icon registry
* `iconLoaderUrl`
* `iconLoader` — A function that handles loading an icon when it is not found in the registry

### generateClasses()

A function to generate FormKit class functions from a javascript object

#### Signature

```typescript
generateClasses(classes: Record<string, Record<string, string>>): Record<string, string | FormKitClasses | Record<string, boolean>>;
```

#### Parameters

* `classes` — An object of input types with nested objects of sectionKeys and class lists

#### Returns

 FormKitClassFunctions

## TypeScript

### FormKitIconLoader

A function that returns an icon SVG string

```typescript
interface FormKitIconLoader {
    (iconName: string): string | undefined | Promise<string | undefined>;
}
```

### FormKitIconLoaderUrl

A function that returns a remote url for retrieving an SVG icon by name

```typescript
interface FormKitIconLoaderUrl {
    (iconName: string): string | undefined;
}
```