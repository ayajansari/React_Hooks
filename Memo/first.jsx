import { useState, useEffect} from 'react'
import Second from './second';


export default function App() {

  const [cnt,setCnt]=useState(0);
  const [cnt1,setCnt1]=useState(0);
  return  (
    
    <>    
     {/* entire App component re-renders when any state var. changes irrespective
     of the props passed.So to stop re-rendering or child components we have to pass 
     the child component in memo()  function. */}
   
        <div>
          <h1 className='text-8xl pb-10 text-center'>Home Page</h1> 
          <Second value={cnt}/>
          <button className="bg-green-600 py-2 px-4 text-xl m-4 rounded-md text-white" onClick={(e)=> setCnt(cnt+1)}>Button {cnt}</button>
          <button className="bg-green-600 py-2 px-4 text-xl m-4 rounded-md text-white" onClick={(e)=> setCnt1(cnt1+1)}>Button {cnt1}</button>
          <hr />
        </div>

    </>
  )
}
