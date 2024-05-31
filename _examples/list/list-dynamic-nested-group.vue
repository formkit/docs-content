<template>
  <!-- %partial -->
  <h2>Guest list</h2>
  <FormKit type="list" :value="[{}]" dynamic #default="{ items, node, value }">
    <FormKit
      type="group"
      v-for="(item, index) in items"
      :key="item"
      :index="index"
    >
      <div class="flex gap-2 p-4 mb-6 items-center border border-gray-400 dark:border-gray-800">
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
          class="text-sm whitespace-nowrap border border-blue-600 text-blue-600 p-3 mt-2"
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
  <!-- %partial -->
</template>
