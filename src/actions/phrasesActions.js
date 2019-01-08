import database from '../shared/firebase/database'
import { FETCH_PHRASE_REQUEST, FETCH_PHRASE_SUCCESS, ADD_PHRASE_REQUEST, DELETE_PHRASE_REQUEST, UPDATE_PHRASE_SUCCESS, DELETE_PHRASE_SUCCESS, UPDATE_PHRASE_ERROR, UPDATE_PHRASE_REQUEST } from './actionTypes';
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

    // Listening for updated rows
    database.on('child_changed', snapshot => {
        dispatch(received(
            UPDATE_PHRASE_SUCCESS,
            {
                key: snapshot.key,
                ...snapshot.val()
            }
        ));
    });
    // Lisetining for removed rows
    database.on('child_removed', snapshot => {
        dispatch(received(
            DELETE_PHRASE_SUCCESS,
            {
                key: snapshot.key
            }
        ));
    });

}

export const addPhrase = (phrase, author) => dispatch => {
    dispatch(request(ADD_PHRASE_REQUEST))

    database.push({
        phrase,
        author
    })
}

export const deletePhrase = key => dispatch => {
    dispatch(request(DELETE_PHRASE_REQUEST))
    // Removendo o elemento pela chave
    database.child(key).remove()
}

export const updatePhrase = (key, phrase, author) => dispatch => {
    // Dispatching our UPDATE_PHRASE_REQUEST action
    dispatch(request(UPDATE_PHRASE_REQUEST));
    // Collecting our data...
    const data = {
        phrase,
        author
    };
    // Updating an element by key and data
    database
        // First we select our element by key
        .child(key)
        // Updating the data in this point
        .update(data)
        // Returning the updated data
        .then(() => database.once('value'))
        // Getting the actual values of the snapshat
        .then(snapshot => snapshot.val())
        .catch(error => {
            // If there is an error we dispatch our error action
            dispatch(request(UPDATE_PHRASE_ERROR));
            return {
                errorCode: error.code,
                errorMessage: error.message
            };
        });
}