<script setup></script>

<template>
  <h2>Guest list</h2>
  <FormKit type="list" :value="[{}]" dynamic #default="{ items, node, value }">
    <FormKit
      type="group"
      v-for="(item, index) in items"
      :key="item"
      :index="index"
    >
      <div class="group">
        <FormKit
          type="text"
          name="name"
          label="Guest name"
          placeholder="Guest name"
        />

        <FormKit type="number" name="age" label="Guest age" />

        <button
          type="button"
          @click="() => node.input(value.filter((_, i) => i !== index))"
          class="border border-blue-600 text-blue-600 p-3"
        >
          - Remove
        </button>
      </div>
    </FormKit>

    <button
      type="button"
      @click="() => node.input(value.concat({}))"
      class="border border-blue-600 text-blue-600 p-3 mb-4"
    >
      + Add another
    </button>

    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>

<style scoped>
.group {
  position: relative;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 10px;
  margin-bottom: 5px;
}

.group button {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
