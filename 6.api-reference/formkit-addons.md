---
title: formkit/addons
---

# @formkit/addons

## Introduction

Common, optional, first-party add on features for FormKit.

You can add this package by using `npm install @formkit/addons` or `yarn add @formkit/addons`.

## Functions

### createAutoAnimatePlugin()

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

### createAutoHeightTextareaPlugin()

Creates a new auto-height textarea plugin.

#### Signature


```typescript
createAutoHeightTextareaPlugin(): FormKitPlugin;
```

#### Returns

 A [FormKitPlugin](/api-reference/formkit-core#formkitplugin)

### createFloatingLabelsPlugin()

Creates a new floating label plugin.

#### Signature


```typescript
createFloatingLabelsPlugin(FloatingLabelsOptions?: FloatingLabelsOptions): FormKitPlugin;
```

#### Parameters

- `FloatingLabelsOptions` *optional* — The options of [FloatingLabelsOptions](#floatinglabelsoptions) to pass to the plugin

#### Returns

 A [FormKitPlugin](/api-reference/formkit-core#formkitplugin)

### createLocalStoragePlugin()

Creates a new save-to-local-storage plugin.

#### Signature


```typescript
createLocalStoragePlugin(localStorageOptions?: LocalStorageOptions): FormKitPlugin;
```

#### Parameters

- `localStorageOptions` *optional*

#### Returns

 A [FormKitPlugin](/api-reference/formkit-core#formkitplugin)

### createMultiStepPlugin()

Creates a new multi-step plugin.

#### Signature


```typescript
createMultiStepPlugin(options?: MultiStepOptions): FormKitPlugin;
```

#### Parameters

- `options` *optional* — The options of [MultiStepOptions](#multistepoptions) to pass to the plugin

#### Returns

 A [FormKitPlugin](/api-reference/formkit-core#formkitplugin)

## TypeScript

### BeforeStepChange

The typing for the beforeStepChange function.


```typescript
interface BeforeStepChange {
    (data: BeforeStepChangeData): any;
}
```

### BeforeStepChangeData


```typescript
interface BeforeStepChangeData<T = unknown> {
    currentStep: FormKitFrameworkContext<T>;
    delta: number;
    nextStep: FormKitFrameworkContext<T>;
}
```

### FloatingLabelsOptions

The options to be passed to [createFloatingLabelsPlugin](#createfloatinglabelsplugin)


```typescript
interface FloatingLabelsOptions {
    useAsDefault?: boolean;
}
```

### FormKitMultiStepSlots


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

### FormKitStepSlots


```typescript
interface FormKitStepSlots<Props extends FormKitInputs<Props>> {
    default: FormKitSlotData<Props, StepSlotData>;
    stepActions: FormKitSlotData<Props, StepSlotData>;
    stepInner: FormKitSlotData<Props, StepSlotData>;
    stepNext: FormKitSlotData<Props, StepSlotData>;
    stepPrevious: FormKitSlotData<Props, StepSlotData>;
}
```

### LocalStorageOptions

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

### MultiStepHandlers


```typescript
interface MultiStepHandlers {
    incrementStep: (delta: number, currentStep: FormKitFrameworkContext | undefined) => () => void;
    setActiveStep: (step: FormKitFrameworkContext) => (e?: Event) => void;
    showStepErrors: (step: FormKitFrameworkContext) => boolean | undefined;
    triggerStepValidations: (step: FormKitFrameworkContext) => void;
}
```

### MultiStepNodeAdditions

Additional arguments that are added to the FormKitNode of a multistep input.


```typescript
interface MultiStepNodeAdditions {
    goTo: (target: number | string) => void;
    next: () => void;
    previous: () => void;
}
```

### MultiStepOptions

The options to be passed to [createMultiStepPlugin](#createmultistepplugin)


```typescript
interface MultiStepOptions {
    allowIncomplete?: boolean;
    hideProgressLabels?: boolean;
    tabStyle?:'tab' | 'progress';
}
```

### MultiStepSlotData


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

### StepHandlers


```typescript
interface StepHandlers {
    incrementStep: (delta: number) => () => void;
    next: () => void;
    previous: () => void;
}
```

### StepSlotData

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

### FormKitMultiStepNode

The node type that is augmented with next and previous and goTo functions.


```typescript
export type FormKitMultiStepNode = FormKitNode & MultiStepNodeAdditions;
```

### FormKitMultiStepSlotData

The typing for the slot data for a FormKit multi-step input.


```typescript
export type FormKitMultiStepSlotData = FormKitFrameworkContext<Record<string, any>> & StepSlotData;
```