import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Character } from '../../../model';
import styles from './Card.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ROUTE } from '../../../services/routes';

interface CardProps {
  character: Character;
}

const Card: FC<CardProps> = ({ character }) => {
  return (
    <Link to={`${ROUTE.CHARACTER}/${character.id}`}>
      <div className={styles.container}>
        <LazyLoadImage
          className={styles.image}
          src={character.image}
          alt={character.name}
          effect="blur"
        />
        <p>{character.name}</p>
      </div>
    </Link>
  );
};

export default Card;
