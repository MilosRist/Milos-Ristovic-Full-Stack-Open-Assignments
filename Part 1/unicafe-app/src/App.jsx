import { useState } from 'react'

const Header = (props) => {
  return (
  <div>
    <h1>{props.header}</h1>
  </div>
  )
}

const StatsHeader = (props) => {
  return (
  <div>
    <h1>{props.statsheader}</h1>
  </div>
  )
}

const Button = (props) => {
  return (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
}

const StatisticsLine = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}

const Statistics = (props) => {
  console.log(props)
  if (props.total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td><StatisticsLine text="good" /></td>
            <td><StatisticsLine value={props.good} /></td>
          </tr>
          <tr>
            <td><StatisticsLine text="neutral" /></td>
            <td><StatisticsLine value={props.neutral} /></td>
          </tr>
          <tr>
            <td><StatisticsLine text="bad" /></td>
            <td><StatisticsLine value={props.bad} /></td>
          </tr>
          <tr>
            <td><StatisticsLine text="all" /></td>
            <td><StatisticsLine value={props.total} /></td>
          </tr>
          <tr>
            <td><StatisticsLine text="average" /></td>
            <td><StatisticsLine value={props.average} /></td>
          </tr>
          <tr>
            <td><StatisticsLine text="positive" /></td>
            <td><StatisticsLine value={props.positive} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const header = 'give feedback'
  const statsheader = 'statistics'
  const total = good + neutral + bad
  const average = ((good + neutral*0 + bad*(-1)) / total)
  const positive = (good / total) * 100

  const setValueGood = (newValueGood) => {
    setGood(newValueGood)
  }

  const setValueNeutral = (newValueNeutral) => {
    setNeutral(newValueNeutral)
  }  

  const setValueBad = (newValueBad) => {
    setBad(newValueBad)
  }

  return (
    <div>
      <Header header={header} />
      <Button handleClick={() => setValueGood(good + 1)} text="good" />
      <Button handleClick={() => setValueNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setValueBad(bad + 1)} text="bad" />
      <StatsHeader statsheader={statsheader} />
      <StatisticsLine />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive}/>
    </div>
  )
}

export default App