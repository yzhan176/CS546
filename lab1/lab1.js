const questionOne = function questionOne(arr) {
    // Implement question 1 here
    let result=0;
    for(let i=0;i<arr.length;i++){
        result=result+Math.pow(arr[i],2);
    }
    return result;
}

const questionTwo = function questionTwo(num) { 
    // Implement question 2 here
    if(num<1){
        return 0;
    }
    else if(num==1){
        return 1;
    }
    return questionTwo(num-1)+questionTwo(num-2);
}

const questionThree = function questionThree(text) {
    // Implement question 3 here
    let count=0;
    for(let i=0;i<text.length;i++){
        if((text[i]=='a')||(text[i]=='e')||(text[i]=='i')||(text[i]=='o')||(text[i]=='u')){
            count++;
        }
    }
    return count;
}

const questionFour = function questionFour(num) {
    // Implement question 4 here
    if(num<0){
        return NaN;
    }
    else if(num==0){
        return 1;
    }
    return num*questionFour(num-1);
}

module.exports = {
    firstName: "Yan", 
    lastName: "Zhang", 
    studentId: "10440738",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};