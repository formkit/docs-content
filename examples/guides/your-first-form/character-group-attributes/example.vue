<script setup>
const castRangeToNumber = (node) => {
  // We add a check to add the cast only to range inputs
  if (node.props.type !== 'range') return

  node.hook.input((value, next) => next(Number(value)))
}

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
