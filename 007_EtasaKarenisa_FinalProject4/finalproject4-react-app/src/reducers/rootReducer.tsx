import { combineReducers } from 'redux'
import personDebugReducer from './personDebugReducer'
import personCreateReducer from './personCreateReducer'
import personDeleteReducer from './personDeleteReducer'
import personUpdateReducer from './personUpdateReducer'
import personOneReducer from './personOneReducer'

const rootReducer = combineReducers({
  personDebug: personDebugReducer,
  personCreate: personCreateReducer,
  personDelete: personDeleteReducer,
  personUpdate: personUpdateReducer,
  personOne: personOneReducer
})

export default rootReducer