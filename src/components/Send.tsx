import styles from "@/styles/Form.module.css"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SendComponent ( {date, period, fishtank}: {date: string, period: string, fishtank: string} ) {
    let [inputWallet, setWallet ] = useState('')
    let [inputName, setName] = useState('')
    let router = useRouter()

    interface dataType {
        email: string,
        wallet: string,
        date: string,
        period: string,
        fishtank: string,
        hash: string,
        name: string
    }

    function handleSubmit (e: React.FormEvent) {
        e.preventDefault();
        const data: dataType = {
            email: inputName,
            wallet: inputWallet,
            date: date,
            period: period,
            fishtank: fishtank,
            hash: "eysdgIUA",
            name: "eawgrea"
        }
        console.log(data)
        fetch('http://panel.jactc.xyz:3002/api/post/rsvp/', {
            method: 'POST',
            body: JSON.stringify(data) ,
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(error => {console.log(error)}).then(() => router.refresh())
      }

    return (
        <div className={styles.send}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input className={styles.textInput} type="text" placeholder="Wallet" onChange={e => setWallet(e.target.value)}/>
                <input className={styles.textInput} type="text" placeholder="Email" onChange={e => setName(e.target.value)}/>
                <input className={styles.submit} type="submit" value="Reserve" placeholder="Make the reservation!" />
            </form>
        </div>
    )
}