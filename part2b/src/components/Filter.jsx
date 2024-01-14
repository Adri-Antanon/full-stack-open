import React from 'react';

const Filter = ({ searchPerson, onSearch }) => {
  return (
    <>
      filter shown with
      <input type="text" value={searchPerson} onChange={onSearch} />
    </>
  );
};

export default Filter;
