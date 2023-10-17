import Link from "next/link"

export default function HomePage () {
    return (
        <section>
            <h1>
                Choose a fishtank please
            </h1>
        <section className="main-section">
            <Link href="fishtank-selection/1" className="fishtank-select">
                <p>
                    Fishtank Marie Curie
                </p>
            </Link>
            <Link href="fishtank-selection/2" className="fishtank-select">
                <p>
                Fishtank Leornardo Da Vinci
                </p>
            </Link>

        </section>
        </section>
    )
}