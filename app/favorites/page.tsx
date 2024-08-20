'use client'

import BooksGrid from '@/components/BooksGrid'
import { useAppSelector } from '@/lib/store'
import Link from 'next/link'
import styles from './page.module.css'
import { useEffect } from 'react'

function FavouritesPage() {
  const { favourites } = useAppSelector(state => state.favourites)

  useEffect(() => {
  }, [favourites])
  return (
    <main className='mb-12 flex min-h-screen flex-col justify-center'>
      <div className='flex flex-col items-center justify-center'>
        {!favourites.length ? (
          <div className='text-center'>
            <p className='mb-8 text-4xl text-white'>
              Your Favourite Books&apos; List is still empty.
            </p>
            <Link href='/' className={styles.link}>
              Let&apos;s go to add a new one! <span>➡ </span>
            </Link>
          </div>
        ) : (
          <>
            <h1 className='mb-10 text-4xl text-white'>
              Your Favourite Books&apos; List
            </h1>
            <BooksGrid books={favourites} />
          </>
        )}
      </div>
    </main>
  )
}

export default FavouritesPage
