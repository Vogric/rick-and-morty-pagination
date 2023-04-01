import { render, screen } from '@testing-library/react';
import { Character } from '../../../model';
import CharactersList from './List';

const characters: Character[] = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
    },
    location: {
      name: 'Earth (Replacement Dimension)',
    },
    episode: [],
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
    },
    location: {
      name: 'Earth (Replacement Dimension)',
    },
    episode: [],
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },
];

describe('CharactersList', () => {
  it('should show a spinner while loading', () => {
    render(<CharactersList characters={characters} />);
    const spinners = screen.getAllByTestId('spinner');
    expect(spinners.length).toBeGreaterThanOrEqual(1);
  });
});
