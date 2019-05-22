const dictionary=require("./dictionary");

try{
    console.log(dictionary.lookupDefinition("programming"));
}catch(error){
    console.log(error);
}

try{
    console.log(dictionary.getWord("The action or process of writing computer programs."))
}catch(error){
    console.log(error);
}