<script setup>
async function getGuests({ search }) {
  if (!search) {
    return []
  }
  const res = await fetch(`http://127.0.0.1:8787/guests?search=${search}`)
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
  >
    <FormKit
      name="vips"
      type="transferlist"
      label="Choose VIPs for the party"
      source-label="Guests"
      target-label="VIPs"
      source-empty-message="No guests found"
      target-empty-message="No VIPs selected"
      :options="getGuests"
      searchable
      placeholder="Search guests"
    />
    <pre>{{ value }}</pre>
  </FormKit>
</template>
