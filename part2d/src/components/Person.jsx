const Person = ({ person, onDelete }) => {
  return (
    <li>
      {person.name} - {person.number || 'no phone number'}{' '}
      <button onClick={() => onDelete(person.id, person.name)}>delete</button>
    </li>
  );
};

export default Person;
