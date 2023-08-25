<script setup>
import countries from './countries.js'
</script>

<template>
	<FormKit
		type="taglist"
		name="country"
		label="Search for a country"
		placeholder="Example: United States"
		:options="countries"
		open-on-remove
		:value="['US']"
	/>
	<pre wrap>{{ value }}</pre>
</template>

