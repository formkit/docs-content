<!-- %partial%::html:: -->
<script setup>
import { castRangeToNumber, updateAttributesPlugin } from './plugins.js'
import { max_sum } from './rules.js'

const createCharacter = async (fields) => {
  await new Promise((r) => setTimeout(r, 1000))
  alert(JSON.stringify(fields))
}
</script>

<template>
  <div>
    <h4 class="form-label">
      Add a custom validation rule to the attributes group.
    </h4>
  </div>
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

      <FormKit
        type="group"
        name="attributes"
        id="attributes"
        :validation-rules="{ max_sum }"
        validation-visibility="live"
        validation="max_sum"
        :validation-messages="{
          max_sum: ({ name, args }) =>
            `${name} has exceeded the max budget of 20. Your character can't be that strong!`,
        }"
        #default="{ id, messages, fns, classes }"
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
      </FormKit>
    </div>

    <p>
      Try using greater than the alloted 20 point budget for the attributes.
    </p>

    <pre wrap>{{ value }}</pre>
  </FormKit>

  <p>Change the character's class to see the changes in attribute values.</p>
</template>
<!-- %partial%::html:: -->

<style scoped>
pre[wrap] {
  margin-bottom: 20px !important;
}
.form-label {
  @apply text-sm text-slate-800 mb-4 p-2 rounded bg-slate-100 dark:bg-slate-800 dark:text-slate-100;
}

.character-attributes {
  @apply p-5 border border-slate-300 mb-6 rounded dark:border-slate-800;
}

.character-attributes h4 {
  @apply mb-6;
}
</style>
