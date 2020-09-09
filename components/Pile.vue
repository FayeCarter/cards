<template>
  <div class="pile">
    <img :src="topCard.image" :alt="topCard.image.code" />
  </div>
</template>

<script>
export default {
  computed: {
    topCard() {
      return {
        code: this.pile[0].code,
        image: this.pile[0].image,
      }
    },
    pile() {
      return this.$store.state.pile
    },
  },
}
</script>

<style lang="sass" scoped>
.pile
  margin-top: 20px
</style>
