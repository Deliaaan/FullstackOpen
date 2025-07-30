import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(8))
  const [mostValued, showMostValued] = useState()

  const handleAnecdotes = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const addVotes = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    console.log(...copy)

    const mostValuedIndex = votes.indexOf(Math.max(...votes))
    showMostValued(anecdotes[mostValuedIndex])
  }

  
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p> This anecdote have {votes[selected]} votes</p>
      <div>
        <button onClick={addVotes}> votes </button>
        <button onClick={handleAnecdotes}>Next anecdote</button>
      </div>
      <div>
        <h1>Most voted anecdote</h1>
        {mostValued}
      </div>
    </div>
  )
}

export default App