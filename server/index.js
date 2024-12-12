const express=require("express");
const cors=require("cors");
const UserRoute=require("../server/Routes/user routes");
const Mongoose  = require("mongoose");

const app=express();
Mongoose.connect("mongodb://localhost:27017/")
.then(()=>console.log("mongodb connected successfully"))
.catch((error)=> console.log(error));

const coreOptions={
    origin: ["http://localhost:5173" ,"http://localhost:5174"], 
    methods: ["POST", "GET"], 
    allowedHeaders:["Content-Type" , "Authorization"], 
    credentials: true, 
};
    
app.use(cors(coreOptions)) ;
app.use(express.json()) ;


app.get('/',(req,res)=>{
    res.send("hello world");
});
app.use("/user",UserRoute);

app.listen(3000,()=>{
    console.log("server is running")
})
