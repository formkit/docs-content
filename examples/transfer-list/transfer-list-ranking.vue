<script setup>
import { nbaTopPlayers } from 'nba-top-players.js'
import { michaelJordan } from 'utils.js'
</script>

<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="transferlist"
    label="Rank the top 10 NBA players"
    help="Drag and drop to rank your top 10 NBA players."
    :options="nbaTopPlayers"
    searchable
    placeholder="Search"
    target-label="Your top 10"
    source-label="All-time NBA players"
    validation="michaelJordan"
    :validation-rules="{ michaelJordan }"
    validation-visibility="dirty"
    :validation-messages="{
      michaelJordan: 'Michael Jordan is the undisputed GOAT.'
    }"
  >
    <template #sourceOption="{ option }">
      <div class="flex">
        <span class="avatar">
          <img :src="option.img_url" alt="">
        </span>
        <span class="name">
          {{ option.label }}
        </span>
      </div>
    </template>
    <template #targetOption="{ option, index }">
      <div class="flex">
        <span class="rank">
          {{ index + 1 }}
        </span>
        <span class="avatar">
          <img :src="option.img_url" alt="">
        </span>
        <span class="name">
          {{ option.label }}
        </span>
      </div>
    </template>
  </FormKit>
  <!-- %partial%::html:: -->
</template>

<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.name {
  font-size: 0.8em;
}

.rank {
  margin-right: 1em;
  color: black;
}

.avatar {
  overflow: hidden;
  display: block;
  border-radius: 2em;
  position: relative;
  width: 3em;
  height: 3em;
  flex: 0 0 2em;
  margin-right: 0.5em;
}


img {
  width: 100%;
  pointer-events: none;
}
</style>
