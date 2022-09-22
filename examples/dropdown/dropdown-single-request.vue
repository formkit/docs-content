<script setup>
import { ref } from 'vue'
const value = ref(null)

async function loadPosts() {
  const res = await fetch(`https://techcrunch.com/wp-json/wp/v2/posts`)
  if (res.ok) {
    const data = await res.json()
    // Iterating over the options so we return an array of objects with label and value properties
    return data.map((item) => {
      return {
        label: item.title.rendered,
        value: item.id,
      }
    })
  }
  return []
}
</script>

<template>
  <FormKit
    v-model="value"
    type="dropdown"
    label="Choose an article"
    :options="loadPosts"
  />
  <pre wrap>
    Value {{ value }}
  </pre>
</template>
