import Timetable from "@/app/components/Timetable";

export default function FhishTank ( { params }: { params: { id: string } } ) {
    const {id} = params
    return(
        <Timetable fishTank={parseInt(id)}></Timetable>
    )
}