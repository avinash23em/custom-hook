import { act, useState } from 'react'

import './App.css'
import usePosttitle from './Hooks/Usefetch'
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
  const posttitle=usePosttitle();
  return (
  <div>
    {posttitle}
  </div>
)
}


export default App
