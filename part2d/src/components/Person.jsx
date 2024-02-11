const Person = ({ person }) => {
  return (
    <li>
      {person.name} - {person.number || 'no phone number'}{' '}
      <button onClick={() => console.log('delete...')}>delete</button>
    </li>
  );
};

export default Person;
