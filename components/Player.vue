<template>
  <div class="container">
    <h1>PLAYER</h1>
    <p>{{ pile }}</p>
    <ul></ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['showPile']),
  },
  computed: {
    pile() {
      return this.$store.state.players
    },
  },
}
</script>

<style></style>
