const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header name={course.name} />
      <Content partName={course.parts[0].name} exercises={course.parts[0].exercises } />
      <Content partName={course.parts[1].name} exercises={course.parts[1].exercises } />
      <Content partName={course.parts[2].name} exercises={course.parts[2].exercises } />
      <Total exe1={course.parts[0].exercises }  exe2={course.parts[0].exercises }  exe3={course.parts[0].exercises } />
    </div>
  )
}

 const Header = (props) => {
  return (
    <h1> { props.name } </h1>
  )
 }

 const Content = (props) => {
  return (
    <p> { props.partName }, { props.exercises } </p>
  )
 }

 const Total = (props) => {
  return (
    <h2>
      Total number of exercises is:  { props.exe1 + props.exe3 + props.exe2 } 
    </h2>
  )
 }

export default App