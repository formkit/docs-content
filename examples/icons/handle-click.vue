%partial%
<script setup>
import { ref } from 'vue'
import { createIconPlugin, password, eye, eyeClosed } from '@formkit/icons'

const iconPlugin = createIconPlugin({ password, eye, eyeClosed })
const passwordIcon = ref('eyeClosed')
const passwordInputType = ref('password')
const handleIconClick = (node, location) => {
  if (location === 'suffix') {
    passwordIcon.value = passwordIcon.value === 'eye' ? 'eyeClosed' : 'eye'
    passwordInputType.value = passwordIcon.value === 'eye' ? 'text' : 'password'
  }
}
</script>

<template>
  <FormKit
    :plugins="[iconPlugin]"
    :type="passwordInputType"
    label="A fancy password input"
    value="mySecretPassword!"
    icon="password"
    :icon-suffix="passwordIcon"
    @icon-click="handleIconClick"
  />
</template>
%partial%

<style>
@import 'https://assets.wearebraid.com/formkit/distro/genesis.css';

.formkit-suffix.formkit-icon {
  cursor: pointer;
}
.formkit-suffix.formkit-icon:hover {
  color: var(--fk-color-primary);
}
</style>
