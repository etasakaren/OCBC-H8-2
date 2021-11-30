import { combineReducers } from 'redux'
import personDebugReducer from './personDebugReducer'
import personCreateReducer from './personCreateReducer'
import personDeleteReducer from './personDeleteReducer'

const rootReducer = combineReducers({
  personDebug: personDebugReducer,
  personCreate: personCreateReducer,
  personDelete: personDeleteReducer
})

export default rootReducer