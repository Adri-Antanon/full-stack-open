import React from 'react';

const PersonForm = ({
  onPersonSubmit,
  newName,
  newPhone,
  onNameChange,
  onPhoneChange,
}) => {
  return (
    <form onSubmit={onPersonSubmit}>
      <div>
        name:
        <input type="text" value={newName} onChange={onNameChange} />
        phone number:
        <input type="text" value={newPhone} onChange={onPhoneChange} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default PersonForm;
