import { ADD_TODO_ITEM, REMOVE_TODO_ITEM } from '../actions/actions'

// 1.) we have to give initial state
const initialState = {
  // key/value pairs just like how state object would look like
  toDoItems: ['study', 'finish project', 'enjoy your Labor Day weekend']
}

// reducer takes two parameters
// first one is a state, second is an action
// we need to assign a default value to our first parameter, we do this with the = assignment symbol
// second parameter we just call it action, convention, standard verbage
function toDoReducer(state = initialState, action) {
  // we are accessing our initialState by calling state
  // since we have toDoList field in our initialState object we can access it
  // slice() is a method that comes with JS = returns a shallow cpy of a portion of an array or the whole thing. Since we are not putting in parameters inside our slice() we return the whole thing
  // slice doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  const toDoItems = state.toDoItems.slice()

  // After we import our action variables at the top
  // doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  // indexOf("string")
  switch(action.type){
    case ADD_TODO_ITEM:
      toDoItems.push(action.payload)
      // when you have a return you don't need a break :) 
      return {
        ...state, toDoItems
      }
    case REMOVE_TODO_ITEM:
      const index = toDoItems.indexOf(action.payload)
      // splice is permanently changing our toDoItems
      toDoItems.splice(index, 1)
      // doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    return {
      ...state, toDoItems
    }

    // if we don't have any action type, then return the current state 
    default: return state
  }
}

export default toDoReducer