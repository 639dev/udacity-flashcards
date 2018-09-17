import { addQuestionForDeck, createDeck, fetchDecks, initialData} from '../utils/api.js'
export const GET_DECKS = 'GET_DECKS'
export const ADD_CARD = 'ADD_CARD'
export const ADD_DECK = 'ADD_DECK'


export function getDecks(decks) {
  return {
    type: GET_DECKS,
    decks,
  }
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

export function addCard(card,deckTitle) {
  return {
    type: ADD_CARD,
    deckTitle,
    card,
  };
}

export function handleAddCard(card,deckTitle) {
  return (dispatch) => {
    return addQuestionForDeck(card,deckTitle)
      .then(card =>  {
        dispatch(addCard(card,deckTitle))
        }
      )
  }
}