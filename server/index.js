const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const contactRoutes = require("./routes/contactRoutes");

dotenv.config();

//connectDB();

const app = express();
const PORT = process.env.PORT || 8000 ;

app.use(cors());
app.use(express.json());

app.use("/api", userRoutes );
app.use("/api/contact", contactRoutes );

app.listen(PORT,()=>{
    console.log(`server running on Port ${PORT}`)
})

//test route
app.get("/",(req, res)=>{
    return res.status(200).json({msg:"working"})
})