<template>
  <div class="container">
    <h1>PLAYER {{ number + 1 }}</h1>
    <ul>
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
  methods: {
    ...mapActions(['showPile']),
  },
  computed: {
    pile() {
      return this.$store.state.players[this.number]
    },
    hand() {
      return this.$store.state.players[this.number].cards
    },
  },
}
</script>

<style></style>
