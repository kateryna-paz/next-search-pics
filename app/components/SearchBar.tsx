'use client'

import { useState } from 'react'
import Button from './UI/Button'
import Input from './UI/Input'

type SearchBarProps = {
  className?: string
  query: string
  setQuery: (value: string) => void
  onClick: () => void
}

function SearchBar({ className, query, setQuery, onClick }: SearchBarProps) {
  return (
    <div className='relative mb-8 flex items-center gap-10 text-xl'>
      <Input
        placeholder='Search...'
        value={query}
        onChange={(value: string) => {
          setQuery(value)
        }}
        className='mx-4'
      />
      <Button type='find' onClick={onClick} className='mx-4'>
        Find
      </Button>
    </div>
  )
}

export default SearchBar
