import { validateInput, NetworkError, DataError } from "../util/errorHandler";

export interface IPData {
    ip: string
    location: string
    timezone: string
    isp: string
    lat: number
    lng: number
}

export async function fetchIPData(query: string) {
    validateInput(query)

    const apiKey = import.meta.env.VITE_API_KEY
    if (!apiKey) {
        throw new Error("You didn't do this right bub")
    }

    const url = `https://geo.ipify.org/api/v1?apiKey=${apiKey}&${isNaN(Number(query)) ? `domain=${query}` : `ipAddress=${query}`
        }`


    const response = await fetch(url)
    if (!response.ok) {
        throw new NetworkError(`The internet is messin up: ${response.status}`)
    }

    const data = await response.json()
    if (!data || typeof data !== "object") {
        throw new DataError("That's not what i was expecting")
    }

    return {
        ip: data.ip,
        location: `${data.location.city}, ${data.location.region}`,
        timezone: `UTC ${data.location.timezone}`,
        isp: data.isp,
        lat: data.location.lat,
        lng: data.location.lng,
    }
}