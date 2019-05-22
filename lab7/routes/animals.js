const express = require("express");
const router = express.Router();
const data = require("../data");
const animalData = data.animals;
const postData=data.posts;

router.get("/:id", async (req, res) => {
  try {
    const animal = await animalData.get(req.params.id);
    const postList=await postData.getAll();
    let arr=[];
    let animal_id=animal._id.toHexString();
      for(let j=0;j<postList.length;j++){
        if(animal_id===postList[j].author){
          arr.push({
            id:postList[j]._id,
            title:postList[j].title
          });
        }
      }
    animal["post"]=arr;
    res.json(animal);
  } catch (e) {
    res.status(404).json({ error: "Animal not found" });
  }
});

router.get("/", async (req, res) => {
  try {
    const animalList = await animalData.getAll();
    const postList=await postData.getAll();
    for(let i=0;i<animalList.length;i++){
      let arr=[];
      let animal_id=animalList[i]._id.toHexString();
      for(let j=0;j<postList.length;j++){
        if(animal_id===postList[j].author){
          arr.push({
            id:postList[j]._id,
            title:postList[j].title
          });
        }
      }
      animalList[i]["post"]=arr;
    }
    res.json(animalList);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.post("/", async (req, res) => {
  const animalInfo = req.body;

  if (!animalInfo) {
    res.status(400).json({ error: "You must provide data to create a animal" });
    return;
  }

  if (!animalInfo.name) {
    res.status(400).json({ error: "You must provide a name" });
    return;
  }

  if (!animalInfo.animalType) {
    res.status(400).json({ error: "You must provide a animalType" });
    return;
  }

  try {
    const newAnimal = await animalData.create(
      animalInfo.name,
      animalInfo.animalType
    );
    res.json(newAnimal);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.put("/:id", async (req, res) => {
  const animalInfo = req.body;

  if (!animalInfo) {
    res.status(400).json({ error: "You must provide data to update a animal" });
    return;
  }

  if (!animalInfo.newName && !animalInfo.newType) {
    res.status(400).json({ error: "You must provide a newName or a newType" });
    return;
  }

  // if (!animalInfo.newType) {
  //   res.status(400).json({ error: "You must provide a newType" });
  //   return;
  // }

  try {
    await animalData.get(req.params.id);
  } catch (e) {
    res.status(404).json({ error: "Animal not found" });
    return;
  }

  try {
    const updatedAnimal = await animalData.rename(req.params.id, animalInfo.newName,animalInfo.newType);
    res.json(updatedAnimal);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await animalData.get(req.params.id);
  } catch (e) {
    res.status(404).json({ error: "Animal not found" });
    return;
  }

  try {
    const animal = await animalData.get(req.params.id);
    let animal_id=animal._id.toHexString();
    const deletedAnimal = await animalData.remove(req.params.id);
    const output={};
    output["deleted"]=true;
    output["data"]=deletedAnimal;
    let arr=[];
    const postList=await postData.getAll();
    let m=[];
      for(let j=0;j<postList.length;j++){
        if(animal_id===postList[j].author){
          arr.push({
            id:postList[j]._id,
            title:postList[j].title
          });
          m.push(j);
        }
      }
      for(let i=0;i<m.length;i++){
        const x=await postData.Delete(postList[m[i]]._id.toHexString());
      }
    output["post"]=arr;
    res.json(output);
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
    return;
  }
});

module.exports = router;
