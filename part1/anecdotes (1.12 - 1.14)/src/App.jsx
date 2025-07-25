import { useState } from 'react'

const MostVotes = ({ anecdotes, votes }) => {
  const highestVotesIndex = votes.indexOf(Math.max(...votes))
  console.log(highestVotesIndex)
  if (votes[highestVotesIndex] === 0)
    return (
      <p>There is no votes</p>
    )

  return (
    <div>
      <p>{anecdotes[highestVotesIndex]}</p>
      <p>has {votes[highestVotesIndex]} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [allVotes, setAllVotes] = useState(Array(8).fill(0))

  const getRandomInt = () => {
    const updatedIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(updatedIndex)
  }

  const incrementVote = () => {
    const updatedVotes = [...allVotes]
    updatedVotes[selected] = updatedVotes[selected] + 1
    setAllVotes(updatedVotes)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {allVotes[selected]} votes</p>
      <button onClick={incrementVote}>vote</button>
      <button onClick={getRandomInt}>next anecdotes</button>
      <h1>Anecdote with most votes</h1>
      <MostVotes anecdotes={anecdotes} votes={allVotes} />

    </div>
  )
}

export default App