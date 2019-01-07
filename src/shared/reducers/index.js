import { combineReducers } from 'redux'

import device from './deviceReducer'
import coins from '../../reducers/coinsReducer'
import phrases from '../../reducers/phraseReducer'

const rootReducer = combineReducers({
    device,
    coins,
    phrases
})

export default rootReducer