import React from 'react';
import Person from './Person';

const List = ({ persons, onDelete }) => {
  return (
    <ul>
      {persons.map((person, idx) => (
        <Person
          onDelete={onDelete}
          key={person.name + ' - ' + idx}
          person={person}
        />
      ))}
    </ul>
  );
};

export default List;
