import { act, useState,useRef } from 'react'

import './App.css'
import useFetch from './Hooks/Usefetch'
import { Useprev } from './Hooks/Useprev';
// function useCounter(){
//   const[count,setcount]=useState(0);
//   function increase(){
//     setcount(count+1);
//   }
// return {
//   count:count,
//   increase:increase
// }

// }

// function App() {
//   return (
// <div>
//   <Counter/>
//   <Counter/>
//   <Counter/>
//   </div>
//   )

// }
// function Counter(){
//   const {count,increase}=useCounter();

//   return (
//     <>
//       <button onClick={increase}> increase {count}</button>
//     </>
//   )
// }

// usefetch implementation 


// function App(){
//    const[page,setpage]=useState(1);
//   const{post,load}=useFetch("https://jsonplaceholder.typicode.com/posts/"+page);
//   if(load){
//     return (
//       <div>
//       loading......
//       </div>
//     )
//   }
//   return (
//   <div>
//   <button onClick={()=> setpage(1)}>page 1</button>
//   <button onClick={()=> setpage(2)}>page 2</button>
//   <button onClick={()=> setpage(3)}>page 3</button>

//     {JSON.stringify(post)}
//   </div>
// )
// }


//use prev implementation 

// function App(){
//   const[curr,setcurr]=useState(0);
//   const prev=Useprev(curr);
  
// return(
//   <div>
//     <button onClick={()=>{
//       setcurr((curr)=>curr+1);
//     }}>click me {curr}</button>
//     <p>the previous value was {prev}</p>
//   </div>
// )
// }

//useDebounce implementation
function Usedebounce(original_fn){

const curr=useRef();
const fn=()=>{
clearTimeout(curr.current);
curr.current=setTimeout(original_fn,200);

}
return fn;


}

function App(){
  function sendtoback(){
    fetch("api.amazon.com/search")
  }
  const debounce=Usedebounce(sendtoback);

  return (
    <div>
      <input type="text" onChange={debounce}></input>
    </div>
  )

}


export default App
