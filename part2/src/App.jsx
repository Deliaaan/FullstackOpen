import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('Diego Nava')

  const addPerson = (event) => {
    event.preventDefault() // esto evita que se recarge 
    console.log("click", event.target)

    const personObj = {
      name: newName
    }
    
    console.log(persons)
    
    if (persons.some(p => p.name === personObj.name)) {
      alert(` "${personObj.name}" is already in the list`)
    } else {
      setPersons(persons.concat(personObj))
      setNewName('')
    }

    // const verifyPersonExists = ((prevPersons) => {
    //   if (prevPersons.some(p => p.name === persons.name)) {
    //     alert(` ${personObj} ya existe`)
    //   } else {
    //     setPersons(persons.concat(personObj))
    //   }
    // })
  }

  const handleNewPerson = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNewPerson}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map (person => 
        <p key={person.name}> {person.name}</p>
      )}
    </div>
  )
}

export default App