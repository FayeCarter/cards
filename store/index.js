export const state = () => ({
  players: '0',
})

export const mutations = {
  setPlayers(state, payload) {
    state.players = payload
  },
}
