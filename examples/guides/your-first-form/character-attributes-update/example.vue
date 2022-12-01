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
    vitality: 10,
    skill: 1,
    strength: 9,
    dexterity: 5,
  },
  Mage: {
    vitality: 2,
    skill: 10,
    strength: 5,
    dexterity: 8,
  },
  Assassin: {
    vitality: 6,
    skill: 4,
    strength: 5,
    dexterity: 10,
  },
}

// We add it inside a onMounted to make sure the node exists
onMounted(() => {
  // Use the IDs of the inputs you want to get, for our case the class and the attributes group
  const classNode = getNode('class')
  const attributesNode = getNode('attributes')

  // Here we can use the events to listen to commit changes
  classNode.on('commit', ({ payload }) => {
    // We update the value of the attributes group using its children name to pass down automatically by formkit
    attributesNode.input(CHARACTER_BASE_STATS[payload])
  })
})

const createCharacter = async (fields) => {
  await new Promise((r) => setTimeout(r, 1000))
  alert(JSON.stringify(fields))
}
</script>

<!-- %partial%::html:: -->
<template>
  <h1>New Character</h1>

  <!-- form is also an input, so it also accepts plugins -->
  <FormKit type="form" @submit="createCharacter" :plugins="[castRangeToNumber]">
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
      id="class"
      :options="['Warrior', 'Mage', 'Assassin']"
    />

    <FormKit type="group" name="attributes" id="attributes">
      <FormKit
        type="range"
        name="vitality"
        id="vitality"
        validation="required|max:10"
        label="Vitality"
        value="5"
        min="1"
        max="10"
        step="1"
        help="How much vitality points to start with"
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
        help="How much skill points to start with"
      />

      <FormKit
        type="range"
        name="strength"
        id="strength"
        validation="required|max:10"
        label="Strength"
        value="5"
        min="1"
        max="10"
        step="1"
        help="How much strength points to start with"
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
        help="How much dexterity points to start with"
      />
    </FormKit>
  </FormKit>
</template>
<!-- %partial%::html:: -->
