```html
<template>
  <FormKit 
    type="form" 
    @submit="updateProfile"
    :value="UserAccountData"
  >
    <!-- 👀 No bindings, no v-model -->
    <UserAccountFields />
    <UserMessagingPreferences />
  </FormKit>
</template>
```
