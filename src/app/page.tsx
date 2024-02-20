import Header from"./components/Header"
import styles from "@/app/Home.module.css"
import HeroImage from "../../public/Hero-Image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <section className={styles.mainSection}>
          <article className={styles.article}>
            <h1 className={styles.title}>
              The Global College Blockchain Club
            </h1>
            <p>
              Comprimised with new Web3 technologies. 
            </p>
          </article>
          <span className={styles.separator}></span>
          <article className={styles.article}>
            <HeroImage></HeroImage>
          </article>
          <a href="#ideaSection"className={styles.buttonDown}> 
            <p>
              &#8681;
            </p>
          </a>
        </section>
        <span className={styles.span} id="ideaSection"></span>
        <section className={styles.ideaSection}>
          <h2 className={styles.subtitle}>
            Obtain tokens, <br /> Reserve fishtanks with them
          </h2>
          <menu className={styles.menu}>
            <Link className={styles.linkButton} href="/reserve">Make your reservation</Link>
            <Link className={styles.linkButton} href="">How to gain tokens</Link>
          </menu>
        </section>
      </main>
    </>
  );
}
