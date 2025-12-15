<template>
  <FormKit type="group">
    <FormKit
      type="date"
      name="startDate"
      label="Start Date"
      help="Select a start date"
    />
    <FormKit
      type="date"
      name="endDate"
      label="End Date"
      validation="date_before_node:startDate"
      validation-label="End Date"
      :help="`Select an end date before the start date`"
    />
  </FormKit>
</template>
