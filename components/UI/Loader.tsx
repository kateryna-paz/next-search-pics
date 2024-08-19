import styles from './Loader.module.css'

function Loader({children}: any) {
  return (
    <div>
      <p className={styles.text}>{children}</p>
      <div className={styles.loader}>
        <span></span>
      </div>
    </div>
  )
}

export default Loader
