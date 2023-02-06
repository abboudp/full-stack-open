import { useState } from "react"

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So you were probably born in {bornYear()}
      </p>
    </div>
  )
}

const Display = ({ counter }) => (
  <h2>{counter}</h2>
)

const Button = ({ text, onClick }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const [ clicks, setClicks ] = useState({
    left: 0, 
    right: 0
  })

  const handleLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
       right: clicks.right + 1
    }
    setClicks(newClicks)
  }

  const setToValue = (newValue) => () => setCounter(newValue)

  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Display counter={counter} />
      <Button 
        text='Plus' 
        onClick={setToValue(counter + 1)} 
      />
      <Button 
        text='Minus' 
        onClick={setToValue(counter - 1)} 
      />
      <Button 
        text='Zero' 
        onClick={setToValue(0)} 
      />
      <Button 
        text='Thousand' 
        onClick={setToValue(1000)} 
      />
      <h2>{clicks.left} {clicks.right}</h2>
      <Button 
        text='Left' 
        onClick={handleLeftClick} 
      />
      <Button 
        text='Right' 
        onClick={handleRightClick} 
      />
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App;
