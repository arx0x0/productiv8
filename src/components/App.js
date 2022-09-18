import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer'
import Note from './Note';
import CreateArea from "./CreateArea";
import Pomodoro from  './Pomodoro/Pomodoro';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const useStyles = makeStyles((theme) => ({
  deleteIcon1: {
    '& svg': {
      fontSize: 50
    }
  }
}));


const App = () => {

  const [notesArray, setNotesArray] = useState([]); 

  const [pomoStart, setPomoStart] = useState(false);

  const addNote = (currentNote) => {
    // Using setNotesArray to now return all previous notes entries + currentNote (from) to the notesArray(from onAdd) array
    setNotesArray(prevNotes => {
      return [...prevNotes, currentNote];
    })
  }

  //Step 6b
  const deleteNote = (id) => {
    //Step 6c, filtering the array for array entries with indexes that do not match the id of entry that got clicked
    setNotesArray(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id; //Returning only the values at indexes where the id does not match the one clicked
      })
    })
  }

  const startClick = (event) => {
    setPomoStart(true);
  }

  return (
    <div>
       <Header />

       <div className="both-sides-content">

        <div className="main-div-item">

          <CreateArea onAdd={addNote} />

            {notesArray.map((noteItem, index) => {
                return (
                  <Note
                    key={index}
                    //Step 6d
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    //Step 6b
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

