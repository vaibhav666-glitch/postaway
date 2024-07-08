
export default class PostModel{
    constructor(id,userId,caption,imageUrl){
        this.id = id;
        this.userId = userId;
        this.caption = caption;
        this.imageUrl = imageUrl;

    }
    static getAllPost()
    {
        return postArr;
    }
    static getUserPost(userId)
    {
        const userPosts= postArr.filter((user)=>user.userId==userId);
        return userPosts;
    }

    static getPostById(id,userId){
        const post = postArr.find((post)=>post.id==id&&post.userId==userId);
        return post;
    }

    static addPost(postObj)
    {
        const newPost= new PostModel(postArr.length+1,postObj.userId,postObj.caption,postObj.imageUrl);
        postArr.push(newPost);
        return newPost;
    }

    static updatePost(id, postObj)
    {
        const post = postArr.find((post)=>post.id==id&&postObj.userId==post.userId);
        if(post)
            {
                post.caption = postObj.caption;
                post.imageUrl = postObj.imageUrl;
                return post;

            }
            else{
                return null;
            }
    }

    static deletePost(id,userId)
    {
        console.log(id+" "+ userId);

        const post = postArr.findIndex((post)=>post.id==id && userId==post.userId);
       console.log(post);
        if(post!=-1)
            {
            
                postArr.splice(post,1);
                return true;

            }
            else{
                return false;
            }


    }


} 
let postArr=[{
    id:1,
    userId:1,
    caption:"This is my first post",
    imageUrl:"https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

}]