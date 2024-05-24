<template>
  <!--
    FormKit forms auto-collect values of children inputs.
    Wrap the example in a form so we can display the form values.
  -->
  <FormKit type="form" :actions="false">
    <!-- %partial%::html:: -->
    <FormKit type="togglebuttons"> Airplane mode </FormKit>

    <FormKit type="togglebuttons">
      <template #on><span class="text-xl">&#9745;</span> Enabled </template>
      <template #off><span class="text-xl">&#9744;</span> Disabled </template>
    </FormKit>
    <!-- %partial%::html:: -->
  </FormKit>
</template>
