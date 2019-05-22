const axios=require('axios');
async function getPeople(){
    const {data}=await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
    return data;
}

async function getWork(){
    const {data}=await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json');
    return data;
}
// getWork().then(function(result){
//     console.log(result);
// })

async function whereDoTheyWork(firstName,lastName){
    if(firstName===undefined){
        throw "the firstName does not exist";
    }
    if(lastName===undefined){
        throw "the lastName does not exist";
    }
    if(typeof firstName !== 'string'){
        throw `${firstName} is not of the proper type(string)`;
    }
    if(typeof lastName !== 'string'){
        throw `${lastName} is not of the proper type(string)`;
    }
    let peopleData=await getPeople();
    let i=0;
    while(i<peopleData.length){
        if((firstName===peopleData[i]["firstName"])&&(lastName===peopleData[i]["lastName"])){
            break;
        }
        i++;
    }
    if(i===peopleData.length){
        throw `${firstName} ${lastName} does not exist in the people.json array`;
    }
    let ssnCode=peopleData[i]["ssn"];
    let workData=await getWork();
    let j=0;
    while(j<workData.length){
        if(ssnCode===workData[j]["ssn"]){
            break;
        }
        j++;
    }
    if(j===workData.length){
        throw `${ssnCode} does not exist in the work.json array`;
    }
    if(workData[j]["willBeFired"]===true){
        return `${firstName} ${lastName} - ${workData[j]["jobTitle"]} at ${workData[j]["company"]}. They will be fired.`;
    }
    else{
        return `${firstName} ${lastName} - ${workData[j]["jobTitle"]} at ${workData[j]["company"]}. They will not be fired.`;
    }
}

async function findTheHacker(ip){
    if(ip===undefined){
        throw "the ip does not exist";
    }
    if(typeof ip !== 'string'){
        throw `${ip} is not of the proper type(string)`;
    }
    let workData=await getWork();
    let i=0;
    while(i<workData.length){
        if(ip===workData[i]["ip"]){
            break;
        }
        i++;
    }
    if(i===workData.length){
        throw `${ip} does not exist in the work.json array`;
    }
    let ssnCode=workData[i]["ssn"];
    let peopleData=await getPeople();
    let j=0;
    while(j<peopleData.length){
        if(ssnCode===peopleData[j]["ssn"]){
            break;
        }
        j++;
    }
    if(j===peopleData.length){
        throw `${ssnCode} does not exist in the people.json array`;
    }
    return `${peopleData[j]["firstName"]} ${peopleData[j]["lastName"]} is the hacker!`;

}
// findTheHacker("79.222.167.180").then(data=>{
//     console.log(data);
// }).catch(err => {
//     console.log(err);
//   });

module.exports={
    getWork,
    whereDoTheyWork,
    findTheHacker
};