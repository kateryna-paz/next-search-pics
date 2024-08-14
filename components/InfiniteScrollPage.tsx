'use client'

import { ReactNode, useEffect, useRef } from 'react'
import styles from './InfiniteScrollPage.module.css'

type PageProps = {
  children: ReactNode
}

export default function InfiniteScrollPage({ children }: PageProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (wrapper) {
      wrapper.scrollTop = wrapper.scrollHeight / 2

      const handleScroll = () => {
        const scrollPos = wrapper.scrollTop
        const scrollHeight = wrapper.scrollHeight
        const wrapperHeight = wrapper.clientHeight

        if (scrollPos >= scrollHeight - wrapperHeight) {
          wrapper.scrollTop = wrapperHeight
        }

        if (scrollPos <= 0) {
          wrapper.scrollTop = scrollHeight - 2 * wrapperHeight
        }
      }

      wrapper.addEventListener('scroll', handleScroll)

      return () => {
        wrapper.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div className={styles.content}> {children} </div>
      <div className={styles.content}> {children} </div>
    </div>
  )
}
