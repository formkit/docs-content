<script setup>
async function searchGuests({ search }) {
  if (!search) {
    return []
  }
  const res = await fetch(`https://api-formkit-docs-exmaples.formkit.workers.dev/guests?search=${search}`)
  if (res.ok) {
    const data = await res.json()
    if (data.data) {
      return data.data.map((result) => {
        return {
          label: result.name,
          value: result.id,
        }
      })
    }
  }
  return []
}
</script>

<template>
  <FormKit
    type="form"
    #default="{ value }"
    :actions="false"
  >
    <FormKit
      name="vips"
      type="transferlist"
      label="Choose VIPs for the party"
      source-label="Guests"
      target-label="VIPs"
      source-empty-message="No guests found"
      target-empty-message="No VIPs selected"
      :options="searchGuests"
      searchable
      placeholder="Search guests"
    />
    <pre>{{ value }}</pre>
  </FormKit>
</template>
