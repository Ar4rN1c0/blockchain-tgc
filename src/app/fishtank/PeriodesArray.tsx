import styles from './../../components/Timetable.module.css'
import getDates from "@/methods/getDates";
import getPeriod from "@/methods/getPeriod";
import Occupied from './[id]/Occupied';
import Free from './[id]/Free';

const getOcc = () => {
    return fetch("https://probable-space-memory-v97xwrr799x2w75j-3000.app.github.dev/array", {cache: 'no-store'}).then(res => res.json())
} 



export default async function PeriodesMAtrix ( {fishtank}: {fishtank: string} ) {
        
    const { today, tomorrow, next } = getDates();

    const frees = await getOcc()

    interface periodType {
        isOc: boolean,
        id: number
    }

    return (

        
        <section className={styles.timetable}>
            <h1>
                Fishtank {fishtank}
            </h1>
            <div className={styles.cols} id={today}>          
                <label>{today}</label>
                {frees[0].periodes.map((period: periodType, index: number) => (
                        period.isOc ? <Occupied></Occupied> : <Free>{getPeriod(index)}</Free>
                    ))}
            </div>
            <div className={styles.cols} id={tomorrow}>
                <label>{tomorrow}</label>
                {frees[1].periodes.map((period: periodType, index: number) => (
                        period.isOc ? <Occupied></Occupied> : <Free>{getPeriod(index)}</Free>
                    ))}
            </div>
            <div className={styles.cols} id={next}>
                <label>{next}</label>
                {frees[2].periodes.map((period: periodType, index: number) => (
                        period.isOc ? <Occupied></Occupied> : <Free>{getPeriod(index)}</Free>
                    ))}
            </div>
            
        </section>
    )
}