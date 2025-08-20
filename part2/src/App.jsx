import { useState, useEffect} from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const addPerson = (event) => {
    event.preventDefault() // esto evita que se recarge 
    console.log("click", event.target)

    const personObj = {
      name: newName,
      phone: newPhone
    }
    
    console.log(persons)
    
    if (persons.some(p => p.name === personObj.name)) {
      alert(` "${personObj.name}" is already in the list`)
    } else {
      setPersons(persons.concat(personObj))
      setNewName('')
      setNewPhone('')
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

  const ShowPersons = ({personToShow}) => {
    return (
      <div>
        {personToShow.map (person => 
          <p key={person.name}> 
          {person.name} 
          <br /> 
          {person.phone}</p>
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
      .toLowerCase()
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