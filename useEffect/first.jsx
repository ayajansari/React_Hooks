import { useState, useEffect} from 'react'
import Home from '../home'
import './App.css'


function App() {

  const [cnt1,setCnt1]=useState(0);
  const [cnt2,setCnt2]=useState(0);
  const [show,setShow]=useState(1);
  
  console.log("outside upper")

  useEffect(()=>{

    console.log("component is mounted")

  },[cnt1,cnt2]);


  return (
    <>
    <div >
      <button className='py-2 px-4 bg-pink-200 m-4 rounded-md' onClick={(e)=>setShow(!show)}>Toggle</button>
      {show==true? 
        <div>
          <button className="bg-green-600 py-2 px-4 text-xl m-4 rounded-md text-white" onClick={(e)=> setCnt1(cnt1+1)}>Button {cnt1}</button>
          <button className="bg-blue-600 py-2 px-4 text-xl m-4 rounded-md text-white" onClick={(e)=> setCnt2(cnt2+1)}>Button {cnt2}</button>
        </div>:""
      }
      </div>
    </>
  )
}

export default App