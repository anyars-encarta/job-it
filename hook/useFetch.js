import { useState, useEffect } from 'react';
import axios from 'axios';
// import { REACT_NATIVE_X_RAPID_API_KEY } from '@env';

 const rapidApiKey = 'f46b04882dmshf34baf277a8c927p10223fjsn15de2f5d6d1b'

//  console.log('The API Key: ', rapidApiKey);

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState('false');
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            // 'x-rapidapi-key': rapidApiKey,
            'x-rapidapi-key': rapidApiKey,
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };

    const fetchData = async () => {
        setIsLoading(true)

        try {
            const response = await axios.request(options)
            setData(response.data.data);
            setIsLoading(false);
        } catch (e) {
            setError(e);
            alert('There is an error, please try again later.')
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;