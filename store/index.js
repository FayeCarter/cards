export const state = () => ({
  players: [],
  activeGame: false,
  deckID: '',
})

export const mutations = {
  setPlayers(state, payload) {
    for (let i = 0; i < payload; i++) {
      state.players.push({
        cards: [],
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
  addToPile(state, payload) {
    state.players[payload.playerID].cards.push(payload.cards)
  },
}

export const actions = {
  async dealCards({ commit, dispatch, state }) {
    commit('startGame')
    await this.$axios
      .get(`https://deckofcardsapi.com/api/deck/new/draw/?jokers_enabled=true`)
      .then((response) => {
        commit('newDeck', response.data.deck_id)
        for (let i = 0; i < state.players.length; i++) {
          dispatch('drawCard', {
            player: i,
            count: 5,
          })
        }
      })
  },
  async drawCard({ state, dispatch }, payload) {
    await this.$axios
      .get(
        `https://deckofcardsapi.com/api/deck/${state.deckID}/draw/?count=${payload.count}`
      )
      .then((response) => {
        const cards = []
        response.data.cards.forEach((card) => {
          cards.push(card.code)
        })
        const playerCards = cards.join(',')
        dispatch('addToPile', {
          playerID: payload.player,
          cards: playerCards,
        })
      })
  },
  async addToPile({ state, dispatch }, payload) {
    await this.$axios
      .get(
        `https://deckofcardsapi.com/api/deck/${state.deckID}/pile/${payload.playerID}/add/?cards=${payload.cards}`
      )
      .then((response) => {
        dispatch('showPile', payload.playerID)
      })
  },
  async showPile({ commit, state }, payload) {
    await this.$axios
      .get(
        `https://deckofcardsapi.com/api/deck/${state.deckID}/pile/${payload}/list/`
      )
      .then((response) => {
        commit('addToPile', {
          playerID: payload,
          cards: response.data.piles[payload].cards,
        })
      })
  },
}
