/* eslint-disable react/react-in-jsx-scope */
import styles from "@/app/styles/Free.module.css";
import FreeFunc from "./FreeFunc";

export default function Free ({period, date}: {period: number, date: string}) {
    return (
        <article className={styles.freeArticle}>
            <FreeFunc date={date} period={period}></FreeFunc>
        </article>
    );
}