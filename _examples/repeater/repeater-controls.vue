<script setup>
import {
  values,
  unshiftValue,
  pushLast,
  changeFirst,
  spliceIt,
  shiftFirst,
  popValue,
  spliceRemove,
  replaceIt,
  injectAtIndexOne,
  sortIt,
} from './controls'
</script>

<template>
  <!-- %partial% -->
  <!-- Imports hidden for brevity -->
  <FormKit #default="{ value }" v-model="values" type="group">
    <FormKit
      id="repeater"
      name="users"
      type="repeater"
      label="Users"
      :insert-control="true"
      add-label="+ Add user"
      max="5"
    >
      <FormKit type="text" label="name" name="name" />
    </FormKit>
    <table>
      <thead>
        <th>Add</th>
        <th>Modify</th>
        <th>Remove</th>
      </thead>
      <tbody>
        <tr>
          <td><button id="push" @click="pushLast">Push a value</button></td>
          <td>
            <button id="assign" @click="changeFirst">Assign index 1</button>
          </td>
          <td><button id="shift" @click="shiftFirst">Shift a value</button></td>
        </tr>
        <tr>
          <td>
            <button id="unshift" @click="unshiftValue">Unshift a value</button>
          </td>
          <td>
            <button id="splice" @click="spliceIt">
              splice to assign (0, 2, [a, b])
            </button>
          </td>
          <td>
            <button id="spliceRemove" @click="spliceRemove">
              splice to delete (1, 4)
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button id="inject" @click="injectAtIndexOne">
              Inject at index 1
            </button>
          </td>
          <td>
            <button id="replace" @click="replaceIt">Replace it all</button>
          </td>
          <td><button id="pop" @click="popValue">Pop off value</button></td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td><button id="sort" @click="sortIt">Sort it</button></td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </table>
    <pre wrap>{{ value }}</pre>
  </FormKit>
  <!-- %partial% -->
</template>

<style scoped>
table td {
  @apply text-center w-1/3;
}
table button {
  @apply p-2 w-full text-balance border border-blue-300 bg-blue-100 text-blue-800 rounded leading-tight;
  @apply dark:border-blue-600 dark:bg-blue-900 dark:text-blue-100;
}
</style>
