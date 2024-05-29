import express from "express"
import mongoose from 'mongoose';
import linkRoute from './route/code.route.js'
import cors from 'cors'
import dotenv from 'dotenv'



const app =express();



app.use(express.json())

app.use(cors())

dotenv.config();

let URI =process.env.MONGOURI
let PORT =process.env.PORT || 4000

try {
    await mongoose.connect(URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
);
    console.log("Connected to mongodb")
    
} catch (error) {
    console.log("Error :",error)
}



app.use('/link',linkRoute)

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})




