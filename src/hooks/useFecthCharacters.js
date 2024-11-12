import { useState, useEffect } from 'react';

function useFetchCharacters(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setLoading(true); 
        const response = await fetch(url); 
        const result = await response.json();
        setData(result); 
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [url]);

  return { data, loading, error };
}

export default useFetchCharacters;
