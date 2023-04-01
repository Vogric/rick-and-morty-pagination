import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './CharacterDetail.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import useFetchCharacter from '../../hooks/useFetchCharacter/useFetchCharacter';

const CharacterDetail: FC = () => {
  const { id } = useParams();
  const character = useFetchCharacter(id);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Link to={`/`}>
          <button className={styles.btn}>←</button>
        </Link>
        <LazyLoadImage
          className={styles.img}
          src={character?.image}
          alt={character?.name}
          effect="blur"
        />
        <p className={styles.info}>Name: {character?.name}</p>
        <p className={styles.info}>Status: {character?.status}</p>
        <p className={styles.info}>Species: {character?.species}</p>
        <p className={styles.info}>Gender: {character?.gender}</p>
        <p className={styles.info}>Origin: {character?.origin.name}</p>
        <p className={styles.info}>
          Last known location: {character?.location.name}
        </p>
        <p className={styles.info}>
          Number of episodes appearances: {character?.episode.length}
        </p>
      </div>
    </div>
  );
};

export default CharacterDetail;
