const people = require('./people');
const weather = require('./weather');
const work = require('./work');

async function main(){
    try{
        const peopledata=await work.findTheHacker("79.222.167.180");
        console.log(peopledata);
    }catch(e){
        console.log(e);
    }
}
main()