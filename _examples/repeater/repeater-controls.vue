
<script setup>
import { ref } from 'vue'

  const values = ref({
    letters: ['A', 'C'],
    users: [
      { name: 'foofoo' },
      { name: 'barbar' },
    ]
  })

  const unshiftValue = () => {
    values.value.users.unshift({ name: 'first' })
  }

  const pushLast = () => {
    values.value.users.push({ name: 'moomoo' })
  }

  const changeFirst = () => {
    values.value.users[1] = { name: 'booboo' }
  }

  const spliceIt = () => {
    values.value.users.splice(1, 2, { name: 'spliced' }, { name: 'double splice'})
  }

  const shiftFirst = () => {
    values.value.users.shift()
  }

  const popValue = () => {
    values.value.users.pop()
  }

  const spliceRemove = async () => {
    values.value.users.splice(1, 4)
    await new Promise(r => setTimeout(r, 200))
  }

  const replaceIt = () => {
    values.value.users = [{ name: 'first'}, { name: 'second'}, { name: 'third'}]
  }

  const injectAtIndexOne = () => {
    values.value.users.splice(1, 0, { name: 'injected' })
  }

  const sortIt = () => {
    values.value.users.sort((a, b) => a.name > b.name ? 1 : -1)
  }
</script>

<template>
  <FormKit
    #default="{ value }"
    v-model="values"
    type="group"
  >
    <FormKit
      id="repeater"
      name="users"
      type="repeater"
      label="Users"
      :insert-control="true"
      add-label="+ Add user"
      max="5"
    >
      <FormKit
        type="text"
        label="name"
        name="name"
      />
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
          <td><button id="assign" @click="changeFirst">Assign index 1</button></td>
          <td><button id="shift" @click="shiftFirst">Shift a value</button></td>
        </tr>
        <tr>
          <td><button id="unshift" @click="unshiftValue">Unshift a value</button></td>
          <td><button id="splice" @click="spliceIt">splice to assign (0, 2, [a, b])</button></td>
          <td><button id="spliceRemove" @click="spliceRemove">splice to delete (1, 4)</button></td>
        </tr>
        <tr>
          <td><button id="inject" @click="injectAtIndexOne">Inject at index 1</button></td>
          <td><button id="replace" @click="replaceIt">Replace it all</button></td>
          <td><button id="pop" @click="popValue">Pop off value</button></td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td><button id="sort" @click="sortIt">Sort it</button></td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </table>
    <div class="values">
      <pre id="innerValue">{{ value }}</pre>
      <pre id="vmodel">{{ values }}</pre>
    </div>
  </FormKit>
</template>

<style>
table {
  margin-bottom: 2em;
}

.values {
  display: flex;
  justify-content: space-between;
}

.values pre {
  width: calc(50% - .5em);
  background-color: lightgray;
  padding: 1em;
  box-sizing: border-box;
}
</style>
