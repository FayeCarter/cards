<template>
  <div>
    <button>StartGame</button>
    <form action="/action_page.php">
      <label for="players">Select Players (between 1 and 2):</label>
      <input
        id="players"
        v-model="players"
        type="number"
        name="quantity"
        min="1"
        max="2"
      />
      <input type="submit" value="Play" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      players: '1',
    }
  },
}
</script>

<style></style>
