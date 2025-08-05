const Courses = ({ courses }) => (
  <div>
    {courses.map((course) => {
      const totalExe = course.parts.reduce(
        (sum, part) => sum + part.exercises,
        0
      );
      return (
        <div key={course.id}>
          <h1>{course.name}</h1>
          <ul>
            {course.parts.map((part) => (
              <li key={part.id}>
                {part.name}: {part.exercises}
              </li>
            ))}
          </ul>
          <p style={{ fontWeight: "bold" }}>Total exercises: {totalExe}</p>
        </div>
      );
    })}
  </div>
);

export default Courses;