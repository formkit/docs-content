<template>
<FormKit
  type="form"
  :actions="false"
>
<!-- %partial%::html:: -->
<FormKit
  id="repeater"
  name="users"
  type="repeater"
  label="Philosophy Department Teaching Staff"
  add-label="My custom 'Add Professor' button"
  help="Edit the staff page here."
>
<FormKit
  label="Professor Name"
  name="email"
  validation="required|email"
  placeholder="Add professor name..."
/>
<FormKit
  name="bio"
  type="textarea"
  label="Professor Bio"
  placeholder="Enter bio here..."
/>
</FormKit>
<!-- %partial%::html:: -->
</FormKit>
</template>