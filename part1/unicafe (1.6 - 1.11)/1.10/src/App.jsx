import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}> {text} </button>

const StatisticLine = ({ text, value }) => {

  if (text === "postive")
    return (
      <p>{text} {value} %</p>
    )

  return (
    <p>{text} {value}</p>
  )
}


const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = (good + (bad * -1)) / all
  const postive = (good / all) * 100.0

  if (all === 0)
    return (
      <p>No feedback given</p>
    )

  return (
    <div>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="postive" value={postive} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => {
    const updatedGood = good + 1
    return (
      setGood(updatedGood)
    )
  }

  const incrementNeutral = () => {
    const updatedNeutral = neutral + 1
    return (
      setNeutral(updatedNeutral)
    )
  }

  const incrementBad = () => {
    const updatedBad = bad + 1
    return (
      setBad(updatedBad)
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={incrementGood} text='good' />
      <Button onClick={incrementNeutral} text='neutral' />
      <Button onClick={incrementBad} text='bad' />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App