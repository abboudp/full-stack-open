import { useState } from 'react'

const Anecdote = ({ title, anecdote, votes }) => (
  <>
    <h1>{title}</h1>
    <h2>{anecdote} has {votes} votes</h2>
  </>
)

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

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
  
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1 
    setVotes(copy)
  }

  const maxRated = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <Anecdote
        title='Anecdote of the day' 
        anecdote={anecdotes[selected]} 
        votes={votes[selected]} 
      />
      <Button 
        onClick={handleClick}
        text='next anecdote' 
      />
       <Button 
        onClick={handleVote}
        text='vote for anecdote' 
      />
      <Anecdote 
        title='Anecdote with most votes' 
        anecdote={anecdotes[maxRated]} 
        votes={votes[maxRated]} 
      />

    </div>
  )
}

export default App
