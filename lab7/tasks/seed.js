const dbConnection = require("../connection");
const data = require("../data");
const animals = data.animals;
const posts = data.posts;

const main = async () => {
    const db = await dbConnection();
    await db.dropDatabase();
    const JG = await animals.create("JG", "human");
    const id = JG._id.toHexString();
    const Post1 = await posts.Create("title1",id,"content1");
    const Post2 = await posts.Create("title2",id,"content2");
    const Post3 = await posts.Create("title3",id,"content3");

    console.log("Done seeding");
    await db.serverConfig.close();
};

main().catch(console.log);