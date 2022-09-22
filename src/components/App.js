import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer'
import Note from './Note';
import CreateArea from "./CreateArea";
import Pomodoro from  './Pomodoro/Pomodoro';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const App = () => {

  const [notesArray, setNotesArray] = useState([]); 

  const [pomoStart, setPomoStart] = useState(false);

  const addNote = (currentNote) => {
    // Using setNotesArray to now return all previous notes entries + currentNote (from) to the notesArray(from onAdd) array
    setNotesArray(prevNotes => {
      return [...prevNotes, currentNote];
    })
  }

  const deleteNote = (id) => {
    setNotesArray(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id; //Returning only the values at indexes where the id does not match the one clicked
      })
    })
  }

  //Click handler that signals the pomodoro component to render, else display the button
  const startClick = () => {
    setPomoStart(true);
  }

  return (
    <div>
       <Header />

       <div className="both-sides-content">

        <div className="main-div-item">

          <CreateArea className="main-div-item" onAdd={addNote}/>

            {notesArray.map((noteItem, index) => {
                return (
                  <Note
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}
                  />
                );
            })}
        </div>

        <div className="mine main-div-item">
            {!pomoStart 
          ? 
                 <PlayCircleOutlineIcon className="move-down" onClick={startClick} fontSize='large'></PlayCircleOutlineIcon>
          : 
              <Pomodoro/> 
            }
          </div>
  
       </div>
    
      <Footer />
   
    </div>
  );
}

export default App;

