import { useState, useEffect} from 'react'
import restPersons from './restPersons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    restPersons
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      .catch(error => {
        console.error('Error fetching persons:', error)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault() // esto evita que se recarge 
    console.log("click", event.target)

    const personObj = {
      name: newName,
      phone: newPhone
    }
    
    console.log(persons)
    
    if (persons.some(p => p.name === personObj.name)) {
      const persons = persons.find(p => p.id === id)
      if (!window.confirm(`Would you like to update ${persons.name} phone number?`)) return
      // if (!window.confirm(`Would you like to update ${persons.name} phone number?`)) return
      // restPersons.updatePhone(personObj.id, personObj.phone)
      
    } else if ((persons.some(p => p.name === personObj.name))) {
      alert(` "${personObj.name}" is already in the list`)
    } else {
      restPersons
        .create(personObj)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewPhone('')
        })
        .catch(error => {
          console.error('Error creating person:', error)
        })
    }
  }

  const handleNewPerson = (event) => {
    setNewName(event.target.value)
  }

  const handleNewPhone = (event) => {
    setNewPhone(event.target.value)
  }

  const handleNewSearch = (event) => {
    setNewSearch(event.target.value)
  }

  // Reemplazo: usar el método desde restPersons y luego actualizar el estado
  const handleDeletePerson = (id) => {
    const person = persons.find(p => p.id === id)
    if (!person) return
    if (!window.confirm(`Delete ${person.name}?`)) return

    restPersons
      .handleDeletePerson(id)
      .then(() => {
        setPersons(prev => prev.filter(p => p.id !== id))
      })
      .catch(error => {
        console.error('Error deleting person:', error)
        // opcional: igualmente actualizar UI si el recurso ya no existe en el servidor
        setPersons(prev => prev.filter(p => p.id !== id))
      })
  }

  const ShowPersons = ({personToShow}) => {
    return (
      <div>
        {personToShow.map (person => 
          <p key={person.name}> 
          {person.name}
          <br />
          {person.phone}
            <button onClick={() => handleDeletePerson(person.id)}>
              Delete
            </button>
          </p>
        )}
      </div>
      
    )
  }


  const filter = persons.filter(person => {
  return (
    person.name
      .toLowerCase()
      .includes(newSearch.toLowerCase()) || 
    person.phone
      .includes(newSearch.toLowerCase())
  );
});


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input 
          placeholder='Insert Name'
          value={newName}
          onChange={handleNewPerson}
          />
        </div>
        <div>
          Phone: <input 
          placeholder='Insert phone number'
          value={newPhone}
          onChange={handleNewPhone}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Contact List</h2>
      Search: <input  
        type='search'
        placeholder='Search people'
        value={newSearch}
        onChange={handleNewSearch}
      />
      <ShowPersons personToShow={filter}/>
    </div>
  )
}

export default App