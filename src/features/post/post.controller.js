import PostModel from "./post.model.js";

export default class PostController{
    getAllPost(req,res){
        let posts=PostModel.getAllPost();
        res.status(200).send(posts);

    }

    getUserPost(req,res){
        let posts=PostModel.getUserPost(req.params.id);
        res.status(200).send(posts);
    }
     getUserPostById(req,res){
        let post=PostModel.getPostById(req.params.id,req.params.id2);
        res.status(200).send(post);
     }

     addPost(req,res){
        let newPost=PostModel.addPost(req.body);
        res.status(200).send(newPost);
     }
     updatePost(req,res){
        let updatePost=PostModel.updatePost(req.params.id,req.body);
        res.status(200).send(updatePost);

     }
     deletePost(req,res){
        let deletePost=PostModel.deletePost(req.params.id,req.params.id2);
        res.status(200).send(deletePost);

     }
}