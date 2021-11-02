# Context

FormKit inputs use a reactive state object to expose details about itself to slots, rules and to the underlying [schema](/essentials/schema) that defines the project. This is called the `context` object is found on the each input's [core `node` object](/essentials/core-node) at `node.context`. The following table lists all the properties of the context object that are available to your app:

Property        | Description
----------------|---------------------------------------------------------------
_value          | The uncommitted value of the core node.
