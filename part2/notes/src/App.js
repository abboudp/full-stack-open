import { useState, useEffect } from 'react'
import axios from 'axios'

import Note from './components/Note'

const App = () => {
  const [noteList, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect( () => {
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        setNotes(response.data)
      })
  }, [])

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
