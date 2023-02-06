import { useState } from 'react'

const Title = ({ title }) => (
  <h1>{title}</h1>
)

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const Statistic = ({ text, count }) => {
  if (isNaN(count)) {
    count = 0
  }
  return (
    <>
      <td>{text}</td> 
      <td>{count}</td>
    </>
  )
}

const Statistics = ({ title, feedback }) => {
  const total = feedback.good + feedback.bad + feedback.neutral
  if (total === 0) {
    return (
      <>
        <h2>{title}</h2>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
      <h2>{title}</h2>
      <table>
        <tbody>
          <tr>
            <Statistic 
              text='good'
              count={feedback.good}
            />
          </tr>
          <tr>
            <Statistic 
              text='neutral'
              count={feedback.neutral}
            />
          </tr>
          <tr>
            <Statistic 
              text='bad' 
              count={feedback.bad} 
            />
          </tr>
          <tr>
            <Statistic 
              text='all' 
              count={total} 
            />
          </tr>
          <tr>
            <Statistic 
              text='average' 
              count={(feedback.good - feedback.bad) / total} 
            />
          </tr>
          <tr>
            <Statistic 
              text='positive' 
              count={feedback.good / total} 
            />
          </tr>
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  const title = 'give feedback'

  const initialFeedback = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  const [feedback, setFeedback] = useState(initialFeedback)

  const handleGoodFeedback = () => {
    setFeedback({
      ...feedback,
      good: feedback.good + 1
    })
  }

  const handleNeutralFeedback = () => {
    setFeedback({
      ...feedback,
      neutral: feedback.neutral + 1
    })
  }

  const handleBadFeedback = () => {
    setFeedback({
      ...feedback,
      bad: feedback.bad + 1
    })
  }

  return (
    <div>
      <Title title={title} />
      <Button 
        onClick={handleGoodFeedback} 
        text='good'
      />
      <Button 
        onClick={handleNeutralFeedback} 
        text='neutral'
      />
      <Button 
        onClick={handleBadFeedback} 
        text='bad'
      />
      <Statistics 
        title='statistics'
        feedback={feedback}
      />
    </div>
  )
}

export default App;
