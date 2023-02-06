import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [searchField, setSearchField] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const personsToDisplay = persons.filter( (person) => 
  person.name
    .toLowerCase()
    .startsWith(searchField.toLowerCase())
  )

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.find( (person) => person.name === newName)) {
      alert(`${newName} has already been added to the phonebook`)
    } else {
      const person = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(person))
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <Filter 
        searchField={searchField} 
        onChange={ (event) => setSearchField(event.target.value) }
      />
      <h2>Phonebook</h2>
      <PersonForm 
        newName={newName} 
        newNumber={newNumber} 
        onNameChange={ (event) => setNewName(event.target.value) } 
        onNumberChange={ (event) => setNewNumber(event.target.value) }
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <Persons personsToDisplay={personsToDisplay}/>
    </div>
  )
}

export default App
