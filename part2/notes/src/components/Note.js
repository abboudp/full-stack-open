const Note = ({ note, toggleImportance }) => (
    <li>
        {note.content}
        <button onClick={toggleImportance}>{note.important ? 'make unimportant' : 'make important'}</button>
    </li>
)

export default Note