import Image from "next/image"
import styles from "@/app/styles/Card.module.css"

export default function CardImage ({ id }:{ id: number }) {
    return (
        <Image className={styles.image} width="500" height="50" alt="Hola" src={`/card-image-${id}.jpg`}></Image>
    )
}