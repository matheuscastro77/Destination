import { useEffect, useState } from 'react'
import axios from 'axios'

const UseRequestData = (initialState, url) => {
    const [dataCountry, setDataCountry] = useState(initialState)
    const [dataCity, setDataCity] = useState(initialState)
    
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setDataCountry(response.data)
                setDataCity(response.data)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [url])

    return [dataCountry, setDataCountry, dataCity, setDataCity]
}
export default UseRequestData
