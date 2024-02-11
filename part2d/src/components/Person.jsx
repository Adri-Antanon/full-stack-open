const Person = ({ person }) => {
  return (
    <li>
      {person.name} - {person.phone || 'no phone number'}
    </li>
  );
};

export default Person;
