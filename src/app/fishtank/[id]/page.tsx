import PeriodesMatrix from "../../../components/PeriodesArray"

export default async function FishtankID ( {params}: {params: {id: string}} ) {
    return (
        <main style={{display: "grid", placeItems: "center", placeContent: "center", width: "100vw", background: "background: linear-gradient(90deg, rgba(41,107,112,1) 0%, rgba(240,248,255,1) 100%)"}}>
            <PeriodesMatrix fishtank={params.id}></PeriodesMatrix>
        </main>
    )
} 