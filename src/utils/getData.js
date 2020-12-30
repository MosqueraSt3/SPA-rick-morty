const API = 'https://rickandmortyapi.com/api/character/'

const getData = async id => {
    const apiURL = id ? `${API}${id}` : API 
    try {
        const res = await fetch(apiURL)
        const data = await res.json()
        return data
    } catch (err) {
        console.error(`|| ERROR || ${err}`)
    }
}

export default getData