<!-- %partial% -->
<script setup>
import { getNode } from '@formkit/core'

const next = () => {
  const node = getNode('multi-step')
  node.next()
}

const previous = () => {
  const node = getNode('multi-step')
  node.previous()
}

const goTo = () => {
  const node = getNode('multi-step')
  node.goTo('favoriteThing')
}
</script>
<!-- %partial% -->

<template>
  <FormKit
    type="multi-step"
    id="multi-step"
  >
    <FormKit type="step" name="personalInfo" id="personalInfo">
      <FormKit type="text" label="Name" prefix-icon="avatarMan" />
    </FormKit>

    <FormKit type="step" name="favoriteThing" id="favoriteThing">
      <FormKit type="text" label="Favorite Thing" prefix-icon="star" />
    </FormKit>

    <FormKit type="step" name="happyMemory" id="happyMemory">
      <FormKit type="text" label="Happy Memory" prefix-icon="happy" />
    </FormKit>
  </FormKit>

  <FormKit type="button" @click="next" label="Next" />
  <FormKit type="button" @click="previous" label="Previous" />
  <FormKit type="button" @click="goTo" label="Go to Favorite thing" />
</template>
