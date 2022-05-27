<script setup>
import { createIconPlugin, email, magnifyingGlass, sad, happy, color } from '@formkit/icons'
</script>

<template>
  <div class="demo-container">
    <FormKit
      type="form"
      :plugins="[createIconPlugin({ email, magnifyingGlass, sad, happy, color })]"
      :actions="false"
    >
      <!-- %partial% -->
      <FormKit
        type="email"
        icon="email"
        label="What is your email address?"
        placeholder="myname@website.com"
        help="Look at my fancy icon!"
      />
      <FormKit
        type="text"
        icon-suffix="magnifyingGlass"
        label="What are you looking for?"
        help="I have a suffix icon"
      />
      <FormKit
        type="range"
        icon="sad"
        icon-suffix="happy"
        label="How do icons make you feel?"
        help="Many input types support icons"
      />
      <FormKit
        type="color"
        icon="color"
        label="Choose a color"
        value="#5896D0"
        help="With 40+ icons built in, it's easy to get started"
      />
      <!-- %partial% -->
    </FormKit>
  </div>
</template>

<style>
@import 'https://assets.wearebraid.com/formkit/distro/genesis.css';
</style>
