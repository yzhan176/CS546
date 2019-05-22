const axios=require('axios');
async function getPeople(){
    const {data}=await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
    return data;
}
// getPeople().then(function(result){
//     console.log(result);
// })

async function getPersonById(id){
    if(id===undefined){
        throw "the id does not exist";
    }
    if(typeof id !=='number'){
        throw `${id} is not of the proper type(number)`;
    }
    let peopleData=await getPeople();
    if(!((id>0)&&(id<=peopleData.length))){
        throw `${id} is not within bounds`;
    }
    return `${peopleData[id-1]["firstName"]} ${peopleData[id-1]["lastName"]}`;
    //console.log(peopleData);
}

async function lexIndex(index){
    if(index===undefined){
        throw "the index does not exist";
    }
    if(typeof index!=='number'){
        throw `${index} is not of the proper type(number);`
    }
    let peopleData=await getPeople();
    if(!((index>0)&&(index<=peopleData.length))){
        throw `${index} is not within bounds`;
    }
    peopleData.sort(function(a,b){
        if(a.lastName<b.lastName){
            return -1;
        }
        if(a.lastName>b.lastName){
            return 1;
        }
        return 0;
    });
    return `${peopleData[index]["firstName"]} ${peopleData[index]["lastName"]}`;
}

async function firstNameMetrics(){
    let peopleData=await getPeople();
    let totalLetters=0;
    let totalVowels=0;
    let longestName=peopleData[0]["firstName"];
    let shortestName=peopleData[0]["firstName"];
    let arr=['a','e','i','o','u'];
    for(let i=0;i<peopleData.length;i++){
        totalLetters+=peopleData[i]["firstName"].length;
        let str=peopleData[i]["firstName"].toLowerCase();
        for(let j=0;j<str.length;j++){
            if(arr.indexOf(str[j])!==-1){
                totalVowels++;
            }
        }
        if(longestName.length<peopleData[i]["firstName"].length){
            longestName=peopleData[i]["firstName"];
        }
        if(shortestName.length>peopleData[i]["firstName"].length){
            shortestName=peopleData[i]["firstName"];
        }
    }
    // let arr_longest=[];
    // let arr_shortest=[];
    // for(let i=0;i<peopleData.length;i++){
    //     if(longestName.length===peopleData[i]["firstName"].length){
    //         arr_longest.push(peopleData[i]["firstName"]);
    //     }
    //     if(shortestName.length===peopleData[i]["firstName"].length){
    //         arr_shortest.push(peopleData[i]["firstName"]);
    //     }
    // }
    // console.log(arr_longest,arr_shortest);
    let dict={};
    dict["totalLetters"]=totalLetters;
    dict["totalVowels"]=totalVowels;
    dict["totalConsonants"]=totalLetters-totalVowels;
    dict["longestName"]=longestName;
    dict["shortestName"]=shortestName;
    return dict;
}

// try{
//     const getId=getPersonByld(43);
//     console.log(getId);
// }catch(e){
//     console.error(e);
// }

// firstNameMetrics().then(data=>{
//     console.log(data);
// }).catch(err => {
//     console.log(err);
//   });

// async function main(){
//     try{
//         const peopledata = await getPeople()
//         console.log (peopledata)
//     }catch(e){
//         console.log (e);
//     }
// }

// main()
module.exports={
    getPeople,
    getPersonById,
    lexIndex,
    firstNameMetrics
};