# FormKit Core

At the heart of the FormKit framework is the `@formkit/core` package. This zero-dependency package is responsible for nearly all of FormKit's low-level critical functions, a few of them are:

- Configuration
- Value input/output
- Event bubbling
- Plugin management
- Tree state tracking
- Message management
- Lifecycle hooks

## Architecture

The functionality of FormKit core is not distributed to your application via a centralized instance but rather 