<template>
  <div class="player">
    <h1>PLAYER {{ number + 1 }}</h1>
    <div class="hand">
      <li v-for="(card, index) in hand" :key="index" class="card">
        <img
          :class="{ selectedCard: selected === card.code }"
          :src="card.image"
          :alt="card.code"
          @click="selectCard"
        />
      </li>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['number'],
  data() {
    return {
      selected: '',
    }
  },
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
    selectCard(event) {
      this.selected = event.target.alt
    },
  },
}
</script>

<style lang="sass" scoped>
.player
  margin: 100px

.hand
  display: flex

  .card
    list-style: none
    margin-left: -50px
    width: 100px;

  .card:first-child
    margin-left: 0

  .selectedCard
    margin-top: -50px
</style>
