const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const App = () => {
  const name = "Paul"
  return (
    <div>
      <p>Greetings</p>
      <Hello name={name} />
    </div>
  )
}

export default App;
