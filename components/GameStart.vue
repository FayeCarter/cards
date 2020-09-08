<template>
  <div>
    <button v-if="!active" @click="active = true">StartGame</button>
    <form v-else action="/action_page.php">
      <label for="players">Select Players (between 1 and 2):</label>
      <input
        id="players"
        v-model="players"
        type="number"
        name="quantity"
        min="1"
        max="2"
      />
      <button @click.prevent="startGame">Play</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      active: false,
      players: '1',
    }
  },
  methods: {
    ...mapMutations(['setPlayers', 'newGame']),
    startGame() {
      this.setPlayers(this.players)
      this.newGame()
    },
  },
}
</script>

<style></style>
