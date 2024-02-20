import Image from "next/image"
import Link from "next/link"
import CardImage from "../../../public/Card-image"
import styles from "@/app/styles/Card.module.css"

const available = ["Marie Curie", "Leonardo Da Vinci"]

export default function Card ({fishtank}:{fishtank: number}) {
    return(
        <Link href={`/reserve/${fishtank}`} className={styles.card}>
            <div className={styles.imgContainer}>
                <CardImage id={1}></CardImage>
            </div>
            <h1 className={styles.title}>Fishtank {available[fishtank - 1]}</h1>
        </Link>
    )
}