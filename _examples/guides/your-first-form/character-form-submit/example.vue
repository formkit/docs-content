<!-- %partial%::html:: -->
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

<template>
  <div>
    <h4 class="form-label">Adding the createCharacter submit handler</h4>
  </div>
  <h1>New Character</h1>

  <!-- form is also an input, so it also accepts plugins -->
  <FormKit
    type="form"
    @submit="createCharacter"
    :plugins="[castRangeToNumber]"
    #default="{ value }"
  >
    <FormKit
      type="text"
      name="name"
      id="name"
      validation="required|not:Admin"
      label="Name"
      help="Enter your character's full name"
      placeholder="“Scarlet Sword”"
    />

    <FormKit
      type="select"
      label="Class"
      name="class"
      id="class"
      placeholder="Select a class"
      :options="['Warrior', 'Mage', 'Assassin']"
    />

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

    <pre wrap>{{ value }}</pre>
  </FormKit>

  <p>
    <em><small>Press submit to see the collected form data.</small></em>
  </p>
</template>
<!-- %partial%::html:: -->

<style scoped>
pre[wrap] {
  margin-bottom: 20px !important;
}

.form-label {
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 -0.5rem;
  padding: 5px;
  border-radius: 5px;
  display: inline-block !important;
  background-color: #444;
  color: white;
}
</style>
