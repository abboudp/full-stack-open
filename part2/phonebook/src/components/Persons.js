import Person from './Person'

const Persons = ({ personsToDisplay }) => (
    <div>
        {personsToDisplay
          .map( (person) => <Person key={person.id} person={person} />)
        }
    </div>
)

export default Persons