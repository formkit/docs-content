<template>
  <FormKit
    type="form"
    submit-label="Send"
    :input-errors="{
      to: 'Make sure you use the right address.',
      value: 'Are you sure you have this much?',
      gasLimit: 'Just put a giant number in here.',
    }"
  >
    <h2 class="text-xl font-bold mb-4">Donate to FormKit</h2>
    <FormKit
      name="to"
      label="Ethereum address"
      placeholder="0x8204Dd0ac307B777D8e19F3e5cbAD3C0B2488dbe"
      help="Where do you want to send your eth?"
    />
    <FormKit
      label="Quantity"
      name="value"
      placeholder="2.11"
      type="number"
      help="How much eth do you want to send"
    />
    <FormKit
      label="Gas limit"
      name="gasLimit"
      type="number"
      placeholder="50000"
      help="What is the maximum amount of gas that should be consumed?"
    />
  </FormKit>
</template>
