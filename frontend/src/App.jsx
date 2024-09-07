import { useState, useEffect} from 'react'


export default function App() {

  const [cnt3,setCnt3]=useState(0);
  const [val,setVal]=useState("");

  useEffect(()=>{
    var str="";
    let interval=setInterval(() => {
      if( str.length<3) str+='.';
      else str="";
      setVal(str);
      console.log("str:",str)
    }, 1000);

    setTimeout(()=>{
      setCnt3(1);
      console.log("clearing all")
      clearInterval(interval)
    },8000);

  },[])

  return  cnt3?(
    <> 
        
      <h1 className='text-8xl text-center'>Home Page</h1>
       
    </>
  ): <div className='text-5xl text-white bg-blue-700 text-center py-[47vh]'>Loading {val}</div>
}
