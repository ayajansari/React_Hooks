import React, { useState } from "react";
import { forwardRef } from "react";

//NOTE-> forwardRef takes exactly 2 params. props and ref.
//one ref is used for only single use so if if you want to 
//use then make multiple refs and pass as props.
const Child=forwardRef(function Child(props,ref){
    const {ref2,ref3,...otherProps}=props;
    const [cnt,setCnt]=useState(0);

    return (
        <div>
            
            <input type="text" className="py-2 px-6 my-2 border-2 border-blue-300" placeholder="enter your name" ref={ref2} />

            <button className='text-xl px-4 py-2 mx-4 text-white hover:bg-violet-800 bg-violet-600  rounded-lg ' 
                    onClick={(e)=> setCnt(cnt+1)} 
                    ref={ref}
            >       
                Count {cnt}
            </button>
        </div>
    )
})

export default Child