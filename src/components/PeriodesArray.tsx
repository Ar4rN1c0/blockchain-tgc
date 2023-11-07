import styles from '@/styles/Timetable.module.css';
import getDates from "@/functions/getDates";
import getPeriod from "@/functions/getPeriod";
import Occupied from './Occupied';
import Free from './Free'; 

interface headersType {
    date: string
}
interface optionsType {
    method: string
    headers: headersType
    cache: string
}


function fetchData (date: string, fishtank: string) {
    const options: optionsType = {method: 'GET', headers: {date: date}, cache: 'no-store'};
    return fetch(`http://panel.jactc.xyz:3002/api/get/fishtank/${fishtank}`, options as unknown as RequestInit)
   .then(response => response.json())
}


interface reservaType {
    period: string,
    wallet: string
}


export default async function PeriodesMAtrix ( {fishtank}: {fishtank: string} ) {

    const { today, tomorrow, next } = getDates();

    const periodos = ["1", "2", "3", "4", "5", "6", "7", "8"]
    const dataToday = await fetchData(today, fishtank)
    const freesToday = periodos.map(periodo => ({
        period: periodo,
        IsOcc: dataToday.some((reserva: reservaType) => reserva.period === periodo),
    }));
    const dataTomorrow = await fetchData(tomorrow, fishtank)
    const freesTomorrow = periodos.map(periodo => ({
        period: periodo,
        IsOcc: dataTomorrow.some((reserva: reservaType) => reserva.period === periodo),
    }))
    const dataNext = await fetchData(next, fishtank)
    const freesNext = periodos.map(periodo => ({
        period: periodo,
        IsOcc: dataNext.some((reserva: reservaType) => reserva.period === periodo),
    }))

    return (
        <section>
            <h1>
                Fishtank {fishtank}
            </h1>
            <article className={styles.timetable}>
                <section className={styles.cols} id={today}>          
                    <label>{today}</label>
                    {freesToday.map((period, index: number) => (
                            <div key={period.period}>
                                {period.IsOcc ? <Occupied></Occupied> : <div><Free fishtank={fishtank} periode={`${index+1}`} date={`${today}`}>{`${getPeriod(index)}`}</Free></div>}
                            </div>
                        ))}
                </section>
                <section className={styles.cols} id={tomorrow}>
                    <label>{tomorrow}</label>
                    {freesTomorrow.map((period, index: number) => (
                            <div key={period.period}>
                                {period.IsOcc ? <Occupied></Occupied> : <Free fishtank={fishtank} periode={`${index+1}`} date={`${tomorrow}`}>{`${getPeriod(index)}`}</Free>}
                            </div>
                        ))}
                </section>
                <section className={styles.cols} id={next}>
                    <label>{next}</label>
                    {freesNext.map((period, index: number) => (
                            <article key={period.period}>
                                {period.IsOcc ? <Occupied></Occupied> : <Free fishtank={fishtank}  periode={`${index+1}`} date={`${next}`}>{`${getPeriod(index)}`}</Free>}
                            </article>
                        ))}
                </section>
            </article>
        </section>
    )
}