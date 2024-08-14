'use client'
import styles from './Button.module.css'

type ButtonProps = {
  type: string
  className?: string
  children: string
  onClick: () => void
}

function Button({ type, className, children, onClick }: ButtonProps) {
  return (
    <button
      className={`${styles[type]} ${className}`}
      role='button'
      onClick={() => onClick()}
    >
      <span> {children} </span>
    </button>
  )
}

export default Button
