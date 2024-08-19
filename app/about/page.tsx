import styles from './page.module.css'

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.description}>
          Welcome to our online book haven! At <strong>Shelfly</strong>, we are
          passionate about connecting readers with the best books available. Our
          mission is to provide a seamless and enjoyable experience for book
          enthusiasts, offering a vast collection of titles across various
          genres.
        </p>
        <p className={styles.description}>
          Whether you are searching for a classic novel, the latest bestseller,
          or a hidden gem, our platform allows you to discover and explore books
          effortlessly. With user-friendly search features, advanced sorting
          options, and personalized recommendations, finding your next read has
          never been easier.
        </p>
        <p className={styles.description}>
          Our team is dedicated to curating an extensive library that caters to
          all tastes and preferences. We believe that every book has the
          potential to inspire, educate, and entertain, and we are here to help
          you find the perfect one for you.
        </p>
        <p className={styles.description}>
          Thank you for choosing <strong>Shelfly</strong> as your go-to source
          for books. Happy reading!
        </p>
      </div>
    </main>
  )
}
