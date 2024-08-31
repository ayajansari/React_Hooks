import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  
  const [data, setData] = useState("NULL")
  const [cnt,setCnt]=useState(0);
  useEffect(()=>{

    const fetchData=async ()=>{
      const res=await axios.get('http://localhost:4000/');
      setData(res.data);
       
    }
    fetchData();
  },[]);

  const handleClick=()=>{
    setCnt(cnt+1);
  }
  return (
    <>
      <h1 className='text-pink-500'>Ayaj Ansari</h1>
      <h2>{data}</h2>
      <button className="bg-green-600 py-2 px-4 text-xl m-4 rounded-md text-white" onClick={handleClick}>Button {cnt}</button>

   
        
    </>
  )
}

export default App
