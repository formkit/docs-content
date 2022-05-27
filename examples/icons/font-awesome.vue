%partial%
<script setup>
import { createIconPlugin } from '@formkit/icons'
import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

fontAwesomeLibrary.add(faEnvelope, faCheck)

const fontAwesomeSchema = (iconPropValue) => {
  return {
    $cmp: FontAwesomeIcon, // if your icon is globally registered, just pass a string
    props: {
      icon: iconPropValue
    }
  }
}

const iconPlugin = createIconPlugin(fontAwesomeSchema)
</script>

<template>
  <FormKit
    label="I'm using Font Awesome icons"
    type="email"
    value="hello@formkit.com"
    :plugins="[iconPlugin]"
    :icon="['fas', 'envelope']"
    :icon-suffix="['fas', 'check']"
  />
</template>
%partial%

<style>
@import 'https://assets.wearebraid.com/formkit/distro/genesis.css';
</style>
