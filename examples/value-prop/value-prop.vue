<template>
  <FormKit
    label="Username"
    type="text"
    help="Pick a new username"
    validation="required|matches:/^@[a-zA-Z]+$/|length:5"
    value="@useFormKit"
  />
</template>
