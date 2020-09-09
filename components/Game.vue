<template>
  <div class="container">
    <p>Game</p>
    <div class="deck">
      <Deck />
      <Pile />
    </div>
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
import Deck from '@/components/Deck'
import Pile from '@/components/Pile'

export default {
  components: {
    Player,
    Deck,
    Pile,
  },
  computed: {
    players() {
      return this.$store.state.players
    },
  },
}
</script>

<style lang="sass" scoped>
.players
  display: flex
  align-content: flex-end
  height: 100%

.deck
  display: flex
</style>
