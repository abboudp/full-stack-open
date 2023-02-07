const Person = ({ person, onDelete }) => (
    <>
        <p>{person.name} {person.number}</p>
        <button onClick={onDelete}>delete</button>
    </>
)

export default Person