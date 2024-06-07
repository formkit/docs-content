<script setup>
const frameworks = [
  {
    label: 'React',
    value: 'react',
    asset:
      'https://s3.amazonaws.com/cdn.formk.it/example-assets/frontend-framework-logos/react-logo.png',
  },
  {
    label: 'Vue',
    value: 'vue',
    asset:
      'https://s3.amazonaws.com/cdn.formk.it/example-assets/frontend-framework-logos/vue-logo.png',
  },
  {
    label: 'Angular',
    value: 'angular',
    asset:
      'https://s3.amazonaws.com/cdn.formk.it/example-assets/frontend-framework-logos/angular-logo.png',
  },
  {
    label: 'Svelte',
    value: 'svelte',
    asset:
      'https://s3.amazonaws.com/cdn.formk.it/example-assets/frontend-framework-logos/svelte-logo.png',
  },
]
</script>

<template>
  <FormKit
    name="framework"
    type="dropdown"
    label="Single-select"
    placeholder="Example placeholder"
    :options="frameworks"
    popover
    value="vue"
  >
    <!--SELECTION SLOT-->
    <template #selection="{ option, classes }">
      <div class="flex items-center">
        <img :src="option.asset" alt="optionAvatar" class="w-5 mr-2" />
        <span :class="classes.selection">
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
    :value="['vue', 'angular']"
  >
    <!--TAG SLOT-->
    <template #tag="{ handlers, option, classes }">
      <div :class="classes.tag">
        <img :src="option.asset" class="w-4 mr-1 bg-white rounded" />
        <span :class="classes.tagLabel">
          {{ option.label }}
        </span>
        <span
          @click.prevent="handlers.removeSelection(option)()"
          tabindex="-1"
          type="button"
          role="button"
          :class="classes.removeSelection"
        >
          <span :class="`${classes.closeIcon} ${classes.icon}`"
            ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16">
              <path
                d="M10,12.5c-.13,0-.26-.05-.35-.15L1.65,4.35c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0L10.35,11.65c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z"
                fill="currentColor"
              ></path>
              <path
                d="M2,12.5c-.13,0-.26-.05-.35-.15-.2-.2-.2-.51,0-.71L9.65,3.65c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71L2.35,12.35c-.1,.1-.23,.15-.35,.15Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </span>
      </div>
    </template>
    <!--/TAG SLOT-->
  </FormKit>
</template>
