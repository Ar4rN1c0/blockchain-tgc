import styles from './Timetable.module.css';
import getDates from "@/functions/getDates";
import getPeriod from "@/functions/getPeriod";
import Occupied from '../app/fishtank/[id]/Occupied';
import Free from '../app/fishtank/[id]/Free'; 

const getOcc = () => {
    return fetch("http://localhost:3001/array", {cache: 'no-store'}).then(res => res.json())
} 

const options = {method: 'GET', headers: {date: '2023-11-02'}};

function fetchData () {
    return fetch('https://v57nr3jh-3000.uks1.devtunnels.ms/api/get/fishtank/1', options)
   .then(response => response.json())
   .catch(err => console.error(err));
 }

export default async function PeriodesMAtrix ( {fishtank}: {fishtank: string} ) {

    const data = await fetchData()
     
    const periodos = ["1", "2", "3", "4", "5", "6", "7", "8"]
    const periodosConEstado = periodos.map(periodo => ([{
        period: periodo,
        IsOcc: data.some(reserva => reserva.period === periodo),
    }]));
   return periodosConEstado
   console.log(periodosConEstado)

        
    const { today, tomorrow, next } = getDates();
    let dates = [today, tomorrow, next]

    const frees = await getOcc();

    interface periodType {
        isOc: boolean,
        id: number
    }
    return (
        <section>
            <h1>
                Fishtank {fishtank}
            </h1>
            <section className={styles.timetable}>
                <div className={styles.cols} id={today}>          
                    <label>{today}</label>
                    {frees[0].periodes.map((period: periodType, index: number) => (
                            period.isOc ? <Occupied key={period.id}></Occupied> : <div><Free key={period.id} fishtank={fishtank} periode={`${getPeriod(index)}`} date={`${today}`}>{`${getPeriod(index)}`}</Free></div>
                        ))}
                </div>
                <div className={styles.cols} id={tomorrow}>
                    <label>{tomorrow}</label>
                    {frees[1].periodes.map((period: periodType, index: number) => (
                            period.isOc ? <Occupied key={period.id}></Occupied> : <Free key={period.id} fishtank={fishtank}  periode={`${getPeriod(index)}`} date={`${tomorrow}`}>{`${getPeriod(index)}`}</Free>
                        ))}
                </div>
                <div className={styles.cols} id={next}>
                    <label>{next}</label>
                    {frees[2].periodes.map((period: periodType, index: number) => (
                            period.isOc ? <Occupied key={period.id}></Occupied> : <Free key={period.id} fishtank={fishtank} periode={`${getPeriod(index)}`} date={`${next}`}>{`${getPeriod(index)}`}</Free>
                        ))}
                </div>
                
                <div>

                </div>
            </section>
        </section>

    )
}