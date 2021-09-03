// we do this to prevent syntax errors
// these two variables are convention FOLLOW THEM
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM'
export const REMOVE_TODO_ITEM = 'REMOVE_TODO_ITEM'

export const addToDoItem = (itemToAdd) => {
  // itemToAdd = this is the item we are about to add to our state
  return ({
    // remember payload is just a word developers use to talk about data
    // you will see the word payload used a lot in back end code
    type: ADD_TODO_ITEM, payload: itemToAdd
  })
}

// copy the code above change add to remove
export const removeToDoItem = (itemToRemove) => {
  return ({
    type: REMOVE_TODO_ITEM, payload: itemToRemove
  })
}