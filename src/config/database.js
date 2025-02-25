import mongoose from "mongoose";
import { sendError } from "../helper/sender.js";

export const database = async ()=>{
    try {
        
        const {connection} = await mongoose.connect('mongodb://127.0.0.1:27017/dawt',{})

        console.log('Database Connected',connection.host)


    } catch (error) {
        console.log('database not connect')
      
    }
}