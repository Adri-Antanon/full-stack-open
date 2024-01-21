import usePersons from './hooks/usePersons';

import './App.css';

function App() {
  const { isLoading, persons } = usePersons();

  return (
    <>
      {isLoading ? (
        <p>Loading people...</p>
      ) : (
        persons.map((person) => (
          <p key={person.id}>
            {person.name} - {person.number}
          </p>
        ))
      )}
      {!isLoading && persons.length === 0 && <p>Fetch persons failed...</p>}
    </>
  );
}

export default App;
