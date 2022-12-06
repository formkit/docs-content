<script setup>
import { castRangeToNumber, updateAttributesPlugin } from 'plugins.js'
import { max_sum } from 'rules.js'

const createCharacter = async (fields) => {
  await new Promise((r) => setTimeout(r, 1000))
  alert(JSON.stringify(fields))
}
</script>

<template>
  <div><h4 class="form-label">Conditional rendering based on the value of form fields.</h4></div>
  <h1>New Character</h1>

  <FormKit
    type="form"
    @submit="createCharacter"
    :plugins="[castRangeToNumber]"
    submit-label="Create Character"
    #default="{ value }"
  >
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
      placeholder="Select a class"
      :options="['Warrior', 'Mage', 'Assassin']"
      :plugins="[updateAttributesPlugin]"
    />

    <div class="character-attributes">
      <h4>Character Attributes</h4>
      <p>You have a max budget of 20 points for character attributes.</p>

      <!-- %partial%::html:: -->
      <FormKit
        type="group"
        name="attributes"
        id="attributes"
        :validation-rules="{ max_sum }"
        validation-visibility="live"
        validation="max_sum"
        :validation-messages="{
          max_sum: ({ name, args }) => `${name} has exceeded the max budget of 20. Your character can't be that strong!`,
        }"
        #default="{ value, id, messages, fns, classes }"
      >
        <FormKit
          type="range"
          name="strength"
          id="strength"
          label="Strength"
          value="5"
          min="1"
          max="10"
          step="1"
          help="How many strength points should this character have?"
        />

        <FormKit
          type="range"
          name="skill"
          id="skill"
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
          label="Dexterity"
          value="5"
          min="1"
          max="10"
          step="1"
          help="How many dexterity points should this character have?"
        />

        <!-- By default groups do not show validation messages, so we need to add it manually -->
        <ul :class="classes.messages" v-if="fns.length(messages)">
          <li 
            v-for="message in messages"
            :key="message.key"
            :class="classes.message"
            :id="`${id}-${message.key}`"
            :data-message-type="message.type"
          >
            {{ message.value }}
          </li>
        </ul>

        <!-- Conditional rendering is simple, just get the value and a property of the object -->
        <p v-if="value.strength === 1 
          && value.skill === 1
          && value.dexterity === 1"
          key="easter-egg-uuid"
        >
          <em><small class="easter-egg">Are you trying to make the game harder for yourself?</small></em>
        </p>
        
      </FormKit>
      <!-- %partial%::html:: -->
    </div>

    <p><em><small>Try using greater than the alloted 20 point budget for the attributes.</small></em></p>

    <pre wrap>{{ value }}</pre>
  </FormKit>

  <p><em><small>Change the character's class to see the changes in attribute values.</small></em></p>
</template>

<style>
pre[wrap] {
  margin-bottom: 20px !important;
}
.form-label {
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 -.5rem;
  padding: 5px;
  border-radius: 5px;
  display: inline-block !important;
  background-color: #444;
  color: white;
}

.character-attributes {
  padding: 20px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  border-radius: 5px;
}

.character-attributes h4 {
  margin: 0 0 1rem;
}

.easter-egg {
  color: tomato;
}
</style>

