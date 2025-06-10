import React, { useEffect, useState } from "react";

function Github(){
    const[data, setData]  =  useState([])
    useEffect(()=>{
    fetch('https://api.github.com/users/Ali-Muhammad-5921')
        .then(response => response.json())
        .then(data => {
            setData(data)
        })
    },[])

    return (
        <>
            <div className="bg-blue-600 text-center m-4 text-white p-4 text-3xl">
                GitHub :3
                <img src={data.avatar_url} alt="Git picture" width={300} />
            </div>
        </>
    )
}

export default Github