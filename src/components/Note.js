import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import "../styles.css"

const Note = (props) => {

  //Step 6a
  function handleClick() {
    //Step 6b
    props.onDelete(props.id); //Step 6d: sending back props.id, in order for deleteNote function to be able to match id to index of filtered array
  }


  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
      <CancelIcon/>
      </button>
    </div>
  );
}

export default Note;