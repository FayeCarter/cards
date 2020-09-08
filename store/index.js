export const state = () => ({
  players: [],
  activeGame: false,
  deckID: '',
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
  startGame(state) {
    state.activeGame = true
  },
  newDeck(state, payload) {
    state.deckID = payload
  },
  addToPlayerPile(state, payload) {
    console.log(state.players)
    state.players[payload.playerID].cards = payload.cards
  },
}

export const actions = {
  async dealCards({ commit, dispatch }) {
    commit('startGame')
    await this.$axios
      .get(`https://deckofcardsapi.com/api/deck/new/draw/?jokers_enabled=true`)
      .then((response) => {
        commit('newDeck', response.data.deck_id)
        dispatch('drawCard', 0)
      })
  },
  async drawCard({ commit, state, dispatch }, payload) {
    await this.$axios
      .get(`https://deckofcardsapi.com/api/deck/${state.deckID}/draw/?count=1`)
      .then((response) => {
        dispatch('addToPile', {
          playerID: payload,
          card: response.data.cards[0].code,
        })
      })
  },
  async addToPile({ commit, state, dispatch }, payload) {
    await this.$axios
      .get(
        `https://deckofcardsapi.com/api/deck/${state.deckID}/pile/${payload.playerID}/add/?cards=${payload.card}`
      )
      .then(() => {
        dispatch('showPile', payload.playerID)
      })
  },
  async showPile({ commit, state }, payload) {
    await this.$axios
      .get(
        `https://deckofcardsapi.com/api/deck/${state.deckID}/pile/${payload}/list/`
      )
      .then((response) => {
        console.log('HERE')
        console.log(response)
        commit('addToPlayerPile', {
          playerID: payload,
          cards: response.data.piles[payload].cards,
        })
      })
  },
}
