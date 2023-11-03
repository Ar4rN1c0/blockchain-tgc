import Link from "next/link";
import styles from "./Header.module.css"

export default function Header () {
    const links = [
        {
          label: 'Home',
          route: '/'
        },
        {
          label: 'About',
          route: '/about'
        },
        {
          label: 'Fishtank Select',
          route: 'fishtank'
        }
      ];
      
    return (
        <header className={styles.header}>
            <h1>
                BlockChainClub TGC
            </h1>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    {links.map(({label, route}) => (
                    <li className={styles.item} key ={route}>
                        <Link className={styles.link} href={route}>{label}</Link>
                    </li>
                    ))}
                </ul>
            </nav>
      </header>
    )
}