import express from "express"
import UserRouter from "./src/features/user/user.route.js"
import bodyParser from "body-parser";
import PostRouter from "./src/features/post/post.route.js";
import CommentRouter from "./src/features/comment/comment.route.js";
import LikeRouter from "./src/features/like/like.route.js";
import jwtAuth from "./src/middleware/jwt.middleware.js";

const server=express();

server.use(bodyParser.json());
server.use("/api/user",UserRouter);
server.use("/api/post",jwtAuth, PostRouter);
server.use("/api/comment",jwtAuth,CommentRouter);
server.use('/api/like',jwtAuth,LikeRouter);

server.listen(3200,()=>{
    console.log("server is running on port 3200");
})