import styles from './Timetable.module.css'
import getDates from "@/functions/getDates";
import getPeriod from "@/functions/getPeriod";
import Occupied from '../app/fishtank/[id]/Occupied';
import Free from '../app/fishtank/[id]/Free';

const getOcc = () => {
    return fetch("http://localhost:3001/array", {cache: 'no-store'}).then(res => res.json())
} 



export default async function PeriodesMAtrix ( {fishtank}: {fishtank: string} ) {
        
    const { today, tomorrow, next } = getDates();
    let dates = [today, tomorrow, next]

    const frees = await getOcc();

    interface periodType {
        isOc: boolean,
        id: number
    }
    let state = false
    const change = () => state = !state
    return (
        <section>
            <h1>
                Fishtank {fishtank}
            </h1>
            <section className={styles.timetable}>
                <div className={styles.cols} id={today}>          
                    <label>{today}</label>
                    {frees[0].periodes.map((period: periodType, index: number) => (
                            period.isOc ? <Occupied key={period.id}></Occupied> : <div><Free periode={`${getPeriod(index)}`} date={`${today}`}>{`${getPeriod(index)}`}</Free></div>
                        ))}
                </div>
                <div className={styles.cols} id={tomorrow}>
                    <label>{tomorrow}</label>
                    {frees[1].periodes.map((period: periodType, index: number) => (
                            period.isOc ? <Occupied key={period.id}></Occupied> : <Free  periode={`${getPeriod(index)}`} date={`${tomorrow}`}>{`${getPeriod(index)}`}</Free>
                        ))}
                </div>
                <div className={styles.cols} id={next}>
                    <label>{next}</label>
                    {frees[2].periodes.map((period: periodType, index: number) => (
                            period.isOc ? <Occupied key={period.id}></Occupied> : <Free periode={`${getPeriod(index)}`} date={`${next}`}>{`${getPeriod(index)}`}</Free>
                        ))}
                </div>
                
                <div>

                </div>
            </section>
        </section>

    )
}