//function myValidation(){
    const myForm=document.getElementById("myForm");
    if(myForm){
        const numInput=document.getElementById("num_input");
        myForm.addEventListener("submit",event=>{
            event.preventDefault();
            if(!numInput.value){
                $("#error").show();
                $("#error").html("the num does not exist");
                $("#num_input").focus();
            }
            else{
                let flag;
                if(numInput.value<=1){
                    flag=false;
                }
                else if(numInput.value===2){
                    flag=true;
                }
                else{
                    for(let i=2;i<numInput.value;i++){
                        if(numInput.value%i ===0){
                            flag=false;
                        }
                    }
                }
                if(flag===undefined){
                    flag=true;
                }

                $("#error").hide();
                if(flag){
                    let li = `<li class="prime"> ${numInput.value} is a prime number </li>`;
                    $("#attempts").append(li);
                    $("#myForm").trigger('reset');
                    $("#num_input").focus();
                }
                else{
                    let li = `<li class="notPrime"> ${numInput.value} is NOT a prime number </li>`;
                    $("#attempts").append(li);
                    $("#myForm").trigger('reset');
                    $("#num_input").focus();
                }
            }
        });
    }
//}

