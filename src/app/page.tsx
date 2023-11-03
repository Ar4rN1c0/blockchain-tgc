import Link from "next/link"
import styles from './Home.module.css'


export default function HomePage () {
    return (
        <main className={styles.home}>
            <h1 className={styles.title}>
                Choose a fishtank please
            </h1>
            <section className={styles.menu}>
                <Link className={styles.link} href="fishtank/1">Fishtank 1</Link>
                <Link className={styles.link} href="fishtank/2">Fishtank 2</Link>
            </section>
        </main>
    )
}