const words ={
    programming: "The action or process of writing computer programs.",
    charisma: "A personal magic of leadership arousing special popular loyalty or enthusiasm for a public figure (such as a political leader)",
    sleuth: "To act as a detective : search for information",
    foray: "A sudden or irregular invasion or attack for war or spoils : raid",
    adjudicate: "to make an official decision about who is right in (a dispute) : to settle judicially"
};

const checkInput=function checkInput(input){
    if(typeof input != "string"){
        throw `${input} is not a string`;
    }
    else{
        return input;
    }
}

// const lookupDefinition=function lookupDefinition(inputVal){
//     input=checkInput(inputVal);
//     if(words[inputVal]==undefined){
//         throw `${inputVal} does not exit in the key in the words`;
//     }
//     else{
//         return words[inputVal];
//     }
// }

module.exports={
    lookupDefinition:(inputVal) => {
        input=checkInput(inputVal);
        if(words[inputVal]==undefined){
            throw `${inputVal} does not exit in the key in the words`;
        }
        else{
            return words[inputVal];
        }
    },

    getWord:(input)=>{
        inputVal=checkInput(input);
        key=Object.keys(words).find(function(element){
            if(words[element]==inputVal){
                return element;
            } 
        });
        if(key==undefined){
            throw "Word not found";
        }
        else{
            return key;
        }
    }
};