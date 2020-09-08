<template>
  <div class="container">
    <ul>
      <li v-for="card in cardDeck.cards" :key="card.code">
        <img :src="card.image" :alt="card.code" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    cardDeck() {
      return this.$store.state.results
    },
    players() {
      return this.$store.state.players
    },
  },
}
</script>

<style></style>
