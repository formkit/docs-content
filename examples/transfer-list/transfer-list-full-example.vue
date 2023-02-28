<script setup lang="ts">
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

function initials(str: string) {
  return str
    .split(' ')
    .slice(0, 2)
    .map((item) => item.charAt(0).toUpperCase())
    .join('')
}

</script>

<template>
  <FormKit
    type="form"
    :actions="false"
    :value="{
      vips: [
        1
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
      :options="getGuests"
      :option-loader="getGuest"
    >
      <template #targetOption="{ option }">
        <div class="flex">
          <span class="avatar">
            <span class="initials">{{ initials(option.label) }}</span>
          </span>
          <div class="info">
            <div class="item">
              {{ option.label + ` (${option.age})` }}
            </div>
            <div class="item-small">
              {{ option.email }}
            </div>
            <div class="item-small">
              {{ option.phone }}
            </div>
          </div>
        </div>
      </template>
    </FormKit>
  </FormKit>
</template>

<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item {
  font-size: 0.8em;
  margin-bottom: 0.2em;
}

.item-small {
  font-size: 0.7em;
  color: #666;
  margin-bottom: 0.1em;
}

.info {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.avatar {
  font-size: 33px;
  overflow: hidden;
  display: block;
  border-radius: 2em;
  position: relative;
  width: 1em;
  height: 1em;
  flex: 0 0 1em;
  background-color: rgb(2, 117, 255);
  margin-right: 0.5em;
}

.initials {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 2em;
  overflow: hidden;
  background: var(--gradient-avatar);
  color: white;
  font-size: 0.35em;
  line-height: 1.1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  text-transform: uppercase;
}
</style>
