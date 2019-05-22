const express = require("express");
const router = express.Router();
const data = require("../data");
const animalData = data.animals;
const postData=data.posts;

router.get("/", async (req, res) => {
    try {
      const animalList = await animalData.getAll();
      const postList=await postData.getAll();
      for(let i=0;i<postList.length;i++){
        let post_id=postList[i].author;
        for(let j=0;j<animalList.length;j++){
          if(post_id===animalList[j]._id.toHexString()){
              postList[i].author={
                  _id:post_id,
                  name:animalList[j].name
                };
          }
        }
      }
      res.json(postList);
    } catch (e) {
      res.sendStatus(500);
    }
});

router.get("/:id", async (req, res) => {
    try {
      const post = await postData.Read(req.params.id);
      const animalList=await animalData.getAll();
      let post_id=post.author;
        for(let j=0;j<animalList.length;j++){
          if(post_id===animalList[j]._id.toHexString()){
            post.author={
                _id:post_id,
                name:animalList[j].name
              };
          }
        }
      res.json(post);
      res.sendStatus(200);
    } catch (e) {
      res.status(404).json({ error: "Animal not found" });
    }
});

router.post("/", async (req, res) => {
    const postInfo = req.body;
  
    if (!postInfo) {
      res.status(400).json({ error: "You must provide data to create a post" });
      return;
    }
  
    if (!postInfo.title) {
      res.status(400).json({ error: "You must provide a title" });
      return;
    }
  
    if (!postInfo.author) {
      res.status(400).json({ error: "You must provide a author" });
      return;
    }

    if (!postInfo.content) {
        res.status(400).json({ error: "You must provide a content" });
        return;
    }
  
    try {
      const newPost = await postData.Create(
        postInfo.title,
        postInfo.author,
        postInfo.content
      );
      const animalList=await animalData.getAll();
      let post_id=newPost.author;
        for(let j=0;j<animalList.length;j++){
          if(post_id===animalList[j]._id.toHexString()){
              newPost.author={
                  _id:post_id,
                  name:animalList[j].name
                };
          }
        }
      res.json(newPost);
      res.sendStatus(200);
    } catch (e) {
      res.sendStatus(500);
    }
});

router.put("/:id", async (req, res) => {
    const postInfo = req.body;
  
    if (!postInfo) {
      res.status(400).json({ error: "You must provide data to update a post" });
      return;
    }
  
    if (!postInfo.newTitle && !postInfo.newContent) {
      res.status(400).json({ error: "You must provide a newTitle or a newContent" });
      return;
    }
  
    // if (!animalInfo.newType) {
    //   res.status(400).json({ error: "You must provide a newType" });
    //   return;
    // }
  
    try {
      await postData.Read(req.params.id);
    } catch (e) {
      res.status(404).json({ error: "Post not found" });
      return;
    }
  
    try {
      const updatedPost = await postData.Update(req.params.id, postInfo.newTitle,postInfo.newContent);
      const animalList=await animalData.getAll();
      let post_id=updatedPost.author;
        for(let j=0;j<animalList.length;j++){
          if(post_id===animalList[j]._id.toHexString()){
              updatedPost.author={
                  _id:post_id,
                  name:animalList[j].name
                };
          }
        }
      res.json(updatedPost);
    } catch (e) {
      res.sendStatus(500);
    }
});

router.delete("/:id", async (req, res) => {
    try {
      await postData.Read(req.params.id);
    } catch (e) {
      res.status(404).json({ error: "Post not found" });
      return;
    }
  
    try {
      const post = await postData.Read(req.params.id);
      let post_id=post.author;
      const deletedPost = await postData.Delete(req.params.id);
      const output={};
      output["deleted"]=true;
      output["data"]=deletedPost;
      const animalList=await animalData.getAll();
        for(let j=0;j<animalList.length;j++){
          if(post_id===animalList[j]._id.toHexString()){
            output["data"].author={
                _id:post_id,
                name:animalList[j].name
              };
          }
        }
      res.json(output);
      res.sendStatus(200);
    } catch (e) {
      res.sendStatus(500);
      return;
    }
});

module.exports = router;
  