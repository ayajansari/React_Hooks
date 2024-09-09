import { useState, useCallback} from 'react'
import './App.css'

//NOTE-> useCallback returns function(new or old) but not call/execute function.
//we can execute that function by passing it to components .

function App() {

  const [cnt1,setCnt1]=useState(0);
  const [cnt2,setCnt2]=useState(0);

  console.log("outside upper")  //executes when any state variable changes

  //useCallback only returns the function(either previously cached one or new one) not call the function
  //when page first time render it will execute entire function first , cache it, and render the component Second also.
  //when cnt2 changes, no effect on useCallback so it will provide previously cached function
  //means handleClick var has same function ,i.e. it is not changed and it is also passed to 
  //Second component as prop,and  as it  also not changed therefore the component Second 
  //will not be re-rendered again.

  const handleClick=useCallback((e)=>{
    e.preventDefault();
    const fetchData= ()=>{

      console.log("callback is running",e.target.name.value)
    }
    fetchData();
  },[cnt1]);

  // console.log("outside lower")  //executes when any state variable changes

  return (
    <>
      <button className="bg-green-600 py-2 px-4 text-xl m-4 rounded-md text-white" onClick={(e)=> setCnt1(cnt1+1)}>Button {cnt1}</button>
      <button className="bg-blue-600 py-2 px-4 text-xl m-4 rounded-md text-white" onClick={(e)=> setCnt2(cnt2+1)}>Button {cnt2}</button>

        {/* below comp. will be re-rendered only when handleClick changes */}
        <Second  onSubmit={handleClick}/> 
        <br />
        
        {/* below 2 will be re-rendered always */}
        <br />
        
        <Sample value={cnt2}/>
        <br />
        <br />
        <Sample1 value={cnt1}/>
    </>
  )
}
export default App


function Sample({value}){

  console.log("sample component is running",value);

  return(

    <div> Sample Division</div>
  )
}


function Sample1({value}){

  console.log("sample1 component is running",value);

  return(

    <div> Sample2 Division</div>
  )
}
