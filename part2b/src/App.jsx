import { useState } from 'react';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import List from './components/List';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '933445543', id: 1 },
  ]);
  const [searchPerson, setSearchPerson] = useState('');
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      phone: newPhone,
      id: persons.length + 1,
    };

    const isDuplicated = persons.find(
      (person) =>
        person.name.toLocaleLowerCase() === newName.toLocaleLowerCase(),
    );
    if (isDuplicated) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setNewName('');
    setNewPhone('');
    setPersons(persons.concat(personObject));
  };

  const handleNameChange = (event) => setNewName(event.target.value);
  const handlePhoneChange = (event) => setNewPhone(event.target.value);
  const handleSearchChange = (event) => setSearchPerson(event.target.value);

  const filterPersonList = persons.filter((person) =>
    person.name.toLocaleLowerCase().includes(searchPerson.toLocaleLowerCase()),
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter searchPerson={searchPerson} onSearch={handleSearchChange} />
      <h3>Add a new</h3>
      <PersonForm
        onPersonSubmit={addPerson}
        newName={newName}
        newPhone={newPhone}
        onNameChange={handleNameChange}
        onPhoneChange={handlePhoneChange}
      />
      <h2>Numbers</h2>
      <List persons={filterPersonList} />
    </div>
  );
};

export default App;
