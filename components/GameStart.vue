<template>
  <div>
    <button>StartGame</button>
    <form action="/action_page.php">
      <label for="players">Select Players (between 1 and 2):</label>
      <input id="players" type="number" name="quantity" min="1" max="2" />
      <input type="submit" value="Play" />
    </form>
  </div>
</template>

<style></style>
