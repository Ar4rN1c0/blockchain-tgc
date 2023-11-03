import "./styles.css"
import { useState } from "react"


export default function SendComponent ( {date, period, fishtank}: {date: string, period: string, fishtank: string} ) {
    let [inputWallet, setWallet ] = useState('')
    let [inputName, setName] = useState('')

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
        fetch('https://v57nr3jh-3000.uks1.devtunnels.ms/api/post/rsvp/', {
            method: 'POST',
            body: JSON.stringify(data) ,
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(error => {console.log(error)})
      }

    return (
        <div className="send" className={period}>
            <form className="form" onSubmit={handleSubmit}>
                <input className="text-input" type="text" placeholder="Wallet" onChange={e => setWallet(e.target.value)}/>
                <input className="text-input" type="text" placeholder="Email" onChange={e => setName(e.target.value)}/>
                <input className="submit" type="submit" value="Reserve" placeholder="Make the reservation!" />
            </form>
        </div>
    )
}