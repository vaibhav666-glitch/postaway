import express from "express"
import UserRouter from "./src/features/user/user.route.js"
import bodyParser from "body-parser";

const server=express();

server.use(bodyParser.json());
server.use("/api/user",UserRouter);

server.listen(3200,()=>{
    console.log("server is running on port 3200");
})