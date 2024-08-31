import express from "express"
import cors from "cors"
const app=express()
app.use(cors())



console.log("hell")
app.get("/",(req,res)=>{
    console.log("hello")
    res.send("hello");
})
app.get("/home",(req,res)=>{
    
})

app.listen(4000,()=>{
    console.log("server is running on port "+4000);
})