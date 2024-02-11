import { useState, useEffect } from 'react';
import axios from 'axios';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import List from './components/List';

import Note from './components/Note';

import personServices from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchPerson, setSearchPerson] = useState('');
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  useEffect(() => {
    personServices.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  // const toggleImportanceOf = (id) => {
  //   const note = notes.find((n) => n.id === id);
  //   const changedNote = { ...note, important: !note.important };

  //   noteServices
  //     .update(id, changedNote)
  //     .then((updatedNote) => {
  //       setNotes(notes.map((n) => (n.id !== id ? n : updatedNote)));
  //     })
  //     .catch((error) => {
  //       alert(
  //         `the note '${note.content}' was already deleted from server`,
  //         error,
  //       );
  //       setNotes(notes.filter((n) => n.id !== id));
  //     });
  // };

  // const addNote = (event) => {
  //   event.preventDefault();
  //   const noteObject = {
  //     content: newNote,
  //     important: Math.random() > 0.5,
  //   };

  //   noteServices.create(noteObject).then((newNote) => {
  //     setNotes(notes.concat(newNote));
  //     setNewNote('');
  //   });
  // };

  // const handleNoteChange = (event) => {
  //   setNewNote(event.target.value);
  // };

  // const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  const addPerson = (event) => {
    event.preventDefault();
    const baseUrl = 'http://localhost:3001/persons';
    const personObject = {
      name: newName,
      number: newPhone,
      id: (persons.length + 1).toString(),
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
    personServices
      .create(personObject)
      .then((newPerson) => setPersons(persons.concat(newPerson)));
  };

  const handleNameChange = (event) => setNewName(event.target.value);
  const handlePhoneChange = (event) => setNewPhone(event.target.value);
  const handleSearchChange = (event) => setSearchPerson(event.target.value);
  const handleDeletePerson = (id, name) => {
    if (window.confirm(`Do you want to delete ${name}?`)) {
      setPersons(persons.filter((n) => n.id !== id));
      personServices.deletePerson(id);
    }
  };
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
      <List onDelete={handleDeletePerson} persons={filterPersonList} />
    </div>
  );
};

export default App;
