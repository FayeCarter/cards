export const state = () => ({
  players: [],
  activeGame: false,
  results: {},
})

export const mutations = {
  setPlayers(state, payload) {
    for (let i = 0; i < payload; i++) {
      state.players.push({
        cards: {},
        score: 0,
      })
    }
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
    commit('newGame')
    const cards = state.players.length * 5
    await this.$axios
      .get(
        `https://deckofcardsapi.com/api/deck/new/draw/?count=${cards}&jokers_enabled=true`
      )
      .then((response) => {
        commit('newDeck', response.data)
      })
  },
}
