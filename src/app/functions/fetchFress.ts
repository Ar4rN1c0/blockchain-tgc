import config from "../../../config.json";
import { optionsType} from "@/app/types/types";



export default async function fetchFrees(date: string, fishtank: string) {
    const options: optionsType = { 
        method: "GET",
        headers: { 
            date: date, 
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*" 
        }, 
        cache: "no-store"
    };
    return fetch(`${config.url}/api/get/fishtank/${fishtank}`, options as unknown as RequestInit)
        .then(res => res.json())
        .catch(err => console.log(err));
}