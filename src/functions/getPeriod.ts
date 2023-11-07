interface Obj {
    [key: number]: string
}

export default function getPeriod (periodId: number) {
    const Obj: Obj = {
        0: "8:30-9:20",
        1: "9:20-10:10",
        2: "10:30-11:20",
        3: "11:20-12:10",
        4: "12:10-13:00",
        5: "13:00-13:50",
        6: "13:50-2:40",
        7: "2:40-3:30",
        8: "3:50-4:40"
    }
    if(periodId in Obj) {
        return Obj[periodId]
    } else {
        console.log("Err")
    }
}