<script setup>
import { ref } from 'vue'
import { FormKitIcon } from '@formkit/vue'
import { vAutoAnimate } from '@formkit/auto-animate'

const todos = ref([
  'Buy groceries',
  'Do laundry',
  'Clean the bathroom',
  'Pay bills',
  'Call mom',
  'Go for a run',
])
</script>

<template>
  <h1>Todo list</h1>
  <div v-auto-animate>
    <FormKit v-model="todos" type="list" dynamic #default="{ items, value }">
      <div v-for="(item, index) in items" :key="item" class="todo">
        <FormKit type="text" :index="index" />
        <ul class="controls">
          <li>
            <button
              type="button"
              @click="todos.splice(index - 1, 0, todos.splice(index, 1)[0])"
              class="button"
            >
              <FormKitIcon icon="arrowUp" />
            </button>
          </li>
          <li>
            <button
              type="button"
              @click="todos.splice(index + 1, 0, todos.splice(index, 1)[0])"
              class="button"
            >
              <FormKitIcon icon="arrowDown" />
            </button>
          </li>
          <li>
            <button
              type="button"
              @click="todos.splice(index, 1)"
              class="button close"
            >
              <FormKitIcon icon="close" />
            </button>
          </li>
        </ul>
      </div>
      <button type="button" @click="todos.push('')">Add a todo</button>
      <pre wrap>{{ value }}</pre>
    </FormKit>
  </div>
</template>

<style scoped>
.todo {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
.todo:deep(.formkit-outer) {
  margin-bottom: 0;
  flex-grow: 1;
}

.controls {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}

.controls .button {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  color: #999;
  line-height: 1;
  transition: color 0.3s ease;
  appearance: none;
  font-size: 1em;
  color: var(--fk-color-primary);
  margin-left: 0.5rem;
}
.controls:deep(svg) {
  display: block;
  width: 1em;
  max-height: 1.25em;
  height: auto;
  fill: currentColor;
}
.controls .close {
  color: var(--fk-color-danger);
}
</style>
