import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CharacterCard from './Card';
import { Character } from '../../../model';

describe('CharacterCard', () => {
  const mockCharacter: Character = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/1'],
    origin: { name: 'Earth' },
    location: { name: 'Earth' },
  };

  it('renders the character name and image', () => {
    render(
      <MemoryRouter>
        <CharacterCard character={mockCharacter} />
      </MemoryRouter>
    );

    const characterName = screen.getByText(mockCharacter.name);
    const characterImage = screen.getByAltText(mockCharacter.name);

    expect(characterName).toBeInTheDocument();
    expect(characterImage).toBeInTheDocument();
    expect(characterImage).toHaveAttribute('src', mockCharacter.image);
  });

  it('links to the character details page', () => {
    render(
      <MemoryRouter>
        <CharacterCard character={mockCharacter} />
      </MemoryRouter>
    );

    const characterLink = screen.getByRole('link');

    expect(characterLink).toHaveAttribute(
      'href',
      `/character/${mockCharacter.id}`
    );
  });
});
