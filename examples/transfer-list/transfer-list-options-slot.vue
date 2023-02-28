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

async function getGuest(id, cachedOption) {
  if (cachedOption.hasLoaded) return
  const res = await fetch(`https://api-formkit-docs-examples.formkit.workers.dev/guests/${id}`)
  if (res.ok) {
    const data = await res.json()
    if (data.data) {
      console.log('data', data.data)
      return {
        label: data.data.name,
        value: data.data.id,
        age: data.data.age,
        phone: data.data.phone,
        email: data.data.email,
        hasLoaded: true,
      }
    }
  }
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
      :option-loader="getGuest"
    >
      <template #targetOption="{ option }">
        <div class="flex">
          <div class="item">
            Name: {{ option.label }}
          </div>
          <div class="item">
            Age: {{ option.age }}
          </div>
          <div class="item">
            Email: {{ option.email }}
          </div>
          <div class="item">
            Phone: {{ option.phone }}
          </div>
        </div>
      </template>
    </FormKit>
    <pre>{{ value }}</pre>
  </FormKit>
</template>

<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
}

.item {
  font-size: 0.8em;
  width: 100%;
}
</style>
