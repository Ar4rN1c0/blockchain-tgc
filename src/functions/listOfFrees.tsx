export default function listOfFrees (date: any) {
    const periodos = ["1", "2", "3", "4", "5", "6", "7", "8"]
    
    interface reservaType {
        period: string,
        wallet: string
    }

    return (
        periodos.map(periodo => ({
            period: periodo,
            IsOcc: date.some((reserva: reservaType) => reserva.period === periodo),
        }))
    )
}