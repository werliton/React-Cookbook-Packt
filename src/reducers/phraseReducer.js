import { FETCH_PHRASE_SUCCESS, DELETE_PHRASE_SUCCESS, UPDATE_PHRASE_SUCCESS } from "../actions/actionTypes";
import { getNewState } from '../shared/utils/frontend'

const INITIALSTATE = {
    phrases: []
}

const phraseReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        case FETCH_PHRASE_SUCCESS: {
            const { payload: phrase } = action

            const newPhrases = [...state.phrases, phrase]

            return getNewState(state, {
                phrases: newPhrases
            })
        }
        case DELETE_PHRASE_SUCCESS: {
            const { payload: deletePhrase } = action

            const filteredPhrases = state.phrases.filter(
                phrase => phrase.key !== deletePhrase.key
            )

            return getNewState(state, {
                phrases: filteredPhrases
            })
        }
        case UPDATE_PHRASE_SUCCESS: {
            const { payload: updatedPhrase } = action;
            const index = state.phrases.findIndex(
                phrase => phrase.key === updatedPhrase.key
            );
            state.phrases[index] = updatedPhrase;
            return getNewState({}, {
                phrases: state.phrases
            });
        }
        default:
            return state
    }
}

export default phraseReducer