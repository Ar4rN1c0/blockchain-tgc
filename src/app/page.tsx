import Link from "next/link"

export default function HomePage () {
    return (
        <section>
            <h1>
                Choose a fishtank please
            </h1>
        <section className="main-section">
            <Link href="fishtank-selection/1" className="fishtank-select">Fishtank Marie Curie</Link>
            <Link href="fishtank-selection/2" className="fishtank-select">Fishtank Leornardo Da Vinci</Link>

        </section>
        </section>
    )
}