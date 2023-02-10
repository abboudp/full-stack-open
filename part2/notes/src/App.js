import { useState, useEffect } from 'react'
import noteService from './services/notes'

import Note from './components/Note'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect( () => {
    noteService
      .getAll()
      .then(data => setNotes(data))
  }, [])

  const notesToShow = showAll ? notes : notes.filter( (note) => note.important )

  const toggleImportance = (id) => {
    const noteToToggle = notes.find( note => note.id === id)
    const changedNote = {
      ...noteToToggle, 
      important: !noteToToggle.important
    }
    noteService
      .update(id, changedNote)
      .then(data => {
        setNotes(notes.map(note => note.id === id ? data : note))
      })
      .catch(error => {
        alert(
          `the note '${changedNote.content}' was already deleted from server`
        )
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObj = {
      content: newNote,
      important: Math.random() > 0.5,
      id: notes.length + 1
    }
    noteService
      .create(noteObj)
      .then(data => setNotes(notes.concat(data)))
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
          <Note key={note.id} note={note} toggleImportance={() => toggleImportance(note.id)} /> 
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
