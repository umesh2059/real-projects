import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/userRoutes.js"

import mongoose from "mongoose";

dotenv.config();

app.use("/api/users",userRoutes);
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log(" mongodb connected to db")
})
.catch((err)=>{
    console.log(err)

})

const app = express();
app.use(cors());
app.use(express.json());

// app.get("/",(req,res)=>{
//     res.send("backend is runnning");
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});