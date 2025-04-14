const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      title: "Fundamentals of React", exercises: 10
    },
    {
      title: 'Using props to pass data', exercises: 7
    },
    {
      title: 'State of a component', exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total exercises={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      <Part title={parts[0].title} exercises={parts[0].exercises} />
      <Part title={parts[1].title} exercises={parts[1].exercises} />
      <Part title={parts[2].title} exercises={parts[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>Part: {props.title}</p>
      <p>Exercises in this lesson: {props.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises: {props.exercises}</p>
    </div>
  )
}

export default App