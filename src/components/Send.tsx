import "./styles.css"
import { useState } from "react"

export default function SendComponent () {
    let [inputWallet, setWallet ] = useState('')
    let [inputName, setName] = useState('')

    interface dataType {
        name: string,
        wallet: string
    }

    function handleSubmit (e: React.FormEvent) {
        e.preventDefault();
        const data: dataType = {
            name: inputName,
            wallet: inputWallet
        }
        console.log(data)
        fetch('https://la-api-de-joaquin/api/reserve', {
            method: 'POST',
            headers: {
                'Content-type': 'applications/json'
            },
            body: JSON.stringify(data)
        }).catch(error => {console.log(error)})
    }

    return (
        <div className="send">
            <form className="form" onSubmit={handleSubmit}>
                <input className="text-input" type="text" placeholder="Wallet" onChange={e => setWallet(e.target.value)}/>
                <input className="text-input" type="text" placeholder="Name" onChange={e => setName(e.target.value)}/>
                <input className="submit" type="submit" value="Reserve" placeholder="Make the reservation!" />
            </form>
        </div>
    )
}