'use client'

import styles from './Input.module.css'

type InputProps = {
  className?: string
  placeholder: string
  value: string
  onChange: (value: string) => void
}
function Input({ className, placeholder, value, onChange }: InputProps) {
  return (
    <div className={`${styles.inputControl} ${className}`}>
      <input
        className={`${styles.input} ${styles.inputAlt}`}
        placeholder={placeholder}
        type='text'
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <span className={`${styles.border} ${styles.borderAlt}`}></span>
    </div>
  )
}

export default Input
