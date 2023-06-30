<!-- %partial% -->
<script setup>
import { ref } from 'vue'
const submitted = ref(false)
const submitHandler = async () => {
  // Let's pretend this is an ajax request:
  await new Promise((r) => setTimeout(r, 1000))
  submitted.value = true
}
</script>

<template>
  <FormKit
    type="form"
    id="registration-example"
    :form-class="submitted ? 'hide' : 'show'"
    submit-label="Register"
    @submit="submitHandler"
    :actions="false"
    #default="{ value }"
  >
    <h1>Register!</h1>
    <p>
      You can put any type of element inside a form, not just FormKit inputs
      (although only FormKit inputs are included with the submission).
    </p>
    <hr />
    <FormKit
      type="text"
      name="name"
      label="Your name"
      placeholder="Jane Doe"
      help="What do people call you?"
      validation="required"
    />
    <FormKit
      type="text"
      name="email"
      label="Your email"
      placeholder="jane@example.com"
      help="What email should we use?"
      validation="required|email"
    />
    <div class="double">
      <FormKit
        type="password"
        name="password"
        label="Password"
        validation="required|length:6|matches:/[^a-zA-Z]/"
        :validation-messages="{
          matches: 'Please include at least one symbol',
        }"
        placeholder="Your password"
        help="Choose a password"
      />
      <FormKit
        type="password"
        name="password_confirm"
        label="Confirm password"
        placeholder="Confirm password"
        validation="required|confirm"
        help="Confirm your password"
      />
    </div>

    <FormKit
      type="submit"
      label="Register"
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
  <div v-if="submitted">
    <h2>Submission successful!</h2>
  </div>
</template>
<!-- %partial% -->

<style>
p {
  font-size: 0.9em;
  color: #646464;
  line-height: 1.5;
}
h1 {
  margin-top: 0;
}
h2 {
  color: green;
}
hr {
  display: block;
  height: 1px;
  margin: 1.5em 0;
  border: 0;
  background-color: #e4e4e4;
}
.formkit-form {
  width: 420px;
  padding: 1.5em;
  border: 1px solid #e4e4e4;
  border-radius: 1em;
  margin: 0 auto 1em auto;
}
.hide {
  display: none;
}
#registration-example pre {
  margin-bottom: 10px;
}
@media (min-width: 400px) {
  .double {
    display: flex;
    justify-content: space-between;
  }

  .double > .formkit-outer {
    width: calc(50% - 0.5em);
  }
}
</style>
