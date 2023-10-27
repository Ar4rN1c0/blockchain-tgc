import PeriodesMatrix from "../../../components/PeriodesArray"

export default async function FishtankID ( {params}: {params: {id: string}} ) {
    return (
        <section style={{display: "grid", placeItems: "center", placeContent: "center", width: "100vw"}}>
            <PeriodesMatrix fishtank={params.id}></PeriodesMatrix>
        </section>
    )
} 