import axios from 'axios';
import { FC, lazy, Suspense, useEffect, useState } from 'react';
import Spinner from '../../comps/ui/Spinner/Spinner';
import { Character } from '../../model';
import { ROUTE } from '../../services/routes';
import styles from './Home.module.css';
import usePagination from '../../hooks/usePagination/usePagination';

const Pagination = lazy(() => import('../../comps/ui/Pagination/Pagination'));
const CharactersList = lazy(() => import('../../comps/Character/List/List'));

const PAGE_SIZE = 20;

const Home: FC = (): JSX.Element => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);

  const { page, previousPage, nextPage } = usePagination(1, totalPages);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios.get(
        `${ROUTE.BASE_URL}${ROUTE.CHARACTER}?page=${page}&count=${PAGE_SIZE}`
      );
      setCharacters(response.data.results);
      setTotalPages(response.data.info.pages);
    };

    fetchCharacters();
  }, [page]);

  return (
    <Suspense fallback={<Spinner />}>
      <div className={styles.container}>
        <Pagination
          data-testid="pagination-top"
          totalPages={totalPages}
          page={page}
          previousPage={previousPage}
          nextPage={nextPage}
        />
        <CharactersList characters={characters} />
        <Pagination
          data-testid="pagination-bottom"
          totalPages={totalPages}
          page={page}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </div>
    </Suspense>
  );
};

export default Home;
