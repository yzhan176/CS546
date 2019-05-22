const mongoCollections=require("../collections");
const ObjectID = require('mongodb').ObjectID;
const posts=mongoCollections.posts;

async function Read(id){
    if(!id){
        throw "the id does not exist";
    }
    if(typeof id!=='string'){
        throw `${id} is not of the proper type(string)`;
    }
    let checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
    if(!(checkForHexRegExp.test(id))){
        throw `${id} is not a single String of 12 bytes or a string of 24 hex characters`;
    }
    let myObjectId =new ObjectID(id);
    const postsCollection=await posts();
    const post=await postsCollection.findOne({_id:myObjectId});
    if(post===null){
        throw `no post with that id : ${id}`;
    }
    return post;
}

async function getAll(){
    const postCollection=await posts();
    const post=await postCollection.find({}).toArray();
    return post;
}

async function Create(title,author,content){
    if(title===undefined){
        throw "the title does not exist";
    }
    if(author===undefined){
        throw "the author does not exist";
    }
    if(content===undefined){
        throw "the content does not exist";
    }
    if(typeof title!=='string'){
        throw `${title} is not of the proper type(string)`;
    }
    if(typeof author!=='string'){
        throw `${author} is not of the proper type(string)`;
    }
    if(typeof content!=='string'){
        throw `${content} is not of the proper type(strings in array)`;
    }
    let checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
    if(!(checkForHexRegExp.test(author))){
        throw `${author} is not a single String of 12 bytes or a string of 24 hex characters`;
    }
    const postCollection=await posts();
    let newPost={
        title:title,
        author:author,
        content:content
    };
    const insertInfo=await postCollection.insertOne(newPost);
    if(insertInfo.insertedCount===0){
        throw "the post collection cannot be created";
    }
    const newId=insertInfo.insertedId;
    const post=await Read(newId.toHexString());
    return post;
}

async function Delete(id){
    if(!id){
        throw "the id does not exist";
    }
    const postCollection=await posts();
    let post=await Read(id);
    let myObjectId =new ObjectID(id);
    const deletionInfo=await postCollection.removeOne({_id:myObjectId});
    if (deletionInfo.deletedCount === 0) {
        throw `Could not delete the post with id : ${id}`;
    }
    return post;
}

async function Update(id,newTitle,newContent){
    if(!id){
        throw "the id does not exist";
    }
    if(newTitle===undefined && newContent){
        throw "the newTitle and newContent does not exist";
    }
    if(typeof id!=='string'){
        throw `${id} is not of the proper type(string)`;
    }
    if(newTitle!==undefined && typeof newTitle!=='string'){
        throw `${newTitle} is not of the proper type(string)`;
    }
    if(newContent!==undefined && typeof newContent!=='string'){
        throw `${newContent} is not of the proper type(string)`;
    }
    const postCollection=await posts();
    let post=await Read(id);
    const updatePost={
        title:newTitle===undefined ? post.title:newTitle,
        content:newContent===undefined ? post.content:newContent,
        author:post.author
    };
    const updateInfo=await postCollection.replaceOne({_id:post._id},updatePost);
    if(updateInfo.modifiedCount===0){
        throw `Could not update the animal with id : ${id}`;
    }
    return await Read(id);
}

// async function main(){
//     try{
//         const animaldata = await rename("5c897ea5473655053aa0a317","Bubba");
//         console.log (animaldata);
//     }catch(e){
//         console.log (e);
//     }
// }

// main()

module.exports={
    Create,
    getAll,
    Read,
    Delete,
    Update
};