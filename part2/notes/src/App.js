import { useState } from 'react'
import Note from './components/Note'

const App = ({ notes }) => {
  const [noteList, setNotes] = useState(notes)
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll ? noteList : noteList.filter( (note) => note.important )

  const addNote = (event) => {
    event.preventDefault()
    const noteObj = {
      content: newNote,
      important: Math.random() > 0.5,
      id: noteList.length + 1
    }
    setNotes(noteList.concat(noteObj))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={ () => setShowAll(!showAll) }>
        show {showAll ? 'important' : 'all'}
      </button>
      <ul>
        {notesToShow.map( (note) => 
          <Note key={note.id} note={note} /> 
        )}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App
