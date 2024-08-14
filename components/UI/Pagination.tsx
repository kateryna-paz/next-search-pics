import React from 'react'

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  const handleFirstPage = () => onPageChange(1)
  const handlePreviousPage = () => onPageChange(currentPage - 1)
  const handleNextPage = () => onPageChange(currentPage + 1)
  const handleLastPage = () => onPageChange(totalPages)
  const handlePageClick = (page: number) => onPageChange(page)

  return (
    <div className='flex items-center justify-center space-x-2'>
      <button
        className='flex h-10 w-10 items-center justify-center rounded bg-white text-orange-500 shadow hover:bg-gray-100'
        onClick={handleFirstPage}
        disabled={currentPage === 1}
      >
        &laquo;&laquo;
      </button>
      <button
        className='flex h-10 w-10 items-center justify-center rounded bg-white text-orange-500 shadow hover:bg-gray-100'
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        &laquo;
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1
        return (
          <button
            key={page}
            className={`flex h-10 w-10 items-center justify-center rounded shadow ${
              page === currentPage
                ? 'bg-orange-500 text-white'
                : 'bg-white text-orange-500 hover:bg-gray-100'
            }`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        )
      })}

      <button
        className='flex h-10 w-10 items-center justify-center rounded bg-white text-orange-500 shadow hover:bg-gray-100'
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        &raquo;
      </button>
      <button
        className='flex h-10 w-10 items-center justify-center rounded bg-white text-orange-500 shadow hover:bg-gray-100'
        onClick={handleLastPage}
        disabled={currentPage === totalPages}
      >
        &raquo;&raquo;
      </button>
    </div>
  )
}

export default Pagination
