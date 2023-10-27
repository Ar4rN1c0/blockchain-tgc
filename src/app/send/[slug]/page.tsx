export default function SendData ( { params }: {params: {slug: string}} ) {
    let hour = params.slug
    let arr  = hour.split('%')
    
    return (
        <h1>
            {arr}
        </h1>
    )
}