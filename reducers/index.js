import { GET_DECKS, ADD_CARD, ADD_DECK} from '../actions'


export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
        return {...state, ...action.decks};
    case ADD_CARD:
        const questions = [...state[action.deckTitle].questions.concat([action.card])];

        return {
            ...state,
            [action.deckTitle]: {...state[action.deckTitle], questions: questions},
        };
    case ADD_DECK:
        return {...state, ...action.deck};

    default:
        return state;
  }
}