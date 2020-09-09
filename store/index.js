export const state = () => ({
  players: [],
  activeGame: false,
  deckID: '',
  pile: [],
  currentPlayerCard: '',
  topCard: {},
})

export const mutations = {
  setPlayers(state, payload) {
    for (let i = 0; i < payload; i++) {
      state.players.push({
        cards: [],
        score: 0,
        currentTurn: false,
      })
    }
  },
  startGame(state) {
    state.activeGame = true
    state.players[0].currentTurn = true
  },
  newDeck(state, payload) {
    state.deckID = payload
  },
  addToPlayerPile(state, payload) {
    state.players[payload.playerID].cards = payload.cards
  },
  addToPile(state, payload) {
    state.pile.push(payload[0])
    state.topCard = {
      code: payload[0].code,
      image: payload[0].image,
    }
  },
  setPlayerCard(state, payload) {
    state.currentPlayerCard = payload
  },
  setTurn(state, payload) {
    console.log(state.players)
    state.players[payload].currentTurn = false
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
        dispatch('drawCard', {
          player: 'pile',
          count: 1,
        })
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
        let playerCards = ''
        if (cards.length === 1) {
          playerCards = response.data.cards[0].code
        } else {
          playerCards = cards.join(',')
        }
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
        if (payload === 'pile') {
          commit('addToPile', response.data.piles[payload].cards)
        } else {
          commit('addToPlayerPile', {
            playerID: payload,
            cards: response.data.piles[payload].cards,
          })
        }
      })
  },
}
