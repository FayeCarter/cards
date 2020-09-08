<template>
  <div class="container">
    <div>
      <h1 class="title">Cards</h1>
      <p>Players: {{ players }}</p>
      <GameStart />
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
  },
}
</script>

<style></style>
