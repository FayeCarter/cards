<template>
  <div class="deck"></div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.deck
  width: 227px;
  height: 300px;
  border: 1px solid black
  border-radius: 15px
  padding: 25px
  background: linear-gradient(40deg,deepskyblue 50%, tomato 50%);
  background-size: 25px 25px
  background-clip: content-box
  box-shadow: 0 1px 1px rgba(0,0,0,0.5), -5px 5px 0 -2px rgb(200, 200, 200), -10px 10px 0 -4px rgb(180, 180, 180), -15px 15px 0 -4px rgb(160, 160, 160)
  margin: 20px;
</style>
