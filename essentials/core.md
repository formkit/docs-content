# Core

<simple-tree></simple-tree>

At the heart of the FormKit framework is `@formkit/core`. This zero-dependency package is responsible for nearly all of FormKit's low-level critical functions, a few of them are:

- Configuration
- Value input/output
- Event bubbling
- Plugin management
- Tree state tracking
- Message management
- Lifecycle hooks

## Architecture

The functionality of FormKit core is not exposed to your application via a centralized instance but rather a distributed set of "nodes" with each input owning its own `node` instance. Because each input has its own `node` and these nodes are arrange in a general tree it allows for tremendous micro and macro flexibility. For example a particular form can use different plugins than the rest of your application, a group input could modify the configuration for all of it’s sub-inputs, or a special input could have a one off plugin written for it.

<callout type="danger" label="Docs in progress">
Hey 👋 — <code>@formkit/core</code> is a hugely powerful and important piece of the FormKit stack — so important we needed a little more time to finish these docs, but at least we all know it's a thing now!
</callout>
