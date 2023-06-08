import { useState } from 'react'
import Part from "./Part";

const Content = (props) => {
    const [newNote, setNewNote] = useState(
        'a new note...'
    );
    const [showAll, setShowAll] = useState(true);

    const addNote = (event) => {
        event.preventDefault();
        
        const noteObject = {
            name: newNote,
            exercises: Math.floor(Math.random() * 100),
            important: Math.random() < 0.5,
            id: props.parts.length + 1,
        }
        
        props.updateCoursesNotes(noteObject, props.courseId);
        setNewNote('')
    }

    const handleNoteChange = (event) => {
        console.log(event.target.value);
        setNewNote(event.target.value);
    }

    const notesToShow = showAll
    ? props.parts
    : props.parts.filter(note => note.important === true)

    return (
        <>           
            <button onClick={() => setShowAll(!showAll)}>
            show {showAll ? 'important' : 'all' }
            </button>
            {notesToShow.map(part => <Part key={part.id} part={part.name} exercises={part.exercises}/>)}
            <form onSubmit={addNote}>
                <input
                    value={newNote} 
                    onChange={handleNoteChange}/>
                <button type="submit">save</button>
            </form>  
        </>
    )
  }
  
export default Content;
