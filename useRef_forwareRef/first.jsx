import { useRef, useState } from 'react'
import Child from './second';


function App() {
  const [childData, setChildData] = useState()
  const [cnt,setCnt]=useState(0);
  const ref1=useRef(null);
  const ref2=useRef(null);
  const ref3=useRef(null);

  
  const handle=()=>{
    console.log(ref1.current.innerHTML);
    console.log(ref2.current.value);
    setChildData(ref2.current.value);
    setCnt(ref1.current.innerHTML.substr(6));

  }
  
  return (
    < div className='m-4'>
      <div className='text-2xl'>  Hello Ayaj Ansari</div>
      <br />
      <button className='text-2xl px-4 py-2 text-white hover:bg-violet-800 bg-violet-600  rounded-lg ' onClick={handle}>Get Data</button>
      <br />
      <br />
      <div className='text-2xl'>input field data : {childData}</div>
      <div className='text-2xl'>child count is : {cnt}</div>
      <br />
      
      <Child ref={ref1} ref2={ref2}/>
    </div>
  )
}

export default App
