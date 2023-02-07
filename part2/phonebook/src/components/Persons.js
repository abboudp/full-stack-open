import Person from './Person'

const Persons = ({ personsToDisplay, onDelete }) => (
    <div>
        {personsToDisplay
          .map( (person) => <Person key={person.id} person={person} onDelete={() => onDelete(person.id)} />)
        }
    </div>
)

export default Persons