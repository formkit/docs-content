<script setup>
import { nbaTopPlayers } from 'nba-top-players.js'
</script>

<template>
  <h2>NBA All Time Starting Five</h2>
  <FormKit type="list" #default="{ value }">
    <FormKit
      label="Point Guard"
      type="autocomplete"
      placeholder="Select a player"
      :options="nbaTopPlayers"
    />
    <FormKit
      label="Shooting Guard"
      type="autocomplete"
      placeholder="Select a player"
      :options="nbaTopPlayers"
    />
    <FormKit
      label="Small Forward"
      type="autocomplete"
      placeholder="Select a player"
      :options="nbaTopPlayers"
    />
    <FormKit
      label="Power Forward"
      type="autocomplete"
      placeholder="Select a player"
      :options="nbaTopPlayers"
    />
    <FormKit
      label="Center"
      type="autocomplete"
      placeholder="Select a player"
      :options="nbaTopPlayers"
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
