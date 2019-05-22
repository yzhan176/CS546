var axios = require("axios");

async function getPeople(){
    const {data}=await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
    return data;
}

async function CheckIsBound(num) {
    if((num <= 0)||(num > 500)) {
        throw "The id is out of bound, please enter the correct id between 1 to 500"
    }
}

async function getPersonById(Id){
   //console.log("11111");
    if(arguments.length <= 0){
        throw `${index || "provided Id"} is empty`;
    }
    if(arguments.length > 1){
        throw "Arguments more than 1";
    }
    if(typeof(Id) !== "string"){
        throw "Id should be string here.";
    }
    if(!(/^[0-9]+$/.test(Id))){
        throw "Invalid Id contains non-number.";
    }

    // if(Id === null || typeof(Id)!=="string"){
    //     //console.log("some error happened");
    //     throw "Input is empty";
    // }

    //console.log("22222")
    
    let Id_num = parseInt(Id);
    // console.log(Id_num);
    await CheckIsBound(Id_num);
    let data = await getPeople();
    let person = data.find(x=>{
        return x.id === Id_num;
    });
    return person;
    // for(let i=0; i<data.length;i++){
    //     if(data[i].id === Id_num){
    //         return data[i];
    //     }
    // }
    // return null;
}

async function getPersonByName(name){
    if(!name) throw "You mush provide a name";
    if(typeof(name)!=="string") throw "Input is not proper string type";

    let data = await getPeople();

    let peopleList = [];

    let nameLower = name.toLowerCase();
    var reg = new RegExp(nameLower);

    for(let i = 0; i< data.length; i++){
        if((reg.test(data[i].firstName.toLowerCase()))
        || (reg.test(data[i].lastName.toLowerCase()))){
            peopleList.push(data[i]);
        }
        if(peopleList.length==20){
            break;
        }
    }

    return peopleList;
}

module.exports = {
    getPersonById, getPersonByName
}