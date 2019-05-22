const arrayUtils=require("./arrayUtils");

module.exports={
    capitalize:(string)=>{
        if(string===undefined){
            throw "the string does not exit";
        }
        if(typeof string != "string"){
            throw `${string} is not of the proper type(string)`;
        }
        string1=string.substring(0,1).toUpperCase();
        string2=string.substring(1).toLowerCase();
        return string1+string2
    },
    repeat:(string,num)=>{
        if(string===undefined){
            throw "the string does not exit";
        }
        if(typeof string != 'string'){
            throw `${string} is not of the proper type(string)`;
        }
        if(num==undefined){
            throw "the num does not exit";
        }
        if(typeof num != 'number'){
            throw `${num} is not of the proper type(number)`;
        }
        if(num<0){
            throw `${num} is not a positive number`;
        }
        let res="";
        for(let i=0;i<num;i++){
            res=res+string;
        }
        return res;
    },
    countChars:(string)=>{
        if(string===undefined){
            throw 'the string does not exit';
        }
        if(typeof string != 'string'){
            throw `${string} is not of the proper type(string)`;
        }
        let array=string.split('');
        let res=arrayUtils.countElements(array);
        return res;
    }
};