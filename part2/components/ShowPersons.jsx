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