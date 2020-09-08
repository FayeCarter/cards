<template>
  <div class="container">
    <div>
      <h1 class="title">Cards</h1>
      <p>Players: {{ players }}</p>
      <GameStart v-show="!active" />
    </div>
  </div>
</template>

<script>
import GameStart from '@/components/GameStart'
export default {
  components: {
    GameStart,
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
