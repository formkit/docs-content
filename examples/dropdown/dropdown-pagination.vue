<script setup>
import { ref } from 'vue'
const value = ref(null)

async function loadArticles({ page, hasNextPage }) {
  const res = await fetch(`https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed&page=${page}`)
  if (res.ok) {
    const data = await res.json()
    hasNextPage()
    return data.map((item) => ({ label: item.title.rendered, value: item.id }))
  }
  return []
}
</script>

<template>
  <FormKit
    v-model="value"
    type="dropdown"
    label="Choose an article"
    :options="loadArticles"
  />
  <pre wrap>
    Value {{ value }}
  </pre>
</template>
