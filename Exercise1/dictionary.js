const words={
    programming:"the action or process of writing computer programs.",
    charisma:"A personal magic of leadership arousing special popular loyalty or enthusiasm for a public figure(such as a political leader)",
    sleuth: "To act as a detective : search for information",
    foray: "A sudden or irregular invasion or attack for war or spoils : raid",
    adjudicate: "to make an official decision about who is right in (a dispute) : to settle judicially"
}

const checkInput = function checkInput(str){
    if (typeof str !=="string"){
        throw `${str} is not a string`;
    }
    return str;
} 

const lookupDefinition =function lookupDefinition(inputVal){
    checkInput(inputVal);
    if(words[inputVal]===undefined){
        throw `inputVal is not exit the key of words.`
    }
    return words[inputVal];
}

function getKeyByValue(words, value) {
    return Object.keys(words).find(key => words[key] === value);
}

const getWord=function getWord(strInput){
    checkInput(strInput);
    let definition;
    console.log(strInput)
    definition=getKeyByValue(words,strInput)
    if(definition===undefined){
        throw "Word not found";
    }
    return definition
}
//console.log(getWord("A sudden or irregular invasion or attack for war or spoils : raid"));

module.exports={
    lookupDefinition:(inputVal)=>{
        checkInput(inputVal);
        if(words.inputVal===undefined){
            throw `inputVal is not exit the key of words.`
        }
        return words[inputVal]
    },
    getWord:(strInput)=>{
        checkInput(strInput);
        let definition;
        //console.log(strInput)
        definition=getKeyByValue(words,strInput)
        if(definition===undefined){
            throw "Word not found";
        }
        return definition
    }
};
// console.log(lookupDefinition("programming"))
// console.log(words["programming"])
//console.log(getWord("the action or process of writing computer programs."))