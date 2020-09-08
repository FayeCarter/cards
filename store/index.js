export const state = () => ({
  players: '0',
  activeGame: false,
  results: {},
})

export const mutations = {
  setPlayers(state, payload) {
    state.players = payload
  },
  newGame(state) {
    state.activeGame = true
  },
  newDeck(state, payload) {
    state.results = payload
  },
}

export const actions = {
  async dealCards({ commit, state }) {
    const cards = state.players * 5
    await this.$axios
      .get(
        `https://deckofcardsapi.com/api/deck/new/draw/?count=${cards}&jokers_enabled=true`
      )
      .then((response) => {
        commit('newDeck', response.data)
      })
  },
}
