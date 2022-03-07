<template>
  <FormKit
    type="text"
    label="I use the global theme we defined"
    help="I play by the rules"
  />
  <FormKit
    type="text"
    label="I'm special and have $reset and overridden styles"
    help="I'm a rebel"
    label-class="$reset italic text-lg text-red-500"
    help-class="$reset font-bold text-md text-purple-800"
  />
</template>
