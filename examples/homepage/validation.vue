<template>
  <FormKit
    :value="formData"
    type="form"
  >
    <!-- %partial%::html:: -->
    <FormKit
      type="text"
      label="Username"
      name="username"
      placeholder="FormKitFan9000"
      validation="required|length:5,15|alphanumeric"
      validation-behavior="live"
      autocomplete="off"
    />
    <div class="double">
      <FormKit
        type="password"
        name="password"
        label="Password"
        validation="required"
        validation-behavior="live"
      />
      <FormKit
        type="password"
        name="password_confirm"
        label="Confirm password"
        validation="required|confirm"
        validation-behavior="live"
        validation-label="Password confirmation"
      />
    </div>
    <FormKit
      type="text"
      name="phone"
      label="Phone Number"
      placeholder="xxx-xxx-xxxx"
      :validation="[
        ['required'],
        ['matches', /^\d{3}-\d{3}-\d{4}$/]
      ]"
      validation-behavior="live"
      :validation-messages="{ matches: 'Phone number must be formatted: xxx-xxx-xxxx' }"
      autocomplete="off"
    />
    <FormKit
      type="text"
      label="Twitter Handle"
      name="twitter_handle"
      placeholder="@username"
      validation-behavior="live"
      validation="required|starts_with:@|length:5"
      autocomplete="off"
    />
    <!-- %partial% -->
  </FormKit>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        username: 'b@dExampleUsername',
        password: 'test_password',
        password_confirm: 'tst_password',
        phone: '(555) 867-5309',
        twitter_handle: 'forgetTheAt'
      }
    }
  }
}
</script>

<style>
.double {
  display: flex;
}
.double .formkit-outer {
  margin-right: 1em;
}
</style>
