import Link from "next/link"

export default function HomePage () {
    return (
        <section>
            <h1>
                Choose a fishtank please
            </h1>
            <Link href="fishtank/1">Fishtank 1</Link>
            <Link href="fishtank/2">Fishtank 2</Link>
        </section>
    )
}