import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import "../styles.css"

const Note = (props) => {

  function handleClick() {
    props.onDelete(props.id); //Sending back props.id, in order for deleteNote function to be able to match id to index of filtered array
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