import React from "react";
import { memo } from "react";

//we have put the function in memo so this function will only be rendered 
//when value field changes.

const Second=memo(function Second({value}){

    console.log("home is calling",value)
    return (
        <div>
            <h2>Mohammad Ayaj</h2>
            <form >
                <input type="text" name="name" placeholder="enter your name" />
                <button type="submit"> Submit</button>
            </form>
        </div>

    )

});
export default Second