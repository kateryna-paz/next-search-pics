import { useState } from 'react'
import styles from './SortBar.module.css'

type SortBarProps = {
  sortState: { sortBy: string; order: string }
  setSortState: (newSortState: { sortBy: string; order: string }) => void
}

function SortBar({ sortState, setSortState }: SortBarProps) {
  const [isRotated, setIsRotated] = useState(false)
  const handleSortChange = (sortBy: string) => {
    setSortState({ sortBy, order: sortState.order })
  }
  const handleOrderChange = () => {
    setIsRotated(!isRotated)
    setSortState({
      sortBy: sortState.sortBy,
      order: sortState.order === 'asc' ? 'desc' : 'asc'
    })
  }

  return (
    <section className='mt-6 flex flex-row items-center gap-8 px-16'>
      <h3 className='text-2xl font-bold text-white'>Sort by: </h3>
      <div className={styles.section}>
        <div className={styles.tabs}>
          <input
            checked={sortState.sortBy === 'year'}
            value='Year'
            id='year'
            type='radio'
            className={styles.input}
            onChange={() => handleSortChange('year')}
          />
          <label htmlFor='year' className={styles.label}>
            Year
          </label>
          <input
            checked={sortState.sortBy === 'pages'}
            value='Pages'
            id='pages'
            type='radio'
            className={styles.input}
            onChange={() => handleSortChange('pages')}
          />
          <label htmlFor='pages' className={styles.label}>
            Pages
          </label>
        </div>
      </div>
      <button
        className={`${styles.btnArrow} ${isRotated ? styles.rotate : ''}`}
        onClick={handleOrderChange}
      >
        ↑
      </button>
    </section>
  )
}

export default SortBar
