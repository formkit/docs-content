<template>
  <!-- using section-key class props -->
  <FormKit
    type="text"
    label="Section-key class props"
    help="Look, Ma! Tailwind styles"
    outer-class="mb-5"
    label-class="block mb-1 font-bold text-sm"
    inner-class="max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500"
    input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400"
    help-class="text-xs text-gray-500"
  />
  <!-- using the classes prop -->
  <FormKit
    type="text"
    label="Classes prop"
    help="Look, Ma! Tailwind styles"
    :classes="{
      outer: 'mb-5',
      label: 'block mb-1 font-bold text-sm',
      inner: 'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
      input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
      help: 'text-xs text-gray-500'
    }"
  />
</template>
