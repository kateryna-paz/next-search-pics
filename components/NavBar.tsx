'use client'

import Link from 'next/link'
import styles from './NavBar.module.css'
import { CgHeart } from 'react-icons/cg'
import { CgHomeAlt } from 'react-icons/cg'
import { CgProfile } from 'react-icons/cg'
import { CgRowLast } from 'react-icons/cg'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

function NavBar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <Link
        href='/'
        className={`${styles.label} ${pathname === '/' ? `${styles.active}` : ''}`}
      >
        <CgHomeAlt className={styles.icon} />
      </Link>
      <Link
        href='/favorites'
        className={`${styles.label} ${pathname === '/favorites' ? `${styles.active}` : ''}`}
      >
        <CgHeart className={styles.icon} />
      </Link>
      <Link
        href='/profile'
        className={`${styles.label} ${pathname === '/profile' ? `${styles.active}` : ''}`}
      >
        <CgProfile className={styles.icon} />
      </Link>
      <Link
        href='/about'
        className={`${styles.label} ${pathname === '/about' ? `${styles.active}` : ''}`}
      >
        <CgRowLast className={styles.icon} />
      </Link>
    </nav>
  )
}

export default NavBar
