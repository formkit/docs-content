<script setup>
async function searchGuests({ search }) {
  if (!search) {
    return []
  }
  const res = await fetch(`https://api-formkit-docs-examples.formkit.workers.dev/guests?search=${search}`)
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

async function getGuest(id, cachedOption) {
  if (cachedOption) return cachedOption
  const res = await fetch(`https://api-formkit-docs-examples.formkit.workers.dev/guests/${id}`)
  if (res.ok) {
    const data = await res.json()
    console.log('data', data)
    if (data.data) {
      return {
        label: data.data.name,
        value: data.data.id,
      }
    }
  }
}
</script>

<template>
  <FormKit
    type="form"
    #default="{ value }"
    :value="{
      vips: [
        22, 10
      ]
    }"
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
      :option-loader="getGuest"
    />
    <pre>{{ value }}</pre>
  </FormKit>
</template>
