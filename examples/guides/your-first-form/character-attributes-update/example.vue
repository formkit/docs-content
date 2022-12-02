<!-- %partial%::html:: -->
<script setup>
import { onMounted } from 'vue'
import { getNode } from '@formkit/core'

const castRangeToNumber = (node) => {
  // We add a check to add the cast only to range inputs
  if (node.props.type !== 'range') return

  node.hook.input((value, next) => next(Number(value)))
}

const CHARACTER_BASE_STATS = {
  Warrior: {
    strength: 9,
    skill: 1,
    dexterity: 5,
  },
  Mage: {
    strength: 5,
    skill: 10,
    dexterity: 8,
  },
  Assassin: {
    strength: 5,
    skill: 4,
    dexterity: 10,
  },
}

// We add it inside a onMounted to make sure the node exists
onMounted(() => {
  // Use the IDs of the inputs you want to get, for our case the class and the attributes group
  const classNode = getNode('class')
  const attributesNode = getNode('attributes')

  // Here we are listening for the 'commit' event
  classNode.on('commit', ({ payload }) => {
    // We update the value of the attributes group using its children name to pass down automatically by FormKit
    attributesNode.input(CHARACTER_BASE_STATS[payload])
  })
})

const createCharacter = async (fields) => {
  await new Promise((r) => setTimeout(r, 1000))
  alert(JSON.stringify(fields))
}
</script>

<template>
  <h1>New Character</h1>

  <!-- form is also an input, so it also accepts plugins -->
  <FormKit type="form" @submit="createCharacter" :plugins="[castRangeToNumber]" #default="{ value }">
    <FormKit
      type="text"
      name="name"
      id="name"
      validation="required|not:Admin"
      label="Name"
      help="Your full name"
      placeholder="Please add your name"
    />

    <FormKit
      type="select"
      label="Class"
      name="class"
      id="class"
      :options="['Warrior', 'Mage', 'Assassin']"
    />

    <FormKit type="group" name="attributes" id="attributes">
      <FormKit
        type="range"
        name="strength"
        id="strength"
        label="Strength"
        value="5"
        validation="min:2|max:9"
        validation-visibility="live"
        min="1"
        max="10"
        step="1"
        help="How many strength points should this character have?"
      />

      <FormKit
        type="range"
        name="skill"
        id="skill"
        validation="required|max:10"
        label="Skill"
        value="5"
        min="1"
        max="10"
        step="1"
        help="How many skill points should this character have?"
      />

      <FormKit
        type="range"
        name="dexterity"
        id="dexterity"
        validation="required|max:10"
        label="Dexterity"
        value="5"
        min="1"
        max="10"
        step="1"
        help="How many dexterity points should this character have?"
      />
    </FormKit>
    <pre wrap>{{ value }}</pre>
  </FormKit>

  <p><em><small>Change the character's class to see the changes in attribute values.</small></em></p>
</template>
<!-- %partial%::html:: -->

<style>
pre[wrap] {
  margin-bottom: 20px !important;
}
</style>
