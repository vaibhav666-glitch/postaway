import UserModel from  "./user.model.js";

export default class UserController{
    getAllUser(req,res){
        let users= UserModel.getAll();
        res.status(200).send(users);
    }
    postUser(req,res){
        console.log(req.body);
        let newUser=UserModel.addUser(req.body);
        res.status(200).send(newUser);
    }

    postLogin(req,res){
        const {email,password}=req.body
        let user=UserModel.login(email,password);
        if(user)
            res.status(200).send(user);
        else
        res.status(400).send("Invalid email or password");
    }

}