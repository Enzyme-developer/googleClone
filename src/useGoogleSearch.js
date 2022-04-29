import React, { useState, useEffect } from 'react'
const { REACT_APP_API_KEY , REACT_APP_CONTEXT_KEY} = process.env

const useGoogleSearch = (term) => {
    const [ data , setData ] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${REACT_APP_API_KEY}
                &cx=${REACT_APP_CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }
        fetchData()
    }, [term])

    return { data };
    
}

export default useGoogleSearch