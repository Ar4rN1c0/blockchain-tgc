import Header from "../components/Header"
import Card from "../components/Card"
import styles from "./Reserve.module.css"

export default function Page () {
    return (
        <main>
            <Header></Header>
            <section className={styles.section}>
                <article className={styles.article}>
                    <Card fishtank={1} />
                </article>
                <article className={styles.article}>
                    <Card fishtank={2} />
                </article>
            </section>
        </main>
    )
}