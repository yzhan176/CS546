const words ={
    programming: "The action or process of writing computer programs.",
    charisma: "A personal magic of leadership arousing special popular loyalty or enthusiasm for a public figure (such as a political leader)",
    sleuth: "To act as a detective : search for information",
    foray: "A sudden or irregular invasion or attack for war or spoils : raid",
    adjudicate: "to make an official decision about who is right in (a dispute) : to settle judicially"
}
function checkinput(val){
 if(typeof val != "string"){
  console.log(val);
  throw"The the input parameter should be a string"
 }
 else
  return val;
}
const getw = function getw(words,text) {
 return Object.keys(words).find(key => words[key] === text);
}
module.exports = {
 description: "This is a dictionary",
    lookupDefinition: function(inputVal){
    checkinput(inputVal);
    if(words[inputVal] != undefined)
     return words[inputVal];
    else
     throw "There is no such word in dictionary";
  },
  getWord: function(de){
    checkinput(de);
  getedWord = getw(words,de);
  if (getedWord == undefined){
     throw "Word not found"
 }
 return getedWord
  }
}