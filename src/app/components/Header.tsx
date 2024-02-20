import styles from "@/app/styles/Header.module.css"
import Logo from "../../../public/Logo"
import Link from "next/link"
export default function Header () {
    return (
        <header className={styles.header}>
            <Logo></Logo>
            <menu className={styles.menu}>
                <ul className={styles.listMenu}>
                    <li><Link className={styles.itemMenu} href="/">Home</Link></li>
                    <li><Link className={styles.itemMenu} href="/reserve">Reserve Fishtank</Link></li>
                    <li><Link className={styles.itemMenu} href="/about">About</Link></li>
                </ul>
            </menu>
        </header>
    )
}