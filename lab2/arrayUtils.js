module.exports={
    head:(array)=>{
        if(array===undefined){
            throw "the array does not exit";
        }
        if(!(array instanceof Array)){
            throw `${array} is not of the proper type(Array)`;
        }
        if(array.length===0){
            throw "the array is empty";
        }
        return array[0];
    },
    last:(array)=>{
        if(array===undefined){
            throw "the array does not exit";
        }
        if(!(array instanceof Array)){
            throw `${array} is not of the proper type(Array)`;
        }
        if(array.length===0){
            throw "the array is empty";
        }
        return array[array.length-1];
    },
    remove:(array,index)=>{
        if(array===undefined){
            throw "the array does not exit";
        }
        if(!(array instanceof Array)){
            throw `${array} is not of the proper type(Array)`;
        }
        if(array.length===0){
            throw "the array is empty";
        }
        if(!(0<=index && index<array.length)){
            throw "the index is out of the bounds";
        }
        array.splice(index,1);
        return array;
    },
    range:(end,value)=>{
        if(end===undefined){
            throw "the end number does not exit";
        }
        if(!Number.isInteger(end)){
            throw `${end} is not of proper type(integer)`;
        }
        if(end<=0){
            throw "the end is not a positive integer";
        }
        let array=[];
        if (value===undefined){
            //let array=[];
            for(let i=0;i<end;i++){
                array.push(i);
            }
        }
        else{
            
            for(let i=0;i<end;i++){
                array.push(value);
            }
        }
        return array;
    },
    countElements:(array)=>{
        if(array===undefined){
            throw "the array does not exit";
        }
        if(!(array instanceof Array)){
            throw `${array} is not of the proper type(Array)`;
        }
        let res={};
        for(let i=0;i<array.length;i++){
            if(res[array[i]]===undefined){
                res[array[i]]=1;
            }
            else{
                res[array[i]]++;
            }
        }
        return res;
    },
    isEqual:(arrayOne,arrayTwo)=>{
        if(arrayOne===undefined){
            throw 'arrayOne does not exit';
        }
        if(arrayTwo===undefined){
            throw "arrayTwo does not exit";
        }
        if(!(arrayOne instanceof Array)){
            throw `${arrayOne} is not of the proper type(Array)`;
        }
        if(!(arrayTwo instanceof Array)){
            throw `${arrayTwo} is not of the proper type(Array)`;
        }
        if(arrayOne.length!==arrayTwo.length){
            return false;
        }
        for(let i=0;i<arrayOne.length;i++){
            if(arrayOne[i]!==arrayTwo[i]){
                return false;
            }
        }
        return true;
    }
};