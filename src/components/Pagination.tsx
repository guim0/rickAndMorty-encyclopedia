import "../styles/Pagination.scss";

interface IPagination {
  page: number;
  isPreviousData: boolean;
  setPage: (page: number) => void;
}

export const Pagination = ({ page, isPreviousData, setPage }: IPagination) => {
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
      <li>
        <span>Page {page}</span>
      </li>
      <li>
        <button
          disabled={isPreviousData}
          onClick={() => setPage(page + 1)}
          className="button"
        >
          Next
        </button>
      </li>
    </footer>
  );
};
