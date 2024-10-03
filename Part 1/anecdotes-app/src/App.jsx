import { useState } from 'react'

const Button = (props) => {
  return (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
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
  
  const n = anecdotes.length
  const vote = Array(n).fill(0)
  const [selected, setSelected] = useState(0)
  const [top, setTop] = useState(0)
  const [copy, setCopy] = useState(vote)
  const [bestIndex, setBestIndex] = useState(0)
  const min = 0
  const max = anecdotes.length
  const newVote = [...copy]
  newVote[selected] += 1

  const logVote = () => {

    setCopy(newVote)
    const popularCopy = Object.values(copy)

    const updatedTop = Math.max(...popularCopy) + 1
    setTop(updatedTop)
    
    const topAnecdote = popularCopy.indexOf(top)

    if (topAnecdote != -1) {
      setBestIndex(topAnecdote)
    }

    console.log(top)
    console.log(bestIndex)
    console.log(popularCopy.indexOf(top))
    console.log(popularCopy)
  }

  const newAnecdote = (nextAnecdote) => {
    setSelected(nextAnecdote)
  }

  const getRandomIntInclusive = () => {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {copy[selected]} votes</p>
      <Button handleClick={() => logVote()} text="vote"/>
      <Button handleClick={() => newAnecdote(getRandomIntInclusive())} text="new anecdote" />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[bestIndex]}</p>
    </div>
  )
}

export default App