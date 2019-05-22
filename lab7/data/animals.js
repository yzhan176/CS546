const mongoCollections=require("../collections");
const ObjectID = require('mongodb').ObjectID;
const animals=mongoCollections.animals;

async function get(id){
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
    const animalCollection=await animals();
    const animal=await animalCollection.findOne({_id:myObjectId});
    if(animal===null){
        throw `no animal with that id : ${id}`;
    }
    return animal;
}

async function getAll(){
    const animalCollection=await animals();
    const animal=await animalCollection.find({}).toArray();
    return animal;
}

async function create(name,animalType){
    if(name===undefined){
        throw "the name does not exist";
    }
    if(animalType===undefined){
        throw "the animalType does not exist";
    }
    // if(likes===undefined){
    //     throw "the likes does not exist";
    // }
    if(typeof name!=='string'){
        throw `${name} is not of the proper type(string)`;
    }
    if(typeof animalType!=='string'){
        throw `${animalType} is not of the proper type(string)`;
    }
    // if(!(likes instanceof Array)){
    //     throw `${likes} is not of the proper type(Array)`;
    // }
    // if(likes.length===0){
    //     throw "the likes is empty";
    // }
    // for(let i=0;i<likes.length;i++){
    //     if(typeof likes[i]!=='string'){
    //         throw `${likes} is not of the proper type(strings in array)`;
    //     }
    //     let checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
    //     if(!(checkForHexRegExp.test(likes[i]))){
    //         throw `${likes[i]} is not a single String of 12 bytes or a string of 24 hex characters`;
    //     }
    // }
    const animalCollection=await animals();
    let newAnimal={
        name:name,
        animalType:animalType,
        likes:[]
    };
    const insertInfo=await animalCollection.insertOne(newAnimal);
    if(insertInfo.insertedCount===0){
        throw "the animal collection cannot be created";
    }
    const newId=insertInfo.insertedId;
    const animal=await get(newId.toHexString());
    return animal;
}

async function remove(id){
    if(!id){
        throw "the id does not exist";
    }
    const animalCollection=await animals();
    let animal=await get(id);
    const deletionInfo=await animalCollection.removeOne({_id:animal._id});
    if (deletionInfo.deletedCount === 0) {
        throw `Could not delete the animal with id : ${id}`;
    }
    return animal;
}

async function rename(id,newName,newType){
    if(!id){
        throw "the id does not exist";
    }
    if(newName===undefined && newType===undefined){
        throw "the newName and newType does not exist";
    }
    if(typeof id!=='string'){
        throw `${id} is not of the proper type(string)`;
    }
    if(newName!==undefined && typeof newName!=='string'){
        throw `${newName} is not of the proper type(string)`;
    }
    if(newType!==undefined && typeof newType!=='string'){
        throw `${newType} is not of the proper type(string)`;
    }
    const animalCollection=await animals();
    let animal=await get(id);
    const updateAnimal={
        name:newName===undefined ? animal.name:newName,
        animalType:newType===undefined ? animal.animalType:newType,
        likes:[]
    };
    const updateInfo=await animalCollection.replaceOne({_id:animal._id},updateAnimal);
    if(updateInfo.modifiedCount===0){
        throw `Could not update the animal with id : ${id}`;
    }
    return await get(id);
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
    create,
    getAll,
    get,
    remove,
    rename
};