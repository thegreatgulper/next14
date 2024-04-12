import { useState, useEffect } from 'react';
import { Users } from '../types/types';


const useFetchUsers = (): [Users[] | null, string | null, boolean] => {
  const [data, setData] = useState<Users[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/userssss');
        const jsonData: Users[] = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error: unknown) {
        setLoading(false);
        setData(null);
        setError(String(error) || 'Error fetching data');
      }
    };

    fetchData();
  }, []);

  return [data, errorMessage, loading];
};

export default useFetchUsers;