import { useEffect, useState } from "react";

function useWeatherInfo(location){

    const [data , setData] = useState({});

    useEffect(() => {
        
        fetch(`https://api.weatherapi.com/v1/current.json?key=7e63121d75aa4e97a5261828250905&q=${location}`)
        .then((res) => res.json())
        .then((res) => setData(res))
        console.log(data)
    },[location])

    return data;
}

export default useWeatherInfo