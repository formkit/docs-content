<script setup>
import Autocomplete from './Autocomplete.vue'
import Dropdown from './Dropdown.vue'
import Mask from './Mask.vue'
import Rating from './Rating.vue'
import Repeater from './Repeater.vue'
import Taglist from './Taglist.vue'
import Toggle from './Toggle.vue'

const inputTypes = [
  'button',
  'checkbox',
  'checkbox_multiple',
  'color',
  'date',
  'datetime-local',
  'email',
  'file',
  'month',
  'number',
  'password',
  'radio',
  'range',
  'search',
  'select',
  'select_multiple',
  'submit',
  'tel',
  'text',
  'textarea',
  'time',
  'url',
  'week'
]
const inputOptions = {
  checkbox_multiple: ['I like Tailwind', 'I also like FormKit', 'I like other things too'],
  radio: ['I like Tailwind', 'I like FormKit', 'I like everything'],
  select: ['I like Tailwind', 'I like FormKit', 'I like everything'],
  select_multiple: ['I like Tailwind', 'I like FormKit', 'I like everything'],
}
</script>

<template>
  <FormKit 
    type="form"
    :actions="false"
  >
    <h2>Native Inputs</h2>
    <template 
      v-for="inputType in inputTypes"
      :key="inputType"
    >
      <template v-if="inputType === 'repeater'">
        <FormKit
          id="repeater"
          label="TailwindRepeater input"
          :type="inputType"
          help="Help text for the Repeater input"
          :add-label="inputType === 'repeater' ? 'Add Person' : null"
        >
          <FormKit
            type="text"
            name="name"
            label="Name"
          />
        </FormKit>
      </template>
      <template v-else>
        <template v-if="Array.isArray(inputOptions[inputType])">
          <template v-if="inputType.split('_')[1]">
            <FormKit
              :label="'Tailwind ' + inputType + ' input'"
              :type="inputType.split('_')[0]"
              :placeholder="inputType + ' input placeholder'"
              :options="inputOptions[inputType]"
              :help="'Help text for the ' + inputType + ' input'"
              :add-label="inputType === 'repeater' ? 'Add Person' : null"
              multiple="true"
            />
          </template>
          <template v-else>
            <FormKit
              :label="'Tailwind ' + inputType + ' input'"
              :type="inputType.split('_')[0]"
              :placeholder="inputType + ' input placeholder'"
              :options="inputOptions[inputType]"
              :help="'Help text for the ' + inputType + ' input'"
            />
          </template>
        </template>
        <template v-else>
          <FormKit
            :label="'Tailwind ' + inputType + ' input'"
            :type="inputType.split('_')[0]"
            :placeholder="inputType + ' input placeholder'"
            :help="'Help text for the ' + inputType + ' input'"
            :add-label="inputType === 'repeater' ? 'Add Person' : null"
            :multiple="inputType.split('_')[1] === 'multiple'"
          />
        </template>
      </template>
    </template>

    <Autocomplete /> 
    <Dropdown />
    <Mask />
    <Rating />
    <Repeater />
    <Taglist />
    <Toggle />
    <Transferlist />
  </FormKit>
</template>