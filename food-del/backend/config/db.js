import mongoose from "mongoose";

export const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb+srv://check:Riya123@cluster0.0b9se.mongodb.net/food-del")
        .then(()=>console.log("DB Connected"))
        .catch((e)=>console.log(e.message))
    } catch (error) {
        console.log("connection error");
    }
        
    }

    
connectDB();  

