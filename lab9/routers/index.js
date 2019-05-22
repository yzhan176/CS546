const primeRouters = require("./prime");

const constructorMethod = app => {
    app.use("/",primeRouters);
    app.use("*",(req,res)=>{
        //res.status(404).json({error:"Not Found"});
        res.redirect("/");
    });
}

module.exports = constructorMethod;