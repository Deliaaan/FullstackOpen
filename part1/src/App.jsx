const Hello = (person) => {
  return (
    <div>
      <p>Hola mi nombre es: {person.name }</p>
      <p>y mi edad es: {person.age }</p>
    </div>
  )
}

const App = () => {

  const friends = [
    {name:"Diego", age:"24"},
    {name:"Luis", age:"25"},
  ]

  return (
    <div>
      <h1>Saludos a tu putisisima madre</h1>
      <p>{friends[0].name}{friends[0].age}</p>
      <p>{friends[1].name}{friends[1].age}</p>
    </div> 
  )
}

export default App