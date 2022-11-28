type originAndLocation = {
    name: string
}

export type CharactersFromApi = Array<{
    name: string
    status: string
    species: string
    gender: string
    origin: originAndLocation
    location: originAndLocation
    image: string
    episode: Array<string>
}>

export type Episode = {
    name: string
    air_date: string
    episode: string
}