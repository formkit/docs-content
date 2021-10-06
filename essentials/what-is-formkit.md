## What is FormKit

FormKit is a tool for Vue and React developers that makes authoring high quality production ready forms 10x faster. It is fundamentally an easy-to-learn form authoring framework that ships with production-ready scaffolding like inputs, validation rules, and error handling.

## The problem with forms

Forms seem simple. After all a `<form>` and an `<input>` tag is all that's required. Yet, experienced engineers know that implementing production ready forms is tedious and complicated. Generally they should include:

- Accessible markup
- Backend validation
- Front end validation
- Help text
- Labels
- Repopulation

This leads a mess of copy/paste HTML and home-rolled form components to accomplish the job. FormKit was built to solve these problems, while making form authoring efficient and enjoyable for developers.

## FormKit’s solutions

FormKit improves form building by providing solutions to __X__ challenges:

### Easy to learn 📚

Developers love to learn — but no one enjoys pouring over third party APIs and configuration options. That's why FormKit uses a single component for all of its inputs. `<FormKit>` is the only component you need to know to get started writing high quality forms. And it works just like you would expect an `<input>` tag to work:

<code-example
  name="Text input"
  file="/_content/examples/simple-text/simple-text"
  langs="vue">
</code-example>

### Easy to validate ✅

Front end validation that provides instant feedback is an important part of providing a good experience to your users. Unfortunately it can be incredibly tedious to implement even if you're using a great validation library. FormKit takes the pain out of front end validation by baking the rules directly into the inputs.

<code-example
  name="Text input"
  file="/_content/examples/simple-validation/simple-validation"
  langs="vue">
</code-example>

### Easy to access ♿️

Creating accessible forms is a serious challenge. Especially when accessibility standards are not always clear and most developers are under time pressure. Ideally all developers would be well versed in accessibility best practices, but unfortunately that is not the case. To address this, FormKit outputs an opinionated accessible DOM structure. This is different than many popular “renderless” form libraries that provide no markup at all, and rely on developers to supply the inputs themselves.

### Easy to theme 👩‍🎨

FormKit is made for front end developers. Each DOM element can have its classes changed, attributes manipulated, and position altered. You can even replace an input's entire structure while keeping all of the functionality you need. FormKit is ready for you styles whether you use plain css, Sass, Tailwind or bootstrap.

### Easy to extend 🧩

FormKit comes with great production ready defaults, and for many users they'll never need anything other than the default setup, but FormKit is more than just a few inputs. It is a form building _framework_, complete with a hooks, events, plugins, libraries and schemas. Advanced developers can craft their own form systems using FormKit's low level tooling.


