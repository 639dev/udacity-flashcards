import { AsyncStorage } from "react-native"

export const DECKS_STORAGE_KEY = 'decks:flashcards';

let decks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  NodeJS: {
    title: 'NodeJS',
    questions: [
      {
        question: 'What is NodeJS?',
        answer: 'Node.js is an open source server environment, free, runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.) and uses JavaScript on the server.'
      }
    ]
  },
  Laravel: {
    title: 'Laravel',
    questions: [
      {
        question: 'What is C in MVC stands for?',
        answer: 'Stands for the Controller!'
      }
    ]
  },
  Ruby: {
    title: 'Ruby',
    questions: [
      {
        question: 'One way to implement a loop in Ruby?',
        answer: 'numberOfIterations.times(...).'
      }
    ]
  }
}




export async function fetchDecks() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
        return results === null ? initialData() : JSON.parse(results)
    });
}

export async function createDeck(deck) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck));
}

export async function addQuestionForDeck(card, deckName) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
        let decks = JSON.parse(result);

        let newQuestions = JSON.parse(JSON.stringify(decks[deckName].questions));
        newQuestions[newQuestions.length] = card;

        const value = JSON.stringify({
            [deckName]: {title: deckName, questions: newQuestions},
        });

        AsyncStorage.mergeItem(DECKS_STORAGE_KEY, value);
    });
}

export async function initialData() {
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
    return decks;
}

