<script setup>
import Autocomplete from './Autocomplete.vue'
import Datepicker from './Datepicker.vue'
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
  'week',
]
const inputOptions = {
  checkbox_multiple: [
    'I like Tailwind',
    'I also like FormKit',
    'I like other things too',
  ],
  radio: ['I like Tailwind', 'I like FormKit', 'I like everything'],
  select: ['I like Tailwind', 'I like FormKit', 'I like everything'],
  select_multiple: ['I like Tailwind', 'I like FormKit', 'I like everything'],
}

const chartData = Array(50)
  .fill(0)
  .map((_, i) => ({
    at: i * 40,
    value: Math.random() * 100 + i * 2,
  }))
</script>

<template>
  <FormKit type="form" :actions="false">
    <h2>Native Inputs</h2>
    <template v-for="inputType in inputTypes" :key="inputType">
      <template v-if="inputType === 'repeater'">
        <FormKit
          id="repeater"
          label="TailwindRepeater input"
          :type="inputType"
          help="Help text for the Repeater input"
          :add-label="inputType === 'repeater' ? 'Add Person' : null"
        >
          <FormKit type="text" name="name" label="Name" />
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
    <Datepicker />
    <Dropdown />
    <Mask />
    <Rating />
    <Repeater />
    <h2>Pro - Slider</h2>
    <FormKit
      type="slider"
      label="Choose your price range"
      :value="[800, 1200]"
      tooltip="true"
      min="0"
      max="2000"
      show-input
      step="25"
      :input-attrs="{
        floatingLabel: true,
        prefixIcon: 'dollar',
      }"
      :min-input-attrs="{
        label: 'Minimum',
      }"
      :max-input-attrs="{
        label: 'Maximum',
      }"
      :marks="[
        { at: 0, label: '$0' },
        { at: 500, label: '$500' },
        { at: 1000, label: '$1000' },
        { at: 1500, label: '$1500' },
        { at: 2000, label: '$2000' },
      ]"
      mark-labels
      :chart="chartData"
    />
    <Taglist />
    <Toggle />
    <Transferlist />
  </FormKit>
</template>
