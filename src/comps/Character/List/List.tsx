import { FC, lazy, Suspense } from 'react';
import { Character } from '../../../model';
import Spinner from '../../ui/Spinner/Spinner';
import styles from './List.module.css';

interface ListProps {
  characters: Character[];
}

const Card = lazy(() => import('../Card/Card'));

const List: FC<ListProps> = ({ characters }) => {
  return (
    <div className={styles.container}>
      {characters.map((character) => (
        <Suspense
          key={character.id}
          fallback={<Spinner data-testid="spinner" />}
        >
          <Card character={character} key={character.id} />
        </Suspense>
      ))}
    </div>
  );
};

export default List;
