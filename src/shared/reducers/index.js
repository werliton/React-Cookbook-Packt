import { combineReducers } from 'redux'

import device from './deviceReducer'
import coins from '../../reducers/coinsReducer'

const rootReducer = combineReducers({
    device,
    coins
})

export default rootReducer