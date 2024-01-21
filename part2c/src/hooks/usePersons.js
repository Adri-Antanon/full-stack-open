import { useState, useEffect } from 'react';
import axios from 'axios';

const usePersons = () => {
  const [persons, setPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = 'http://localhost:3001/persons';
    setIsLoading(true);

    axios
      .get(url)
      .then((response) => {
        setPersons(response.data);
      })
      .catch((error) => {
        console.error('Fetch persons failed:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return { isLoading, persons };
};

export default usePersons;
