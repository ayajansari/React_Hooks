import { useRef, useState } from 'react'
import Child from './Child';
import MyContext from './MyContext';

function App() {
  const [childData, setChildData] = useState()
  const [cnt,setCnt]=useState(0);

  const fun1=()=>{
    console.log("function 1 called")
    setCnt(cnt*2);

  }

  return (
    <MyContext.Provider value={{cnt,setCnt,fun1}} >
      < div className='m-4 border border-blue-500 p-6'>
        <div className=''>Parent component</div>
        <br />
        <button className='text-2xl px-4 py-2 text-white hover:bg-violet-800 bg-violet-600  rounded-lg ' onClick={(e)=>setCnt(cnt+1)}>Button</button>
        <br />
        <div className='text-2xl py-4'>cnt : {cnt}</div>
        
        <br />
        
        <Child />
      </div>
    </MyContext.Provider>
  )
}

export default App
