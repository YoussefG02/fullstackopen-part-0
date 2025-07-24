import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}> {text} </button>

const DisplayStatistics = (props) => {
  if (props.text === "postive")
    return (
      <p>{props.text} {props.amount} %</p>)

  return (
    <p>{props.text} {props.amount}</p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [postive, setPostive] = useState(0)

  const incrementGood = () => {
    const updatedGood = good + 1
    const updatedTotal = updatedGood + neutral + bad
    return (
      setGood(updatedGood),
      setAll(updatedTotal),
      setAverage((updatedGood + (bad * -1)) / updatedTotal),
      setPostive((updatedGood / updatedTotal) * 100.0)
    )
  }

  const incrementNeutral = () => {
    const updatedNeutral = neutral + 1
    const updatedTotal = good + updatedNeutral + bad
    return (
      setNeutral(updatedNeutral),
      setAll(updatedTotal),
      setAverage((good + (bad * -1)) / updatedTotal),
      setPostive((good / updatedTotal) * 100.0)
    )
  }

  const incrementBad = () => {
    const updatedBad = bad + 1
    const updatedTotal = good + neutral + updatedBad
    return (
      setBad(updatedBad),
      setAll(updatedTotal),
      setAverage((good + (updatedBad * -1)) / updatedTotal),
      setPostive((good / updatedTotal) * 100.0)
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={incrementGood} text='good' />
      <Button onClick={incrementNeutral} text='neutral' />
      <Button onClick={incrementBad} text='bad' />

      <h1>statistics</h1>
      <DisplayStatistics text='good' amount={good} />
      <DisplayStatistics text='neutral' amount={neutral} />
      <DisplayStatistics text='bad' amount={bad} />
      <DisplayStatistics text='all' amount={all} />
      <DisplayStatistics text='average' amount={average} />
      <DisplayStatistics text='postive' amount={postive} />
    </div>
  )
}

export default App