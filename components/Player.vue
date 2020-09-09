<template>
  <div class="player">
    <h1>PLAYER {{ number + 1 }}</h1>
    <ul class="hand">
      <li v-for="(card, index) in hand" :key="index">
        <img :src="card.image" :alt="card.code" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['number'],
  computed: {
    pile() {
      return this.$store.state.players[this.number]
    },
    hand() {
      return this.$store.state.players[this.number].cards[0]
    },
  },
  methods: {
    ...mapActions(['showPile']),
  },
}
</script>

<style lang="sass" scoped>
.player
  margin: 100px

.hand
  display: flex

  li
    list-style: none
    margin-left: -50px
    width: 100px;

  li:first-child
    margin-left: 0
</style>
