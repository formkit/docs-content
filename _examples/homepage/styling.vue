<script setup>
const data = {
  text_2: 'Tailwind CSS',
  text_3: 'FormKit',
  textarea_4: 'I like that our whole team can use it and it’s easy to customize.'
}

async function handleSubmit() {
  await new Promise((r) => setTimeout(r, 400))
  alert('Thank you!')
}
</script>

<template>
  <FormKit
    type="form"
    :value="data"
    @submit="handleSubmit"
    form-class="selection:bg-pink-200 my-8 mx-auto w-full max-w-2xl bg-white border-2 border-green-400 p-6 shadow-lg rounded-lg"
    :submit-attrs="{
      'input-class': 'bg-green-500 py-2 px-4 mt-4 rounded-md text-white'
    }"
  >
    %partial%
    <div class="flex">
      <FormKit
        label="CSS Framework"
        prefix-icon="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'><path d='M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z' /></svg>"
        :classes="{
          outer: 'mb-4 mr-2 w-1/2',
          inner: 'flex items-center shadow border border-gray-300 appearance-none rounded py-2 px-3 w-full text-gray-700 leading-tight focus-within:ring-4 focus-within:ring-green-500 focus-within:ring-opacity-50',
          prefixIcon: 'h-5 w-5 mr-2 mb-0.5',
          input: 'appearance-none border-none p-0 focus:outline-none focus:border-transparent focus:ring-0',
          label: 'my-tailwind-label'
        }"
      />
      <FormKit
        label="Form Framework"
        prefix-icon="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'><path fill-rule='evenodd' d='M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z' clip-rule='evenodd' /></svg>"
        :classes="{
          outer: 'mb-4 mr-2 w-1/2',
          inner: 'flex items-center shadow border border-gray-300 appearance-none rounded py-2 px-3 w-full text-gray-700 leading-tight focus-within:ring-4 focus-within:ring-green-500 focus-within:ring-opacity-50',
          prefixIcon: 'h-5 w-5 mr-2 mb-0.5',
          input: 'appearance-none border-none p-0 focus:outline-none focus:border-transparent focus:ring-0',
          label: 'my-tailwind-label'
        }"
      />
    </div>
    <FormKit
      label="What is your favorite Tailwind CSS feature?"
      type="textarea"
      :classes="{
        input: 'shadow border border-gray-300 appearance-none rounded py-4 px-5 w-full h-32 text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-green-500 focus:ring-opacity-50',
        label: 'my-tailwind-label'
      }"
    />
    %partial%
  </FormKit>
</template>

<style>
html[data-active-tab="render"] {
  background: linear-gradient(140deg, rgb(66, 223, 123), rgb(35, 196, 94));
}
html .source-content {
  background: transparent;
}
</style>
