import styles from '@/styles/Timetable.module.css';
import getDates from "@/functions/getDates";
import getPeriod from "@/functions/getPeriod";
import fetchFrees from '@/functions/fetchFrees';
import Occupied from './Occupied';
import Free from './Free';
import listOfFrees from '@/functions/listOfFrees';
import ListOfPeriodes from './ListOfPeriodes';

export default async function PeriodesMatrix({ fishtank }: { fishtank: string }) {

    const { today, tomorrow, next } = getDates();

    const dataToday = await fetchFrees(today, fishtank)
    const freesToday = listOfFrees(dataToday)
    const dataTomorrow = await fetchFrees(tomorrow, fishtank)
    const freesTomorrow = listOfFrees(dataTomorrow)
    const dataNext = await fetchFrees(next, fishtank)
    const freesNext = listOfFrees(dataNext)

    if (fishtank === "1" || fishtank === "2") {

        return (
            <section>
                <h1>
                    Fishtank {fishtank}
                </h1>
                <article className={styles.timetable}>
                    <section className={styles.cols} id={today}>
                        <label>{today}</label>
                        <ListOfPeriodes fishtank={fishtank} date={today} listOfFrees={freesToday}/>
                   </section>
                    <section className={styles.cols} id={tomorrow}>
                        <label>{tomorrow}</label>
                        <ListOfPeriodes fishtank={fishtank} date={tomorrow} listOfFrees={freesTomorrow}/>
                    </section>
                    <section className={styles.cols} id={next}>
                        <label>{next}</label>
                        <ListOfPeriodes fishtank={fishtank} date={next} listOfFrees={freesNext}/>
                    </section>
                </article>
            </section>
        )
    } else {
        return (
            <div>
                That fishtank is not available to reservations
            </div>
        )
    }
}