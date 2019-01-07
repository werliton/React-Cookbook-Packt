import { FETCH_PHRASE_SUCCESS } from "../actions/actionTypes";
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
        default:
            return state
    }
}

export default phraseReducer