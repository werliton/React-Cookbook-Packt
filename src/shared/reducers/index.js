import { combineReducers } from 'redux'

import device from './deviceReducer'

const rootReducer = combineReducers({
    device
})

export default rootReducer