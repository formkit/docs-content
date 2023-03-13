<script>
export default {
  data() {
    return {
      formData: {
        username: 'b@dExampleUsername',
        password: 'test_password',
        password_confirm: 'tst_password',
        phone: undefined,
        twitter_handle: 'forgotTheAt',
      },
    }
  },
  methods: {
    async submit() {
      return new Promise((r) => setTimeout(r, 2000))
      alert('submitted successfully!')
    },
  },
}
</script>

<template>
  <FormKit :value="formData" type="form" @submit="submit">
    <!-- %partial%::html:: -->
    <FormKit
      type="text"
      label="Username"
      name="username"
      placeholder="FormKitFan9000"
      validation="required|length:5,15|alphanumeric"
      help="By default errors are shown on blur or submit"
      autocomplete="off"
    />
    <div class="double">
      <FormKit
        type="password"
        name="password"
        label="Password"
        validation="required"
      />
      <FormKit
        type="password"
        name="password_confirm"
        label="Confirm password"
        validation="required|confirm"
        validation-label="Password confirmation"
      />
    </div>
    <!-- 👀  validation-visibility="dirty" shows errors after typing -->
    <FormKit
      type="text"
      name="phone"
      label="Phone Number"
      placeholder="xxx-xxx-xxxx"
      :validation="[['required'], ['matches', /^\d{3}-\d{3}-\d{4}$/]]"
      :validation-messages="{
        matches: 'Phone number must be formatted: xxx-xxx-xxxx',
      }"
      validation-visibility="dirty"
      autocomplete="off"
    />
    <!-- 👀  validation-visibility="live" shows errors immediately -->
    <FormKit
      type="text"
      label="Twitter Handle"
      name="twitter_handle"
      placeholder="@username"
      validation="required|starts_with:@|length:5"
      validation-visibility="live"
      autocomplete="off"
    />
    <!-- %partial% -->
    <!-- 👀  free submit button? nice. -->
  </FormKit>
</template>

<style>
.double {
  display: flex;
}
.double .formkit-outer {
  margin-right: 1em;
}
</style>
