<template>
  <div class="container">
    <p>Game</p>
    <div class="players">
      <Player
        v-for="(player, index) in players"
        :key="index"
        :number="index"
      ></Player>
    </div>
  </div>
</template>

<script>
import Player from '@/components/Player'

export default {
  components: {
    Player,
  },
  computed: {
    players() {
      return this.$store.state.players
    },
  },
}
</script>

<style></style>
