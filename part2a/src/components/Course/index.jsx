import React from 'react';

import Header from './Header';
import Total from './Total';
import Content from './Content';

export const Course = ({ name, parts }) => {
  const totalNumExercises = parts.reduce(
    (acc, curr) => acc + curr.exercises,
    0,
  );
  return (
    <div>
      <Header course={name} />
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
