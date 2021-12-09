%partial%
<template>
  <FormKit
    type="form"
    @submit="handleSubmit"
    form-class="selection:bg-pink-200 my-8 mx-auto w-full max-w-2xl bg-white border-2 border-green-400 p-6 shadow-lg rounded-lg"
    :submit-attrs="{
      'input-class': 'bg-green-500 py-2 px-4 mt-4 rounded-md text-white'
    }"
  >
    <div class="flex">
      <FormKit
        label="CSS Framework"
        :classes="{
          outer: 'mb-4 mr-2 w-1/2',
          input: 'shadow border-gray-300 appearance-none rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-green-500 focus:ring-opacity-50',
          label: 'my-tailwind-label'
        }"
        value="Tailwind"
      />
      <FormKit
        label="Form Framework"
        :classes="{
          outer: 'mb-4 ml-2 w-1/2',
          input: 'shadow border-gray-300 appearance-none rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-green-500 focus:ring-opacity-50',
          label: 'my-tailwind-label'
        }"
        value="Formkit"
      />
    </div>
    <FormKit
      label="What is your favorite Tailwind feature?"
      type="textarea"
      :classes="{
        input: 'shadow border-gray-300 appearance-none rounded py-4 px-5 w-full h-32 text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-green-500 focus:ring-opacity-50',
        label: 'my-tailwind-label'
      }"
      value="I like the really long class lists."
    />
  </FormKit>
</template>

<style>
html[data-active-tab="render"] {
  @apply bg-gradient-to-b from-green-200 to-green-400;
}
.my-tailwind-label {
  @apply py-1 inline-block mb-1 text-gray-500 text-sm;
}
</style>
%partial%

<script>
export default {
  methods: {
    async handleSubmit() {
      await new Promise((r) => setTimeout(r, 400))
      alert('Thank you!')
    }
  }
}
</script>
