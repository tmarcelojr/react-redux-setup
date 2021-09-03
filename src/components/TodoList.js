import React, { Component } from 'react'
// connect - it allows us to plug things inside our App...more specifically our state
import { connect } from 'react-redux'
import '../syles/TodoList.css';

// WE DO NOT NEED TO IMPORT STORE BECAUSE we wrapped our App with the Provider insie our index.js. REMEMBER: our Provider has the store attached to it
const mapStateToProps = (store) => {
  // we need to return an object
  return {
    addToDoItem: store.toDoReducer
  }
}

class TodoList extends Component {
  constructor() {
    super()
    this.state = {
      savedTodoItems: ["Make a todo list of all my todo lists", "Make a playlist for every possible occasion", "Stop checking phone compulsively"],
      inputtedItem : ''
    }
    this.submitForm = this.submitForm.bind(this);
    this.onChange = this.onChange.bind(this);
    // this.handleFormReset = this.handleFormReset.bind(this);
  }

  submitForm(event) {
    event.preventDefault();

    // Grab the input that the user typed in
    const inputtedItem = document.querySelector("#inputted-item");

    // The parameters "state" & "props" are copies of this components state and props 
    // That way we can manipulate them without touching the real state or real props 
    this.setState((state, props) => {

      state.savedTodoItems.push(inputtedItem.value);
      return {savedTodoItems: state.savedTodoItems, inputtedItem: ''};
    });
  }

  onChange(event) {
    // Will capture the input value on the <input> tag and save into state 
    // Once the form is submitted, the setstate on the function will reset the value to an empty string

    this.setState({inputtedItem: event.target.value})
  }

  render() {
    // -------------------------------------------------
    // loop through all todo items in state using map() 
    // & render a <h5> tag for each todo item
    // -------------------------------------------------
    const listOfItems = this.state.savedTodoItems.map((item, index) => {
      // console.log("testing list items****", id)
      return (<div id="item-wrapper" key={index}><p id="item" >{item}</p> </div>)
    })

    return (
      <div className="todo">
        <form onSubmit={this.submitForm} > 
          <input 
            id="inputted-item" 
            type="text" 
            placeholder="Add Item" 
            autoComplete="off"  
            onChange={this.onChange} 
            value={this.state.inputtedItem} />
        </form>        
        {/* here we are rendering the <h5>'s that we made earlier using the variable "listOfItems" */}
        {listOfItems}
      </div>
    )
  }
}


// example
// (() => {})(component);

// IIFE = immedidiately invoked function expression
// doc: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
// ()() = if you see this in your code this is just saying hey invoke the first function, then immediately invoke the second one inside the second ()

// we need to pass in null as the second argument inside our connect() because this is where the function and the action would go
// go inside toDoReducer to make the connection that the function toDoReducer takes in two parameters (state, action)
export default connect(mapStateToProps, null)(TodoList)
