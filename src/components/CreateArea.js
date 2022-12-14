import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import "../styles.css"
import Zoom from '@mui/material/Zoom';


const CreateArea = (props) => {

  //Expanding createArea only if textarea is clicked on
  const [isExpanded, setExpanded] = useState(false);

  //1a
  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  //Step 1b:
  const handleChange = (event) => {
    const {name, value} = event.target;
    
    setNote(prevNote => {
        return {
          ...prevNote,
          [name]: value //Setting name to value and adding to state of note object
        };
      });

    }

    const submitNote = (event) => {
  
      props.onAdd(note); //Sending note's state on each button click to addNote function in App.js and line 50

      //clearing note input areas
      setNote({
        title: "",
        content: ""
      })
      event.preventDefault(); 
    }

    const expand = (event) => {
      setExpanded(true);
    }

    const handleKeyPress = (event) => {
      if(event.key === 'Enter'){
        event.preventDefault();
      }
    }
  
    return (
      <div>
        <form className="create-note">

          {isExpanded ?

              <input
              name="title"
              onKeyPress={handleKeyPress}
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
              />
  
           : null
          }
        
          <textarea
            name="content"
            onChange={handleChange}
            onClick={expand}
            onKeyPress={handleKeyPress}
            value={note.content}
            placeholder="Take a note..."
            rows={isExpanded ? 3: 1}
          />
        
         <Zoom in={isExpanded}>
           <Fab onClick={submitNote}>
             <AddIcon/>
           </Fab>
         </Zoom>

        </form>
      </div>
    );
  }
  
  export default CreateArea;
  