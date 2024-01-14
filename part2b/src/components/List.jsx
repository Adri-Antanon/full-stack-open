import React from 'react';
import Person from './Person';

const List = ({ persons }) => {
  return (
    <ul>
      {persons.map((person, idx) => (
        <Person key={person.name + ' - ' + idx} person={person} />
      ))}
    </ul>
  );
};

export default List;
