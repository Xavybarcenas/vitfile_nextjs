import Link from 'next/link'
import styles from "/styles/options.module.css";

export default function options() {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="#">
        <a>Home</a>
      </Link>
      <Link href="#">
        <a>About</a>
      </Link>
      <Link href="#">
        <a>Contact</a>
      </Link>
    </nav>
  )
}

    