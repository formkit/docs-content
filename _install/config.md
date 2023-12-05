## Configuration

To configure FormKit create a FormKit config file in the root of your project (if one does not already exist) and import it for use in your Vue App.

If you would like to supply your own configuration, you can either extend `defaultConfig` by passing a [configuration object](/essentials/configuration#what-is-defaultconfig) to it, or replace with your own configuration object, which allows for improved tree-shaking (only include the rules and languages you want to actually use) and more fine-grained control:

::Callout
---
type: "info"
label: "Hierarchical configuration"
---
FormKit uses a unique hierarchical configuration system that is well suited for forms. Any global configuration defined here can be overridden for a single input, a group of inputs, or a form.
::
