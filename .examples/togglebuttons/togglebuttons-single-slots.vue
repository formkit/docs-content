<template>
  <!--
    FormKit forms auto-collect values of children inputs.
    Wrap the example in a form so we can display the form values.
  -->
  <FormKit type="form" :actions="false">
    <!-- %partial%::html:: -->
    <FormKit type="togglebuttons"> Airplane mode </FormKit>

    <FormKit type="togglebuttons">
      <template #on> &#9745; Enabled </template>
      <template #off> &#9744; Disabled </template>
    </FormKit>
    <!-- %partial%::html:: -->
  </FormKit>
</template>
