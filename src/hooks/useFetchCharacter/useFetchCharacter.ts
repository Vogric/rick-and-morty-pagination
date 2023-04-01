import axios from 'axios';
import { useEffect, useState } from 'react';
import { Character } from '../../model';
import { ROUTE } from '../../services/routes';

const useFetchCharacter = (id: string | undefined) => {
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await axios.get(
        `${ROUTE.BASE_URL}${ROUTE.CHARACTER}/${id}`
      );
      setCharacter(response.data);
    };
    fetchCharacter();
  }, [id]);

  return character;
};

export default useFetchCharacter;
