import { useState, useEffect } from 'react'
import axios from 'axios'

import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])
  const [searchField, setSearchField] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  useEffect( () => {
    axios
      .get('http://localhost:3001/persons')
      .then( response => {
        setPersons(response.data)
      })
  },[])

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
