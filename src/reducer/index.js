import { combineReducers } from 'redux'
import toDoReducer from './toDoReducer'

// when you have a bunch of reducers
// you can add a lot of reducers (key/value pairs) inside our object inside reducers variable
// look at example below

// Tavaris: if you think about each individual reducers, these are like multiple states. 

// Ava: reducers handles multiple states which is all nested inside const reducer
const reducer = combineReducers({
  toDoReducer: toDoReducer
})

export default reducer