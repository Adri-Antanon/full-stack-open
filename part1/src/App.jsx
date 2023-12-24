import Content from './components/Content';
import Header from './components/Header';
import Total from './components/Total';

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    { partName: 'Fundamentals of React', exercises: 10 },
    { partName: 'Using props to pass data', exercises: 7 },
    { partName: 'State of a component', exercises: 14 },
  ];
  const totalNumExercises = parts.reduce(
    (acc, curr) => acc + curr.exercises,
    0,
  );

  return (
    <div>
      <Header course={course} />
      {parts.map((part) => (
        <Content
          exercises={part.exercises}
          part={part.partName}
          key={part.partName}
        />
      ))}
      <Total numExercises={totalNumExercises} />
    </div>
  );
};

export default App;
