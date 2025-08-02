import React from 'react'

export default function PokemonCard({pokemonData}) {

  if (!pokemonData) {
    return (
      <h1>
      Cargando...
    </h1>
    )
  }

  return (
    <div style={{ border: '2px solid red', padding: '10px', borderRadius: '8px', margin: '8px' }}>
      <img src={pokemonData.sprites.front_default} alt="pokemon image" />
      <div>
        <h2> {pokemonData.name} </h2>
        <p>ID: {pokemonData.id} </p>
      </div>
    </div>
  )
}