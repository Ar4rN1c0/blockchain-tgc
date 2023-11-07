import Link from "next/link"
import styles from '@/styles/Home.module.css'


export default function Menu() {
    return (

        <main className={styles.home}>
            <h1 className={styles.title}>
                Please choose a fishtank
            </h1>
            <section className={styles.section}>
                <article className={styles.menu}>
                    <Link className={styles.link} href="fishtank/1">Fishtank 1</Link>
                    <Link className={styles.link} href="fishtank/2">Fishtank 2</Link>
                </article>
            </section>
        </main>
    )
}
