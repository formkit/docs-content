---
title: formkit/addons
---

# @formkit/addons

## Introduction

Common, optional, first-party add on features for FormKit.

You can add this package by using `npm install @formkit/addons` or `yarn add @formkit/addons`.

## Functions

::api-entry{name="createAutoAnimatePlugin()" type="function"}
Adds auto-animate to each input automatically:

#### Signature

```typescript
createAutoAnimatePlugin(options?: AutoAnimateOptions, animationTargets?: Record<string, string[]>): FormKitPlugin;
```

#### Parameters

- `options` *optional* — [AutoAnimateOptions](https://github.com/formkit/auto-animate/blob/master/src/index.ts#L596)
- `animationTargets` *optional* — A map of input types and an array of their sections that should be animated.

#### Returns

[FormKitPlugin](/api-reference/formkit-core#formkitplugin)

#### Examples


```javascript
import { createApp } from 'vue'
import App from 'App.vue'
import { createAutoAnimatePlugin } from '@formkit/addons'
import { plugin, defaultConfig } from '@formkit/vue'

createApp(app).use(plugin, defaultPlugin({
  plugins: [
    createAutoAnimatePlugin({
      // optional config
      duration: 250,
      easing: 'ease-in-out',
      delay: 0,
    },
    {
      // optional animation targets object
      global: ['outer', 'inner'],
      form: ['form'],
      repeater: ['items'],
    })
  ]
}))
```
::

::api-entry{name="createAutoHeightTextareaPlugin()" type="function"}
Creates a new auto-height textarea plugin.

#### Signature


```typescript
createAutoHeightTextareaPlugin(): FormKitPlugin;
```

#### Returns

[FormKitPlugin](/api-reference/formkit-core#formkitplugin)
::

::api-entry{name="createFloatingLabelsPlugin()" type="function"}
Creates a new floating label plugin.

#### Signature


```typescript
createFloatingLabelsPlugin(FloatingLabelsOptions?: FloatingLabelsOptions): FormKitPlugin;
```

#### Parameters

- `FloatingLabelsOptions` *optional* — The options of [FloatingLabelsOptions](#floatinglabelsoptions) to pass to the plugin

#### Returns

[FormKitPlugin](/api-reference/formkit-core#formkitplugin)
::

::api-entry{name="createLocalStoragePlugin()" type="function"}
Creates a new save-to-local-storage plugin.

#### Signature


```typescript
createLocalStoragePlugin(localStorageOptions?: LocalStorageOptions): FormKitPlugin;
```

#### Parameters

- `localStorageOptions` *optional*

#### Returns

[FormKitPlugin](/api-reference/formkit-core#formkitplugin)
::

::api-entry{name="createMultiStepPlugin()" type="function"}
Creates a new multi-step plugin.

#### Signature


```typescript
createMultiStepPlugin(options?: MultiStepOptions): FormKitPlugin;
```

#### Parameters

- `options` *optional* — The options of [MultiStepOptions](#multistepoptions) to pass to the plugin

#### Returns

[FormKitPlugin](/api-reference/formkit-core#formkitplugin)
::

## TypeScript

::api-entry{name="BeforeStepChange" type="interface"}
The typing for the beforeStepChange function.


```typescript
interface BeforeStepChange {
    (data: BeforeStepChangeData): any;
}
```
::

::api-entry{name="BeforeStepChangeData" type="interface"}

```typescript
interface BeforeStepChangeData<T = unknown> {
    currentStep: FormKitFrameworkContext<T>;
    delta: number;
    nextStep: FormKitFrameworkContext<T>;
}
```
::

::api-entry{name="FloatingLabelsOptions" type="interface"}
The options to be passed to [createFloatingLabelsPlugin](#createfloatinglabelsplugin)


```typescript
interface FloatingLabelsOptions {
    useAsDefault?: boolean;
}
```
::

::api-entry{name="FormKitMultiStepSlots" type="interface"}

```typescript
interface FormKitMultiStepSlots<Props extends FormKitInputs<Props>> {
    badge: FormKitSlotData<Props, MultiStepSlotData&{
        step: FormKitFrameworkContext;
        index: number;
    }>;
    default: FormKitSlotData<Props, MultiStepSlotData>;
    multiStepOuter: FormKitSlotData<Props, MultiStepSlotData>;
    steps: FormKitSlotData<Props, MultiStepSlotData>;
    tab: FormKitSlotData<Props, MultiStepSlotData>;
    tabLabel: FormKitSlotData<Props, MultiStepSlotData&{
        step: FormKitFrameworkContext;
        index: number;
    }>;
    tabs: FormKitSlotData<Props, MultiStepSlotData>;
    validStepIcon: FormKitSlotData<Props, MultiStepSlotData&{
        step: FormKitFrameworkContext;
        index: number;
    }>;
    wrapper: FormKitSlotData<Props, MultiStepSlotData>;
}
```
::

::api-entry{name="FormKitStepSlots" type="interface"}

```typescript
interface FormKitStepSlots<Props extends FormKitInputs<Props>> {
    default: FormKitSlotData<Props, StepSlotData>;
    stepActions: FormKitSlotData<Props, StepSlotData>;
    stepInner: FormKitSlotData<Props, StepSlotData>;
    stepNext: FormKitSlotData<Props, StepSlotData>;
    stepPrevious: FormKitSlotData<Props, StepSlotData>;
}
```
::

::api-entry{name="LocalStorageOptions" type="interface"}
The options to be passed to [createLocalStoragePlugin](#createlocalstorageplugin)


```typescript
interface LocalStorageOptions {
    beforeLoad?: (payload: any) => any;
    beforeSave?: (payload: any) => any;
    control?: string;
    debounce?: number;
    key?: string | number;
    maxAge?: number;
    prefix?: string;
}
```
::

::api-entry{name="MultiStepHandlers" type="interface"}

```typescript
interface MultiStepHandlers {
    incrementStep: (delta: number, currentStep: FormKitFrameworkContext | undefined) => () => void;
    setActiveStep: (step: FormKitFrameworkContext) => (e?: Event) => void;
    showStepErrors: (step: FormKitFrameworkContext) => boolean | undefined;
    triggerStepValidations: (step: FormKitFrameworkContext) => void;
}
```
::

::api-entry{name="MultiStepNodeAdditions" type="interface"}
Additional arguments that are added to the FormKitNode of a multistep input.


```typescript
interface MultiStepNodeAdditions {
    goTo: (target: number | string) => void;
    next: () => void;
    previous: () => void;
}
```
::

::api-entry{name="MultiStepOptions" type="interface"}
The options to be passed to [createMultiStepPlugin](#createmultistepplugin)


```typescript
interface MultiStepOptions {
    allowIncomplete?: boolean;
    hideProgressLabels?: boolean;
    tabStyle?:'tab' | 'progress';
}
```
::

::api-entry{name="MultiStepSlotData" type="interface"}

```typescript
interface MultiStepSlotData {
    activeStep: string;
    allowIncomplete?: boolean;
    beforeStepChange?: BeforeStepChange;
    handlers: FormKitFrameworkContext['handlers']&MultiStepHandlers;
    hideProgressLabels: boolean;
    node: FormKitMultiStepNode;
    steps: Array<FormKitMultiStepSlotData>;
    tabStyle:'tab' | 'progress';
    validStepIcon: string | undefined;
}
```
::

::api-entry{name="StepHandlers" type="interface"}

```typescript
interface StepHandlers {
    incrementStep: (delta: number) => () => void;
    next: () => void;
    previous: () => void;
}
```
::

::api-entry{name="StepSlotData" type="interface"}
Slot data unique to the step input.


```typescript
interface StepSlotData {
    beforeStepChange?: BeforeStepChange;
    blockingCount: number;
    errorCount: number;
    handlers: FormKitFrameworkContext['handlers']&StepHandlers;
    hasBeenVisited: true | undefined;
    isActiveStep: boolean;
    isFirstStep: boolean;
    isLastStep: boolean;
    isValid: boolean;
    makeActive: () => void;
    nextAttrs?: Record<string, any>;
    nextLabel?: string;
    ordered: boolean;
    previousAttrs?: Record<string, any>;
    previousLabel?: string;
    showStepErrors: boolean;
    stepIndex: number;
    stepName: string;
    steps: Array<FormKitMultiStepSlotData>;
    totalErrorCount: number;
    validStepIcon?: string;
}
```
::

::api-entry{name="FormKitMultiStepNode" type="type"}
The node type that is augmented with next and previous and goTo functions.


```typescript
export type FormKitMultiStepNode = FormKitNode & MultiStepNodeAdditions;
```
::

::api-entry{name="FormKitMultiStepSlotData" type="type"}
The typing for the slot data for a FormKit multi-step input.


```typescript
export type FormKitMultiStepSlotData = FormKitFrameworkContext<Record<string, any>> & StepSlotData;
```
::
