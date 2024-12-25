import React, { useEffect, useState } from 'react'

export default function usePosttitle(){
    const[post,setpost]=useState({});
    async function getposts(){
    const response=await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const json=await response.json();
    setpost(json);
    }
    useEffect(()=>{
    getposts();

    },[])

    return post.title;

}