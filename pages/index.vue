<template>
  <div class="container">
    <div>
      <h1 class="title">Cards</h1>
      <p>Players: {{ players }}</p>
      <GameStart v-if="!active" />
      <Game v-else />
    </div>
  </div>
</template>

<script>
import GameStart from '@/components/GameStart'
import Game from '@/components/Game'

export default {
  components: {
    GameStart,
    Game,
  },
  computed: {
    players() {
      return this.$store.state.players
    },
    active() {
      return this.$store.state.activeGame
    },
  },
}
</script>

<style></style>
