import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from './Pagination';

describe('Pagination', () => {
  const previousPageMock = jest.fn();
  const nextPageMock = jest.fn();

  const paginationProps = {
    previousPage: previousPageMock,
    page: 3,
    nextPage: nextPageMock,
    totalPages: 5,
  };

  it('renders the current page and total pages', () => {
    render(<Pagination {...paginationProps} />);
    const pageNumber = screen.getByText('3 of 5');
    expect(pageNumber).toBeInTheDocument();
  });

  it('disables the previous button when on the first page', () => {
    render(<Pagination {...paginationProps} page={1} />);
    const previousButton = screen.getByText('←');
    expect(previousButton).toBeDisabled();
  });

  it('disables the next button when on the last page', () => {
    render(<Pagination {...paginationProps} page={5} />);
    const nextButton = screen.getByText('→');
    expect(nextButton).toBeDisabled();
  });

  it('calls the previousPage function when the previous button is clicked', () => {
    const previousPageMock = jest.fn();
    render(
      <Pagination
        previousPage={previousPageMock}
        page={2}
        nextPage={jest.fn()}
        totalPages={3}
      />
    );
    const previousButton = screen.getByText('←');
    userEvent.click(previousButton);
    expect(previousPageMock).toHaveBeenCalled();
  });

  it('calls the nextPage function when the next button is clicked', () => {
    render(<Pagination {...paginationProps} />);
    const nextButton = screen.getByText('→');
    userEvent.click(nextButton);
    expect(nextPageMock).toHaveBeenCalled();
  });
});
