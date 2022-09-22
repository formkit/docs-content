<script setup>
  import { ref } from 'vue'
  const value = ref(null)
  const frameworks = [{ label: 'React', value: 'react', asset: 'https://reactjs.org/logo-og.png' }, { label: 'Vue', value: 'vue', asset: 'https://brandlogos.net/wp-content/uploads/2022/01/vue.js-logo-brandlogo.net_.png' }, { label: 'Angular', value: 'angular', asset: 'https://angular.io/assets/images/logos/angular/angular.png' }, { label: 'Svelte', value: 'svelte', asset: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png' }]
</script>

<template>
  <FormKit
    v-model="value"
    type="dropdown"
    label="Choose a front end framework"
    :options="frameworks"
  >
    <!--HERE WE ARE DEFINING OUR SELECTION SLOT-->
    <template #selection="{ option }">
      <div class="formkit-option">
        <img
          v-if="option.asset"
          :src="option.asset"
          alt="optionAvatar"
        />
        <span>
          {{ option.label }}
        </span>
      </div>
    </template>
	<!---->
  </FormKit>
  <pre wrap>
    {{ value }}
  </pre>
</template>

<style>
.formkit-option {
  display: flex;
  align-items: center;
}
.formkit-option img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>
