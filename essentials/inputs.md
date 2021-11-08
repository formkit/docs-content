# Inputs

FormKit’s inputs are similar to HTML inputs but turbocharged with much needed features like labels, help text, validation, and error messages (and much more). Similar to how HTML’s `<input>` tag uses various `type` attributes (i.e., `<input type="text">` vs `<input type="checkbox">`) FormKit uses the `type` prop for _all_ inputs. In fact, **with FormKit, there is only 1 component you have to learn**:

<example
  name="Text input"
  file="/_content/examples/single-component/single-component"
  langs="vue">
</example>

FormKit inputs are not confined to what is available in "native" HTML. The upcoming FormKit Pro represents "synthetic" input types such as `autocomplete`, `taglist` and `wysiwyg`. Of course, you can write your own inputs too by creating [custom inputs](/guides/custom-input).

## Setting values

<!-- vue-specific -->

There are 4 ways to set the value of an input:

- Using the `value` prop.
- Using `v-model`.
- Using FormKit's node `node.input()` method.
- Setting the value of a parent `FormKit` component.

### Using `value` prop

You can set the value of a single input, or a group of inputs using the `value`
prop.

<example
  name="Value prop"
  file="/_content/examples/value-prop/value-prop"
  langs="vue">
</example>

<callout type="warning">
The <code>value</code> prop should only be used for setting the <em>initial</em> value of an input. It will not react to changes after the component has been created.
</callout>

### Using `v-model`

<!-- vue-specific -->

Using `v-model` allows for two-way reactive data binding with any FormKit input.

<example
  name="Input v-model"
  file="/_content/examples/v-model/v-model"
  langs="vue">
</example>

### Using `node.input()`

At the heart of every FormKit input is an instance of FormKit Core’s `node`
object, and using the `node.input()` method is the most efficient mechanism to
modify any value. The `node` object can be retrieved by binding to
the `@node` event when the `FormKit` component is created.

<example
  name="Input v-model"
  file="/_content/examples/node-input/node-input"
  langs="vue">
</example>

<callout type="tip">
Calls to <code>node.input()</code> are debounced, and thus asynchronous (use the <code>delay</code> prop to change the length of the debounce). You can <code>await node.input(val)</code> to determine when the input has settled.
</callout>

### Using a parent

Parent inputs like `list`, `group`, and `form` are also able to directly set the values of any of their children. In fact, the value of a parent is just the aggregate value of its children. You can use any of the above methods (`value` prop, `v-model`, or `node.input()`) to set the value of the children.

<example
  name="Parent input"
  file="/_content/examples/parent-input/parent-input"
  langs="vue">
</example>

## Setting attributes

In nearly all cases, attributes set on the `<FormKit>` component will be passed through to the actual input element at the heart of the component, rather than any wrapping DOM elements. For example:

<example
  name="Text input"
  file="/_content/examples/attributes/attributes"
  tabs="html"
  langs="vue">
</example>

## Props & attributes

FormKit inputs accept both _universal_ props (ones that apply to all FormKit inputs), and _input-specific_ props. The following table is a comprehensive list of props available to all FormKit inputs.

<reference-table></reference-table>

## Events

FormKit inputs emit both _universal_ events (ones that are emitted from all inputs), and _input-specific_ events. The following table is a comprehensive live of events emitted by all FormKit inputs.

<reference-table type="events" primary="event"></reference-table>

## Composition keys

Inputs are composed of chunks of HTML and each of these chunks is assigned to a name called a “composition key”. These composition keys can be used for many purposes like modifying [classes](#classes), [content](/essentials/schema), [attributes](#setting-attributes), and event the [elements](/essentials/schema) that inputs are made of.

Many composition keys are universally available while others are specific to a given input type (you can define your own for custom inputs as well). The following table is a comprehensive list of all universally available composition keys:

<reference-table type="compositionKeys" primary="composition-key">
</reference-table>

## Classes

Classes can be modified for all [composition-keys](#composition-keys) using any of the following methods (in order of hierarchy):

- [The `{composition-key}-class` props](#composition-key-class-props).
- [The `classes` prop](#classes-prop).
- [The `classes` configuration option](#classes-configuration).
- [The `rootClasses` configuration function](#root-classes-function).

The classes follow a strict hierarchy. Initially, classes are produced by the `rootClasses` function. They can then be modified by the `classes` configuration option, then by the `classes` prop, and finally by the `{composition-key}-class` prop. At each of these stages classes can be [appended](#appending-classes), [reset](#resetting-classes), or [selectively modified](#removing-classes).

### Appending classes

To append a class, simply return the string you want to append, or provide an object of classes with boolean values — `true` properties will be appended.

<example
name="Appending classes"
file="/_content/examples/append-classes/append-classes"
tabs="html"
langs="vue"></example>

### Resetting classes

Classes produced by all earlier hierarchy steps can be completely removed by providing a special (not rendered) class `$reset` in either string format or object format.

<example
name="Resetting classes"
file="/_content/examples/resetting-classes/resetting-classes"
tabs="html"
langs="vue"></example>

### Removing classes

Classes produced by an earlier step in the class hierarchy can be selectively removed by providing an object with the value `false` for the class you want to remove. This includes removing formkit's default `formkit-` prefixed classes.

<example
name="Removing classes"
file="/_content/examples/removing-classes/removing-classes"
tabs="html"
langs="vue"></example>

<callout type="tip">
In addition to the four methods listed above, more generalized overrides are also available, like overriding an input’s schema, using the <code>classes</code> node hook, or utilizing slots.
</callout>

### Composition-key class props

The simplest way to modify the classes of an element inside a FormKit input is via the `{composition-key}-class` props. To add a class to a specific composition key element, like `label`, you simply add the `label-class` prop.

<example
name="Composition-key class"
file="/_content/examples/composition-key-class/composition-key-class"
tabs="html"
langs="vue"></example>

### Classes prop

The classes prop is similar to the composition-key class prop except it allows setting all composition keys at the same time.

<example
name="Classes prop"
file="/_content/examples/classes-prop/classes-prop"
tabs="html"
langs="vue"></example>

### Classes configuration

The classes configuration option is similar to the classes prop, except it applies to all inputs the configuration is applied to. FormKit's unique configuration system allows for you to apply classes globally on your project or just inputs within a certain group or form.

#### Global class configuration

<example
  name="Global configuration"
  file="/_content/examples/global-classes/global-classes"
  mode="editor"
  :editable="false"
  :line-numbers="false"
  langs="vue"></example>

#### Class configuration on a group, list, or form

<example
name="Classes prop"
file="/_content/examples/classes-config/classes-config"
tabs="render,html"
langs="vue"></example>

### Root classes function

`rootClasses` is a configuration function that is responsible
for producing the default classes for each element. This function already has a default value which produces all the default classes (like `formkit-outer` and `formkit-label`) that ship with FormKit — so replacing this single function allows you to easily replace all initial classes. This makes it an ideal candidate for writing custom themes when using utility frameworks like Tailwind.

The `rootClasses` function is passed 2 arguments (respectively):

- The [composition key](#composition-keys) (like `label` or `input`).
- The [input’s node](/essentials/input-node).

The function will be called once for each composition key and it _must_ return
an object of classes with boolean values.

<example
name="Root classes function"
file="/_content/examples/root-classes/root-classes"
tabs="html"
langs="vue"></example>

<callout type="tip">
Because <code>rootClasses</code> is a configuration option, you can apply it per-input, per group, or globally.
</callout>
