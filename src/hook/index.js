import { useState, useEffect } from "react"
import api from "../services/api"

const useAxiosGet = (endpoint) => {
    const [coleta, setColeta] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await api.get(endpoint)
            setColeta(data)
        }
        fetchData();
    }, [endpoint])

    return { coleta }
}

export default useAxiosGet