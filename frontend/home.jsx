import React from "react";
import { memo } from "react";


const Home=memo(function Home({onSubmit}){

    console.log("home is calling")
    return (
        <div>
            <h2>Mohammad Ayaj</h2>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" placeholder="enter your name" />
                <button type="submit"> Submit</button>
            </form>
        </div>

    )

});
export default Home