module.exports={
    extend:(...args)=>{
        if(args===undefined){
            throw "the args does not exit";
        }
        if(args.length<2){
            throw `there are not at least 2 arguments in ${args}`;
        }
        let res={};
        for(let i=0;i<args.length;i++){
            if(!((typeof args[i] === 'object' && args[i] != null && !(args[i] instanceof Array)))){
                throw `${args[i]} is not of the proper type(Object)`;
            }
            for(x in args[i]){
                if(res[x]===undefined){
                    res[x]=args[i][x];
                }
            }
        }
        return res;
    },
    smush:(...args)=>{
        if(args===undefined){
            throw "the args does not exit";
        }
        if(args.length<2){
            throw `there are not at least 2 arguments in ${args}`;
        }
        let res={};
        for(let i=0;i<args.length;i++){
            if(!((typeof args[i] === 'object' && args[i] != null && !(args[i] instanceof Array)))){
                throw `${args[i]} is not of the proper type(Object)`;
            }
            for(x in args[i]){
                res[x]=args[i][x];
            }
        }
        return res;
    },
    mapValues:(object,func)=>{
        if(object===undefined){
            throw "object does not exit";
        }
        if(func===undefined){
            throw "func does not exit";
        }
        if(typeof func != 'function'){
            throw `${func} is not of the proper type(function)`;
        }
        if(!((typeof object === 'object' && object != null && !(object instanceof Array)))){
            throw `${object} is not of the proper type(Object)`;
        }
        for(x in object){
            object[x]=func(object[x]);
        }
        return object;
    }
};