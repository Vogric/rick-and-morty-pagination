import { FC } from 'react';
import styles from './Pagination.module.css';

interface PaginationProps {
  previousPage: () => void;
  page: number;
  nextPage: () => void;
  totalPages: number;
}

const Pagination: FC<PaginationProps> = ({
  previousPage,
  page,
  nextPage,
  totalPages,
}) => {
  const isPreviousPageDisabled = (): boolean | undefined => {
    return page === 1;
  };

  const isNextPageDisabled = (): boolean | undefined => {
    return page === totalPages;
  };

  return (
    <div className={styles.container}>
      <div>
        <button
          className={styles.btn}
          onClick={previousPage}
          disabled={isPreviousPageDisabled()}
        >
          ←
        </button>
        <button
          className={styles.btn}
          onClick={nextPage}
          disabled={isNextPageDisabled()}
        >
          →
        </button>
      </div>
      <p className={styles.page_number}>
        {page} of {totalPages}
      </p>
    </div>
  );
};

export default Pagination;
