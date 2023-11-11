interface headersType {
    date: string
}

interface optionsType {
    method: string
    headers: headersType
    cache: string
}

export default function fetchFrees(date: string, fishtank: string) {
    const options: optionsType = { method: 'GET', headers: { date: date }, cache: 'no-store' };
    return fetch(`http://panel.jactc.xyz:3002/api/get/fishtank/${fishtank}`, options as unknown as RequestInit)
        .then(response => response.json())
}
