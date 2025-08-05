import { useState, useEffect } from 'react'
import PokemonCard from '../components/pokemonCards'

function App() {

  const [pokemonData, setPokemonData] = useState([])
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

  const fetchPokemon = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}${id}`);
      const data = await response.json()

      console.log(data)
      setPokemonData((prevPokemonData) => {
        if (prevPokemonData.some(p => p.id === data.id)) return prevPokemonData
        return [...prevPokemonData, data]
      })

    } catch (error) {
      console.error('Error por fetch de pokemon.')
    }
  }

  const fetchAllPokemons = () => {
    for (let i = 1; i <= 21; i++) {
      fetchPokemon(i)
    }
  }

  useEffect(() => {
    fetchAllPokemons()
  },[])

  const sortedPokemonsData = [...pokemonData].sort((a, b) => a.id - b.id)

  return (
    <>
    <div>
      <h1> POKE API</h1>
      <div>
        {sortedPokemonsData.map((pokemon, index) => (
          <PokemonCard key={index} pokemonData={pokemon}/>))}
      </div>
    </div>
    </>
  )
}

export default App 