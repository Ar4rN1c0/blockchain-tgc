import styles from "@/styles/Form.module.css"
import { isMobileDevice } from "@/functions/isMobile"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Errors } from "@/errors/errors"

export default function SendComponent({ date, period, fishtank }: { date: string, period: string, fishtank: string }) {
    let [inputWallet, setWallet] = useState('')
    let [inputName, setName] = useState('')
    let [error, setError] = useState('')
    let [showError, setShowError] = useState(true)
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

    function handleClose() {
        setShowError(false)
    }

    function sendFunc(dataSend: dataType) {

        if (dataSend.email && dataSend.wallet) {
            fetch('http://panel.jactc.xyz:3002/api/post/checkout/', {
                method: 'POST',
                body: JSON.stringify(dataSend),
                mode: isMobileDevice() ? "no-cors" : "cors",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(response => {
                    console.log(response)

                    router.push(isMobileDevice() ? response.url : response.qr)
                })
                .catch(error => {
                    console.log(error)
                    setError(Errors.IN_PROCESS)
                    setShowError(true)
                })
        } else {
            setShowError(true)
            setError(Errors.NOT_FILLED_FORM)
        }
    }

    function handleSubmit(e: React.FormEvent) {
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
        sendFunc(data)
    }

    return (
        <div className={styles.send}>
            {(error && showError) && <div className={styles.error}> <div className={styles.closeButton} onClick={handleClose}>×</div>{error}</div>}
            <form className={styles.form} onSubmit={handleSubmit}>
                <input className={styles.textInput} type="text" placeholder="Wallet" onChange={e => setWallet(e.target.value)} />
                <input className={styles.textInput} type="text" placeholder="Email" onChange={e => setName(e.target.value)} />
                <input className={styles.submit} type="submit" value="Reserve" placeholder="Make the reservation!" />
            </form>
        </div>
    )
}