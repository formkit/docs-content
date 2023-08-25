<script setup>
const frameworks = [{ label: 'React', value: 'react', asset: 'https://reactjs.org/logo-og.png' }, { label: 'Vue', value: 'vue', asset: 'https://brandlogos.net/wp-content/uploads/2022/01/vue.js-logo-brandlogo.net_.png' }, { label: 'Angular', value: 'angular', asset: 'https://angular.io/assets/images/logos/angular/angular.png' }, { label: 'Svelte', value: 'svelte', asset: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png' }]
</script>

<template>
  <FormKit
    name="framework"
    type="dropdown"
    label="Single-select"
    placeholder="Example placeholder"
    :options="frameworks"
    value="vue"
  >
    <!--SELECTION SLOT-->
    <template #selection="{ option, classes }">
      <div :class="classes.option">
        <img
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
  <FormKit
      type="dropdown"
      name="framework"
      label="Tags appearance"
      placeholder="Example placeholder"
      :options="frameworks"
      multiple
      selection-appearance="tags"
      :value="['vue', 'react']"
    >
      <!--TAG SLOT-->
      <template #tag="{ handlers, option, classes }">
        <div :class="classes.tag">
          <img :src="option.asset" :class="classes.tagImage" />
          <span :class="classes.tagLabel">
            {{ option.label }}
          </span>
          <button
            @click.prevent="handlers.removeSelection(option)"
            tabindex="-1"
            type="button"
            aria-controls="input_1"
            class="formkit-remove-selection"
          >
            <span class="formkit-close-icon formkit-icon"
              ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16">
                <path
                  d="M10,12.5c-.13,0-.26-.05-.35-.15L1.65,4.35c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0L10.35,11.65c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M2,12.5c-.13,0-.26-.05-.35-.15-.2-.2-.2-.51,0-.71L9.65,3.65c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71L2.35,12.35c-.1,.1-.23,.15-.35,.15Z"
                  fill="currentColor"
                ></path></svg>
              </span>
          </button>
        </div>
      </template>
      <!--/TAG SLOT-->
		</FormKit>
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

.formkit-tag {
  display: flex;
  align-items: center;
}
.formkit-tag img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>