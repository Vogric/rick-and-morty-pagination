import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';

jest.mock('../../hooks/useFetchCharacter/useFetchCharacter', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: { name: 'Earth' },
    location: { name: 'Earth' },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2',
      'https://rickandmortyapi.com/api/episode/3',
    ],
  })),
}));

describe('CharacterDetail component', () => {
  it('renders the character details', async () => {
    render(
      <MemoryRouter initialEntries={['/characters/1']}>
        <Routes>
          <Route path="/characters/:id" element={<CharacterDetail />} />
        </Routes>
      </MemoryRouter>
    );

    const nameElement = screen.getByText(/Name:/i);
    expect(nameElement).toHaveTextContent(/Name:/i);

    const statusElement = screen.getByText(/Status:/i);
    expect(statusElement).toHaveTextContent(/Status:/i);

    const speciesElement = screen.getByText(/Species:/i);
    expect(speciesElement).toHaveTextContent(/Species:/i);

    const genderElement = screen.getByText(/Gender:/i);
    expect(genderElement).toHaveTextContent(/Gender:/i);

    const originElement = screen.getByText(/Origin:/i);
    expect(originElement).toHaveTextContent(/Origin:/i);

    const locationElement = screen.getByText(/Last known location:/i);
    expect(locationElement).toHaveTextContent(/Last known location:/i);

    const episodeElement = screen.getByText(/Number of episodes appearances:/i);
    expect(episodeElement).toHaveTextContent(
      /Number of episodes appearances:/i
    );
  });
});
