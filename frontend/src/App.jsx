import { useState, useCallback, useEffect} from 'react'
import Home from '../home'
import Second from './useCallback/second';
import './App.css'

//NOTE-> useCallback returns function(new or old) but not call/execute function.
//we can execute that function by passing it to components .




export default function App() {

  const [cnt1,setCnt1]=useState(0);
  const [cnt2,setCnt2]=useState(0);
  const [cnt3,setCnt3]=useState(0);
  const [val,setVal]=useState("");


  console.log("outside upper")  //executes when any state variable changes

  //useCallback only returns the function(either previously cached one or new one) not call the function
  //when page first time render it will execute entire function first , cache it, and render the component Second also.
  //when cnt2 changes, on effect on useCallback so it will provide previously cached function
  //means handleClick var has same function ,i.e. it is not changed and it is also passed to 
  //Second component as prop,and  as it  also not changed therefore the component Second 
  //will not be re-rendered again.
  

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
