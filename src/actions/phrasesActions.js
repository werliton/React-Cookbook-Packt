import database from '../shared/firebase/database'
import { FETCH_PHRASE_REQUEST, FETCH_PHRASE_SUCCESS } from './actionTypes';
import { request, received } from '../shared/redux/baseActions';

export const fetchPhrases = () => dispatch => { 
    // Dispatching our FETCH_PHRASE_REQUEST action
    dispatch(request(FETCH_PHRASE_REQUEST))

    database.on('child_added', snapshot => {        
    dispatch(received(
        FETCH_PHRASE_SUCCESS,
        {
            key: snapshot.key,
            ...snapshot.val()
        }
    ))
})

}

export const addPhrase = () => dispatch => {
    return 'ACTION'
}

export const deletePhrase = () => dispatch => {
    
}

export const updadePhrase = () => dispatch => {
    
}