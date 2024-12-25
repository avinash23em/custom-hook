import React, { useEffect, useState } from 'react'

export default function UseFetch(url){
    const[post,setpost]=useState({});
    const[load,setload]=useState(true);
    async function getposts(){
        setload(true);
    const response=await fetch(url)
    const json=await response.json();
    setpost(json);
    setload(false);
    }
    useEffect(()=>{
    getposts();

    },[url])

    return {
        post,
        load
    }

}