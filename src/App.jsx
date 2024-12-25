import { act, useState } from 'react'

import './App.css'
import useFetch from './Hooks/Usefetch'
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
function App(){
   const[page,setpage]=useState(1);
  const{post,load}=useFetch("https://jsonplaceholder.typicode.com/posts/"+page);
  if(load){
    return (
      <div>
      loading......
      </div>
    )
  }
  return (
  <div>
  <button onClick={()=> setpage(1)}>page 1</button>
  <button onClick={()=> setpage(2)}>page 2</button>
  <button onClick={()=> setpage(3)}>page 3</button>
  
    {JSON.stringify(post)}
  </div>
)
}


export default App
