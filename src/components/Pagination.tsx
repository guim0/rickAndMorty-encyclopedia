import "../styles/Pagination.scss";

interface IPagination {
  page: number;
  isPreviousData: boolean;
  setPage: (page: number) => void;
  next?: boolean;
}

export const Pagination = ({
  page,
  isPreviousData,
  setPage,
  next,
}: IPagination) => {
  return (
    <footer className="pagination">
      {
        <li>
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className={page <= 1 ? "buttonDisabled" : "button"}
          >
            Prev
          </button>
        </li>
      }
      <li className="text-center">
        <span>Page: {page}</span>
      </li>
      <li>
        <button
          disabled={isPreviousData || next}
          onClick={() => setPage(page + 1)}
          className={next ? "buttonDisabled" : "button"}
        >
          Next
        </button>
      </li>
    </footer>
  );
};
