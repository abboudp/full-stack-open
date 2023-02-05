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

  const incrementCounter = () => setCounter(counter + 1)
  const decrementCounter = () => setCounter(counter - 1)
  const zeroCounter = () => setCounter(0)

  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Display counter={counter} />
      <Button 
        text='Plus' 
        onClick={incrementCounter} 
      />
      <Button 
        text='Minus' 
        onClick={decrementCounter} 
      />
      <Button 
        text='Zero' 
        onClick={zeroCounter} 
      />
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App;
