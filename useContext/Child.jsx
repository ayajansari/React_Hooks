import React, { useContext, useState } from "react";
import MyContext from "./context/MyContext";
import Child2 from "./Child2";


function Child(){
    const {cnt,setCnt}=useContext(MyContext)

    return (
        <div className="border-blue-500 border p-6">
            Child component
            <br />
            <br />
            
            <button className='text-xl px-4 py-2 mx-4 text-white hover:bg-violet-800 bg-violet-600  rounded-lg ' onClick={(e)=>setCnt(cnt-1)}>Button </button>
            <div className="p-4 text-2xl">cnt : {cnt}</div>
            <Child2 />
        </div>

    )
}

export default Child