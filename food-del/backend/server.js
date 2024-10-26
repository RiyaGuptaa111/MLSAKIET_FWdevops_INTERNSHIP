import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


const app=express()
const port=4000

//middleware
app.use(express.json())//req from front end will be parsed for backend
app.use(cors())//access backend from frontend
//db connection
connectDB();

//api end point
app.use("/api/food",foodRouter)

//see uploaded images on frontend
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

//run express server on thunderclient
app.get("/",(req,res)=>{
    res.send("API Working")
})

//run express server on browser
app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})


//mongodb+srv://check:Riya123@cluster0.0b9se.mongodb.net/?