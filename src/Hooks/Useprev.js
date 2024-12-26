import { useEffect, useRef } from "react"

export const Useprev=(value)=>{
    const ref=useRef();
    useEffect(()=>{
ref.current=value;
    },[value])

return ref.current;
}