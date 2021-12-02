# What is FormKit?

FormKit is a form authoring framework for Vue developers that makes building high quality production-ready forms 10x faster. It is easy-to-learn and ships with production-ready scaffolding like inputs, validation rules, and error handling.

## The problem with forms

Forms seem simple. After all, a `<form>` and an `<input>` tag are all that's required. Yet, experienced engineers know that implementing production-ready forms is tedious and complicated. Generally, they should include:

- Accessible markup
- Backend validation
- Front end validation
- Help text
- Labels
- Repopulation

This leads a mess of copy/paste HTML and home-rolled form components to accomplish the job. FormKit was built to solve these problems, while making form authoring efficient and enjoyable for developers.

## FormKit’s solutions

### Comprehensive 💯

FormKit is designed to be _the_ destination for all your form needs, whether [form styling](/essentials/styling), [validation](/essentials/validation), [generation](/essentials/generation), [error handling](/essentials/forms#backend-error-handling), custom inputs, or a plethora of other requirements. We are continuously adding to the FormKit ecosystem and shipping high-quality tooling for developers' entire form stack. 

### Easy to learn 📚

Developers love to learn — but no one enjoys pouring over third-party APIs and configuration options. That's why FormKit uses a single component for all of its [inputs]/essentials/inputs. `<FormKit>` is the only component you need to know to get started — and it works just like you would expect an `<input>` tag to work:

<example
  name="Text input"
  file="/_content/examples/simple-text/simple-text"
  langs="vue">
</example>

### Easy to validate ✅

Front end [validation](/essentials/validation) that gives instant feedback is an important part of providing a good experience to your users. Unfortunately, it can be incredibly tedious to implement even if you're using a great validation library. FormKit takes the pain out of front end validation by baking the [rules](/essentials/validation#available-rules) directly into the inputs.

<example
  name="Text input"
  file="/_content/examples/simple-validation/simple-validation"
  langs="vue">
</example>

### Easy to use ♿️

Creating accessible forms is a serious challenge. Especially when accessibility standards are not always clear and most developers are under time pressure. Ideally, all developers would be well versed in accessibility best practices, but unfortunately that is not the case. To address this, FormKit outputs an opinionated accessible DOM structure. This is different than many popular “renderless” form libraries that provide no markup at all, and rely on developers to supply the inputs themselves.

### Easy to theme 👩‍🎨

FormKit is made for front end developers. Each DOM element can have its [classes changed](/essentials/styling#custom-classes), [attributes manipulated](/essentials/inputs#setting-attributes), and position altered. You can even replace an input's entire structure while keeping all of the functionality you need. FormKit is ready for your styles whether you use vanilla CSS, Sass, [Tailwind](/essentials/styling#tailwind-css-example) or any other CSS utility.

### Easy to extend 🧩

FormKit comes with great production-ready defaults, and for many users, the defaults are all they'll never need. But FormKit is more than just inputs. It is a form building _framework_, complete with a [hooks](/advanced/core#hooks), [events](/advanced/core#events), [plugins](/advanced/core#plugins), libraries and [schemas](/advanced/schema). Advanced developers can craft their own form systems using FormKit's low-level tooling.
