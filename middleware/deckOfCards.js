import axios from 'axios'

export default function ({ store }) {
  console.log(store.state.players)
  return axios
    .get(
      `https://deckofcardsapi.com/api/deck/new/draw/?count=${store.state.players}&jokers_enabled=true`
    )
    .then((response) => {
      console.log(response.data)
      store.commit('newDeck', response.data)
    })
}
