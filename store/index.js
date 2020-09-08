export const state = () => ({
  players: '0',
  activeGame: false,
})

export const mutations = {
  setPlayers(state, payload) {
    state.players = payload
  },
  newGame(state) {
    state.activeGame = true
  },
}
