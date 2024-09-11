import React, { useContext, useState } from "react";
import MyContext from "./MyContext";



function Child2(){
    const {cnt,setCnt,fun1}=useContext(MyContext)

    return (
        <div className="border-blue-500 border p-6">
            Child component2
            <br />
            <br />
            
            <button className='text-xl px-4 py-2 mx-4 text-white hover:bg-violet-800 bg-violet-600  rounded-lg ' onClick={(e)=>setCnt(cnt-1)}>Button </button>
            <div className="p-4 text-2xl">cnt : {cnt}</div>
            <button className='text-xl px-4 py-2 mx-4 text-white hover:bg-green-800 bg-green-600  rounded-lg ' onClick={(e)=>fun1(cnt)}>Button </button>
            
        </div>

    )
}

export default Child2