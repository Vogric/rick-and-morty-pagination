import { useState } from 'react';

const usePagination = (initialPage: number, totalPages: number) => {
  const [page, setPage] = useState(initialPage);

  const previousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const nextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return { page, previousPage, nextPage };
};

export default usePagination;
