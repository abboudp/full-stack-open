import { useState, useEffect } from 'react'
import personsService from './services/persons'

import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])
  const [searchField, setSearchField] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  useEffect( () => {
    personsService
      .getAll()
      .then( data => {
        setPersons(data)
      })
  },[])

  const personsToDisplay = persons.filter( (person) => 
    person.name
      .toLowerCase()
      .startsWith(searchField.toLowerCase())
  )

  const deletePerson = (id) => {
    const deleteName = persons.find( person => person.id === id)
    if (window.confirm(`are you sure you want to delete ${deleteName.name}?`)) {
      personsService
        .deleteID(id)
        .then(setPersons(persons.filter( person => person.id !== id)))
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.find( (person) => person.name === newName)) {
      const updateName = persons.find( person => person.name === newName)
      if (window.confirm(`${updateName.name} is already in the phonebook, do you want to update the phone number?`)) {
        const newObj = {
          ...updateName,
          number: newNumber,
        }
        personsService
          .update(updateName.id, newObj)
          .then(data =>
            setPersons(persons.map( person => person.id === updateName.id ? data : person))
          )
      }
    } else {
      const person = {
        name: newName,
        number: newNumber,
        id: persons[persons.length - 1].id + 1
      }
      personsService
        .create(person)
        .then(
          data => {
            setPersons(persons.concat(data))
            setNewName('')
            setNewNumber('')
          }
        )
    }
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
      <Persons personsToDisplay={personsToDisplay} onDelete={ (id) => deletePerson(id)}/>
    </div>
  )
}

export default App
