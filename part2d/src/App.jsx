import { useState, useEffect } from 'react';
import axios from 'axios';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import List from './components/List';

import Note from './components/Note';

import noteServices from './services/notes';

const App = () => {
  // const [notes, setNotes] = useState([]);
  // const [newNote, setNewNote] = useState('');
  // const [showAll, setShowAll] = useState(false);

  // useEffect(() => {
  //   noteServices.getAll().then((initialNotes) => {
  //     setNotes(initialNotes);
  //   });
  // }, []);

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

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '933445543', id: 1 },
  ]);
  const [searchPerson, setSearchPerson] = useState('');
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    const baseUrl = 'http://localhost:3001/persons';
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
    axios
      .post(baseUrl, personObject)
      .then((response) => setPersons(persons.concat(response.data)));
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
