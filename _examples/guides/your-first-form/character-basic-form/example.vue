<!-- %partial%::html:: -->
<template>
  <div><h4 class="form-label">Creating the form</h4></div>
  <h1>New Character</h1>

  <FormKit type="form">
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
      help="How much skill points to start with"
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
</template>
<!-- %partial%::html:: -->

<style scoped>
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
