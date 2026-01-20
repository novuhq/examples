import express from "express";
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRoute from "./routes/user.js";
import noteRoute from "./routes/note.js";


dotenv.config();
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());


app.use("/users",authRoute);
app.use("/notes",noteRoute);

app.get('/',(req,res)=>{
    res.send("MERN project is successfully running");
})



const CONNECTION_URL=process.env.MONGO_CONNECTION_URL;

const PORT= process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`server running on port: ${PORT}`)))
    .catch((error)=>console.log(error));
