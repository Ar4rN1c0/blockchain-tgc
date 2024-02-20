import Image from "next/image"
import styles from "@/app/Home.module.css"

export default function HeroImage () {
    return (
        <Image className={styles.heroImage} alt="Image" width="2000" height="1000" src="/Hero-Image.jpg"></Image>
    )
}