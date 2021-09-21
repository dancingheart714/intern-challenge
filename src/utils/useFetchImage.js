import axios from 'axios';
import { useEffect, useState } from 'react'

const url = "//api.nasa.gov/planetary/apod?"
const key = "api_key=XqsRdChnd0Bq8ZZYyQwDpUYhjIkKfqVXW21PM8vH"

//eslint-disable-next-line
export default function useFetchImage(count) {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        axios.get(`${url}${key}&count=${count}`)
        .then(res => {
            setImages([...res.data])
            setIsLoading(false);
        })
        .catch(err => {
            setIsLoading(false);
        })
    }, [count])
    return [images, setImages, isLoading];
}