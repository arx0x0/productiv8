//1. Create a new React app.
import React from 'react';
import ReactDOM from "react-dom";
import App from "./components/App"
import "./styles.css"

//2. Create a App.jsx component.
ReactDOM.render(<App />, document.getElementById("root"));



//Step 1a: create a note object in createArea.js, serves as a constructor, and set title and content to empty string, then set first input to value={note.title} and textarea to value={note.content}
//Step 1b: do onChange = {handleChange} into both inputs and then create handleChange function which captures the name and value of event.target, and then use spread operator to set the note to all 
//the previous name value pairs and the current name value pair

//Making handler for button while in createapp.js, but this handler
//essentially calls a function addNote that handles it in App.js, and we pass addNote as props by onAdd={addNote}, which allows us
//to create an array in App.js, but containing the note entries.

//Step 2a: While still in CreateArea.js, for within the button do: onClick={submitNote}, then for the submitNote function, put in 
//props.onAdd(Note);

//Step 2b: Create