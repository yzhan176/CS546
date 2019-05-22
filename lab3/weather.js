const axios=require('axios');
async function getPeople(){
    const {data}=await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
    return data;
}

async function getWeather(){
    const {data}=await axios.get('https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json');
    return data;
}
// getWeather().then(function(result){
//     console.log(result);
// })

async function shouldTheyGoOutside(firstName,lastName){
    if(firstName===undefined){
        throw 'the firstName does not exist';
    }
    if(lastName===undefined){
        throw 'the lastName does not exist';
    }
    if(typeof firstName !== 'string'){
        throw `${firstName} is not of the proper type(string)`;
    }
    if(typeof lastName !== 'string'){
        throw `${lastName} is not of the proper type(string)`;
    }
    let peopleData = await getPeople();
    let i=0;
    while(i<peopleData.length){
        if((peopleData[i]["firstName"]===firstName)&&(peopleData[i]["lastName"]===lastName)){
            break;
        }
        i++;
    }
    if(i===peopleData.length){
        throw `${firstName} ${lastName} does not exist in the people.json array`;
    }
    let zipCode=peopleData[i]["zip"];
    let weatherData=await getWeather();
    let j=0;
    while(j<weatherData.length){
        if(weatherData[j]["zip"]===zipCode){
            break;
        }
        j++;
    }
    if(j===weatherData.length){
        throw `${zipCode} does not exist in the weather.json array`;
    }
    let temperature=weatherData[j]["temp"];
    if(temperature>=34){
        return `Yes, ${firstName} should go outside.`;
    }
    else{
        return `No, ${firstName} should not go outside.`;
    }
}
// shouldTheyGoOutside("Calli","Ondrasek").then(data=>{
//     console.log(data);
// }).catch(err => {
//     console.log(err);
//   });

module.exports={
    getWeather,
    shouldTheyGoOutside
};