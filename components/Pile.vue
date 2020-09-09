<template>
  <div class="pile" @click="switchCard">
    <img :src="topCard.image" :alt="topCard.code" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
  computed: {
    pile() {
      return this.$store.state.pile
    },
    topCard() {
      return this.$store.state.topCard
    },
    playerCard() {
      return this.$store.state.currentPlayerCard
    },
  },
  methods: {
    ...mapMutations(['setTurn']),
    ...mapActions(['addToPile', 'showPile']),
    switchCard() {
      if (this.playerCard !== '') {
        this.addToPile({
          playerID: this.playerCard.pile,
          cards: this.topCard.code,
        })
        this.showPile(this.playerCard.pile)
        this.setTurn(this.playerCard.pile)
        console.log(this.$store.state.players)
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.pile
  margin-top: 20px
[v-cloak]
  display:none
</style>
