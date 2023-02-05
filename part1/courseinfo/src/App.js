const Header = (props) => (
  <h1>{props.course}</h1>
)

const Part = (props) => (
  <p>
      {props.part} {props.exercise}
  </p>
)

const Content = (props) => (
  <>
    <Part part={props.parts[0]} exercise={props.exercise[0]}/>
    <Part part={props.parts[1]} exercise={props.exercise[1]}/>
    <Part part={props.parts[2]} exercise={props.exercise[2]}/>
  </>
)

const Total = (props) => (
  <p>Number of exercises {props.total}</p>
)

const App = () => {
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const exercises = [10, 7, 14]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} exercise={exercises}/>
      <Total total={exercises[0] + exercises[1] + exercises[2]}/>    
    </div>
  )
}



export default App;
