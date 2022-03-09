# Configuration

FormKit uses a unique hierarchical configuration system that is well suited for forms. To understand how this configuration works there are 3 questions we need to answer:

1. What are core nodes?
2. What are node props?
3. What is node config?

## What are core nodes?

Every `<FormKit>` component has its own instance of a core node object. This node is responsible for almost all of the component’s functionality. There are 3 types of nodes: inputs, lists, and groups (forms are just a type of group!).

There is no global FormKit instance that controls the application — instead you can think of each node as it's own little application. Complete with its own configuration.

One last thing about nodes — they can all have parents, and groups and lists can have children. For example, a login form might have two children — the email and password inputs. You can draw this relationship as a simple tree diagram:

<figure>
  <simple-tree></simple-tree>
  <figcaption>Hover over each node to see its initial options.</figcaption>
</figure>

## What are node props?

All core node’s have a `props` object (`node.props`). FormKit core, and any third party plugins or code can read and write values to this object. In fact, nearly every feature of FormKit references `node.props` to determine how it should operate.

For example, the validation plugin looks at `node.props.validation` to determine if there are any rules it needs to run. So the real question is — how are these props being set? There are 3 primary mechanisms for setting props — listed in descending priority:

### 1. Direct assignment

If you have an node instance, you can directly assign it a prop value:

<example
  name="Direct node assignment"
  file="/_content/examples/node-assignment/node-assignment.vue">
</example>

### 2. Component props

Any props passed to the `<FormKit>` input are assigned to the `node.props` object (you know the drill).

<example
  name="Component props"
  file="/_content/examples/component-props/component-props.vue">
</example>

### 3. Vue plugin options

When registering the the `@formkit/vue` plugin, you can provide default props to be injected into to all `<FormKit>` component core nodes.

<example
  name="Component props"
  :file="[
    '/_content/examples/vue-plugin-props/vue-plugin-props.vue',
    '/_content/examples/vue-plugin-props/formkit.config.js',
  ]"
  init-file-tab="formkit.config.js">
</example>
