<script setup>
import { ref } from 'vue'

const color = ref(null)
</script>

<template>
  <FormKit
    type="mask"
    name="favorite_color"
    v-model="color"
    mask="\#hhhhhh"
    label="Favorite Color in Hex"
    help="Enter your favorite color in hexadecimal format. Or try FFA500."
  />
  <div class="box" :style="{backgroundColor: color}"></div>
</template>

<style>
.box {
  width: 30px;
  height: 30px;
}
</style>


