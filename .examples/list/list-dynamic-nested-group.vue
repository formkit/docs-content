<script setup></script>

<template>
  <h2>Guest list</h2>
  <FormKit type="list" :value="[{}]" dynamic #default="{ items, node, value }">
    <FormKit type="group"
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

        <FormKit
          type="number"
          name="age"
          label="Guest age"
        />

        <button type="button" @click="() => node.input(value.filter((_, i) => i !== index))">
          - Remove
        </button>
      </div>
    </FormKit>
    
    <button type="button" @click="() => node.input(value.concat({}))">
      + Add another
    </button>

    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>

<style>
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
