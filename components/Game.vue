<template>
  <div class="container">
    <ul>
      <li v-for="card in cardDeck.cards" :key="card.code">
        <img :src="card.image" :alt="card.code" />
      </li>
    </ul>
    <button @click="dealCards">CLikc</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    cardDeck() {
      return this.$store.state.results
    },
  },
  methods: {
    ...mapActions(['dealCards']),
  },
}
</script>

<style></style>
