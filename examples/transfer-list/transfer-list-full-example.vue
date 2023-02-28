<script setup>
async function getGuests() {
  const res = await fetch('https://api-formkit-docs-examples.formkit.workers.dev/all-guests')
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
    />
    <pre>{{ value }}</pre>
  </FormKit>
</template>
