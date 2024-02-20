import Image from "next/image"
import Link from "next/link"
import styles from "@/app/styles/Header.module.css"

export default function Logo () {
    return (
      <Link className={styles.link} href="/">
        <Image src="/bitmap.svg" alt="Logo" width="80" height="80"></Image>
      </Link>
    )
}