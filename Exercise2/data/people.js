var axios = require("axios");

async function getPeople(){
    const {data}=await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
    return data;
}

checkIndex = (index)=>{
    if(!Number.isInteger(index)){
        throw `${index|| "provided index"} is not a proper number type`;
    }
    if(index.length <= 0){
        throw `${index || "provided index"} is empty`;
    }
    if(index <= 0 || index > 500){
        throw `${index || "provided index"} is out of bounds`;
    }
   return index; 
}
const getPersonById = async (Id)=>{
    console.log(typeof Id);
    var Id = parseInt(Id);
    checkIndex(Id);
    
    let data = await getPeople();
    let person = data.find(x=>{
        return x.id === Id;
    });
    return person.firstName + ' ' + person.lastName;
    //return `${peopleData[id-1]["firstName"]} ${peopleData[id-1]["lastName"]}`;
}

const lexIndex = async (index)=>{
    checkIndex(index);
    
    let data = await getPeople();
    let person = data.sort((person1, person2)=>{
        var x = person1['lastName'];
        var y = person2['lastName'];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
    return person[index].firstName + ' ' + person[index].lastName;
}
const firstNameMetrics = async ()=>{
    
    let data = await getPeople();
    let totalLetters = 0;
    let totalVowels = 0;
    let totalConsonants = 0;
    let longestName = '';
    let shortestName = data[0].firstName;
    
    for (let i = 0; i < data.length; i++) {
        let len = data[i].firstName.length;
        totalLetters += len;
        let vowels = 0;
        if(data[i].firstName.match(/[aeiouAEIOU]/gi)){
            vowels = data[i].firstName.match(/[aeiouAEIOU]/gi).length;
        }
        totalVowels += vowels;
        totalConsonants += len - vowels;
        if (len > longestName.length) {
            longestName = data[i].firstName;
        }
        if(len < shortestName.length) {
            shortestName = data[i].firstName;
        }
    }
    
    let result = {};
    result.totalLetters = totalLetters;
    result.totalVowels = totalVowels;
    result.totalConsonants = totalConsonants;
    result.longestName = longestName;
    result.shortestName = shortestName;

    return result;
}

module.exports = {
    getPersonById, lexIndex, firstNameMetrics, getPeople
}